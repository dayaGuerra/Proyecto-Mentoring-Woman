import { initRouters } from './util/root.js';  
import { initFirebaseAuth } from './controller-view/view-controller-auth.js';  

const init = () => {
    const config = {
        apiKey: 'AIzaSyD3ykIClaAL45FAtPu3EUuEkg_Afpdu7HE',
        authDomain: 'mentoring-women.firebaseapp.com',
        databaseURL: 'mentoring-women.firebaseio.com',
        projectId: 'mentoring-women',
        storageBucket: 'mentoring-women.appspot.com',
        messagingSenderId: '688211406613',
      };
      firebase.initializeApp(config);

      initRouters();
      initFirebaseAuth();
};


window.onload = init;