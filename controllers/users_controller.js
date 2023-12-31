const User=require('../models/user');
module.exports.profile=function(req,res){
    res.render('users',{
        title:'Profile'
    })
}
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }
    res.render('user_sign_in',{
        title:'ByteChat | Sign in'
    })
}
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile')
    }
    res.render('user_sign_up',{
        title:'ByteChat | Sign up'
    })
}
//get the sign up data
module.exports.create=function(req,res){
  if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
  }
  User.findOne({email:req.body.email},function(err,user){
    if(err){
        console.log('Error in finding the user');
        return;
    }
    if(!user){
        User.create(req.body,function(err,user){
            if(err){
                console.log('Error in creating the user');
                return;
            }    
            return res.redirect('/users/sign-in')
        })
       
    }
    else{
         return res.redirect('back');   
    }
  });
}
//sign in and create a session for the user
module.exports.createSession=function(req,res){
 return res.redirect('/')
}

module.exports.destroySession=function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    // return res.redirect('/')
}