window.addEventListener("load", ()=>{
  
  })
  

import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    addDoc,
    collection,
    db,
    getDoc,
    doc,
    getDocs,
} from "./js/fb.js";


const createBlogBtn = document.getElementById("modalNotCreate");

createBlogBtn.addEventListener("click", (e) => {
  if (!localStorage.getItem("user")) {
    e.preventDefault(); 
    alert("You need to sign up or log in to create a blog.");
    window.location.href = "./pages/signup.html"; 
  }
});



window.addEventListener("load", async () => {

    const snapShot = await getDocs(collection(db, "blogs"))
    const tempArr = []
    snapShot.forEach((doc) => {       
        if (doc.data().isPrivate) {
            if (doc.data().uid == uid) {
              const obj = {
                ...doc.data(),
                id: doc.id,
              };
              tempArr.push(obj);
            }
          } else {
            const obj = {
              ...doc.data(),
              id: doc.id,
            };
            tempArr.push(obj);
          }
          
        })
        console.log(tempArr);

        parent.innerHTML = ""
renderUI(tempArr)
})


const input = document.getElementById("input")
const content = document.getElementById("content")
const image = document.getElementById("image")
const uid = localStorage.getItem("user")
const createBlog = document.getElementById("createBlog")
const parent = document.getElementById("parent")
const flexSwitchCheck = document.getElementById("flexSwitchCheck")


const saveBlog = document.getElementById("saveBlog")
saveBlog.addEventListener("click", async () => {

    const blogValue = input.value
    const blogContent = content.value
    const imageUrl = await uploadImage(image.files[0]);
    const blogObj = {
        title: blogValue,
        content: blogContent,
        imageUrl: imageUrl,
        uid: uid,
        isPrivate: flexSwitchCheck.checked,
    };

    await addDoc(collection(db, "blogs"), blogObj);
    var myModalEl = document.getElementById("createBlog");
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
})

const renderUI = (tempArr)=>{
 

for(const value of tempArr)
    parent.innerHTML += `<div class="col-lg-6 col-md-12 col-sm-12 my-2">
            <div class="card">
              <h5 class="card-header">
                <img
                  src="${value.imageUrl}"
                  width="100%"
                  height="300px"
                  alt=""
                />
              </h5>
              <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">
                  ${value.content}
                </p>
                <button style="width: 150px; padding: 8px; font-weight: bold; background-color: #2f40ac; border: none; color: white;">Read Blog</button>
                </div>
            </div>
          </div>`
          
}



const uploadImage = (file) => {

    return new Promise((resolve, reject) => {

        const metadata = {
            contentType: 'images/'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

                reject(error)

            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    resolve(downloadURL)
                });
            }
        );


    })




}
