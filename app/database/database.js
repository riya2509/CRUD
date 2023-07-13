import db from "mysql";

const sql = db.createConnection({
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

const mysql = (querystring = "") =>
  new Promise((resolve, reject) =>
    sql.query(querystring, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  );

export default mysql;
