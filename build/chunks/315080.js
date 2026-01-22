/** Chunk was on web.js **/
/** chunk id: 315080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk829070 = require("./829070.js");
class i {
  create(e) {
    let t = this.freeTasks,
      n = t.length ? t.pop() : new r.a(this.onError, e => t[t.length] = e);
    return n.task = e, n
  }
  constructor(e) {
    this.onError = e, this.freeTasks = []
  }
}