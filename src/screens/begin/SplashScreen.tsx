import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StatusBar, Text, Easing} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {styles} from '../../styles/SplashScreen.styles'
import { NativeStackNavigationProp} from "@react-navigation/native-stack"
import { RootStackParamList } from '../../navigation/StackNavigator';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue:1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension:50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),

      Animated.delay(0),

      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.timing(backgroundColorAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: false,
      }).start(() => {
        setTimeout(() => {
          navigation.replace('Welcome');
        }, 1700);
      });
    });
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000000', '#1a237e'], 
  });

  return (
    <Animated.View style={[styles.container, {backgroundColor}]}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      <Animated.View
      style={[
        styles.logoContainer,
        {
          opacity: fadeAnim,
          transform: [
            {scale: scaleAnim},
            {rotate: rotation },
          ],
        },
      ]}

      >
        <View style={styles.logoWrapper}>
          <Image
          source={require('../../assets/logobranca.png')}
          style={styles.logo}
          resizeMode='contain'
          onError={(error) => console.log('Erro ao carregar imagem:', error)}
          onLoad={() => console.log('Imagem carregada com sucesso')}
          />
        </View>
      </Animated.View>

      <Animated.View 
      style={[styles.textContainer, {opacity: fadeAnim}]}
      >
        </Animated.View>
      </Animated.View>
  );
};

export default SplashScreen;