/** Chunk was on web.js **/
/** chunk id: 826383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js");

function o(e, t, n) {
  let o = (0, i.bG)([s.Ay], () => s.Ay.getUserCount(t, n));
  return (0, r.useEffect)(() => {
    null != e && null != t && a.A.getGuildEventUserCounts(e, t, null != n ? [n] : [])
  }, [t, e, n]), o
}