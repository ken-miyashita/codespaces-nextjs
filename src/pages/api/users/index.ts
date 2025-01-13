import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '../../../../data/users'; // 仮のデータソース

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;
    const newUser = { id: Date.now(), name, email, phone };
    users.push(newUser); // ユーザーを追加
    res.status(201).json(newUser);
  } else if (req.method === 'GET') {
    res.status(200).json(users); // ユーザー一覧を取得
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}