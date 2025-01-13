import { useState } from 'react';
import UserForm from '../../components/UserForm';
import { User } from '../../types';

const CreateUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleUserCreated = (newUser: User) => {
    setUser(newUser);
    // ここで新しいユーザーが作成された後の処理を追加できます
  };

  return (
    <div>
      <h1>ユーザー登録</h1>
      <UserForm onUserCreated={handleUserCreated} />
      {user && (
        <div>
          <h2>登録されたユーザー情報</h2>
          <p>名前: {user.name}</p>
          <p>メール: {user.email}</p>
          <p>セール番号: {user.salesNumber}</p>
        </div>
      )}
    </div>
  );
};

export default CreateUser;