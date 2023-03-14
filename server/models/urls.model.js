module.exports = (sequelize, Sequelize) => {
    const Url = sequelize.define("url", {
        url: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
      }
    });
  
    return Url;
  };