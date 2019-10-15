const firebaseConfig = {};

// Cloud Functions
const backendUrl = `https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
