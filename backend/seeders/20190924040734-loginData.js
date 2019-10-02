'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('logins', [{
      user_id:1,
      date_created: '2019-01-01',
      remote_addr: '192.168.0.1',
    },{
      date_created: '2019-7-13',
      remote_addr: '192.168.0.1',
      user_id: 1
    },{
      date_created: '2019-05-22',
      remote_addr: '229.121.221.3',
      user_id: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('logins', null, {});
  }
};
