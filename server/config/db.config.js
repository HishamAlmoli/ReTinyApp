module.exports = {
    HOST: "localhost",
    USER: "hishamalmoli",
    PASSWORD: "",
    DB: "tiny",
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      acquire: 90000,
      idle: 10000
    }
  };