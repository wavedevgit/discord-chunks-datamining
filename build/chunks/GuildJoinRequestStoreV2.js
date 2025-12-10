/** Chunk was on web.js **/
/** chunk id: 826581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js"), require("./539854.js");
var r, Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk881952 = require("./881952.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = "DELETED",
  b = new Map,
  y = {};

function O(e) {
  return y[e]
}

function v(e, t) {
  y[e] = t, b.set(e, a()())
}

function S(e, t, n) {
  if (t !== n && null != t) {
    if (t === f.wB.SUBMITTED) {
      let t = O(e);
      v(e, t + 1)
    }
    if (n === f.wB.SUBMITTED) {
      let t = O(e);
      v(e, Math.max(0, t - 1))
    }
  }
}

function I(e) {
  let {
    joinRequest: t
  } = e;
  k(t)
}
let T = false;

function C() {
  T = true
}

function A(e) {
  let {
    status: t,
    requests: n,
    total: r,
    guildId: i
  } = e;
  T = false, t === f.wB.SUBMITTED && v(i, r), n.forEach(e => {
    k(e)
  })
}

function N() {
  T = false
}
let P = e => "guild-join-request=".concat(e),
  R = (e, t) => "guild-".concat(e, "-").concat(t);

function w(e) {
  let t = [];
  return t.push(P(e.joinRequestId)), t.push(R(e.guildId, e.applicationStatus)), t
}
let D = new Chunk759174.h(w, e => "".concat(e.joinRequestId)),
  x = new Chunk759174.h(w, e => "".concat(e.joinRequestId)),
  L = new Chunk759174.h(w, e => "".concat(e.actionedAt));

function j(e) {
  return D.get(e)
}

function M(e) {
  delete K[e], D.delete(e), x.delete(e), L.delete(e)
}

function k(e) {
  K[e.joinRequestId] = e, D.set(e.joinRequestId, e), (0, d.Nd)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e)), (0, d.bk)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e))
}

function U(e) {
  var t;
  let {
    guildId: n,
    request: r
  } = e, i = (0, p.j)(r), a = c.default.getCurrentUser();
  if (null == a || i.userId === a.id) returnfalse;
  let o = null == (t = j(i.joinRequestId)) ? true : t.applicationStatus;
  return S(n, i.applicationStatus, o), k(i), true
}

function G(e) {
  let {
    id: t,
    guildId: n
  } = e, r = j(t);
  null != r && (S(n, E, r.applicationStatus), M(t))
}

function Z(e) {
  let {
    guildId: t,
    action: n
  } = e;
  D.values(R(t, f.wB.SUBMITTED)).forEach(e => {
    k(g(m({}, e), {
      applicationStatus: n
    }))
  }), v(t, 0)
}
let B = {};

function F(e) {
  let {
    guildId: t,
    applicationTab: n
  } = e;
  n !== B[t] && (B[t] = n)
}
let V = {};

function H(e) {
  var t;
  let {
    guildId: n,
    sortOrder: r
  } = e;
  if (r === V[n]) return;
  V[n] = r;
  let i = null != (t = B[n]) ? t : f.wB.SUBMITTED;
  "REVIEW_APPLICATION" !== i && ((0, d.bk)(i) && L.clear(), (0, d.Nd)(i) && x.clear())
}
let Y = {};

function W(e) {
  let {
    guildId: t,
    request: n
  } = e;
  Y[t] = n
}
let K = {},
  z = 10 * Chunk70956.Z.Seconds.MINUTE;
class q extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  getRequest(e) {
    return K[e]
  }
  getRequests(e, t) {
    let n = R(e, t);
    return (0, d.bk)(t) ? L.values(n) : (0, d.Nd)(t) ? x.values(n) : D.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return y[e]
  }
  isFetching() {
    return T
  }
  hasFetched(e) {
    if (!b.has(e)) returnfalse;
    let t = b.get(e);
    return null != t && a()().diff(t, "seconds") < z
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = f.wB.SUBMITTED;
    return null != (t = B[e]) ? t : n
  }
  getSelectedSortOrder(e) {
    var t;
    return null != (t = V[e]) ? t : f.Nw.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    let t = Y[e];
    return null != t ? j(t.joinRequestId) : null
  }
}
_(q, "displayName", "GuildJoinRequestStoreV2");
let Q = new q(Chunk570140.Z, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: I,
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: A,
  GUILD_JOIN_REQUESTS_FETCH_START: C,
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: N,
  GUILD_JOIN_REQUESTS_BULK_ACTION: Z,
  GUILD_JOIN_REQUEST_CREATE: U,
  GUILD_JOIN_REQUEST_UPDATE: U,
  GUILD_JOIN_REQUEST_DELETE: G,
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: F,
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: H,
  GUILD_JOIN_REQUESTS_SET_SELECTED: W
})