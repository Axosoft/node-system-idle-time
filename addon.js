try {
  module.exports = require('./build/Release/system_idle_time.node');
} catch (err) {
  module.exports = require('./build/Debug/system_idle_time.node');
}
