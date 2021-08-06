import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    const { redirectUrl } = req.query;
    try {
      // Pass custom parameters to login to handle login
      await handleLogin(req, res, {
        returnTo: redirectUrl || '/',
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});