/** Chunk was on web.js **/
/** chunk id: 706140, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  EM: () => T,
  Tt: () => S,
  cv: () => O,
  sx: () => A,
  zH: () => C
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk128363 = require("./128363.js"),
  Chunk581883 = require("./581883.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js");
require("./709054.js");
var Chunk915486 = require("./915486.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk57207 = require("./57207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function b(e, t, n, r) {
  u.default.track(g.rMx.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
    content_type: o.z[e],
    group_name: null != n ? n : null,
    latest_version: null != r ? r : null,
    guild_id: null != t ? t : null
  })
}

function y(e, t, n, o) {
  let c = (0, _.ZP)(t => null != e && t.currentlyShown.has(e)),
    u = (0, s.xG)(),
    d = (0, a.e7)(null != r ? [r] : [], () => null == r ? true : r.getFocusedPID()),
    p = (0, a.e7)([f.Z], () => null != e && f.Z.hasUserHitDCCap(e, t));
  return i.useEffect(() => {
    if (null != e) return l.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS) || b(e, t, n, o), (0, h.kk)(e, {
      groupName: n,
      guildId: t,
      version: o
    }, u, d), () => {
      if (null == e) return;
      let t = !f.Z.hasUserHitDCCap();
      (0, _.gE)({
        content: e,
        groupName: n
      }, t)
    }
  }, [e, n, t, p, u, o, d]), c && null != e ? e : null
}

function O(e, t) {
  let n = (0, a.e7)([l.Z], () => {
      var e;
      return null == (e = l.Z.settings.userContent) ? true : e.dismissedContents
    }),
    r = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
    o = (0, m.ig)(e),
    s = null;
  return l.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS) ? s = o.find(e => null == n || !(0, d.jl)(n, e)) : null != n && (s = o.find(e => !(0, d.jl)(n, e))), [y(s, r, t), i.useCallback((e, n) => {
    null != s && (0, p.Q3)(s, {
      dismissAction: e,
      groupName: t,
      guildId: r,
      forceTrack: n
    })
  }, [s, t, r])]
}
r = require("./808506.js").default;
let v = {};

function I(e) {
  return (0, a.e7)([l.Z], () => {
    var t, n;
    let r = null !== e ? null == (n = l.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e] : null;
    return null != r ? r : v
  })
}

function T(e, t, n) {
  let {
    lastDismissedVersion: r
  } = I(e), o = (0, a.e7)([c.Z], () => c.Z.getGuildId()), s = null;
  if (null != e) {
    let n = !(0, m.Bh)(e);
    l.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS) ? s = n && (null == r || r < t) ? e : null : null != r && (s = n && r < t ? e : null)
  }
  return [y(s, o, n, t), i.useCallback((e, r) => {
    null != s && (0, h.wH)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: o,
      forceTrack: r,
      version: t
    })
  }, [s, n, o, t])]
}

function S(e, t, n) {
  let {
    lastDismissedAtMs: r,
    numTimesDismissed: o
  } = I(e), s = (0, a.e7)([c.Z], () => c.Z.getGuildId()), l = null;
  return null != e && (l = N(!(0, m.Bh)(e), r, o, t) ? e : null), [y(l, s, n), i.useCallback((e, t) => {
    null != l && (0, h.Ow)(l, {
      dismissAction: e,
      groupName: n,
      guildId: s,
      forceTrack: t
    })
  }, [l, n, s])]
}

function A(e, t, n, r) {
  let o = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
    s = null;
  return null == e || (0, h.UJ)(e, n, t) || (s = e), [y(s, o, r), i.useCallback((e, t) => {
    null != s && (0, h.JO)(s, n, {
      dismissAction: e,
      groupName: r,
      guildId: o,
      forceTrack: t
    })
  }, [s, r, o, n])]
}

function C(e, t, n) {
  let r = (0, a.e7)([l.Z], () => l.Z.getGuildDismissedContentState(t)),
    o = (0, m.ig)(e),
    s = null;
  return l.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS) ? s = o.find(e => null == r || null == r[e] || false === r[e].dismissed) : null != r && (s = o.find(e => null == r[e] || false === r[e].dismissed)), [y(s, t, n), i.useCallback((e, r) => {
    null != s && (0, p.wE)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: t,
      forceTrack: r
    })
  }, [s, n, t])]
}

function N(e, t, n, r) {
  let i = null != t ? Number.isNaN(Number(t)) ? true : Number(t) : true,
    a = true === i ? 0 : i + r.cooldownDurationMs,
    o = Date.now(),
    s = null == r.showAfterTimestamp || o >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp,
    c = null == i || o >= a,
    u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
  return (l.Z.hasLoaded(E.yP.PRELOADED_USER_SETTINGS) || null != i && null != n) && e && s && c && u
}