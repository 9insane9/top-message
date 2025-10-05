const { Pool } = require("pg")

const connectionString = process.env.NEON_CONNECTION_STRING

module.exports = new Pool({
  connectionString,
})
