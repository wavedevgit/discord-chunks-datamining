/** Chunk was on 54157 **/
/** chunk id: 187462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk558706 = require("./558706.js"),
  Chunk170216 = require("./170216.js");
class l extends Chunk170216.L {
  create(e) {
    let {
      id: t,
      searchType: n,
      searchQuery: s
    } = e;
    this.cancel(t);
    let l = new r.Yn(t, n, s);
    return this.set(t, l), l
  }
}
let a = new l