import mysql from "../database/database.js";
const appController = {};

appController.getData = (req, res) => {
  const { row = 10, page = 1 } = req.query;
  const value = page <= 0 || isNaN(page) ? 0 : (page - 1) * row;
  mysql(`SELECT * from post LIMIT ${row} OFFSET ${value}`)
    .then((response) => {
      console.log(response);
      res.send({ message: `Data present`, data: response, status: 1 });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).send({ message: `Data not present`, status: 0 });
    });
};

export default appController;
