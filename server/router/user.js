//user路由
import express from 'express';
import User from '../models/user';

const router = express.Router();

//查询用户信息
router.get('/user', (req, res) => {
  User.find({}).sort({update_at: -1})
  .then(users => {
    res.json(users);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
})