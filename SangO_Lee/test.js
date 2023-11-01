//자식 트리 세로줄 계산
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

//중간 가로선 위치 - 부모버튼 가로선 위치 > 0 ? 부모 세로선 높이 : 부모 세로선 높이 * -1
const activeParent = document.querySelector(".on");
let activeParentOffset = activeParent.getBoundingClientRect().top;
let centerLineOffset =
    lastActiveChildOffset -
    (lastActiveChildOffset - firstActiveChildOffset) / 2 -
    15;

let parentVerticalLineHeight = centerLineOffset - activeParentOffset;
if (parentVerticalLineHeight < 0) {
    activeParent.querySelector(".connection--vertical").style.marginTop =
        parentVerticalLineHeight + "px";
    parentVerticalLineHeight = parentVerticalLineHeight * -1;
    activeParent.querySelector(".connection--vertical").style.height =
        parentVerticalLineHeight + "px";
}

//스크롤 할때마다 부모 세로선 높이 적용
const onScroll = () => {
    activeParentOffset = activeParent.getBoundingClientRect().top;
    centerLineOffset =
        lastActiveChildOffset -
        (lastActiveChildOffset - firstActiveChildOffset) / 2 -
        15;
    parentVerticalLineHeight = centerLineOffset - activeParentOffset;
    if (parentVerticalLineHeight < 0) {
        activeParent.querySelector(".connection--vertical").style.marginTop =
            parentVerticalLineHeight + "px";
        parentVerticalLineHeight = parentVerticalLineHeight * -1;
        activeParent.querySelector(".connection--vertical").style.height =
            parentVerticalLineHeight + "px";
    } else {
        activeParent.querySelector(".connection--vertical").style.marginTop =
            "0px";
        activeParent.querySelector(".connection--vertical").style.height =
            parentVerticalLineHeight + "px";
    }
};

//이벤트 실행
document.querySelector(".parentTree").addEventListener("scroll", onScroll);
