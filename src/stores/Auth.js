import {observable, action} from "mobx"
import {persist} from 'mobx-persist';

class Auth {
  @persist('object')
  @observable user = {};

  @persist
  @observable token = '';

  @observable fetching = false;

  @action login(username, password) {

  }
}

export default new Auth();