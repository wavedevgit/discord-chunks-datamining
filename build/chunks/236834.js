/** Chunk was on web.js **/
/** chunk id: 236834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk427157 = require("./427157.js"),
  Chunk994500 = require("./994500.js"),
  Chunk816733 = require("./816733.js"),
  Chunk378135 = require("./378135.js"),
  Chunk788868 = require("./788868.js");

function u() {
  let e = (0, l.k)(c.Dw),
    t = (0, i.bG)([s.A], () => s.A.getReferrer(null == e ? true : e.trial_id)),
    n = (0, i.bG)([o.A], () => null == t || o.A.isBlockedOrIgnored(t.id));
  return r.useMemo(() => n || null == t ? null : new a.A(t), [t, n])
}