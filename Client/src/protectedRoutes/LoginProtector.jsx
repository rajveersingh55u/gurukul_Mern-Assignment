import { useEffect } from 'react'

const LoginProtector = ({children}) => {
  useEffect(() => {

    if (localStorage.getItem('userToken')) {
      window.location.href = '/';
    }
  }, []);


  return children;
  
}

export default LoginProtector;