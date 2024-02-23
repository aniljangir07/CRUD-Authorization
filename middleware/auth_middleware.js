const users = [
      { id: 1, role: 'user' },
      { id: 2, role: 'admin' },
];

export const authenticateUser = (req, res, next) => {
      const userId = req.headers['user-id'];
      if (!userId) return res.status(401).json({ message: 'User not authenticated' });

      const user = users.find(u => u.id === parseInt(userId));
      if (!user) return res.status(401).json({ message: 'User not authenticated' });

      req.user = user;
      next();
};

export const authorizeRole = (role) => {
      return (req, res, next) => {
            // Check if the user has the required role
            if (req.user.role !== role) {
                  return res.status(403).json({ message: 'User not authorized' });
            }
            next();
      };
};