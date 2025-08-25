/** Chunk was on web.js **/
/** chunk id: 605236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bn: () => v,
  Ei: () => C,
  F8: () => O,
  Fo: () => P,
  H4: () => R,
  J0: () => N,
  JO: () => B,
  ME: () => M,
  OA: () => x,
  Ow: () => Z,
  UJ: () => w,
  XM: () => S,
  XY: () => D,
  ZF: () => A,
  bj: () => U,
  kk: () => j,
  oK: () => L,
  po: () => T,
  u9: () => k,
  wH: () => G,
  wx: () => y,
  z2: () => I
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk713284 = require("./713284.js"),
  Chunk261376 = require("./261376.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk428967 = require("./428967.js"),
  Chunk57207 = require("./57207.js"),
  Chunk644916 = require("./644916.js"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js");
let y = 2592e6;

function O(e) {
  return {
    lastDismissedVersion: (0, h.lg)(e) ? (0, g.t)(e) : 0,
    lastDismissedAtMs: new Date().getTime().toString(),
    lastDismissedObjectId: (0, h.I0)(e) ? c.default.fromTimestamp(Date.now() + y) : "0"
  }
}

function v(e, t) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: t,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0"
  })
}

function I(e) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0"
  })
}

function T(e, t) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: t
  })
}

function S(e, t) {
  return (0, o.m9)(e, t, {
    dismissed: true,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0"
  })
}

function A(e, t) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0"
  })
}

function C(e, t) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0"
  })
}

function N(e, t) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0"
  })
}

function R(e, t) {
  var n, r;
  if ((0, m.Bh)(e)) return {
    isDismissed: true,
    lastDismissedVersion: null
  };
  let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedVersion,
    a = null != t ? t : (0, g.t)(e);
  return {
    isDismissed: null != i && i >= a,
    lastDismissedVersion: i
  }
}

function P(e, t) {
  var n, r;
  if ((0, m.Bh)(e)) return {
    isDismissed: true,
    lastDismissedAtMs: null
  };
  let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedAtMs,
    a = null != i && "0" !== i ? Number.isNaN(Number(i)) ? true : Number(i) : true;
  if (true === a) return {
    isDismissed: false,
    lastDismissedAtMs: true
  };
  let o = true;
  if (null != t) {
    let e = a + t.cooldownDurationMs,
      n = Date.now(),
      r = null == t.showAfterTimestamp || n >= t.showAfterTimestamp && a <= t.showAfterTimestamp;
    o = n < e || !r
  }
  return {
    isDismissed: o,
    lastDismissedAtMs: a
  }
}

function w(e, t, n) {
  var r, i, a, o;
  if ((0, m.Bh)(e)) returntrue;
  let l = null == (i = s.Z.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e]) ? true : r.lastDismissedObjectId,
    u = null == (o = s.Z.settings.userContent) || null == (a = o.recurringDismissibleContentStates[e]) ? true : a.lastDismissedAtMs,
    d = null != u && "0" !== u ? Number.isNaN(Number(u)) ? true : Number(u) : true,
    f = false;
  if (null != n && null != d) {
    let e = d + n.cooldownDurationMs,
      t = Date.now(),
      r = null == n.showAfterTimestamp || t >= n.showAfterTimestamp && d <= n.showAfterTimestamp;
    f = t < e || !r
  }
  let _ = null != l && 1 !== c.default.compare(t, l);
  return f && _
}

function D(e, t) {
  if ((0, m.Bh)(e)) returntrue;
  let n = s.Z.getGuildDismissedContentState(t);
  return null != n && null != n[e] && true === n[e].dismissed
}

function x(e, t) {
  return (0, r.e7)([s.Z], () => D(e, t))
}

function L(e, t) {
  if ((0, m.Bh)(e)) returntrue;
  let n = s.Z.getGuildDismissedContentState(t);
  return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs
}

function j(e, t, n) {
  !((0, p.cI)(e) || _.Z.hasUserHitDCCap(e, null == t ? true : t.guildId)) && (n || (a.Z.dispatch({
    type: "DCF_EVENT_LOGGED",
    eventType: u.D.DC_SHOW_REQUEST,
    dismissibleContent: e
  }), (0, p.f0)({
    content: e,
    groupName: null == t ? true : t.groupName,
    onAdded: () => {
      var n;
      let [r, a] = (0, p.Aq)();
      (0, f.cm)(e, null == t ? true : t.guildId), l.default.track(b.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: i.z[e],
        content_count: r,
        fatigable_content_count: a,
        group_name: null == t ? true : t.groupName,
        bypass_fatigue: d.O.has(e),
        guild_id: null == t ? true : t.guildId,
        version: null == t ? true : t.version
      }), null == t || null == (n = t.onShown) || n.call(t)
    }
  })))
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  ((0, p.cI)(e) || t.forceTrack) && V(e, t), (0, f.Vr)(e)
}

function M(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = !_.Z.hasUserHitDCCap();
  (0, p.gE)({
    content: e,
    groupName: null == t ? true : t.groupName
  }, n)
}
async function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    n = (0, g.t)(e);
  await G(e, n, t)
}
async function G(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  k(e, n), await v(e, t), M(e, n)
}
async function B(e, t, n) {
  k(e, n), await T(e, t), M(e, n)
}
async function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  k(e, t), await I(e), M(e, t)
}

function V(e, t) {
  var n;
  let [r] = (0, p.Aq)(), a = _.Z.getRenderedAtTimestamp(e), o = new Date, s = null == a ? null : o.getTime() - a;
  l.default.track(b.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.z[e],
    action: null != (n = null == t ? true : t.dismissAction) ? n : E.L.UNKNOWN,
    content_count: r,
    group_name: null == t ? true : t.groupName,
    bypass_fatigue: d.O.has(e),
    guild_id: null == t ? true : t.guildId,
    shown_duration: s,
    version: null == t ? true : t.version
  })
}