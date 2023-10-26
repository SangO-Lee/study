const target = document.querySelector(".on");
console.dir(target);

const onScroll = () => {
    const offset = target.getBoundingClientRect().top;
    console.log(offset);
    target.querySelector(".connection--vertical").style.height = offset + "px";
};

document.querySelector(".parentTree").addEventListener("scroll", onScroll);

const activeChildList = document.querySelectorAll(".childTree > .q-btn.on");
const firstActiveChild = activeChildList[0];
let lastActiveChild;
if (activeChildList.length != 1) {
    lastActiveChild = activeChildList[activeChildList.length - 1];
}

const firstActiveChildOffset = firstActiveChild
    .querySelector(".connection--line")
    .getBoundingClientRect().top;
const lastActiveChildOffset = lastActiveChild
    .querySelector(".connection--line")
    .getBoundingClientRect().top;

console.log(firstActiveChildOffset, lastActiveChildOffset);

const childVerticalLine = document.querySelector(
    ".childTree .connection--vertical"
);

//자식 세로줄 높이와 위치 설정
childVerticalLine.style.height =
    lastActiveChildOffset - firstActiveChildOffset + "px";

childVerticalLine.style.top = firstActiveChild.offsetTop + 15 + "px";
