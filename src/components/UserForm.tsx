import React, { useState } from 'react';

const UserForm: React.FC<{ onSubmit: (user: { name: string; email: string; phone: string }) => void; initialData?: { name: string; email: string; phone: string } }> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          名前:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          メールアドレス:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          セール番号:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
      </div>
      <button type="submit">登録</button>
    </form>
  );
};

export default UserForm;