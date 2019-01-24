// 回到顶部
var util = (function () {
    const backToTop = btn => {
        const callBack = () => {
            let top = setInterval(() => {
                window.document.documentElement.scrollTop === 0 && clearInterval(top);
                let height = window.document.documentElement.scrollTop;
                height -= 1 / 3 * height;
                window.document.documentElement.scrollTop = height;
            }, 100);
        }
        if (!btn) {
            callBack();
            return;
        }
        btn.addEventListener('click', callBack);
    }
    return {
        backToTop,
    };

}());