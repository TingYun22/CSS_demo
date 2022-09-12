let imgs = [
    "0128_3C_590",
    "0126hnyfood_590",
    "0911_bk_590",
    "0912_school_590",
];
const saleImg = document.querySelector(".saleImg");
const leftBtn = document.querySelector(".arrowLeft");
const rightBtn = document.querySelector(".arrowRight");
const dots = document.querySelector(".dots");
let dot = 0;

// 虛擬容器
const fragment = document.createDocumentFragment();
for (let i = 0; i < imgs.length; i++) {
   let newDiv=document.createElement('div')
   newDiv.className=`dot dot${i}`
   let nodeText=document.createTextNode(i+1);
   newDiv.appendChild(nodeText)
   fragment.appendChild(newDiv)
}
// 建立n個點
dots.appendChild(fragment)

function getAllSiblings(el){
    var ar=[]
    el=el.parentNode.firstChild;
    do{
        if(el.nodeName=='DIV' && !el.className.includes(`${dot}`)){
            ar.push(el)
        }
    }while(el=el.nextSibling)
    return ar
}


const allDot=document.querySelectorAll('.dot')
allDot.forEach(el=>{
    if(el.className.includes(`dot${dot}`)){
        el.className+=' active'
    }
    // 點選"dot"
    el.addEventListener('click',function(){
        dot=parseInt(el.innerHTML)-1
        if(el.className.includes(`dot${dot}`)){
            // 目標已有"active"就不加
            if(!el.className.includes('active')){
                el.className+=' active'
            }
        }
        // 除點選的"點"以外不強調
        const elseEl=getAllSiblings(el)
        elseEl.map((v)=>{
            if(v.className.includes('active')){
                v.classList.remove('active')
            }
        })

        return saleImg.src = `./img/${imgs[dot]}.jpg`
    })
})

// 照片切換
saleImg.src = `./img/${imgs[dot]}.jpg`;
leftBtn.addEventListener("click", clickToRightChangeImg);
rightBtn.addEventListener("click", clickToLeftChangeImg);
function clickToLeftChangeImg() {
    if (dot < imgs.length - 1) {
        dot = dot + 1;
    } else if (dot >= imgs.length - 1) {
        dot = imgs.length - 1;
    }

    allDot.forEach(el=>{
        if(el.className.includes(`dot${dot}`)){
            if(!el.className.includes('active')){
                el.className+=' active'
            }
        }else{
            if(el.className.includes('active')){
                el.classList.remove('active')
            }
            
        }
    })
    return (saleImg.src = `./img/${imgs[dot]}.jpg`);
}
function clickToRightChangeImg() {
    if (dot > 0) {
        dot = dot - 1;
    }

    allDot.forEach(el=>{
        if(el.className.includes(`dot${dot}`)){
            if(!el.className.includes('active')){
                el.className+=' active'
            }
        }else{
            if(el.className.includes(' active')){
                el.classList.remove('active')
            }
        }
    })

    return (saleImg.src = `./img/${imgs[dot]}.jpg`);
}

