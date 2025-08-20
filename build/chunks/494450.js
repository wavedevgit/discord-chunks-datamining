/** Chunk was on web.js **/
/** chunk id: 494450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js");

function o(e) {
  return (0, r.e7)([a.Z], () => {
    var t;
    let n, r = null != e ? a.Z.getUserProfile(e) : null,
      o = null == r ? true : r.premiumSince;
    return null == r || null == o ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
      let t = (0, i.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}