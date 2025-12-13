/** Chunk was on 92504 **/
/** chunk id: 660384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk706619 = require("./706619.js");
class r {
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
    }(this, "top", new Chunk706619.SpringValue(0))
  }
}