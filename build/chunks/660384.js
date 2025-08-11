/** Chunk was on 88934 **/
/** chunk id: 660384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk126663 = require("./126663.js");
class a {
  handleScroll(e) {
    this.top.set(e.currentTarget.scrollTop)
  }
  get scrollPosition() {
    return this.top
  }
  constructor() {
    var e;
    e = new Chunk126663.SpringValue(0), "top" in this ? Object.defineProperty(this, "top", {
      value: module,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this.top = module
  }
}