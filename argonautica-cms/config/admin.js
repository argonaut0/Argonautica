module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f01accb85d3f8d8f0eee109a88eadd6'),
  },
});
