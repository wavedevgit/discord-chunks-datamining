/** Chunk was on web.js **/
/** chunk id: 160761, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Bo: () => T,
  DP: () => v,
  Uq: () => w,
  Vu: () => C,
  _L: () => R,
  eE: () => S,
  hI: () => N
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk590209 = require("./590209.js"),
  Chunk617617 = require("./617617.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk460288 = require("./460288.js"),
  Chunk199773 = require("./199773.js"),
  Chunk771781 = require("./771781.js"),
  Chunk826673 = require("./826673.js"),
  Chunk367727 = require("./367727.js"),
  Chunk757792 = require("./757792.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function b(e, t, n, r) {
  u.default.track(E.HAw.DISMISSIBLE_CONTENT_SHOWN_BEFORE_CONNECTION_OPEN, {
    content_type: o.M[e],
    group_name: null != n ? n : null,
    latest_version: null != r ? r : null,
    guild_id: null != t ? t : null
  })
}

function O(e, t, n, o) {
  let c = (0, _.Ay)(t => null != e && t.currentlyShown.has(e)),
    u = (0, s.yq)(),
    d = (0, a.bG)(null != r ? [r] : [], () => null == r ? true : r.getFocusedPID()),
    f = (0, a.bG)([p.A], () => null != e && p.A.hasUserHitDCCap(e, t));
  return i.useEffect(() => {
    if (null != e) return l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) || b(e, t, n, o), (0, m.Vh)(e, {
      groupName: n,
      guildId: t,
      version: o
    }, u, d), () => {
      if (null == e) return;
      let t = !p.A.hasUserHitDCCap();
      (0, _.pd)({
        content: e,
        groupName: n
      }, t)
    }
  }, [e, n, t, f, u, o, d]), c && null != e ? e : null
}

function v(e, t) {
  let n = (0, a.bG)([l.A], () => {
      var e;
      return null == (e = l.A.settings.userContent) ? true : e.dismissedContents
    }),
    r = (0, a.bG)([c.A], () => c.A.getGuildId()),
    o = (0, g.Sg)(e),
    s = null;
  return l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ? s = o.find(e => null == n || !(0, f.c0)(n, e)) : null != n && (s = o.find(e => !(0, f.c0)(n, e))), [O(s, r, t), i.useCallback((e, n) => {
    null != s && (0, h.Dr)(s, {
      dismissAction: e,
      groupName: t,
      guildId: r,
      forceTrack: n
    })
  }, [s, t, r])]
}
r = require("./242286.js").default;
let A = {};

function I(e) {
  return (0, a.bG)([l.A], () => {
    var t, n;
    let r = null !== e ? null == (n = l.A.settings.userContent) || null == (t = n.recurringDismissibleContentStates) ? true : t[e] : null;
    return null != r ? r : A
  })
}

function S(e, t, n) {
  let {
    lastDismissedVersion: r
  } = I(e), o = (0, a.bG)([c.A], () => c.A.getGuildId()), s = null;
  if (null != e) {
    let n = !(0, g.P3)(e);
    l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ? s = n && (null == r || r < t) ? e : null : null != r && (s = n && r < t ? e : null)
  }
  return [O(s, o, n, t), i.useCallback((e, r) => {
    null != s && (0, m.$l)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: o,
      forceTrack: r,
      version: t
    })
  }, [s, n, o, t])]
}

function T(e, t, n) {
  let {
    lastDismissedAtMs: r,
    numTimesDismissed: o
  } = I(e), s = (0, a.bG)([c.A], () => c.A.getGuildId()), l = null;
  return null != e && (l = P(!(0, g.P3)(e), r, o, t) ? e : null), [O(l, s, n), i.useCallback((e, t) => {
    null != l && (0, m.uh)(l, {
      dismissAction: e,
      groupName: n,
      guildId: s,
      forceTrack: t
    })
  }, [l, n, s])]
}

function C(e, t, n) {
  let {
    lastDismissedObjectId: r
  } = I(e), o = (0, a.bG)([c.A], () => c.A.getGuildId()), s = null;
  if (null != e) {
    let n = !(0, g.P3)(e);
    l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ? s = n && (null == r || 1 === d.default.compare(t, r)) ? e : null : null != r && (s = n && 1 === d.default.compare(t, r) ? e : null)
  }
  return [O(s, o, n), i.useCallback((e, r) => {
    null != s && (0, m.qr)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: o,
      forceTrack: r
    })
  }, [s, n, o, t])]
}

function N(e, t, n, r) {
  let o = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(n)),
    s = null != e ? null == o ? null : null == o ? true : o[e] : null,
    c = null == s ? true : s.lastDismissedObjectId,
    u = null;
  if (null != e) {
    let n = !(0, g.P3)(e);
    l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ? u = n && (null == c || 1 === d.default.compare(t, c)) ? e : null : null != c && (u = n && 1 === d.default.compare(t, c) ? e : null)
  }
  return [O(u, n, r), i.useCallback((e, i) => {
    null != u && (0, h.in)(u, t, n, {
      dismissAction: e,
      groupName: r,
      guildId: n,
      forceTrack: i
    })
  }, [u, r, n, t])]
}

function w(e, t, n, r) {
  let o = (0, a.bG)([c.A], () => c.A.getGuildId()),
    s = null;
  return null == e || (0, m.j6)(e, n, t) || (s = e), [O(s, o, r), i.useCallback((e, t) => {
    null != s && (0, m.qr)(s, n, {
      dismissAction: e,
      groupName: r,
      guildId: o,
      forceTrack: t
    })
  }, [s, r, o, n])]
}

function R(e, t, n) {
  let r = (0, a.bG)([l.A], () => l.A.getGuildDismissedContentState(t)),
    o = (0, g.Sg)(e),
    s = null;
  return l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) ? s = o.find(e => null == r || null == r[e] || false === r[e].dismissed) : null != r && (s = o.find(e => null == r[e] || false === r[e].dismissed)), [O(s, t, n), i.useCallback((e, r) => {
    null != s && (0, h.dX)(s, t, {
      dismissAction: e,
      groupName: n,
      guildId: t,
      forceTrack: r
    })
  }, [s, n, t])]
}

function P(e, t, n, r) {
  let i = null != t ? Number.isNaN(Number(t)) ? true : Number(t) : true,
    a = true === i ? 0 : i + r.cooldownDurationMs,
    o = Date.now(),
    s = null == r.showAfterTimestamp || o >= r.showAfterTimestamp && (null != i ? i : 0) <= r.showAfterTimestamp,
    c = null == i || o >= a,
    u = null == r.numTimesToRecur || 0 === r.numTimesToRecur || null == n || n < r.numTimesToRecur;
  return (l.A.hasLoaded(y.oD.PRELOADED_USER_SETTINGS) || null != i && null != n) && e && s && c && u
}