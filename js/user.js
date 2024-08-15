import { db, doc, getDoc,  } from "../js/fb.js";

window.addEventListener("load", async () => {
    if (!localStorage.getItem("user")) {
      window.location.replace("./pages/login.html");
      return;
    }
  
    
  
    try {
        
    const uID = localStorage.getItem("user");
    console.log(uID);
      const res = await getDoc(doc(db, "blogs", uID));
    //   console.log(res);
  
      const nm = document.getElementById("name");
      const em = document.getElementById("email");
  
          if (res.exists()) {
        nm.innerHTML = `Name: ${res.data().username} `;
        em.innerHTML = `Email: ${res.data().email} `;
      } else {
        // Handle case where document doesn't exist
        console.error("Document with ID ", uID, " not found");
      }
    } catch (error) {
      // Handle errors during the fetch
      console.error("Error fetching data:", error);
    }
  });

  const signOut = ()=>{

    localStorage.removeItem("user");
    localStorage.clear();
    window.location.replace("../pages/login.html");
}

window.signOut = signOut