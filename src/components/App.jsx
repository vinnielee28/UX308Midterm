import { Coin } from './Coin.jsx';
import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { F2C } from './F2C.jsx';
import { H2V } from './H2V.jsx';
import { Gym } from './Gym.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <Coin 
        nickels={0} 
        dimes={0} 
        quarters={0} 
        loonies={0} 
        toonies={0} 
      />
      <Coin 
        nickels={1} 
        dimes={1} 
        quarters={1} 
        loonies={1} 
        toonies={1} 
      />
      <Coin 
        nickels={1} 
        dimes={2} 
        quarters={3} 
        loonies={4} 
        toonies={5} 
      />
      <F2C fahrenheit={32} />
      <F2C fahrenheit={212} />
      <F2C fahrenheit={70} />
      <H2V height={1} />   
      <H2V height={2} />   
      <H2V height={3} />
      <Gym cost={100} friends={0} />  
      <Gym cost={100} friends={1} />  
      <Gym cost={100} friends={2} />  
      <Gym cost={100} friends={3} />  
      <Gym cost={100} friends={4} />  
    </View>
  );
}

