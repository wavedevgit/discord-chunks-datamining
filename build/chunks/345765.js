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
  I = 15 * Chunk70956.Z.Millis.MINUTE,
  T = new Map,
  S = new Set,
  A = new Map,
  C = null,
  N = (0, Chunk392711.debounce)(Chunk564990.yK, 3e3, {
    trailing: true
  });

function R() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0;
  return Math.random() * (module + 1) * O
}

function P(e, t) {
  a.Z.dispatch({
    type: "CONTENT_INVENTORY_SET_FEED_STATE",
    feedId: e,
    state: t
  })
}

function D(e) {
  if (S.has(e) || e === g.YN.GAME_PROFILE_FEED && (!(0, s._J)("ContentInventoryManager") || true !== m.Z.getFeed(e))) returnfalse;
  if (e === v) {
    if (!(0, _.sA)("ContentInventoryManager") || h.Z.hidden && null != m.Z.getFeed(e) || !d.Z.isFocused() || !l.Z.isConnected()) returnfalse;
    let t = u.Z.getIdleSince();
    if (null != t && Date.now() - t > I) returnfalse
  }
  returntrue
}

function w(e) {
  P(e, {
    loading: false
  });
  let t = T.get(e);
  true !== t && (clearTimeout(t), T.delete(e))
}

function x() {
  var e;
  let t = null != (e = A.get(v)) ? module : 0;
  if (exports > 0 && exports <= y || (w(v), !D(v))) return;
  let n = Chunk146282.Z.getFeed(v);
  if ((null == require ? true : require.refresh_stale_inbox_after_ms) != null && null == C) return;
  let r = (null == require ? true : require.expired_at) == null ? 0 : new Date(require.expired_at).getTime() - Date.now(),
    a = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), Chunk392711) + (exports > 0 ? R() : 0);
  P(v, {
    loading: false,
    nextFetchDate: new Date(Date.now() + Chunk570140)
  }), T.set(v, setTimeout(() => L({
    feedId: v,
    feature: Chunk126313.L.INBOX
  }), Chunk570140))
}
async function L(e) {
  let {
    feedId: t,
    feature: n,
    force: r = false
  } = e;
  if (D(t) || r) try {
    let e = m.Z.getFeed(t);
    S.add(t), P(t, {
      loading: true
    });
    let r = await (0, p.mt)({
      token: null == e ? true : e.refresh_token,
      feedId: t,
      feature: n
    });
    a.Z.dispatch({
      type: "CONTENT_INVENTORY_SET_FEED",
      feedId: t,
      feed: r
    }), A.set(t, 0), S.delete(t), P(t, {
      loading: false
    }), t === v && (C = null, x())
  } catch (o) {
    var i;
    let e = null != (i = A.get(t)) ? i : 0;
    if (e < y) {
      let i = f.Z.Millis.MINUTE * Math.pow(2, e) + R(e);
      T.set(t, setTimeout(() => L({
        feedId: t,
        feature: n,
        force: r
      }), i)), A.set(t, e + 1)
    } else a.Z.dispatch({
      type: "CONTENT_INVENTORY_CLEAR_FEED",
      feedId: t
    });
    S.delete(t)
  }
}

function M() {
  x()
}

function k() {
  M()
}

function j() {
  w(v)
}

function U(e) {
  let {
    feedId: t,
    feature: n
  } = e;
  w(t), L({
    feedId: t,
    feature: n,
    force: true
  })
}

function G(e) {
  let {
    refreshAfterMs: t
  } = e, n = m.Z.getFeed(v);
  (null == n ? true : n.refresh_stale_inbox_after_ms) != null && (C = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString(), x())
}

function B(e) {
  var t;
  let {
    connectionId: n,
    track: r
  } = e;
  null != n && (null == (t = c.Z.getAccount(n, E.ABu.SPOTIFY)) ? true : t.showActivity) && N(n, r)
}

function Z() {
  L({
    feedId: Chunk206583.YN.GLOBAL_FEED,
    feature: Chunk126313.L.GAME_PROFILE
  })
}
class F extends Chunk147913.Z {
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: k,
      CONNECTION_CLOSED: j,
      WINDOW_FOCUS: M,
      IDLE: M,
      CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
      CONTENT_INVENTORY_MANUAL_REFRESH: U,
      CONTENT_INVENTORY_INBOX_STALE: G,
      SPOTIFY_NEW_TRACK: B,
      GAME_PROFILE_OPEN: Z
    })
  }
}
let V = new F