/** Chunk was on web.js **/
/** chunk id: 753386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J$: () => O,
  WM: () => m,
  Xi: () => E,
  cZ: () => b,
  eG: () => h,
  vm: () => y,
  zh: () => g,
  zv: () => p
});
var Chunk412703 = require("./412703.js"),
  Chunk544180 = require("./544180.js"),
  Chunk829219 = require("./829219.js"),
  Chunk216456 = require("./216456.js"),
  Chunk859703 = require("./859703.js"),
  Chunk405670 = require("./405670.js"),
  Chunk710969 = require("./710969.js"),
  Chunk792620 = require("./792620.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  var n, r;
  (0, c.Ic)(e) || (null == (n = e.userStatus) ? true : n.enrolledAt) == null || (null == (r = e.userStatus) ? true : r.completedAt) != null || (0, a.uI)(e.id, t)
}
let _ = "landscape";

function h(e) {
  let t = e.assets.video;
  return null == t || null == t.width || null == t.height ? _ : t.width > t.height ? "landscape" : "portrait"
}
let m = e => e.percentComplete > 0 ? f.intl.formatToPlainString(f.t["c59/Tp"], {
  remainTime: (0, u.xm)(e)
}) : f.intl.formatToPlainString(f.t.GNsKiW, {
  remainTime: (0, u.xm)(e)
});

function g(e, t) {
  return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round(e / t * 100) / 100)
}

function E(e) {
  var t;
  let n = e.taskConfigV2.tasks[r.n.WATCH_VIDEO],
    i = e.taskConfigV2.tasks[r.n.WATCH_VIDEO_ON_MOBILE];
  return null != n && null != i ? n : null != (t = null != i ? i : n) ? t : null
}

function y(e) {
  var t, n;
  let {
    questId: r,
    sourceQuestContent: a,
    videoSessionId: c
  } = e, u = l.Ay.getState().getVideoProgress(r);
  if (null == u) return;
  let f = o.A.getQuest(r);
  null != f && (null == (t = f.userStatus) ? true : t.enrolledAt) != null && (null == (n = f.userStatus) ? true : n.completedAt) == null && p(f, u.maxTimestampSec);
  let _ = g(u.maxTimestampSec, u.duration);
  (0, s.av)({
    questId: r,
    event: d.HAw.QUEST_VIDEO_PROGRESSED,
    properties: {
      progress: _,
      video_timestamp_seconds: u.maxTimestampSec,
      video_session_id: c
    },
    sourceQuestContent: a
  }), (0, s.av)({
    questId: r,
    event: d.HAw.QUEST_VIDEO_MODAL_CLOSED,
    properties: {
      video_progress: _,
      video_session_id: c,
      network_connection_speed: i.A.getEffectiveConnectionSpeed()
    },
    sourceQuestContent: a
  })
}

function b(e) {
  return "VIDEO-QUEST-".concat(e)
}

function O(e) {
  return !!(0, u.vv)(e) && (0, n(192308).hasModalOpen)(b(e.id))
}