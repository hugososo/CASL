import * as React from 'react';
import { Button, View,Text} from 'react-native';

const nightChange = (props) => {
    const [bgc, setBgc] = useState('white');
    setBgc(props.night);
  return (
    bgc
  );
}

export default nightChange;