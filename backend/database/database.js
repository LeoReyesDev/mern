require("dotenv").config();
const serverCloudMongo = "mongodb+srv://";
const urlConnect = `${serverCloudMongo}${process.env.MONGOLAB_USER}:${process.env.MONGOLAB_PASSWORD}@${process.env.MONGOLAB_DOMAIN}?${process.env.MONGOLAB_PARAMS}`;
console.log("ProcessURL", urlConnect);

module.exports = {
  database: urlConnect,
};
