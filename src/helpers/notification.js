import {Toast} from 'native-base';

export default function notification(text, props) {
  Toast.show({
    text,
    buttonText: 'X',
    ...props,
  });
}
