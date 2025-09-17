/** Chunk was on web.js **/
/** chunk id: 605236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bn: () => I,
  Ei: () => N,
  F8: () => v,
  Fo: () => w,
  H4: () => P,
  J0: () => R,
  JO: () => H,
  ME: () => G,
  OA: () => L,
  Ow: () => Y,
  UJ: () => D,
  XM: () => A,
  XY: () => x,
  ZF: () => C,
  bj: () => B,
  kk: () => k,
  mA: () => F,
  oK: () => j,
  po: () => S,
  qN: () => Z,
  u9: () => U,
  wH: () => V,
  wx: () => O,
  z2: () => T
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk713284 = require("./713284.js"),
  Chunk96145 = require("./96145.js"),
  Chunk261376 = require("./261376.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk428967 = require("./428967.js"),
  Chunk57207 = require("./57207.js"),
  Chunk644916 = require("./644916.js"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js");
let O = 2592e6;

function v(e) {
  var t, n;
  let r = null == (t = s.Z.settings.userContent) ? true : t.recurringDismissibleContentStates[e];
  return {
    lastDismissedVersion: (0, m.lg)(e) ? (0, E.t)(e) : 0,
    lastDismissedAtMs: new Date().getTime().toString(),
    lastDismissedObjectId: (0, m.I0)(e) ? c.default.fromTimestamp(Date.now() + O) : "0",
    numTimesDismissed: null != (n = null == r ? true : r.numTimesDismissed) ? n : 0
  }
}

function I(e, t, n) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: t,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function T(e, t) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: t
  })
}

function S(e, t, n) {
  return (0, o.Cd)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: t,
    numTimesDismissed: n
  })
}

function A(e, t, n) {
  return (0, o.m9)(e, t, {
    dismissed: true,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function C(e, t, n) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function N(e, t, n) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function R(e, t, n) {
  return (0, o.m9)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function P(e, t) {
  var n, r;
  if ((0, g.Bh)(e)) return {
    isDismissed: true,
    lastDismissedVersion: null
  };
  let i = null == (r = s.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedVersion,
    a = null != t ? t : (0, E.t)(e);
  return {
    isDismissed: null != i && i >= a,
    lastDismissedVersion: i
  }
}

function w(e, t) {
  var n, r;
  if ((0, g.Bh)(e)) return {
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

function D(e, t, n) {
  var r, i, a, o;
  if ((0, g.Bh)(e)) returntrue;
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

function x(e, t) {
  if ((0, g.Bh)(e)) returntrue;
  let n = s.Z.getGuildDismissedContentState(t);
  return null != n && null != n[e] && true === n[e].dismissed
}

function L(e, t) {
  return (0, r.e7)([s.Z], () => x(e, t))
}

function j(e, t) {
  if ((0, g.Bh)(e)) returntrue;
  let n = s.Z.getGuildDismissedContentState(t);
  return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs
}
let M = new Set([Chunk704215.z.ACCOUNT_LINK_INVITE_FRIENDS, Chunk704215.z.POST_ACCOUNT_CONNECTION_RTC_POPOVER, Chunk704215.z.ACCOUNT_LINK_PROMPT]);

function k(e, t, n, r) {
  if ((0, h.cI)(e) || p.Z.hasUserHitDCCap(e, null == t ? true : t.guildId)) return;
  let o = d.Z.getConfig({
    location: "requestMarkDismissibleContentAsShown"
  }).enabled && null == r && M.has(e);
  (!n || o) && (a.Z.dispatch({
    type: "DCF_EVENT_LOGGED",
    eventType: u.D.DC_SHOW_REQUEST,
    dismissibleContent: e
  }), (0, h.f0)({
    content: e,
    groupName: null == t ? true : t.groupName,
    onAdded: () => {
      var n;
      let [r, a] = (0, h.Aq)();
      (0, _.cm)(e, null == t ? true : t.guildId), l.default.track(y.rMx.DISMISSIBLE_CONTENT_SHOWN, {
        type: i.z[e],
        content_count: r,
        fatigable_content_count: a,
        group_name: null == t ? true : t.groupName,
        bypass_fatigue: f.O.has(e),
        guild_id: null == t ? true : t.guildId,
        version: null == t ? true : t.version
      }), null == t || null == (n = t.onShown) || n.call(t)
    }
  }))
}

function U(e, t) {
  ((0, h.cI)(e) || t.forceTrack) && W(e, t), (0, _.Vr)(e)
}

function G(e, t) {
  let n = !p.Z.hasUserHitDCCap();
  (0, h.gE)({
    content: e,
    groupName: null == t ? true : t.groupName
  }, n)
}
async function B(e, t) {
  let n = (0, E.t)(e);
  await V(e, n, t)
}

function Z(e, t) {
  var n, r;
  let i = null == (n = s.Z.getGuildDismissedContentState(t)) ? true : n[e];
  return (null != (r = null == i ? true : i.numTimesDismissed) ? r : 0) + 1
}

function F(e, t) {
  var n, r;
  if (null != t.numTimesDismissed) return t.numTimesDismissed;
  let i = null == (n = s.Z.settings.userContent) ? true : n.recurringDismissibleContentStates[e];
  return (null != (r = null == i ? true : i.numTimesDismissed) ? r : 0) + 1
}
async function V(e, t, n) {
  let r = F(e, n);
  U(e, n), await I(e, t, r), G(e, n)
}
async function H(e, t, n) {
  let r = F(e, n);
  U(e, n), await S(e, t, r), G(e, n)
}
async function Y(e, t) {
  let n = F(e, t);
  U(e, t), await T(e, n), G(e, t)
}

function W(e, t) {
  var n;
  let [r] = (0, h.Aq)(), a = p.Z.getRenderedAtTimestamp(e), o = new Date, s = null == a ? null : o.getTime() - a, c = (null == t ? true : t.guildId) != null ? Z(e, t.guildId) : F(e, null != t ? t : {});
  l.default.track(y.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.z[e],
    action: null != (n = null == t ? true : t.dismissAction) ? n : b.L.UNKNOWN,
    content_count: r,
    group_name: null == t ? true : t.groupName,
    bypass_fatigue: f.O.has(e),
    guild_id: null == t ? true : t.guildId,
    shown_duration: s,
    version: null == t ? true : t.version,
    num_times_dismissed: c
  })
}