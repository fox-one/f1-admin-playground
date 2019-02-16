import { handleRequestError } from '@/utils/request';
import { Admin } from '@foxone/passport';
import constants from '../constants';

const admin = new Admin({
  host: constants.adminHost,
});

/**
 * @param {username,password} params
 */
export async function accountLogin(params) {
  return admin.login(params).catch(e => {
    handleRequestError(e);
  });
}
