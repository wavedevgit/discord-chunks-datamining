/** Chunk was on web.js **/
/** chunk id: 601911, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => i
});
var Chunk591759 = require("./591759.js");

function i(e, t) {
  let n = e.getIconSource(t);
  if (null != n && "number" != typeof n) {
    let e;
    if (Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : e = n.uri, null != e) {
      var i;
      return null != (i = r.Z.toURLSafe(e)) ? i : true
    }
  }
}