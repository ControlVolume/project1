// 토큰 인증 처리
const { User } = require("../models/User");

//gpt 6.0 callback 지원x(231019)
let auth = (req, res, next) => {
    // 인증 처리를 하는 곳
  
    // 클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth;
  
    // 토큰을 복호화한 후 유저를 찾는다
    User.findByToken(token)
      .then((user) => {
        if (!user) return res.json({ isAuth: false, error: true });
  
        req.token = token;
        req.user = user;
        next();
      })
      .catch((err) => {
        // 오류 처리
        return res.status(400).send(err);
      });
  };
  
  
  module.exports = { auth };