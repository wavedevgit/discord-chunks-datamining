/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => K
}), n(47120);
var r = n(392711),
  i = n(126313),
  o = n(570140),
  a = n(147913),
  s = n(539746),
  l = n(38618),
  c = n(86071),
  u = n(32300),
  d = n(456644),
  f = n(553795),
  p = n(517100),
  _ = n(451478),
  h = n(70956),
  m = n(162461),
  g = n(564990),
  E = n(71585),
  v = n(146282),
  b = n(206583),
  y = n(981631);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = 4,
  I = 2 * h.Z.Millis.MINUTE,
  T = b.YN.GLOBAL_FEED,
  N = 15 * h.Z.Millis.MINUTE,
  A = new Map,
  C = new Set,
  R = new Map,
  P = null,
  D = (0, r.debounce)(g.yK, 3e3, {
    trailing: !0
  });

function w() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
  return Math.random() * (e + 1) * I
}

function L(e, t) {
  o.Z.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: e,
    state: t
  })
}

function x(e) {
  if (C.has(e) || e === b.YN.GAME_PROFILE_FEED && (!(0, s._J)("ContentInventoryManager") || void 0 !== v.Z.getFeed(e))) return !1;
  if (e === T) {
    if (!(0, m.sA)("ContentInventoryManager") || E.Z.hidden && null != v.Z.getFeed(e) || !_.Z.isFocused() || !l.Z.isConnected()) return !1;
    let t = p.Z.getIdleSince();
    if (null != t && Date.now() - t > N) return !1
  }
  return !0
}

function M(e) {
  L(e, {
    loading: !1
  });
  let t = A.get(e);
  void 0 !== t && (clearTimeout(t), A.delete(e))
}

function j() {
  var e;
  let t = null !== (e = R.get(T)) && void 0 !== e ? e : 0;
  if (t > 0 && t <= S || (M(T), !x(T))) return;
  let n = v.Z.getFeed(T);
  if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == P) return;
  let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
    o = Math.max(0, null == P ? 0 : new Date(P).getTime() - Date.now(), r) + (t > 0 ? w() : 0);
  L(T, {
    loading: !1,
    nextFetchDate: new Date(Date.now() + o)
  }), A.set(T, setTimeout(() => k({
    feedId: T,
    feature: i.L.INBOX
  }), o))
}
async function k(e) {
  let {
    feedId: t,
    feature: n,
    force: r = !1
  } = e;
  if (x(t) || r) try {
    let e = v.Z.getFeed(t);
    C.add(t), L(t, {
      loading: !0
    });
    let r = await (0, g.mt)({
      token: null == e ? void 0 : e.refresh_token,
      feedId: t,
      feature: n
    });
    o.Z.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: t,
      feed: r
    }), R.set(t, 0), C.delete(t), L(t, {
      loading: !1
    }), t === T && (P = null, j())
  } catch (a) {
    var i;
    let e = null !== (i = R.get(t)) && void 0 !== i ? i : 0;
    if (e < S) {
      let i = h.Z.Millis.MINUTE * Math.pow(2, e) + w(e);
      A.set(t, setTimeout(() => k({
        feedId: t,
        feature: n,
        force: r
      }), i)), R.set(t, e + 1)
    } else o.Z.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: t
    });
    C.delete(t)
  }
}

function U() {
  j()
}

function G() {
  U();
  let {
    recentActivityEnabled: e
  } = (0, d.G)({
    location: "ContentInventoryManager",
    autoTrackExposure: !1
  });
  e && k({
    feedId: b.YN.GAME_PROFILE_FEED,
    feature: i.L.RECENT_ACTIVITY
  })
}

function B() {
  M(T)
}

function F(e) {
  let {
    feedId: t,
    feature: n
  } = e;
  M(t), k({
    feedId: t,
    feature: n,
    force: !0
  })
}

function V(e) {
  let {
    refreshAfterMs: t
  } = e, n = v.Z.getFeed(T);
  (null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && (P = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), j())
}

function Z(e) {
  var t;
  let {
    connectionId: n,
    track: r
  } = e;
  null != n && (null === (t = f.Z.getAccount(n, y.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && D(n, r)
}

function H() {
  let {
    enabled: e
  } = m.iC.getCurrentConfig({
    location: "ContentInventoryManager"
  }, {
    autoTrackExposure: !0
  });
  e && k({
    feedId: b.YN.GAME_PROFILE_FEED,
    feature: i.L.GAME_PROFILE
  })
}

function W() {
  let {
    enabled: e
  } = c.Z.getCurrentConfig({
    location: "ContentInventoryManager"
  }, {
    autoTrackExposure: !0
  }), t = (0, u.Rb)("ContentInventoryManager").allowActivityWidget;
  (e || t) && k({
    feedId: b.YN.GAME_PROFILE_FEED,
    feature: i.L.OVERLAY_INVITES
  })
}
class Y extends a.Z {
  constructor(...e) {
    super(...e), O(this, "actions", {
      POST_CONNECTION_OPEN: G,
      CONNECTION_CLOSED: B,
      WINDOW_FOCUS: U,
      IDLE: U,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: U,
      CONTENT_INVENTORY_MANUAL_REFRESH: F,
      CONTENT_INVENTORY_INBOX_STALE: V,
      SPOTIFY_NEW_TRACK: Z,
      GAME_PROFILE_OPEN: H,
      OVERLAY_READY: W
    })
  }
}
let K = new Y