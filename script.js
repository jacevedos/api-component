
((d)=>{
    const $sort=d.querySelector(".sort"),
    $id=d.getElementById("id-advice"),
    $advice=d.getElementById("advice"),
    $loader=d.querySelector(".loader");

    
    $sort.addEventListener("click",async (e)=>{
        $loader.classList.remove("none");
        try{
            let res= await fetch("https://api.adviceslip.com/advice"),
            json=await res.json();
            if(!res.ok) throw {status: res.status,statusText:res.statusText}
            $id.innerHTML=`ADVICE #${json.slip.id}`;
            $advice.innerHTML=json.slip.advice;
            $loader.classList.add("none");

        } catch (err){
            let message=err.statusText || "An error occurred"
            $id.innerHTML=`Error ${err.status}`;
            $advice.innerHTML=`${message}`
        }
    });


})(document);