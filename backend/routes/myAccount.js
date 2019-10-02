const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', (req, res, next) => {   //내 계정 메인페이지
  res.render('myAccount/myAccountMain', {
    title: '내 계정',
    user : req.user,
  });
});

router.get('/:id/edit', (req, res, next) => { // 내 계정 > edit
  res.render('myAccount/myAccountEdit', {
    title: '계정정보수정',
    user : req.user,
  });
});

// router.put('/:id/edit', async (req, res, next) => { // 내 계정 > edit > 수정완료
//   const { org_id, user_group, user_insert_dt } = req.body;
//   try {
//     const exUser = await User.find({ where: { org_id } });
//     if (exUser) {
//       req.flash('updateError', '이미 존재하는 org_id 입니다.');
//       return res.redirect('/join');
//     }
//     await User.update({
//       org_id,
//       user_group,
//       user_insert_dt,
//     });
//     return res.render('main');
//   } catch (error) {
//     console.error(error);
//     return next(error);
//   }
// });

router.put('/:id/edit', function(req, res){
  console.log("put요청 받음");
  User.update({ org_id: req.body.org_id }, { $set: req.body }, function(err, output){
      if(err) 
        res.status(500).json({ error: 'database failure' });
      console.log(output);
      if(!output.n) 
        return res.status(404).json({ error: 'book not found' });
      res.json( { message: 'updated' } );
  })
});

module.exports = router;



