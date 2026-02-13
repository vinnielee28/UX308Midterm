import { Text, View } from 'react-native';
import { h2v } from '../h2v.js';

// input: height of cube in meters
export function H2V({ height = 1 }) { // default = 1 meter

    // processing
    let volume = h2v(height);

    // output 
    return (
        <View>
            <Text>
                h2v({height ?? ""}) returned { volume } m³
            </Text>
        </View>
    );
}
