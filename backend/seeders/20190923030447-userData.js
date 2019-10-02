'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      org_id: 'aaa@aaa',
      user_pw: '1234',
      user_group: 'a',
      company_id: 1,
      user_auth: 'A',
      user_insert_dt: '2019-01-01',
      user_yn: 'N',
      //insert_dt: '2019-01-02',
      update_dt: '2019-01-02',
      insert_id: 'A',
      update_id: 'A'
    },{
      org_id: 'zxcv',
      user_pw: 'abcd',
      user_group: 'B',
      company_id: 2,
      user_auth: 'B',
      user_insert_dt: '2019-03-01',
      user_yn: 'Y',
      //insert_dt: '2019-05-02',
      update_dt: '2019-05-02',
      insert_id: 'B',
      update_id: 'B'
    },{
      org_id: 'qwer',
      user_pw: 'ppppp',
      user_group: 'C',
      company_id: 3,
      user_auth: 'C',
      user_insert_dt: '2019-07-23',
      user_yn: 'N',
      //insert_dt: '2019-08-02',
      update_dt: '2019-08-02',
      insert_id: 'C',
      update_id: 'C'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
