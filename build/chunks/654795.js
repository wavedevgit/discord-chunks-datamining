/** Chunk was on 1113 **/
/** chunk id: 654795, original params: e,t,n (module,exports,require) **/
function r(e, t) {
  return "".concat(e, ":").concat(t)
}
require.d(exports, {
  s: () => l
}), require("./896048.js");
let l = (0, require("./353640.js").v)((e, t) => ({
  openMenus: new Set,
  isMenuOpenForMessage: e => Array.from(t().openMenus).some(t => null != e && t.startsWith("".concat(e, ":"))),
  openMenu: (t, n) => {
    let l = r(t, n);
    e(e => {
      let t = new Set(e.openMenus);
      return t.add(l), {
        openMenus: t
      }
    })
  },
  closeMenu: (t, n) => {
    let l = r(t, n);
    e(e => {
      let t = new Set(e.openMenus);
      return t.delete(l), {
        openMenus: t
      }
    })
  }
}))