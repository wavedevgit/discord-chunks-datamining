/** Chunk was on 98466 **/
n.d(e, {
  J: () => i
}), n(415506);
var a = n(231338);

function i(t) {
  let e = !1;
  if ("object" == typeof window.navigator && "clipboard" in window.navigator) try {
    let n = new ClipboardItem({
      "text/plain": t
    });
    window.navigator.clipboard.write([n]).catch(a.dG), e = !0
  } catch (t) {}
  if (e) return e;
  let n = document.body;
  if (null == n) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
  let i = document.createRange(),
    l = window.getSelection(),
    o = document.createElement("textarea");
  return o.value = t, o.contentEditable = "true", o.style.visibility = "none", n.appendChild(o), i.selectNodeContents(o), null == l || l.removeAllRanges(), null == l || l.addRange(i), o.focus(), o.setSelectionRange(0, t.length), e = document.execCommand("copy"), n.removeChild(o), e
}