/** Chunk was on web.js **/
/** chunk id: 664895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk859141 = require("./859141.js"),
  a = require.n(Chunk859141),
  o = {};

function s(e, t) {
  true === t && (t = a());
  var n = (0, r.useRef)(o),
    i = n.current;
  return (0, r.useEffect)(function() {
    n.current = i
  }), n.current !== o && t(e, n.current) || (i = e), i
}