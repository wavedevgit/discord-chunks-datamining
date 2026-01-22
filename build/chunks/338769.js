/** Chunk was on 59275 **/
/** chunk id: 338769, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => f,
  Z: () => d
});
var n, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk248352 = require("./248352.js"),
  Chunk797490 = require("./797490.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  d = ((n = {})[n.COUNTDOWN = 0] = "COUNTDOWN", n);

function f(e, t) {
  let l = (0, s.bG)([a.A], () => a.A.getUserDiscount(c.tU)),
    n = (0, i.$)(t);
  if (r.useMemo(() => null != l && n && e !== o.G2.ORBS, [l, n, e])) return {
    type: 0,
    countdownEndDate: null == l ? true : l.expiresAt,
    message: u.intl.format(u.t.WfqvDS, {})
  }
}