import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      <h1>ユーザー管理アプリ</h1>
      <UserForm />
      <hr className={styles.hr} />
      <UserList users={users} />
    </main>
  );
};

export default Home;