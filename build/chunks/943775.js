/** Chunk was on 13088 **/
/** chunk id: 943775, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk998218 = require("./998218.js");

function r(t, e) {
  let n = t.getIconSource(e);
  if (null != n && "number" != typeof n) {
    let t;
    if (Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : t = n.uri, null != t) {
      var r;
      return null != (r = l.A.toURLSafe(t)) ? r : true
    }
  }
}