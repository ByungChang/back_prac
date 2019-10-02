/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    org_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_pw: {
      type: "BLOB",
      allowNull: false
    },
    user_group: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    company_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    user_auth: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    user_insert_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_yn: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    insert_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    insert_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    update_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    timestamps:false,
    tableName: 'users'
  });
};
