/** Chunk was on web.js **/
/** chunk id: 139674, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk668757 = require("./668757.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
class o {
  static isBlockedDomain(e) {
    let t = (0, r.X6)() ? (0, r.PJ)(e) : null;
    return "" !== t && null !== t && i.default.track(a.rMx.LINK_SECURITY_CHECK_BLOCKED, {
      blocked_domain: t
    }), t
  }
}
let s = o