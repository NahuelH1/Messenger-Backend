const messageRoutes = require('../components/messages/network');
const usersRoutes = require('../components/users/network')
const authRoutes = require('../components/auth/network')
const chatRoutes = require('../components/chat/network')
const routes = server =>
{
   server.use(usersRoutes);
   server.use(messageRoutes);
   server.use(authRoutes);
   server.use(chatRoutes);
}

module.exports = routes;