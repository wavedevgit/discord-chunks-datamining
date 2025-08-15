/** Chunk was on 48091 **/
/** chunk id: 622545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk388032 = require("./388032.jsx");
let i = ["a", "b", "c", "d"],
  l = e => e;

function a(e, t) {
  let n = {},
    r = Math.min(e.length, i.length);
  for (let l = 0; l < r; ++l) n[i[l]] = (n, r) => t(e[l], r);
  return n
}
class s {
  asString() {
    return this.transformed(l)
  }
  isEmpty() {
    return 0 === this.items.length
  }
  transformed(e) {
    switch (this.items.length) {
      case 0:
        return "";
      case 1:
        return e(this.items[0], "");
      case 2:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_TWO, a(this.items, e));
      case 3:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_THREE, a(this.items, e));
      default:
        return r.intl.format(r.t.GENERIC_FORMATTED_LIST_FOUR, a(this.items, e))
    }
  }
  constructor(e) {
    ! function(e, t, n) {
      t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    }(this, "items", true), this.items = e
  }
}