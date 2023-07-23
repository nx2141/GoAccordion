class Accordion {
  constructor(obj: { hookName: string; tagName: string }) {
    const $elm = document.querySelector(obj.hookName);
    //$elmが空の時エラーをスロー
    if (!$elm) throw new Error(`Element not found: ${obj.hookName}`);
    const $trigger = $elm.getElementsByTagName(obj.tagName);
    const triggerLen: number = $trigger.length;
    let index = 0;
    while (index < triggerLen) {
      $trigger[index].addEventListener("click", (e: Event) =>
        this.clickHandler(e)
      );
      index++;
    }
  }

  //クリックしたら実行される処理
  clickHandler(e: Event) {
    e.preventDefault();
    const $target = e.currentTarget as HTMLElement;
    const $content = $target.nextElementSibling as HTMLElement;
    if (!$content) throw new Error("Content element not found");
    if ($content.style.display === "block") {
      $content.style.display = "none";
    } else {
      $content.style.display = "block";
    }
  }
}

const classAccordion = new Accordion({
  hookName: "#js-faq",
  tagName: "p",
});
