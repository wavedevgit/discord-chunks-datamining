/** Chunk was on 89839 **/
/** chunk id: 494450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => i
});
var Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js");

function i(e) {
  return (0, r.e7)([a.Z], () => {
    var t;
    let n, r = null != e ? a.Z.getUserProfile(e) : null,
      i = null == r ? true : r.premiumSince;
    return null == r || null == i ? null : (null == r || null == (t = r.badges) || t.forEach(e => {
      let t = (0, l.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}