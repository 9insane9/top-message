const { Pool } = require("pg")

const connectionString = process.env.NEON_CONNECTION_STRING?.replace(
  /^"+|"+$/g,
  ""
)

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

async function testConnection() {
  try {
    const res = await pool.query("SELECT NOW()")
    console.log("Connected!", res.rows[0])
  } catch (err) {
    console.error("Connection failed:", err)
  }
}

testConnection()

module.exports = pool
