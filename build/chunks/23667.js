/** Chunk was on web.js **/
/** chunk id: 23667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk177068 = require("./177068.js"),
  Chunk409037 = require("./409037.js");
class a extends Chunk409037.c {
  create(e) {
    let {
      id: t,
      searchType: n,
      searchQuery: i
    } = e;
    this.cancel(t);
    let a = new r.MS(t, n, i);
    return this.set(t, a), a
  }
}
let s = new a