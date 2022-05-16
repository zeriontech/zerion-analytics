const dotenv = require("dotenv");

const env = {};

const config = dotenv.config({ path: ".env" });
if (config.parsed) {
  Object.assign(env, config.parsed);
}

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        ZERION_API_KEY_V4: env.ZERION_API_KEY_V4,
      },
    },
  },
};
