/** Chunk was on 84283 **/
/** chunk id: 660384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk258536 = require("./258536.js");
class a {
  handleScroll(e) {
    this.top.set(e.currentTarget.scrollTop)
  }
  get scrollPosition() {
    return this.top
  }
  constructor() {
    ! function(e, t, n) {
      "top" in e ? Object.defineProperty(e, "top", {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    }(this, "top", new Chunk258536.SpringValue(0))
  }
}