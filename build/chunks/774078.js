/** Chunk was on web.js **/
/** chunk id: 774078, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk110660 = require("./110660.js"),
  Chunk55935 = require("./55935.js"),
  Chunk745735 = require("./745735.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1e3,
    n = arguments.length > 2 ? arguments[2] : true,
    s = arguments.length > 3 && true !== arguments[3] && arguments[3],
    l = (0, o.TD)(Date.now(), e),
    c = (0, i.Z)(),
    u = (0, r.useCallback)(() => {
      let t = (0, o.TD)(Date.now(), e);
      0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds || s || (c(), null == n || n())
    }, [e, s, c, n]);
  return (0, a.Z)(u, s ? null : t), l
}