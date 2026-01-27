/** Chunk was on web.js **/
/** chunk id: 754450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk306173 = require("./306173.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");
class o {
  static isBlockedDomain(e) {
    let t = (0, r.xd)() ? (0, r.tR)(e) : null;
    return "" !== t && null !== t && i.default.track(a.HAw.LINK_SECURITY_CHECK_BLOCKED, {
      blocked_domain: t
    }), t
  }
}
let s = o