/** Chunk was on 74891 **/
/** chunk id: 601911, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  y: () => r
});
var Chunk591759 = require("./591759.js");

function r(t, e) {
  let n = t.getIconSource(e);
  if (null != n && "number" != typeof n) {
    let t;
    if (Array.isArray(n) ? n.length > 0 && (t = n[0].uri) : t = n.uri, null != t) {
      var r;
      return null != (r = i.Z.toURLSafe(t)) ? r : true
    }
  }
}