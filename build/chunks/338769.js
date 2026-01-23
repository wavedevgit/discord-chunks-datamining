/** Chunk was on 59275 **/
/** chunk id: 338769, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => g,
  Z: () => d
});
var r, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk248352 = require("./248352.js"),
  Chunk797490 = require("./797490.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  d = ((r = {})[r.COUNTDOWN = 0] = "COUNTDOWN", r);

function g(e, t) {
  let n = (0, s.bG)([a.A], () => a.A.getUserDiscount(c.tU)),
    r = (0, i.$)(t);
  if (l.useMemo(() => null != n && r && e !== o.G2.ORBS, [n, r, e])) return {
    type: 0,
    countdownEndDate: null == n ? true : n.expiresAt,
    message: u.intl.format(u.t.WfqvDS, {})
  }
}