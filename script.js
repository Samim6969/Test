function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to("#page>video",{
    scrollTrigger:{
        trigger:`#page>video`,
        start:`2% top`,
        end:`bottom top`,
        scroller:`#main`
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})


gsap.to("#page",{
    scrollTrigger:{
        trigger:`#page`,
        start:`top top`,
        end:`bottom top`,
        scroller:`#main`,
        pin:true
    }
})


gsap.to("#page-bottom",{
    scrollTrigger:{
        trigger:`#page-bottom`,
        start:`5% top`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    opacity:0
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl.to("#page1>h1",{
    top:`-50%`
})






var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl1.to("#page2>h1",{
    top:`-50%`
})




var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        scrub:1,
        scroller:`#main`,
        pin:true
    }
})


tl2.to("#page4>#center-page4",{
    top:`-50%`
})



function canvas(){
    const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `


./images/skeleton/a1.png
./images/skeleton/a2.png
./images/skeleton/a3.png
./images/skeleton/a4.png
./images/skeleton/a5.png
./images/skeleton/a6.png
./images/skeleton/a7.png
./images/skeleton/a8.png
./images/skeleton/a9.png
./images/skeleton/a10.png
./images/skeleton/a11.png
./images/skeleton/a12.png
./images/skeleton/a13.png
./images/skeleton/a14.png
./images/skeleton/a15.png
./images/skeleton/a16.png
./images/skeleton/a17.png
./images/skeleton/a18.png
./images/skeleton/a19.png
./images/skeleton/a20.png
./images/skeleton/a21.png
./images/skeleton/a22.png
./images/skeleton/a23.png
./images/skeleton/a24.png
./images/skeleton/a25.png
./images/skeleton/a26.png
./images/skeleton/a27.png
./images/skeleton/a28.png
./images/skeleton/a29.png
./images/skeleton/a30.png
./images/skeleton/a31.png
./images/skeleton/a32.png
./images/skeleton/a33.png
./images/skeleton/a34.png
./images/skeleton/a35.png
./images/skeleton/a36.png
./images/skeleton/a37.png
./images/skeleton/a38.png
./images/skeleton/a39.png
./images/skeleton/a40.png
./images/skeleton/a41.png
./images/skeleton/a42.png
./images/skeleton/a43.png
./images/skeleton/a44.png
./images/skeleton/a45.png
./images/skeleton/a46.png
./images/skeleton/a47.png
./images/skeleton/a48.png
./images/skeleton/a49.png
./images/skeleton/a50.png
./images/skeleton/a51.png
./images/skeleton/a52.png
./images/skeleton/a53.png
./images/skeleton/a54.png
./images/skeleton/a55.png
./images/skeleton/a56.png
./images/skeleton/a57.png
./images/skeleton/a58.png
./images/skeleton/a59.png
./images/skeleton/a60.png
./images/skeleton/a61.png
./images/skeleton/a62.png
./images/skeleton/a63.png
./images/skeleton/a64.png
./images/skeleton/a65.png
./images/skeleton/a66.png
./images/skeleton/a67.png
./images/skeleton/a68.png
./images/skeleton/a69.png
./images/skeleton/a70.png
./images/skeleton/a71.png
./images/skeleton/a72.png
./images/skeleton/a73.png
./images/skeleton/a74.png
./images/skeleton/a75.png
./images/skeleton/a76.png
./images/skeleton/a77.png
./images/skeleton/a78.png
./images/skeleton/a79.png
./images/skeleton/a80.png
./images/skeleton/a81.png
./images/skeleton/a82.png
./images/skeleton/a83.png
./images/skeleton/a84.png
./images/skeleton/a85.png
./images/skeleton/a86.png
./images/skeleton/a87.png
./images/skeleton/a88.png
./images/skeleton/a89.png
./images/skeleton/a90.png
./images/skeleton/a91.png
./images/skeleton/a92.png
./images/skeleton/a93.png
./images/skeleton/a94.png
./images/skeleton/a95.png
./images/skeleton/a96.png
./images/skeleton/a97.png
./images/skeleton/a98.png
./images/skeleton/a99.png
./images/skeleton/a100.png
./images/skeleton/a101.png
./images/skeleton/a102.png
./images/skeleton/a103.png
./images/skeleton/a105.png
./images/skeleton/a106.png
./images/skeleton/a107.png
./images/skeleton/a108.png
./images/skeleton/a109.png
./images/skeleton/a110.png
./images/skeleton/a111.png
./images/skeleton/a112.png
./images/skeleton/a113.png
./images/skeleton/a114.png
./images/skeleton/a115.png
./images/skeleton/a116.png
./images/skeleton/a117.png
./images/skeleton/a118.png
./images/skeleton/a119.png
./images/skeleton/a120.png
./images/skeleton/a121.png
./images/skeleton/a122.png
./images/skeleton/a123.png
./images/skeleton/a124.png
./images/skeleton/a125.png
./images/skeleton/a126.png
./images/skeleton/a127.png
./images/skeleton/a128.png
./images/skeleton/a129.png
./images/skeleton/a130.png
./images/skeleton/a131.png
./images/skeleton/a132.png
./images/skeleton/a133.png
./images/skeleton/a134.png
./images/skeleton/a135.png
./images/skeleton/a136.png
./images/skeleton/a137.png
./images/skeleton/a138.png
./images/skeleton/a139.png
./images/skeleton/a140.png
./images/skeleton/a141.png
./images/skeleton/a142.png
./images/skeleton/a143.png
./images/skeleton/a144.png
./images/skeleton/a145.png
./images/skeleton/a146.png
./images/skeleton/a147.png
./images/skeleton/a148.png
./images/skeleton/a149.png
./images/skeleton/a150.png
./images/skeleton/a151.png
./images/skeleton/a152.png
./images/skeleton/a153.png
./images/skeleton/a154.png
./images/skeleton/a155.png
./images/skeleton/a156.png
./images/skeleton/a157.png
./images/skeleton/a158.png
./images/skeleton/a159.png
./images/skeleton/a160.png
./images/skeleton/a161.png
./images/skeleton/a162.png
./images/skeleton/a163.png
./images/skeleton/a164.png
./images/skeleton/a165.png
./images/skeleton/a166.png
./images/skeleton/a167.png
./images/skeleton/a168.png
./images/skeleton/a169.png
./images/skeleton/a170.png
./images/skeleton/a171.png
./images/skeleton/a172.png
./images/skeleton/a173.png
./images/skeleton/a174.png
./images/skeleton/a175.png
./images/skeleton/a176.png
./images/skeleton/a177.png
./images/skeleton/a178.png
./images/skeleton/a179.png
./images/skeleton/a180.png
./images/skeleton/a181.png
./images/skeleton/a182.png
./images/skeleton/a183.png
./images/skeleton/a184.png
./images/skeleton/a185.png
./images/skeleton/a186.png
./images/skeleton/a187.png
./images/skeleton/a188.png
./images/skeleton/a189.png
./images/skeleton/a190.png
./images/skeleton/a191.png
./images/skeleton/a192.png
./images/skeleton/a193.png
./images/skeleton/a194.png
./images/skeleton/a195.png
./images/skeleton/a196.png
./images/skeleton/a197.png
./images/skeleton/a198.png
./images/skeleton/a199.png
./images/skeleton/a200.png
./images/skeleton/a200.png
./images/skeleton/a200.png

 `;
  return data.split("\n")[index];
}

const frameCount = 201;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas();



function canvas1(){
  const canvas = document.querySelector("#page18>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
.//Apple vision canvas images/Vision00001.png
.//Apple vision canvas images/Vision00002.png
.//Apple vision canvas images/Vision00003.png
.//Apple vision canvas images/Vision00004.png
.//Apple vision canvas images/Vision00005.png
.//Apple vision canvas images/Vision00006.png
.//Apple vision canvas images/Vision00007.png
.//Apple vision canvas images/Vision00008.png
.//Apple vision canvas images/Vision00009.png
.//Apple vision canvas images/Vision00010.png
.//Apple vision canvas images/Vision00011.png
.//Apple vision canvas images/Vision00012.png
.//Apple vision canvas images/Vision00013.png
.//Apple vision canvas images/Vision00014.png
.//Apple vision canvas images/Vision00015.png
.//Apple vision canvas images/Vision00016.png
.//Apple vision canvas images/Vision00017.png
.//Apple vision canvas images/Vision00018.png
.//Apple vision canvas images/Vision00019.png
.//Apple vision canvas images/Vision00020.png
.//Apple vision canvas images/Vision00021.png
.//Apple vision canvas images/Vision00022.png
.//Apple vision canvas images/Vision00023.png
.//Apple vision canvas images/Vision00024.png
.//Apple vision canvas images/Vision00025.png
`;
return data.split("\n")[index];
}

const frameCount = 25;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 0.15,
  trigger: `#page18`,
  //   set start end according to preference
  start: `top top`,
  end: `80% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page18",
pin: true,
// markers:true,
scroller: `#main`,
//   set start end according to preference
start: `top top`,
end: `80% top`,
});
}
canvas1();



