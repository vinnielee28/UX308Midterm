import {
  Text,
  View,
} from 'react-native';
import { f2c } from '../f2c.js';

// input: F2C in Fahrenheit
export function F2C({ fahrenheit = 70 }) { //default = room temperature

    // processing
    let celsius = f2c(fahrenheit);

    // output 
    return(
        <View>
            <Text>
                f2c({fahrenheit ?? ""}) returned { celsius }°C
            </Text>
        </View>
    );
}
