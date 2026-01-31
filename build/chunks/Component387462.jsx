/** Chunk was on 17534 **/
/** chunk id: 387462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk675171 = require("./675171.js"),
  Chunk750580 = require("./750580.js"),
  Chunk436136 = require("./436136.jsx"),
  Chunk228098 = require("./228098.js"),
  Chunk157259 = require("./157259.jsx"),
  Chunk706847 = require("./706847.jsx"),
  Chunk626360 = require("./626360.js");
let h = Chunk64700.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, l = (0, o.A)(t), h = (0, i.A)(), {
    showUnreadsNotice: p,
    clearUnreadsNotice: g
  } = (0, s.A)(t);
  return t.isArchivedLockedThread() ? (0, r.jsx)(u.p, {
    channel: t,
    narrow: n
  }) : t.isLockedThread() ? (0, r.jsx)(u.z, {
    channel: t,
    narrow: n
  }) : p ? (0, r.jsx)(a.A, {
    channel: t,
    clearUnreadsNotice: g
  }) : l && h.includes(d.i.OPT_IN_CHANNEL) ? (0, r.jsx)(c.A, {
    channel: t,
    narrow: n
  }) : null
})