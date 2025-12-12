/** Chunk was on web.js **/
/** chunk id: 232616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk335218 = require("./335218.js"),
  o = require.n(Chunk335218),
  a = {};

function s(e, t) {
  true === t && (t = o());
  var n = (0, r.useRef)(a),
    i = n.current;
  return (0, r.useEffect)(function() {
    n.current = i
  }), n.current !== a && t(e, n.current) || (i = e), i
}