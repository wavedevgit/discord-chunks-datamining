/** Chunk was on 28636 **/
/** chunk id: 664336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk108531 = require("./108531.js");
class l {
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
      }) : e.top = n
    }(this, 0, new r.SpringValue(0))
  }
}