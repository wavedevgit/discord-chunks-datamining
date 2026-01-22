/** Chunk was on web.js **/
/** chunk id: 215530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk253932 = require("./253932.js"),
  Chunk994500 = require("./994500.js");

function o(e) {
  let t = a.j0.useSetting(),
    {
      isBlocked: n,
      isIgnored: o
    } = (0, i.cf)([s.A], () => ({
      isBlocked: s.A.isBlocked(e),
      isIgnored: s.A.isIgnored(e)
    })),
    [l, c] = (0, r.useState)(n || o);
  return (0, r.useEffect)(() => c(n || o), [n, o]), [l && !(o && t), (0, r.useCallback)(() => {
    c(false)
  }, [])]
}