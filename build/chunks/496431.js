/** Chunk was on web.js **/
/** chunk id: 496431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk27867 = require("./27867.js"),
  Chunk405269 = require("./405269.js"),
  Chunk396583 = require("./396583.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1e3,
    n = arguments.length > 2 ? arguments[2] : true,
    s = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = (0, a.Tf)(Date.now(), e),
    c = (0, i.A)(),
    u = (0, r.useCallback)(() => {
      let t = (0, a.Tf)(Date.now(), e);
      0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds || s || (c(), null == n || n())
    }, [e, s, c, n]);
  return (0, o.A)(u, s ? null : t), l
}