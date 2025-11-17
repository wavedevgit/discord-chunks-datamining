/** Chunk was on web.js **/
/** chunk id: 826581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
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

function I(e, t, n) {
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

function T(e) {
  let {
    joinRequest: t
  } = e;
  j(t)
}
let S = false;

function A() {
  S = true
}

function C(e) {
  let {
    status: t,
    requests: n,
    total: r,
    guildId: i
  } = e;
  S = false, t === f.wB.SUBMITTED && v(i, r), n.forEach(e => {
    j(e)
  })
}

function N() {
  S = false
}
let R = e => "guild-join-request=".concat(e),
  P = (e, t) => "guild-".concat(e, "-").concat(t);

function D(e) {
  let t = [];
  return t.push(R(e.joinRequestId)), t.push(P(e.guildId, e.applicationStatus)), t
}
let w = new Chunk759174.h(D, e => "".concat(e.joinRequestId)),
  x = new Chunk759174.h(D, e => "".concat(e.joinRequestId)),
  L = new Chunk759174.h(D, e => "".concat(e.actionedAt));

function M(e) {
  return w.get(e)
}

function k(e) {
  delete K[e], w.delete(e), x.delete(e), L.delete(e)
}

function j(e) {
  K[e.joinRequestId] = e, w.set(e.joinRequestId, e), (0, d.Nd)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e)), (0, d.bk)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e))
}

function U(e) {
  var t;
  let {
    guildId: n,
    request: r
  } = e, i = (0, _.j)(r), a = c.default.getCurrentUser();
  if (null == a || i.userId === a.id) returnfalse;
  let o = null == (t = M(i.joinRequestId)) ? true : t.applicationStatus;
  return I(n, i.applicationStatus, o), j(i), true
}

function G(e) {
  let {
    id: t,
    guildId: n
  } = e, r = M(t);
  null != r && (I(n, E, r.applicationStatus), k(t))
}

function B(e) {
  let {
    guildId: t,
    action: n
  } = e;
  w.values(P(t, f.wB.SUBMITTED)).forEach(e => {
    j(g(h({}, e), {
      applicationStatus: n
    }))
  }), v(t, 0)
}
let Z = {};

function F(e) {
  let {
    guildId: t,
    applicationTab: n
  } = e;
  n !== Z[t] && (Z[t] = n)
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
  let i = null != (t = Z[n]) ? t : f.wB.SUBMITTED;
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
    let n = P(e, t);
    return (0, d.bk)(t) ? L.values(n) : (0, d.Nd)(t) ? x.values(n) : w.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return y[e]
  }
  isFetching() {
    return S
  }
  hasFetched(e) {
    if (!b.has(e)) returnfalse;
    let t = b.get(e);
    return null != t && a()().diff(t, "seconds") < z
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = f.wB.SUBMITTED;
    return null != (t = Z[e]) ? t : n
  }
  getSelectedSortOrder(e) {
    var t;
    return null != (t = V[e]) ? t : f.Nw.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    let t = Y[e];
    return null != t ? M(t.joinRequestId) : null
  }
}
p(q, "displayName", "GuildJoinRequestStoreV2");
let X = new q(Chunk570140.Z, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: T,
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: C,
  GUILD_JOIN_REQUESTS_FETCH_START: A,
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: N,
  GUILD_JOIN_REQUESTS_BULK_ACTION: B,
  GUILD_JOIN_REQUEST_CREATE: U,
  GUILD_JOIN_REQUEST_UPDATE: U,
  GUILD_JOIN_REQUEST_DELETE: G,
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: F,
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: H,
  GUILD_JOIN_REQUESTS_SET_SELECTED: W
})