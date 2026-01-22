/** Chunk was on web.js **/
/** chunk id: 416654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk439174 = require("./439174.js"),
  Chunk622543 = require("./622543.js");

function s(e) {
  return (0, r.bG)([a.A], () => {
    var t;
    let n, r = null != e ? a.A.getUserProfile(e) : null,
      s = null == r ? true : r.premiumSince;
    return null == r || null == s ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
      let t = (0, i.cZ)(e.id);
      null != t && (n = t)
    }), n)
  })
}