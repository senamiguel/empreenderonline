import { useEffect } from 'react';
import Threads from '../../components/common/Threads';
import '../../styles/AuthLayout.css';

const AuthLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="auth-layout">
      <div className="auth-background">
        <Threads
          amplitude={2}
          distance={1}
          enableMouseInteraction={true}
          color={[0, 0.55, 0.39]} 
        />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout; 