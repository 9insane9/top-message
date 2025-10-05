const { Pool } = require("pg")

const connectionString = process.env.NEON_CONNECTION_STRING.replace(
  /^"+|"+$/g,
  ""
)

console.log("DATABASE_URL raw:", process.env.NEON_CONNECTION_STRING)
console.log("Length:", process.env.NEON_CONNECTION_STRING?.length)

module.exports = new Pool({
  connectionString,
})
