import request from '../utils/request'
export function demoApi(data) {
  return request.post('crm/auth/jxs/login', data)
}
export function demoApi1() {
  return request.get('crm/app/goods/selectGoodsType')
}
