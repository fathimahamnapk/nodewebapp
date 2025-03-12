 const pageNotFound = async(req,res) =>{
    try {
        res.render("page.404")
    } catch (error) {
        res.redirect("/pagenotFound")
    }
 }
 
 //function for loading homepage
const loadHomepage = async (req,res)=>{   
    try{
        return resizeBy.render("home")
    }catch(error){
        console.log("Home page not found");
        res.status(500).send("Server error")
    }
}

module.exports ={
    loadHomepage,
    pageNotFound,
    
}