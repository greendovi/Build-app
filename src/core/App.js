class App {
  constructor(config = {}) {
    this.config = config;
    this.middleware = [];
    this.routes = [];
  }

  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  route(path, handler) {
    this.routes.push({ path, handler });
    return this;
  }

  async initialize() {
    console.log('Initializing application...');
    // Initialize logic
  }

  async start() {
    await this.initialize();
    console.log('Application started successfully');
  }
}

module.exports = App;
