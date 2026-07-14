const App = require('./core/App');

const app = new App({
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
});

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.route('/', (req, res) => {
  res.json({ message: 'Welcome to Build App' });
});

if (require.main === module) {
  app.start().catch(err => {
    console.error('Failed to start app:', err);
    process.exit(1);
  });
}

module.exports = app;
