window.addEventListener("click", ()=>{
  if(localStorage.getItem("user")){
      window.location.href = "./login.html"
  }
})


import {  auth, createUserWithEmailAndPassword } from "./fb.js";


const btn = document.getElementById("signinUser");
btn.addEventListener("click", async () => {
  try {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

const userObj = {
  name : name.value,
  email : email.value
}

    if (!email.value ||!password.value) {
      alert("Please enter both email and password");
      return;
    }

    const res = await createUserWithEmailAndPassword(auth,email.value,password.value);
// console.log(res);

const uid = res.user.uid
console.log(uid);
localStorage.setItem("user", uid)

    // const userResponse = await setDoc(doc(db, "users", uid), userObj);
    // window.location.href = "../login.html"   


  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});


