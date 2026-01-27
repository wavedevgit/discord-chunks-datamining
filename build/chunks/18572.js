/** Chunk was on web.js **/
/** chunk id: 18572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => c
}), require("./896048.js");
var Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");
let a = [Chunk652215.t02.UNAUTHORIZED, Chunk652215.t02.EMAIL_VERIFICATION_REQUIRED, Chunk652215.t02.USER_BANNED],
  o = new Set([500, 502, 503, 504]),
  s = new Set([401, 403, 405, 409, 429]),
  l = e => {
    var t;
    if (null == e) returnfalse;
    let n = null == e ? true : e.cause;
    return !!((null == n ? true : n.crossDomain) === true || "status" in e && "number" == typeof e.status && (0 === e.status || o.has(e.status) || s.has(e.status)) || "code" in e && "number" == typeof e.code && a.includes(e.code) || "body" in e && null != e.body && "object" == typeof e.body && "code" in e.body && "number" == typeof(null == (t = e.body) ? true : t.code) && a.includes(e.body.code)) || false
  },
  c = e => {
    null == e || l(e) || r.A.captureException(e)
  }