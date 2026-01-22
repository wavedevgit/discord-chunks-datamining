/** Chunk was on web.js **/
/** chunk id: 278809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js"),
  Chunk178253 = require("./178253.js"),
  Chunk985018 = require("./985018.jsx");
class o extends Chunk178253.A {
  _getMessageFromRateLimit(e) {
    let t = e.body.retry_after,
      n = (0, r.Tf)(0, t * i.A.Millis.SECOND);
    return (0, r.uN)(n, {
      days: s.t["iXc/Ib"],
      hours: s.t.WW9P57,
      minutes: s.t.I7rYev
    })
  }
  constructor(e, t) {
    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
  }
}
let l = o