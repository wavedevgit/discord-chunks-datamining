/** Chunk was on web.js **/
/** chunk id: 710721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js"),
  Chunk34756 = require("./34756.js"),
  Chunk388032 = require("./388032.jsx");
class s extends Chunk34756.Z {
  _getMessageFromRateLimit(e) {
    let t = e.body.retry_after,
      n = (0, r.TD)(0, t * i.Z.Millis.SECOND);
    return (0, r.QX)(n, {
      days: o.t["iXc/Ib"],
      hours: o.t.WW9P57,
      minutes: o.t.I7rYev
    })
  }
  constructor(e, t) {
    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
  }
}
let l = s