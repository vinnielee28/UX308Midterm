import {
  Text,
  View,
} from 'react-native';
import { coin } from '../coin.js';

// input: number of each coin
export function Coin({ nickels, dimes, quarters, loonies, toonies }) {

    // processing
    let total = coin(nickels, dimes, quarters, loonies, toonies);

    // output 
    return(
        <View>
            <Text>
                coin(
                {nickels ?? 0}, 
                {dimes ?? 0}, 
                {quarters ?? 0}, 
                {loonies ?? 0}, 
                {toonies ?? 0}
                ) returned { total }
            </Text>
        </View>
    );
}