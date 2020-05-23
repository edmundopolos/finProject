import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'Base',
      screens: {
        Dashboard: 'dashboard',
        Links: 'links',
      },
      path:'login',
      screens:{
        Login:'login'
      }
    
    },
  },
};
