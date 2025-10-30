/** Chunk was on 13873 **/
/** chunk id: 25007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481369 = require("./481369.js"),
  Chunk944103 = require("./944103.js"),
  Chunk946050 = require("./946050.jsx"),
  Chunk256413 = require("./256413.js"),
  Chunk292853 = require("./292853.jsx"),
  Chunk359565 = require("./359565.jsx"),
  Chunk226027 = require("./226027.js");
let p = Chunk647438.memo(function(e) {
  let {
    channel: t,
    narrow: n
  } = e, i = (0, s.Z)(t), p = (0, l.Z)(), {
    showUnreadsNotice: f,
    clearUnreadsNotice: h
  } = (0, a.Z)(t);
  return t.isArchivedLockedThread() ? (0, r.jsx)(u.s, {
    channel: t,
    narrow: n
  }) : t.isLockedThread() ? (0, r.jsx)(u.q, {
    channel: t,
    narrow: n
  }) : f ? (0, r.jsx)(o.Z, {
    channel: t,
    clearUnreadsNotice: h
  }) : i && p.includes(d.E.OPT_IN_CHANNEL) ? (0, r.jsx)(c.Z, {
    channel: t,
    narrow: n
  }) : null
})