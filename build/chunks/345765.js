/** Chunk was on web.js **/
/** chunk id: 345765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk126313 = require("./126313.js"),
  Chunk570140 = require("./570140.js"),
  Chunk147913 = require("./147913.js"),
  Chunk539746 = require("./539746.js"),
  Chunk38618 = require("./38618.js"),
  Chunk553795 = require("./553795.js"),
  Chunk517100 = require("./517100.js"),
  Chunk451478 = require("./451478.js"),
  Chunk70956 = require("./70956.js"),
  Chunk162461 = require("./162461.js"),
  Chunk564990 = require("./564990.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk206583 = require("./206583.js"),
  Chunk981631 = require("./981631.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 4,
  O = 2 * Chunk70956.Z.Millis.MINUTE,
  v = Chunk206583.YN.GLOBAL_FEED,
  S = 15 * Chunk70956.Z.Millis.MINUTE,
  I = new Map,
  T = new Set,
  C = new Map,
  A = null,
  N = (0, Chunk392711.debounce)(Chunk564990.yK, 3e3, {
    trailing: true
  });

function P() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
  return Math.random() * (e + 1) * O
}

function w(e, t) {
  a.Z.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: e,
    state: t
  })
}

function R(e) {
  if (T.has(e) || e === g.YN.GAME_PROFILE_FEED && (!(0, s._J)("ContentInventoryManager") || true !== m.Z.getFeed(e))) returnfalse;
  if (e === v) {
    if (!(0, p.sA)("ContentInventoryManager") || h.Z.hidden && null != m.Z.getFeed(e) || !d.Z.isFocused() || !l.Z.isConnected()) returnfalse;
    let t = u.Z.getIdleSince();
    if (null != t && Date.now() - t > S) returnfalse
  }
  returntrue
}

function D(e) {
  w(e, {
    loading: false
  });
  let t = I.get(e);
  true !== t && (clearTimeout(t), I.delete(e))
}

function x() {
  var e;
  let t = null != (e = C.get(v)) ? e : 0;
  if (t > 0 && t <= y || (D(v), !R(v))) return;
  let n = m.Z.getFeed(v);
  if ((null == n ? true : n.refresh_stale_inbox_after_ms) != null && null == A) return;
  let r = (null == n ? true : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
    a = Math.max(0, null == A ? 0 : new Date(A).getTime() - Date.now(), r) + (t > 0 ? P() : 0);
  w(v, {
    loading: false,
    nextFetchDate: new Date(Date.now() + a)
  }), I.set(v, setTimeout(() => L({
    feedId: v,
    feature: i.L.INBOX
  }), a))
}
async function L(e) {
  let {
    feedId: t,
    feature: n,
    force: r = false
  } = e;
  if (R(t) || r) try {
    let e = m.Z.getFeed(t);
    T.add(t), w(t, {
      loading: true
    });
    let r = await (0, _.mt)({
      token: null == e ? true : e.refresh_token,
      feedId: t,
      feature: n
    });
    a.Z.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: t,
      feed: r
    }), C.set(t, 0), T.delete(t), w(t, {
      loading: false
    }), t === v && (A = null, x())
  } catch (o) {
    var i;
    let e = null != (i = C.get(t)) ? i : 0;
    if (e < y) {
      let i = f.Z.Millis.MINUTE * Math.pow(2, e) + P(e);
      I.set(t, setTimeout(() => L({
        feedId: t,
        feature: n,
        force: r
      }), i)), C.set(t, e + 1)
    } else a.Z.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: t
    });
    T.delete(t)
  }
}

function j() {
  x()
}

function M() {
  j()
}

function k() {
  D(v)
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
  } = e, n = m.Z.getFeed(v);
  (null == n ? true : n.refresh_stale_inbox_after_ms) != null && (A = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), x())
}

function Z(e) {
  var t;
  let {
    connectionId: n,
    track: r
  } = e;
  null != n && (null == (t = c.Z.getAccount(n, E.ABu.SPOTIFY)) ? true : t.showActivity) && N(n, r)
}

function F() {
  L({
    feedId: g.YN.GLOBAL_FEED,
    feature: i.L.GAME_PROFILE
  })
}
class B extends Chunk147913.Z {
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: M,
      CONNECTION_CLOSED: k,
      WINDOW_FOCUS: j,
      IDLE: j,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: j,
      CONTENT_INVENTORY_MANUAL_REFRESH: U,
      CONTENT_INVENTORY_INBOX_STALE: G,
      SPOTIFY_NEW_TRACK: Z,
      GAME_PROFILE_OPEN: F
    })
  }
}
let V = new B