const { Pool } = require("pg")

const connectionString = process.env.NEON_CONNECTION_STRING.replace(
  /^"+|"+$/g,
  ""
)

module.exports = new Pool({
  connectionString,
})
