function login(){
    
    document.getElementById("m").innerHTML =' \
    <div class="form-popup" id="myForm">\
    <form action="/action_page.php" class="form-container">\
      <h1 >Login</h1>\
  \
      <label for="email"><b>Email</b></label>\
      <input type="text" placeholder="Enter Email" name="email" required>\
  \
      <label for="psw"><b>Password</b></label>\
      <input type="password" placeholder="Enter Password" name="psw" required>\
  \   <a class="forgetPass"  href="forgotMyPassword.html">|Forgot My Password</a>\
      <button type="submit" class="btn">Login</button>\
       <a class="noAcc">Don’t have an account? Sign Up</a>\
    </form>\
  </div>\
  ';
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }