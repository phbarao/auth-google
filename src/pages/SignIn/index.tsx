import { GoogleLogo } from 'phosphor-react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../services/firebase';
import './styles.scss';
import { useState } from 'react';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const img = user.photoURL;

  return (
    <div className="container">
      <div className="user">
        {img && <img src={img} alt="Foto do usuário" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social para facilitar a vida do usuário.
      </span>

      <button onClick={handleGoogleSignIn} type="button" className="button">
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  );
}
