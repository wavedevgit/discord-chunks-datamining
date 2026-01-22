/** Chunk was on web.js **/
/** chunk id: 865645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk444746 = require("./444746.js");

function i(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) returntrue;
  if (n && (0, r.Ng)(n)) {
    var i = t;
    do {
      if (i && e.isSameNode(i)) returntrue;
      i = i.parentNode || i.host
    } while (i)
  }
  returnfalse
}