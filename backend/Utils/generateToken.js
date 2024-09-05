import jwt from "jsonwebtoken";
const secretKey = 'jIfSuZGyffKIGs88sTXmuVf9znQ7B8VXBRZAO/GD92s='

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId}, secretKey,{
        expiresIn:'15d'
    })
res.cookie("jwt",token,{
    maxAge:15 * 24 * 60 *60 * 1000,//Milliseconds
    httpOnly: true,//prevent XSS attacks cross-site scripting attack
    sameSite:"strict",//CSRF attacks cross-site request forgery attack
    secure: process.env.NODE_ENV !== "development",
})
}

export default generateTokenAndSetCookie;