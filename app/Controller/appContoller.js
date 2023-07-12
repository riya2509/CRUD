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

export default appController;
