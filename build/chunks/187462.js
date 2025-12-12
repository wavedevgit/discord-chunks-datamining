/** Chunk was on web.js **/
/** chunk id: 187462, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk558706 = require("./558706.js"),
  Chunk170216 = require("./170216.js");
class a extends Chunk170216.L {
  create(e) {
    let {
      id: t,
      searchType: n,
      searchQuery: i
    } = e;
    this.cancel(t);
    let a = new r.Yn(t, n, i);
    return this.set(t, a), a
  }
}
let o = new a