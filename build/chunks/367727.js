/** Chunk was on web.js **/
/** chunk id: 367727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $l: () => K,
  D4: () => U,
  D8: () => k,
  En: () => D,
  FZ: () => L,
  G4: () => R,
  J8: () => W,
  R2: () => C,
  Sx: () => Y,
  Tg: () => v,
  Uu: () => S,
  Vh: () => F,
  X0: () => B,
  YV: () => V,
  bQ: () => A,
  cN: () => j,
  d6: () => H,
  fb: () => P,
  gG: () => N,
  iC: () => M,
  j6: () => x,
  qr: () => z,
  rZ: () => w,
  rw: () => O,
  ss: () => I,
  uh: () => q,
  wH: () => T
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk73153 = require("./73153.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk105565 = require("./105565.js"),
  Chunk497816 = require("./497816.js"),
  Chunk787925 = require("./787925.js"),
  Chunk541689 = require("./541689.js"),
  Chunk199773 = require("./199773.js"),
  Chunk771781 = require("./771781.js"),
  Chunk256787 = require("./256787.js"),
  Chunk757792 = require("./757792.js"),
  Chunk357186 = require("./357186.js"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js");
let O = 2592e6;

function v(e) {
  var t, n;
  let r = null == (n = s.A.settings.userContent) ? true : n.recurringDismissibleContentStates[e];
  return {
    lastDismissedVersion: (0, m.L0)(e) ? (0, E.c)(e) : 0,
    lastDismissedAtMs: new Date().getTime().toString(),
    lastDismissedObjectId: (0, m.IL)(e) ? c.default.fromTimestamp(Date.now() + O) : "0",
    numTimesDismissed: null != (t = null == r ? true : r.numTimesDismissed) ? t : 0
  }
}

function A(e, t, n) {
  return (0, o.$w)(e, {
    lastDismissedVersion: t,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function I(e, t) {
  return (0, o.$w)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: t
  })
}

function S(e, t, n) {
  return (0, o.$w)(e, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: t,
    numTimesDismissed: n
  })
}

function T(e, t, n) {
  return (0, o.xs)(e, t, {
    dismissed: true,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function C(e, t, n) {
  return (0, o.xs)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function N(e, t, n) {
  return (0, o.xs)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function w(e, t, n) {
  return (0, o.xs)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function R(e, t, n, r) {
  return (0, o.xs)(e, n, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: Date.now().toString(),
    lastDismissedObjectId: t,
    numTimesDismissed: r
  })
}

function P(e, t, n) {
  return (0, o.xs)(e, t, {
    dismissed: false,
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed: n
  })
}

function D(e, t) {
  var n, r;
  if ((0, g.P3)(e)) return {
    isDismissed: true,
    lastDismissedVersion: null
  };
  let i = null == (r = s.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedVersion,
    a = null != t ? t : (0, E.c)(e);
  return {
    isDismissed: null != i && i >= a,
    lastDismissedVersion: i
  }
}

function L(e, t) {
  var n, r;
  if ((0, g.P3)(e)) return {
    isDismissed: true,
    lastDismissedAtMs: null
  };
  let i = null == (r = s.A.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedAtMs,
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

function x(e, t, n) {
  var r, i, a, o;
  if ((0, g.P3)(e)) returntrue;
  let l = null == (i = s.A.settings.userContent) || null == (r = i.recurringDismissibleContentStates[e]) ? true : r.lastDismissedObjectId,
    u = null == (o = s.A.settings.userContent) || null == (a = o.recurringDismissibleContentStates[e]) ? true : a.lastDismissedAtMs,
    d = null != u && "0" !== u ? Number.isNaN(Number(u)) ? true : Number(u) : true,
    f = false;
  if (null != n && null != d) {
    let e = d + n.cooldownDurationMs,
      t = Date.now(),
      r = null == n.showAfterTimestamp || t >= n.showAfterTimestamp && d <= n.showAfterTimestamp;
    f = t < e || !r
  }
  let p = null != l && 1 !== c.default.compare(t, l);
  return f && p
}

function M(e, t) {
  if ((0, g.P3)(e)) returntrue;
  let n = s.A.getGuildDismissedContentState(t);
  return null != n && null != n[e] && true === n[e].dismissed
}

function j(e, t) {
  return (0, r.bG)([s.A], () => M(e, t))
}

function k(e, t) {
  if ((0, g.P3)(e)) returntrue;
  let n = s.A.getGuildDismissedContentState(t);
  return null != n && null != n[e] && null != n[e].lastDismissedAtMs && "0" !== n[e].lastDismissedAtMs
}

function U(e, t) {
  if ((0, g.P3)(e)) returntrue;
  let n = s.A.getGuildDismissedContentState(t);
  return null != n && null != n[e] && null != n[e].lastDismissedObjectId && "0" !== n[e].lastDismissedObjectId
}
let G = new Set([Chunk554146.M.ACCOUNT_LINK_INVITE_FRIENDS, Chunk554146.M.POST_ACCOUNT_CONNECTION_RTC_POPOVER, Chunk554146.M.ACCOUNT_LINK_PROMPT]);

function F(e, t, n, r) {
  if ((0, h.dD)(e) || _.A.hasUserHitDCCap(e, null == t ? true : t.guildId)) return;
  let o = d.A.getConfig({
    location: "requestMarkDismissibleContentAsShown"
  }).enabled && null == r && G.has(e);
  (!n || o) && (a.h.dispatch({
    type: "DCF_EVENT_LOGGED",
    eventType: u.r.DC_SHOW_REQUEST,
    dismissibleContent: e
  }), (0, h.oo)({
    content: e,
    groupName: null == t ? true : t.groupName,
    onAdded: () => {
      var n;
      let [r, a] = (0, h.oF)();
      (0, p.rF)(e, null == t ? true : t.guildId), l.default.track(b.HAw.DISMISSIBLE_CONTENT_SHOWN, {
        type: i.M[e],
        content_count: r,
        fatigable_content_count: a,
        group_name: null == t ? true : t.groupName,
        bypass_fatigue: f.C.has(e),
        guild_id: null == t ? true : t.guildId,
        version: null == t ? true : t.version
      }), null == t || null == (n = t.onShown) || n.call(t)
    }
  }))
}

function V(e, t) {
  ((0, h.dD)(e) || t.forceTrack) && Z(e, t), (0, p.Xw)(e)
}

function B(e, t) {
  let n = !_.A.hasUserHitDCCap();
  (0, h.pd)({
    content: e,
    groupName: null == t ? true : t.groupName
  }, n)
}
async function H(e, t) {
  let n = (0, E.c)(e);
  await K(e, n, t)
}

function Y(e, t) {
  var n, r;
  let i = null == (r = s.A.getGuildDismissedContentState(t)) ? true : r[e];
  return (null != (n = null == i ? true : i.numTimesDismissed) ? n : 0) + 1
}

function W(e, t) {
  var n, r;
  if (null != t.numTimesDismissed) return t.numTimesDismissed;
  let i = null == (r = s.A.settings.userContent) ? true : r.recurringDismissibleContentStates[e];
  return (null != (n = null == i ? true : i.numTimesDismissed) ? n : 0) + 1
}
async function K(e, t, n) {
  let r = W(e, n);
  V(e, n), await A(e, t, r), B(e, n)
}
async function z(e, t, n) {
  let r = W(e, n);
  V(e, n), await S(e, t, r), B(e, n)
}
async function q(e, t) {
  let n = W(e, t);
  V(e, t), await I(e, n), B(e, t)
}

function Z(e, t) {
  var n;
  let [r] = (0, h.oF)(), a = _.A.getRenderedAtTimestamp(e), o = new Date, s = null == a ? null : o.getTime() - a, c = (null == t ? true : t.guildId) != null ? Y(e, t.guildId) : W(e, null != t ? t : {});
  l.default.track(b.HAw.DISMISSIBLE_CONTENT_DISMISSED, {
    type: i.M[e],
    action: null != (n = null == t ? true : t.dismissAction) ? n : y.i.UNKNOWN,
    content_count: r,
    group_name: null == t ? true : t.groupName,
    bypass_fatigue: f.C.has(e),
    guild_id: null == t ? true : t.guildId,
    shown_duration: s,
    version: null == t ? true : t.version,
    num_times_dismissed: c
  })
}