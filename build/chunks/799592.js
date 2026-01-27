/** Chunk was on 60667 **/
/** chunk id: 799592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => r
});
let r = {
  binds: ["shift+f10"],
  comboKeysBindGlobal: true,
  action() {
    let e = document.activeElement;
    return null != e && e !== document.body && (e.dispatchEvent(new MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: 0,
      clientY: 0
    })), false)
  }
}