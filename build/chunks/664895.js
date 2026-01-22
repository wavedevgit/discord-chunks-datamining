/** Chunk was on web.js **/
/** chunk id: 664895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk859141 = require("./859141.js"),
  a = require.n(Chunk859141),
  s = {};

function o(e, t) {
  true === t && (t = a());
  var n = (0, r.useRef)(s),
    i = n.current;
  return (0, r.useEffect)(function() {
    n.current = i
  }), n.current !== s && t(e, n.current) || (i = e), i
}