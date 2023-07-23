var Accordion = /** @class */ (function () {
    function Accordion(obj) {
        var _this = this;
        var $elm = document.querySelector(obj.hookName);
        //$elmが空の時エラーをスロー
        if (!$elm)
            throw new Error("Element not found: ".concat(obj.hookName));
        var $trigger = $elm.getElementsByTagName(obj.tagName);
        var triggerLen = $trigger.length;
        var index = 0;
        while (index < triggerLen) {
            $trigger[index].addEventListener("click", function (e) {
                return _this.clickHandler(e);
            });
            index++;
        }
    }
    //クリックしたら実行される処理
    Accordion.prototype.clickHandler = function (e) {
        e.preventDefault();
        var $target = e.currentTarget;
        var $content = $target.nextElementSibling;
        if (!$content)
            throw new Error("Content element not found");
        if ($content.style.display === "block") {
            $content.style.display = "none";
        }
        else {
            $content.style.display = "block";
        }
    };
    return Accordion;
}());
var classAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
});
