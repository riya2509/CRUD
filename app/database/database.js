import mysql from "mysql";

const sql = mysql.createConnection({
  host: "localhost",
  database: "travel_buddy",
  user: "root",
  password: "root",
});

sql.query(`select 1+1`, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Database connected successfully.`);
  }
});

export default sql;
