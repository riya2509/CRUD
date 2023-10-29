const appController = {};
import sql from "../database/database.js";

appController.getData = (req, res) => {
  sql.query(`SELECT * from post`, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ error });
    } else {
      res.send({ message: `Task fetched successfully.`, data: result });
    }
  });
};

appController.search = (req, res) => {
  const { column = "id", value = "" } = req.query;
  mysql(`SELECT * from product WHERE ${column} LIKE "%${value}%" `)
    .then((response) => {
      if (response.length === 0) {
        res.send({ message: `Data not present`, data: response, status: 1 });
      } else {
        res.send({ message: `Data present`, data: response, status: 1 });
        console.log(response);
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send({ message: `Data not present`, status: 0 });
    });
};

export default appController;
