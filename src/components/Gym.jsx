import { 
    Text, 
    View 
} from 'react-native';
import { gym } from '../gym.js';

// input: base cost and number of friends
export function Gym({ cost = 100, friends = 0 }) { // default cost 100, friends 0

    // processing
    let total = gym(cost, friends);

    // output 
    return (
        <View>
            <Text>
                gym(cost={cost}, friends={friends}) returned ${total.toFixed(2)}
            </Text>
        </View>
    );
}
