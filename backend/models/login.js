/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logins', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    remote_addr: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    timestamps:false,
    tableName: 'logins'
  });
};
