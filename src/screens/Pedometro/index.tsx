import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Pedometer } from 'expo-sensors';
import styles from "./styles";
import {Subscription} from 'expo-media-library';

export default function Pedometro(){
    const [currentStepCount,setCurrentStepCount]=useState(0)
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking')
    const [pastStepCount, setPastStepCount] = useState(0)
    let [subscription, setSubscription]= useState<Subscription | null>(null);

    useEffect(()=> {
        async function permission(){
            console.log(await Pedometer.requestPermissionsAsync())
            console.log(await Pedometer.getPermissionsAsync())

        }
        permission()
        _subscribe()
        return () => _unsubscribe()
    }, []);

    const _unsubscribe = () =>{
        subscription && subscription.remove();
        setSubscription(null);
    };

    const _subscribe = () =>{
        subscription = Pedometer.watchStepCount(result =>{
            setCurrentStepCount(result.steps)
        });

        Pedometer.isAvailableAsync().then(
            result =>{
                setIsPedometerAvailable(String(result));
            },
            error =>{
                setIsPedometerAvailable('Could nos get isPedometerAvailable:'  + error);
            }
        );
    
        const end = new Date();
        const start = new Date();
        start.setDate(end.getDate()-1);;
    
        Pedometer.getStepCountAsync(start,end).then(
            result =>{
                setPastStepCount(result.steps);
            },
            error =>{
                console.log('Could not get stepCount:' + error);
            }
        );
    };

    return(
        <View style={styles.container}>
            <Text>Pedometer.isAvaliableAsync(): {isPedometerAvailable} </Text>
            <Text>Steps takn in the las 24 hours: {pastStepCount} </Text>
            <Text> Walk! and watch this go up: {currentStepCount} </Text>
        </View>
    )
}