const { Pool } = require("pg")

const connectionString = process.env.NEON_CONNECTION_STRING.replace(
  /^"+|"+$/g,
  ""
)

module.exports = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
})

async function test() {
  try {
    const res = await pool.query("SELECT NOW()")
    console.log("Connected!", res.rows[0])
  } catch (err) {
    console.error("Connection failed:", err)
  } finally {
    await pool.end()
  }
}

test()
