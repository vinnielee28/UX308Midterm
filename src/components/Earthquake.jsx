import { Text, View } from 'react-native';
import { earthquake } from '../earthquake.js';

// input: Richter scale intensity
export function Earthquake({ intensity = 4.8 }) { // default = 4.8

    // processing
    let result = earthquake(intensity);

    // output 
    return (
        <View>
            <Text>
                earthquake(intensity={intensity}) returned {result}
            </Text>
        </View>
    );
}
