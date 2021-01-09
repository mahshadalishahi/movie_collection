import Api from '../helpers/service';
import notification from '../helpers/notification';

export async function getMovies(params = {}) {
  try {
    const {data} = await Api.get('movie/', params);
    return data;
  } catch (err) {
    notification('server error', {
      type: 'danger',
    });
    return false;
  }
}
