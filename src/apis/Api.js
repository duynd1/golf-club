import Request from './Request'

const BASE_URL = 'http://150.95.115.104';

export default {
  /**
   * Auth
   * */
  async _login(params) {
    return Request.xhr(`${BASE_URL}/auth/jwt/create`, false, params, 'POST');
  },

  /**
   * Product
   */
  async _getProductList() {
    return Request.xhr(`${BASE_URL}/api/menus/menu-items-merchant`, true, {}, 'GET');
  },

  async _productDetails(params) {
    return Request.xhr(`${BASE_URL}/api/menu-item/${params.id}`, true, {}, 'GET');
  },

  /**
   * order
   */
  async _orderHistory() {
    return Request.xhr(`${BASE_URL}/api/orders/history`, true, {}, 'GET');
  },

  async _orderDetails(orderId) {
    return Request.xhr(`${BASE_URL}/api/orders/order/${orderId}`, true, {}, 'GET');
  },

  /**
   * Notifications
   */
  async _notifications() {
    return Request.xhr(`${BASE_URL}/api/notifications/notifications`, true, {}, 'GET');
  },
  async _notificationMarkAsRead(notificationId) {
    return Request.xhr(`${BASE_URL}/api/notifications/notification/${notificationId}/mark-as-read`, true, {}, 'PUT');
  },
};
