/** Chunk was on web.js **/
/** chunk id: 753386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J$: () => y,
  WM: () => h,
  cZ: () => E,
  eG: () => _,
  vm: () => g,
  zh: () => m,
  zv: () => f
});
var Chunk544180 = require("./544180.js"),
  Chunk829219 = require("./829219.js"),
  Chunk859703 = require("./859703.js"),
  Chunk405670 = require("./405670.js"),
  Chunk561844 = require("./561844.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t) {
  var n, r;
  (0, l.Ic)(e) || (null == (n = e.userStatus) ? true : n.enrolledAt) == null || (null == (r = e.userStatus) ? true : r.completedAt) != null || (0, i.uI)(e.id, t)
}
let p = "landscape";

function _(e) {
  let t = e.assets.video;
  return null == t || null == t.width || null == t.height ? p : t.width > t.height ? "landscape" : "portrait"
}
let h = e => e.percentComplete > 0 ? d.intl.formatToPlainString(d.t["c59/Tp"], {
  remainTime: (0, c.xm)(e)
}) : d.intl.formatToPlainString(d.t.GNsKiW, {
  remainTime: (0, c.xm)(e)
});

function m(e, t) {
  return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round(e / t * 100) / 100)
}

function g(e) {
  var t, n;
  let {
    questId: i,
    sourceQuestContent: l,
    videoSessionId: c
  } = e, d = o.Ay.getState().getVideoProgress(i);
  if (null == d) return;
  let p = a.A.getQuest(i);
  null != p && (null == (t = p.userStatus) ? true : t.enrolledAt) != null && (null == (n = p.userStatus) ? true : n.completedAt) == null && f(p, d.maxTimestampSec);
  let _ = m(d.maxTimestampSec, d.duration);
  (0, s.av)({
    questId: i,
    event: u.HAw.QUEST_VIDEO_PROGRESSED,
    properties: {
      progress: _,
      video_timestamp_seconds: d.maxTimestampSec,
      video_session_id: c
    },
    sourceQuestContent: l
  }), (0, s.av)({
    questId: i,
    event: u.HAw.QUEST_VIDEO_MODAL_CLOSED,
    properties: {
      video_progress: _,
      video_session_id: c,
      network_connection_speed: r.A.getEffectiveConnectionSpeed()
    },
    sourceQuestContent: l
  })
}

function E(e) {
  return "VIDEO-QUEST-".concat(e)
}

function y(e) {
  return !!(0, c.vv)(e) && (0, n(192308).hasModalOpen)(E(e.id))
}