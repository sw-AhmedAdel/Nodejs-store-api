require('dotenv').config();

function sendCookieToRespond ( user , res) {
  const token = user.getAuthToken();
  const cookieOptions = {                              // 1 day is 1000 * 60 * 60 * 1000
   expires: new Date( Date.now() + process.env.EXPIRED_COOKIE  * 24  *60    *60    *1000), 
   httpOnly: true,
   signed : true,
  }
  if(process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }
  res.cookie('token' , token , cookieOptions);
}

module.exports = sendCookieToRespond;


