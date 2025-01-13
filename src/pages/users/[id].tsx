import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/users/${id}`);
          setUser(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user: {error.message}</p>;

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Sales Number: {user.salesNumber}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;