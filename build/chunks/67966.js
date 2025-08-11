/** Chunk was on web.js **/
/** chunk id: 67966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk882159 = require("./882159.js");

function i(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) returntrue;
  if (n && (0, r.Zq)(n)) {
    var i = t;
    do {
      if (i && e.isSameNode(i)) returntrue;
      i = i.parentNode || i.host
    } while (i)
  }
  returnfalse
}