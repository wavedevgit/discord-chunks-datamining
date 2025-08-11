/** Chunk was on web.js **/
/** chunk id: 240481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => i
});
var Chunk890465 = require("./890465.js");
class i {
  create(e) {
    let t = this.freeTasks,
      n = t.length ? t.pop() : new r.V(this.onError, e => t[t.length] = e);
    return n.task = e, n
  }
  constructor(e) {
    this.onError = e, this.freeTasks = []
  }
}