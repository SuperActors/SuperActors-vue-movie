import request from '../utils/request';
import { getToken } from '../utils/auth';

/**
 * 获取商品列表
 * @param {*} params
 */
export function getProducts(params) {
  return request.get('/api/v1/admin/products', {
    params,
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });
}
