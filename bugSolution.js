import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; // Import your Firebase configuration

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null; // Initialize unsubscribe variable
  }

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/auth/web/manage-users
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    // ... your component's render logic
  }
} 

export default MyComponent;