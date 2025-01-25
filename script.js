let today = document.querySelector("#today")
let user = document.querySelector("input")
let btn = document.querySelector("button")
let d = document.querySelector(".day")
let m = document.querySelector(".mon")
let y = document.querySelector(".year")

let sys = new Date()
let Tday =  sys.getDate()
let Tmon =  sys.getMonth() + 1
let Tyear =  sys.getFullYear()

today.innerText = `${Tmon}/${Tday}/${Tyear}`


btn.addEventListener("click",() => {
    let dob = user.value
    let date = new Date(dob)
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yy = date.getFullYear()

    let year 
    let month
    let day

    if(yy > Tyear){
        alert("still not born")
       return
    }else{
        year = Tyear - yy;
       
}

    if(mm > Tmon && yy > Tyear){
        alert("still not born")
        return
    }else if(mm <= Tmon){
        month = Tmon - mm
        
    }else{
        month = Tmon + 12 - mm
        year--
        
    }
    
    let getday = (m,y) => {
        return new Date(m,y,0).getDate()
    }

    if(dd > Tday && mm >= Tmon && yy >= Tyear){
        alert("still not born")
        return
    }else if(Tday >= dd){
        day = Tday - dd
    }
    else{
        month--
        day = getday(mm,yy) + Tday - dd
    }
    
    d.innerText = day
    m.innerText = month
    y.innerText = year
})