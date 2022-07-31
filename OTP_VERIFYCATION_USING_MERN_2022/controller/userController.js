import dotenv from 'dotenv'
dotenv.config();

import initMB from 'messagebird';
const messagebird = initMB(process.env.MESSAGEBIRD_API_KEY);

class homeController {
        
        static getDoc = (req,res)=>{
                res.send({'message':"otp send successfull"});
        }

        // sent OTP to user 

        static userLogin = async(req,res)=>{

              const { phoneNumber } = req.body;
                //      const phoneNumber = req.body.phoneNumber
              const newPhoneMuner = "+91" + phoneNumber;

              var params= {
                        template : 'Your verification OTP is %token.',
                        timeout:300
              }
                messagebird.verify.create(newPhoneMuner, params, (err, response)=> {
                    if (err) {
                        return console.log("OTP send errror" ,err);
                        res.status(200).send({'status':"failed" , "message":"Unable to send OTP"})
                    } else {
                        console.log("OTP send response", response);
                        res.status(200).send({'status':"success" , "message":"OTP send successfully", "id": response.id});
                    }
                })  
        }

        // Verify OTP is correct or Not
  static verifyOTP = async (req, res) => {
        const { id, otpcode } = req.body
        messagebird.verify.verify(id, otpcode,
          (err, response) => {
            if (err) {
              // Incorrect OTP
              console.log("OTP Verification Error:", err)
              res.status(200).send({ "status": "failed", "message": "Invalid OTP" })
            } else {
              // Login Success
              console.log("OTP Verification Response:", response)
              res.status(200).send({ "status": "success", "message": "Login Success" })
            }
          });
      }
}

export default homeController;