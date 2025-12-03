/** Chunk was on web.js **/
/** chunk id: 542347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BM: () => O,
  F9: () => h,
  FI: () => p,
  Mo: () => b,
  ZS: () => m,
  bA: () => g,
  u7: () => y,
  z1: () => E
});
var Chunk754700 = require("./754700.js"),
  Chunk866960 = require("./866960.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk184299 = require("./184299.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t) {
  var n, r;
  (0, c.zi)(e) || (null == (n = e.userStatus) ? true : n.enrolledAt) == null || (null == (r = e.userStatus) ? true : r.completedAt) != null || (0, a.cT)(e.id, t)
}
let _ = "landscape";

function m(e) {
  let t = e.assets.video;
  return null == t || null == t.width || null == t.height ? _ : t.width > t.height ? "landscape" : "portrait"
}
let h = e => e.percentComplete > 0 ? f.intl.formatToPlainString(f.t["c59/Tp"], {
  remainTime: (0, u.Ah)(e)
}) : f.intl.formatToPlainString(f.t.GNsKiW, {
  remainTime: (0, u.Ah)(e)
});

function g(e, t) {
  return e <= 0 || t <= 0 ? 0 : e >= t ? 1 : Math.min(1, Math.round(e / t * 100) / 100)
}

function E(e) {
  var t;
  let n = e.taskConfigV2.tasks[r.X.WATCH_VIDEO],
    i = e.taskConfigV2.tasks[r.X.WATCH_VIDEO_ON_MOBILE];
  return null != n && null != i ? n : null != (t = null != i ? i : n) ? t : null
}

function b(e) {
  var t, n;
  let {
    questId: r,
    sourceQuestContent: a,
    videoSessionId: c
  } = e, u = l.ZP.getState().getVideoProgress(r);
  if (null == u) return;
  let f = s.Z.getQuest(r);
  null != f && (null == (t = f.userStatus) ? true : t.enrolledAt) != null && (null == (n = f.userStatus) ? true : n.completedAt) == null && p(f, u.maxTimestampSec);
  let _ = g(u.maxTimestampSec, u.duration);
  (0, o.dA)({
    questId: r,
    event: d.rMx.QUEST_VIDEO_PROGRESSED,
    properties: {
      progress: _,
      video_timestamp_seconds: u.maxTimestampSec,
      video_session_id: c
    },
    sourceQuestContent: a
  }), (0, o.dA)({
    questId: r,
    event: d.rMx.QUEST_VIDEO_MODAL_CLOSED,
    properties: {
      video_progress: _,
      video_session_id: c,
      network_connection_speed: i.Z.getEffectiveConnectionSpeed()
    },
    sourceQuestContent: a
  })
}

function y(e) {
  return "VIDEO-QUEST-".concat(e)
}

function O(e) {
  return !!(0, u.q8)(e) && (0, n(952265).nf)(y(e.id))
}