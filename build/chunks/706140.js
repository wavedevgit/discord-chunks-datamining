/** Chunk was on web.js **/
/** chunk id: 706140, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  EM: () => T,
  Tt: () => C,
  cv: () => v,
  sx: () => N,
  xT: () => A,
  zH: () => P
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk128363 = require("./128363.js"),
  Chunk581883 = require("./581883.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915486 = require("./915486.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk57207 = require("./57207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function y(e, t, n, r) {
  u.default.track(E.rMx.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
    content_type: a.z[e],
    group_name: null != n ? n : null,
    latest_version: null != r ? r : null,
    guild_id: null != t ? t : null
  })
}

function O(e, t, n, a) {
  let c = (0, _.ZP)(t => null != e && t.currentlyShown.has(e)),
    u = (0, s.xG)(),
    d = (0, o.e7)(null != r ? [r] : [], () => null == r ? true : r.getFocusedPID()),
    f = (0, o.e7)([p.Z], () => null != e && p.Z.hasUserHitDCCap(e, t));
  return i.useEffect(() => {
    if (null != e) return l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) || y(e, t, n, a), (0, h.kk)(e, {
      groupName: n,
      guildId: t,
      version: a
    }, u, d), () => {
      if (null == e) return;
      let t = !p.Z.hasUserHitDCCap();
      (0, _.gE)({
        content: e,
        groupName: n
      }, t)
    }
  }, [e, n, t, f, u, a, d]), c && null != e ? e : null
}

function v(e, t) {
  let n = (0, o.e7)([l.Z], () => {
      var e;
      return null == (e = l.Z.settings.userContent) ? true : e.dismissedContents
    }),
    r = (0, o.e7)([c.Z], () => c.Z.getGuildId()),
    a = (0, g.ig)(e),
    s = null;
  return l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) ? s = a.find(e => null == n || !(0, f.jl)(n, e)) : null != n && (s = a.find(e => !(0, f.jl)(n, e))), [O(s, r, t), i.useCallback((e, n) => {
    null != s && (0, m.Q3)(s, {
      dismissAction: e,
      groupName: t,
      guildId: r,
      forceTrack: n
    })
  }, [s, t, r])]
}
r = require("./808506.js").default;
let S = {};

function I(e) {
  return (0, o.e7)([l.Z], () => {
    var t, n;
    let r = null !== e ? null == (n = l.Z.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e] : null;
    return null != r ? r : S
  })
}

function T(e, t, n) {
  let {
    lastDismissedVersion: r
  } = I(e), a = (0, o.e7)([c.Z], () => c.Z.getGuildId()), s = null;
  if (null != e) {
    let n = !(0, g.Bh)(e);
    l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) ? s = n && (null == r || r < t) ? e : null : null != r && (s = n && r < t ? e : null)
  }
  return [O(s, a, n, t), i.useCallback((e, r) => {
    null != s && (0, h.wH)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: a,
      forceTrack: r,
      version: t
    })
  }, [s, n, a, t])]
}

function C(e, t, n) {
  let {
    lastDismissedAtMs: r,
    numTimesDismissed: a
  } = I(e), s = (0, o.e7)([c.Z], () => c.Z.getGuildId()), l = null;
  return null != e && (l = R(!(0, g.Bh)(e), r, a, t) ? e : null), [O(l, s, n), i.useCallback((e, t) => {
    null != l && (0, h.Ow)(l, {
      dismissAction: e,
      groupName: n,
      guildId: s,
      forceTrack: t
    })
  }, [l, n, s])]
}

function A(e, t, n) {
  let {
    lastDismissedObjectId: r
  } = I(e), a = (0, o.e7)([c.Z], () => c.Z.getGuildId()), s = null;
  if (null != e) {
    let n = !(0, g.Bh)(e);
    l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) ? s = n && (null == r || 1 === d.default.compare(t, r)) ? e : null : null != r && (s = n && 1 === d.default.compare(t, r) ? e : null)
  }
  return [O(s, a, n), i.useCallback((e, r) => {
    null != s && (0, h.JO)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: a,
      forceTrack: r
    })
  }, [s, n, a, t])]
}

function N(e, t, n, r) {
  let a = (0, o.e7)([c.Z], () => c.Z.getGuildId()),
    s = null;
  return null == e || (0, h.UJ)(e, n, t) || (s = e), [O(s, a, r), i.useCallback((e, t) => {
    null != s && (0, h.JO)(s, n, {
      dismissAction: e,
      groupName: r,
      guildId: a,
      forceTrack: t
    })
  }, [s, r, a, n])]
}

function P(e, t, n) {
  let r = (0, o.e7)([l.Z], () => l.Z.getGuildDismissedContentState(t)),
    a = (0, g.ig)(e),
    s = null;
  return l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) ? s = a.find(e => null == r || null == r[e] || false === r[e].dismissed) : null != r && (s = a.find(e => null == r[e] || false === r[e].dismissed)), [O(s, t, n), i.useCallback((e, r) => {
    null != s && (0, m.wE)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: t,
      forceTrack: r
    })
  }, [s, n, t])]
}

function R(e, t, n, r) {
  let i = null != t ? Number.isNaN(Number(t)) ? true : Number(t) : true,
    o = true === i ? 0 : i + r.cooldownDurationMs,
    a = Date.now(),
    s = null == r.showAfterTimestamp || a >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp,
    c = null == i || a >= o,
    u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
  return (l.Z.hasLoaded(b.yP.PRELOADED_USER_SETTINGS) || null != i && null != n) && e && s && c && u
}