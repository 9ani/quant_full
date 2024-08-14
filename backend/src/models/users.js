const users = [
    { id: 1, email: 'user1@example.com', username: 'user1', password: 'password1', token: 'mockToken1' },
    { id: 2, email: 'user2@example.com', username: 'user2', password: 'password2', token: 'mockToken2' }
  ];

  const findByEmail = (email) => {
    return users.find((user) => user.email === email);
  };
  
  const findByToken = (token) => {
    return users.find((user) => user.token === token);
  };
  
  module.exports = {
    users,
    findByEmail,
    findByToken
  };