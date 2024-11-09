// src/auth.js
const fakeAuth = {
    isAuthenticated: false,
    role: '',
  
    // Mock login function
    login(role:any, callback:()=>void) {
      fakeAuth.isAuthenticated = true;
      fakeAuth.role = role;
      callback();
    },
  
    // Mock logout function
    logout(callback:()=>void) {
      fakeAuth.isAuthenticated = false;
      fakeAuth.role = '';
      callback();
    }
  };
  
  export default fakeAuth;
  