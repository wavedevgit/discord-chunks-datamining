/** Chunk was on 89839 **/
/** chunk id: 494450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => i
});
var Chunk442837 = require("./442837.js"),
  Chunk291175 = require("./291175.js"),
  Chunk621853 = require("./621853.js");

function i(e) {
  return (0, l.e7)([r.Z], () => {
    var t;
    let n, l = null != e ? r.Z.getUserProfile(e) : null,
      i = null == l ? true : l.premiumSince;
    return null == l || null == i ? null : (null == l || null == (t = l.badges) || t.forEach(e => {
      let t = (0, a.gn)(e.id);
      null != t && (n = t)
    }), n)
  })
}