import { sql } from "@vercel/postgres";

// const revenue = function () {
//   // Add noStore() here prevent the response from being cached.
//   // This is equivalent to in fetch(..., {cache: 'no-store'}).

//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     console.log("Fetching revenue data...");
//     //new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = sql`SELECT * FROM customers`;

//     console.log("Data fetch completed after 3 seconds.");

//     return data.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch revenue data.");
//   }
// };
// // get all cars
// // app.get("/", async (req, res) => {
// //   try {
// //     const carsLandingPage = await pool.query("SELECT * FROM cars");
// //     res.json(carsLandingPage.rows);
// //   } catch (error) {
// //     console.error(error.message);
// //   }
// // });

const user = await sql`SELECT * FROM users`;

export default user;
