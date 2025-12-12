/** Chunk was on web.js **/
/** chunk id: 232616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk335218 = require("./335218.js"),
  a = require.n(Chunk335218),
  o = {};

function s(e, t) {
  true === t && (t = a());
  var n = (0, r.useRef)(o),
    i = n.current;
  return (0, r.useEffect)(function() {
    n.current = i
  }), n.current !== o && t(e, n.current) || (i = e), i
}