const firebaseConfig = {
  apiKey: 'AIzaSyBykrlYzMHUk3XhYLfRWQ2CQF0c3QYc46o',
  authDomain: 'fixadvisor-5547f.firebaseapp.com',
  databaseURL: 'https://fixadvisor-5547f.firebaseio.com',
  projectId: 'fixadvisor-5547f',
  storageBucket: 'fixadvisor-5547f.appspot.com',
  messagingSenderId: '211596221577',
  appId: '1:211596221577:web:400d6f606b826b0ba9ba58',
  measurementId: 'G-14LQ5NYX8B',
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};
