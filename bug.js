const unsubscribe = onAuthStateChanged(auth, (user) => {  if (user) {    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users    const uid = user.uid;    // ...
  } else {    // User is signed out
    // ...
  }  // This unsubscribe function is crucial for removing listeners when the component unmounts, 
  // preventing memory leaks and unexpected behavior.  // Without this unsubscribe, the listener will continue to fire even after the component is gone.  // It's especially important in React components.
});

// ... later, when the component unmounts:
componentWillUnmount() {
  unsubscribe(); // Remember to unsubscribe!
}