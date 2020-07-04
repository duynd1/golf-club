import {Auth} from '../stores';

export default {
  _header(useToken, isFormData) {
    let headers = {
      'Accept': isFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
    };
    if (useToken) {
      headers['Authorization'] = `Bearer ${Auth.token}`
    }
    return headers
  },

  async xhr(URL, useToken, params, method, isFormData = false) {
    const options = {};
    let fetchUrl = URL;
    Object.assign(options, {method});

    if (method !== 'GET') {
      Object.assign(options,
        params ? {
          body: isFormData ? this.objectToFormData(params) : JSON.stringify(params)
        } : null
      );
    } else {
      fetchUrl += `${this.toQueryString(params)}`;
    }
    options.headers = this._header(useToken, isFormData);
    try {
      let response = await fetch(fetchUrl, options);
      ;
      await this.handleResponseError(response);
      const resp = response.json();
      return resp;
    } catch (errors) {
      return {
        code: errors.code,
        message: errors.message
      };
    }
  },

  /**
   * Middleware to control any type of error
   *
   */
  async handleResponseError(response) {
    if (!response.ok) {
      let json, errorMessage;
      errorMessage = response.statusText || response.Message;
      try {
        json = await response.json();
      } catch (e) {
        throw new Error(errorMessage);
      }
      throw json;
    }
  },

  toQueryString(obj) {
    return obj
      ? Object.keys(obj)
        .sort()
        .map((key) => {
          const val = obj[key];
          if (Array.isArray(val)) {
            return val
              .sort()
              .map((val2) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
              })
              .join('&');
          }
          return encodeURIComponent(key) + '=' + encodeURIComponent(val);
        })
        .join('&')
      : '';
  },

  /**
   * Convert JS Object to form data
   **/
  objectToFormData(obj) {
    let formData = new FormData()

    for (let key in obj) {
      formData.append(key, obj[key])
    }
    return formData
  },
};
