import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UserForm from '../../components/UserForm';

const EditUser = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const response = await fetch(`/api/users/${id}`);
        const data = await response.json();
        setUser(data);
      };
      fetchUser();
    }
  }, [id]);

  const handleUpdate = async (updatedUser) => {
    await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });
    router.push('/users');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm user={user} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditUser;