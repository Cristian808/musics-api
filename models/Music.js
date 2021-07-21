module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define("Music", {
    name: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    release_date: { type: DataTypes.DATE, allowNull: true },
  });
  return Music;
};
