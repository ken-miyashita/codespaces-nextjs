import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../../data/users'; // 仮のデータソース

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const user = users.find((user) => user.id === Number(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'PUT') {
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex !== -1) {
      const updatedUser = { ...users[userIndex], ...req.body };
      users[userIndex] = updatedUser;
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'DELETE') {
    const userIndex = users.findIndex((user) => user.id === Number(id));
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}