var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page21`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl3.to("#page21>#troff",{
  opacity:0
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:`#page22`,
      start:`top top`,
      scrub:1,
      scroller:`#main`,
      pin:true
  }
})


tl4.to("#page22>#snroff",{
  opacity:0
})



gsap.to("#page23>img",{
  scrollTrigger:{
    trigger:`#page23>img`,
    start:`top bottom`,
    end:`bottom 60%`,
    scrub:.5,
    scroller:`#main`
  },
  opacity:1
})

function canvas(){
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `

       ./images/skeleton/a1.png
       ./images/skeleton/a2.png
       ./images/skeleton/a3.png
       ./images/skeleton/a4.png
       ./images/skeleton/a5.png
       ./images/skeleton/a6.png
       ./images/skeleton/a7.png
       ./images/skeleton/a8.png
       ./images/skeleton/a9.png
       ./images/skeleton/a10.png
       ./images/skeleton/a11.png
       ./images/skeleton/a12.png
       ./images/skeleton/a13.png
       ./images/skeleton/a14.png
       ./images/skeleton/a15.png
       ./images/skeleton/a16.png
       ./images/skeleton/a17.png
       ./images/skeleton/a18.png
       ./images/skeleton/a19.png
       ./images/skeleton/a20.png
       ./images/skeleton/a21.png
       ./images/skeleton/a22.png
       ./images/skeleton/a23.png
       ./images/skeleton/a24.png
       ./images/skeleton/a25.png
       ./images/skeleton/a26.png
       ./images/skeleton/a27.png
       ./images/skeleton/a28.png
       ./images/skeleton/a29.png
       ./images/skeleton/a30.png
       ./images/skeleton/a31.png
       ./images/skeleton/a32.png
       ./images/skeleton/a33.png
       ./images/skeleton/a34.png
       ./images/skeleton/a35.png
       ./images/skeleton/a36.png
       ./images/skeleton/a37.png
       ./images/skeleton/a38.png
       ./images/skeleton/a39.png
       ./images/skeleton/a40.png
       ./images/skeleton/a41.png
       ./images/skeleton/a42.png
       ./images/skeleton/a43.png
       ./images/skeleton/a44.png
       ./images/skeleton/a45.png
       ./images/skeleton/a46.png
       ./images/skeleton/a47.png
       ./images/skeleton/a48.png
       ./images/skeleton/a49.png
       ./images/skeleton/a50.png
       ./images/skeleton/a51.png
       ./images/skeleton/a52.png
       ./images/skeleton/a53.png
       ./images/skeleton/a54.png
       ./images/skeleton/a55.png
       ./images/skeleton/a56.png
       ./images/skeleton/a57.png
       ./images/skeleton/a58.png
       ./images/skeleton/a59.png
       ./images/skeleton/a60.png
       ./images/skeleton/a61.png
       ./images/skeleton/a62.png
       ./images/skeleton/a63.png
       ./images/skeleton/a64.png
       ./images/skeleton/a65.png
       ./images/skeleton/a66.png
       ./images/skeleton/a67.png
        ./images/skeleton/a68.png
        ./images/skeleton/a69.png
        ./images/skeleton/a70.png
        ./images/skeleton/a71.png
        ./images/skeleton/a72.png
        ./images/skeleton/a73.png
        ./images/skeleton/a74.png
        ./images/skeleton/a75.png
        ./images/skeleton/a76.png
        ./images/skeleton/a77.png
        ./images/skeleton/a78.png
        ./images/skeleton/a79.png
        ./images/skeleton/a80.png
        ./images/skeleton/a81.png
        ./images/skeleton/a82.png
        ./images/skeleton/a83.png
        ./images/skeleton/a84.png
        ./images/skeleton/a85.png
        ./images/skeleton/a86.png
        ./images/skeleton/a87.png
        ./images/skeleton/a88.png
        ./images/skeleton/a89.png
        ./images/skeleton/a90.png
        ./images/skeleton/a91.png
        ./images/skeleton/a92.png
        ./images/skeleton/a93.png
        ./images/skeleton/a94.png
        ./images/skeleton/a95.png
        ./images/skeleton/a96.png
        ./images/skeleton/a97.png
        ./images/skeleton/a98.png
        ./images/skeleton/a99.png
        ./images/skeleton/a100.png
        ./images/skeleton/a101.png
        ./images/skeleton/a102.png
        ./images/skeleton/a103.png
        ./images/skeleton/a105.png
        ./images/skeleton/a106.png
        ./images/skeleton/a107.png
        ./images/skeleton/a108.png
        ./images/skeleton/a109.png
        ./images/skeleton/a110.png
        ./images/skeleton/a111.png
        ./images/skeleton/a112.png
        ./images/skeleton/a113.png
        ./images/skeleton/a114.png
        ./images/skeleton/a115.png
        ./images/skeleton/a116.png
        ./images/skeleton/a117.png
        ./images/skeleton/a118.png
        ./images/skeleton/a119.png
        ./images/skeleton/a120.png
        ./images/skeleton/a121.png
        ./images/skeleton/a122.png
        ./images/skeleton/a123.png
        ./images/skeleton/a124.png
        ./images/skeleton/a125.png
        ./images/skeleton/a126.png
        ./images/skeleton/a127.png
        ./images/skeleton/a128.png
        ./images/skeleton/a129.png
        ./images/skeleton/a130.png
        ./images/skeleton/a131.png
        ./images/skeleton/a132.png
        ./images/skeleton/a133.png
        ./images/skeleton/a134.png
        ./images/skeleton/a135.png
        ./images/skeleton/a136.png
        ./images/skeleton/a137.png
        ./images/skeleton/a138.png
        ./images/skeleton/a139.png
        ./images/skeleton/a140.png
        ./images/skeleton/a141.png
        ./images/skeleton/a142.png
        ./images/skeleton/a143.png
        ./images/skeleton/a144.png
        ./images/skeleton/a145.png
        ./images/skeleton/a146.png
        ./images/skeleton/a147.png
        ./images/skeleton/a148.png
        ./images/skeleton/a149.png
        ./images/skeleton/a150.png
        ./images/skeleton/a151.png
        ./images/skeleton/a152.png
        ./images/skeleton/a153.png
        ./images/skeleton/a154.png
        ./images/skeleton/a155.png
        ./images/skeleton/a156.png
        ./images/skeleton/a157.png
        ./images/skeleton/a158.png
        ./images/skeleton/a159.png
        ./images/skeleton/a160.png
        ./images/skeleton/a161.png
        ./images/skeleton/a162.png
        ./images/skeleton/a163.png
        ./images/skeleton/a164.png
        ./images/skeleton/a165.png
        ./images/skeleton/a166.png
        ./images/skeleton/a167.png
        ./images/skeleton/a168.png
        ./images/skeleton/a169.png
        ./images/skeleton/a170.png
        ./images/skeleton/a171.png
        ./images/skeleton/a172.png
        ./images/skeleton/a173.png
        ./images/skeleton/a174.png
        ./images/skeleton/a175.png
        ./images/skeleton/a176.png
        ./images/skeleton/a177.png
        ./images/skeleton/a178.png
        ./images/skeleton/a179.png
        ./images/skeleton/a180.png
        ./images/skeleton/a181.png
        ./images/skeleton/a182.png
        ./images/skeleton/a183.png
        ./images/skeleton/a184.png
        ./images/skeleton/a185.png
        ./images/skeleton/a186.png
        ./images/skeleton/a187.png
        ./images/skeleton/a188.png
        ./images/skeleton/a189.png
        ./images/skeleton/a190.png
        ./images/skeleton/a191.png
        ./images/skeleton/a192.png
        ./images/skeleton/a193.png
        ./images/skeleton/a194.png
        ./images/skeleton/a195.png
        ./images/skeleton/a196.png
        ./images/skeleton/a197.png
        ./images/skeleton/a198.png
        ./images/skeleton/a199.png
        ./images/skeleton/a200.png
        ./images/skeleton/a200.png
        ./images/skeleton/a200.png
        `; 
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page7>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        trigger: "#page7",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `600% top`,
    });
}
canvas();

function canvas77(){
    const canvas = document.querySelector("#page77>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        ./images/skeleton/a1.png
        // ... (all other image paths remain unchanged)
        ./images/skeleton/a200.png
        `; 
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page77>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        trigger: "#page77",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `600% top`,
    });
}
canvas77();


