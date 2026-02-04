/** Chunk was on 59275 **/
/** chunk id: 338769, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => p,
  Z: () => g
});
var r, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk773669 = require("./773669.js"),
  Chunk248352 = require("./248352.js"),
  Chunk797490 = require("./797490.js"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  g = ((r = {})[r.COUNTDOWN = 0] = "COUNTDOWN", r);

function p(e, t) {
  let n = (0, s.bG)([i.A], () => i.A.getUserDiscount(u.tU)),
    r = (0, s.bG)([a.default], () => a.default.locale),
    g = (0, o.$)(t);
  if (l.useMemo(() => null != n && g && e !== c.G2.ORBS, [n, g, e])) {
    let e = null != n && null != n.expiresAt ? new Date(n.expiresAt).toLocaleDateString(r, {
      day: "numeric",
      month: "numeric"
    }) : true;
    return {
      type: 0,
      countdownEndDate: null == n ? true : n.expiresAt,
      message: d.intl.format(d.t.RCo9MF, {
        date: e
      })
    }
  }
}