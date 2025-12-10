/** Chunk was on 7891 **/
/** chunk id: 25007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481369 = require("./481369.js"),
  Chunk944103 = require("./944103.js"),
  Chunk946050 = require("./946050.jsx"),
  Chunk256413 = require("./256413.js"),
  Chunk292853 = require("./292853.jsx"),
  Chunk359565 = require("./359565.jsx"),
  Chunk226027 = require("./226027.js");
let p = Chunk473749.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, r = (0, s.Z)(t), p = (0, l.Z)(), {
    showUnreadsNotice: h,
    clearUnreadsNotice: f
  } = (0, a.Z)(t);
  return t.isArchivedLockedThread() ? (0, i.jsx)(u.s, {
    channel: t,
    narrow: n
  }) : t.isLockedThread() ? (0, i.jsx)(u.q, {
    channel: t,
    narrow: n
  }) : h ? (0, i.jsx)(o.Z, {
    channel: t,
    clearUnreadsNotice: f
  }) : r && p.includes(d.E.OPT_IN_CHANNEL) ? (0, i.jsx)(c.Z, {
    channel: t,
    narrow: n
  }) : null
})