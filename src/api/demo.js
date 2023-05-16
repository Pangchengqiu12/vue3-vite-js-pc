import request from '../utils/request'
export function demoApi() {
  return request.get('app-api/crm/app/goods/selectGoodsType')
}
