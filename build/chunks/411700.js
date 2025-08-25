/** Chunk was on web.js **/
/** chunk id: 411700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => c
}), require("./388685.js");
var Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let o = [Chunk981631.evJ.UNAUTHORIZED, Chunk981631.evJ.EMAIL_VERIFICATION_REQUIRED, Chunk981631.evJ.USER_BANNED],
  a = new Set([500, 502, 503, 504]),
  s = new Set([401, 403, 405, 409, 429]),
  l = e => {
    var t;
    if (null == e) returnfalse;
    let n = null == e ? true : e.cause;
    return !!((null == n ? true : n.crossDomain) === true || "status" in e && "number" == typeof e.status && (0 === e.status || a.has(e.status) || s.has(e.status)) || "code" in e && "number" == typeof e.code && o.includes(e.code) || "body" in e && null != e.body && "object" == typeof e.body && "code" in e.body && "number" == typeof(null == (t = e.body) ? true : t.code) && o.includes(e.body.code)) || false
  },
  c = e => {
    null == e || l(e) || r.Z.captureException(e)
  }