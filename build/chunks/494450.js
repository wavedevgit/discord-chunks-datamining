/** Chunk was on web.js **/
/** chunk id: 494450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
});
var Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js");

function a(e) {
  return (0, r.e7)([o.Z], () => {
    var t;
    let n, r = null != e ? o.Z.getUserProfile(e) : null,
      a = null == r ? true : r.premiumSince;
    return null == r || null == a ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
      let t = (0, i.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}