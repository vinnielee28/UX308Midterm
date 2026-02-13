import {
  Text,
  View,
} from 'react-native';
import { f2c } from '../f2c.js';

// input: F2C in Fahrenheit
export function F2C({ fahrenheit = 70 }) {

    // processing
    let celsius = f2c(fahrenheit);

    // output JSX to be displayed
    return(
        <View>
            <Text>
                f2c({fahrenheit ?? ""}) returned { celsius }°C
            </Text>
        </View>
    );
}
