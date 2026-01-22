/** Chunk was on web.js **/
/** chunk id: 819235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk306264 = require("./306264.js"),
  Chunk73153 = require("./73153.js"),
  Chunk439372 = require("./439372.js"),
  Chunk658160 = require("./658160.js"),
  Chunk142120 = require("./142120.js"),
  Chunk962173 = require("./962173.js"),
  Chunk885576 = require("./885576.js"),
  Chunk531685 = require("./531685.js"),
  Chunk927813 = require("./927813.js"),
  Chunk99066 = require("./99066.js"),
  Chunk86070 = require("./86070.js"),
  Chunk435738 = require("./435738.js"),
  Chunk99753 = require("./99753.js"),
  Chunk424994 = require("./424994.js"),
  Chunk652215 = require("./652215.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 4,
  O = 2 * Chunk927813.A.Millis.MINUTE,
  A = Chunk424994.X1.GLOBAL_FEED,
  v = 15 * Chunk927813.A.Millis.MINUTE,
  S = new Map,
  I = new Set,
  T = new Map,
  C = null,
  N = (0, Chunk735438.debounce)(Chunk86070.Q1, 3e3, {
    trailing: true
  });

function R() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
  return Math.random() * (e + 1) * O
}

function w(e, t) {
  a.h.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: e,
    state: t
  })
}

function P(e) {
  if (I.has(e) || e === g.X1.GAME_PROFILE_FEED && (!(0, o.L0)("ContentInventoryManager") || true !== m.A.getFeed(e))) returnfalse;
  if (e === A) {
    if (!(0, p.VS)("ContentInventoryManager") || h.A.hidden && null != m.A.getFeed(e) || !d.A.isFocused() || !l.A.isConnected()) returnfalse;
    let t = u.A.getIdleSince();
    if (null != t && Date.now() - t > v) returnfalse
  }
  returntrue
}

function D(e) {
  w(e, {
    loading: false
  });
  let t = S.get(e);
  true !== t && (clearTimeout(t), S.delete(e))
}

function x() {
  var e;
  let t = null != (e = T.get(A)) ? e : 0;
  if (t > 0 && t <= y || (D(A), !P(A))) return;
  let n = m.A.getFeed(A);
  if ((null == n ? true : n.refresh_stale_inbox_after_ms) != null && null == C) return;
  let r = (null == n ? true : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
    a = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), r) + (t > 0 ? R() : 0);
  w(A, {
    loading: false,
    nextFetchDate: new Date(Date.now() + a)
  }), S.set(A, setTimeout(() => L({
    feedId: A,
    feature: i.M.INBOX
  }), a))
}
async function L(e) {
  let {
    feedId: t,
    feature: n,
    force: r = false
  } = e;
  if (P(t) || r) try {
    let e = m.A.getFeed(t);
    I.add(t), w(t, {
      loading: true
    });
    let r = await (0, _.sy)({
      token: null == e ? true : e.refresh_token,
      feedId: t,
      feature: n
    });
    a.h.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: t,
      feed: r
    }), T.set(t, 0), I.delete(t), w(t, {
      loading: false
    }), t === A && (C = null, x())
  } catch (s) {
    var i;
    let e = null != (i = T.get(t)) ? i : 0;
    if (e < y) {
      let i = f.A.Millis.MINUTE * Math.pow(2, e) + R(e);
      S.set(t, setTimeout(() => L({
        feedId: t,
        feature: n,
        force: r
      }), i)), T.set(t, e + 1)
    } else a.h.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: t
    });
    I.delete(t)
  }
}

function j() {
  x()
}

function M() {
  j()
}

function k() {
  D(A)
}

function U(e) {
  let {
    feedId: t,
    feature: n
  } = e;
  D(t), L({
    feedId: t,
    feature: n,
    force: true
  })
}

function G(e) {
  let {
    refreshAfterMs: t
  } = e, n = m.A.getFeed(A);
  (null == n ? true : n.refresh_stale_inbox_after_ms) == null || (C = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), x())
}

function V(e) {
  var t;
  let {
    connectionId: n,
    track: r
  } = e;
  null == n || (null == (t = c.A.getAccount(n, E.fg2.SPOTIFY)) ? true : t.showActivity) && N(n, r)
}

function F() {
  L({
    feedId: g.X1.GLOBAL_FEED,
    feature: i.M.GAME_PROFILE
  })
}
class B extends Chunk439372.A {
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: M,
      CONNECTION_CLOSED: k,
      WINDOW_FOCUS: j,
      IDLE: j,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: j,
      CONTENT_INVENTORY_MANUAL_REFRESH: U,
      CONTENT_INVENTORY_INBOX_STALE: G,
      SPOTIFY_NEW_TRACK: V,
      GAME_PROFILE_OPEN: F
    })
  }
}
let H = new B