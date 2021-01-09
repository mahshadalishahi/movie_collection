import Api from '../helpers/service';
import notification from '../helpers/notification';

export async function getToken(obj) {
  try {
    const {data} = await Api.post('user/auth-token', obj);
    return data;
  } catch (err) {
    const {non_field_errors} = err?.response?.data;
    if (non_field_errors) {
      notification(non_field_errors[0], {
        type: 'danger',
      });
    }

    return false;
  }
}
