import { USER, PASSWORD, MONGO_CLOUD } from "dotenv";

module.exports = {
  database: `mongodb+srv://${USER}:${PASSWORD}${MONGO_CLOUD}/moviepersons?retryWrites=true&w=majority`,
};
