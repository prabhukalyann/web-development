const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function landingAnimation() {
    var tl = gsap.timeline();

    tl.from('#upper-nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".coverelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay:-1,
        stagger: .2
    })
    .from('.landing-page-footer', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })


}
let timeout;
function circlesqueez(){
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(dets){
        
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mousefollower(xscale,yscale);

        timeout = this.setTimeout(()=>{
            document.querySelector("#circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);
    })

}
circlesqueez();
function mousefollower(xscale,yscale){
    window.addEventListener("mousemove",(dets) => {
        document.querySelector("#circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
mousefollower();
landingAnimation();

document.querySelectorAll("#view").forEach(function(view){
    view.addEventListener("mousemove",()=>{
        view.classList.add("viewoption");
    });
});
document.querySelectorAll(".projects").forEach(function(projects){
    let rotate=0;
    let diff1 = 0;
    
    projects.addEventListener("mouseleave",(details)=>{
        gsap.to(projects.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration:0.5,
        })
    })

   projects.addEventListener("mousemove",function (details){   

        
        let diff = details.clientY-projects.getBoundingClientRect().top;
        diff1=details.clientX-rotate;
        rotate = details.clientX;
        gsap.to(projects.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20,diff1*0.5),
        });
   });

   
});

let time = document.querySelector("#current-time");
setInterval(()=>{
    let d = new Date();
    time.innerHTML=d.toLocaleTimeString();
},1000);

let smenu = document.querySelector("#sidemenu");
let closemenu = document.querySelector("#menuuclose")
let menu = document.querySelector("#menu");


closemenu.addEventListener("touchstart",()=>{
    smenu.style.right = "-27%";
});
menu.addEventListener("touchstart",()=>{
    smenu.style.right = "0";
});