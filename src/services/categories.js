import Api from '../helpers/service';
import notification from '../helpers/notification';

export async function getCategories() {
  try {
    const {data} = await Api.get('category/');
    return data;
  } catch (err) {
    notification('server error', {
      type: 'danger',
    });
    return false;
  }
}
