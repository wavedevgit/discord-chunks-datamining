/** Chunk was on 64271 **/
/** chunk id: 993609, original params: e,t,n (module,exports,require) **/
function r(e, t) {
  return "".concat(e, ":").concat(t)
}
require.d(exports, {
  z: () => i
}), require("./388685.js");
let i = (0, require("./663042.js").U)((e, t) => ({
  openMenus: new Set,
  isMenuOpenForMessage: e => Array.from(t().openMenus).some(t => null != e && t.startsWith("".concat(e, ":"))),
  openMenu: (t, n) => {
    let i = r(t, n);
    e(e => {
      let t = new Set(e.openMenus);
      return t.add(i), {
        openMenus: t
      }
    })
  },
  closeMenu: (t, n) => {
    let i = r(t, n);
    e(e => {
      let t = new Set(e.openMenus);
      return t.delete(i), {
        openMenus: t
      }
    })
  }
}))