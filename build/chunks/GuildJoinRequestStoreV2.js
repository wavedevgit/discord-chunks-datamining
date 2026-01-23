/** Chunk was on web.js **/
/** chunk id: 844944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Z
}), require("./896048.js"), require("./321073.js");
var r, Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk821124 = require("./821124.js"),
  Chunk513461 = require("./513461.js"),
  Chunk212455 = require("./212455.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
  y = new Map,
  b = {};

function O(e) {
  return b[e]
}

function v(e, t) {
  b[e] = t, y.set(e, a()())
}

function A(e, t, n) {
  if (t !== n && null != t) {
    if (t === f.B5.SUBMITTED) {
      let t = O(e);
      v(e, t + 1)
    }
    if (n === f.B5.SUBMITTED) {
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
let S = false;

function T() {
  S = true
}

function C(e) {
  let {
    status: t,
    requests: n,
    total: r,
    guildId: i
  } = e;
  S = false, t === f.B5.SUBMITTED && v(i, r), n.forEach(e => {
    k(e)
  })
}

function N() {
  S = false
}
let R = e => "guild-join-request=".concat(e),
  w = (e, t) => "guild-".concat(e, "-").concat(t);

function P(e) {
  let t = [];
  return t.push(R(e.joinRequestId)), t.push(w(e.guildId, e.applicationStatus)), t
}
let D = new Chunk713402.J(P, e => "".concat(e.joinRequestId)),
  x = new Chunk713402.J(P, e => "".concat(e.joinRequestId)),
  L = new Chunk713402.J(P, e => "".concat(e.actionedAt));

function j(e) {
  return D.get(e)
}

function M(e) {
  delete z[e], D.delete(e), x.delete(e), L.delete(e)
}

function k(e) {
  z[e.joinRequestId] = e, D.set(e.joinRequestId, e), (0, d.ar)(e.applicationStatus) && (L.delete(e.joinRequestId), x.set(e.joinRequestId, e)), (0, d.mf)(e.applicationStatus) && (x.delete(e.joinRequestId), L.set(e.joinRequestId, e))
}

function U(e) {
  var t;
  let {
    guildId: n,
    request: r
  } = e, i = (0, p.j)(r), a = c.default.getCurrentUser();
  if (null == a || i.userId === a.id) returnfalse;
  let s = null == (t = j(i.joinRequestId)) ? true : t.applicationStatus;
  return A(n, i.applicationStatus, s), k(i), true
}

function G(e) {
  let {
    id: t,
    guildId: n
  } = e, r = j(t);
  null != r && (A(n, E, r.applicationStatus), M(t))
}

function V(e) {
  let {
    guildId: t,
    action: n
  } = e;
  D.values(w(t, f.B5.SUBMITTED)).forEach(e => {
    k(g(h({}, e), {
      applicationStatus: n
    }))
  }), v(t, 0)
}
let F = {};

function B(e) {
  let {
    guildId: t,
    applicationTab: n
  } = e;
  n !== F[t] && (F[t] = n)
}
let H = {};

function Y(e) {
  var t;
  let {
    guildId: n,
    sortOrder: r
  } = e;
  if (r === H[n]) return;
  H[n] = r;
  let i = null != (t = F[n]) ? t : f.B5.SUBMITTED;
  "REVIEW_APPLICATION" !== i && ((0, d.mf)(i) && L.clear(), (0, d.ar)(i) && x.clear())
}
let W = {};

function K(e) {
  let {
    guildId: t,
    request: n
  } = e;
  W[t] = n
}
let z = {},
  q = 10 * Chunk927813.A.Seconds.MINUTE;
class X extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  getRequest(e) {
    return z[e]
  }
  getRequests(e, t) {
    let n = w(e, t);
    return (0, d.mf)(t) ? L.values(n) : (0, d.ar)(t) ? x.values(n) : D.values(n)
  }
  getSubmittedGuildJoinRequestTotal(e) {
    return b[e]
  }
  isFetching() {
    return S
  }
  hasFetched(e) {
    if (!y.has(e)) returnfalse;
    let t = y.get(e);
    return null != t && a()().diff(t, "seconds") < q
  }
  getSelectedApplicationTab(e) {
    var t;
    let n = f.B5.SUBMITTED;
    return null != (t = F[e]) ? t : n
  }
  getSelectedSortOrder(e) {
    var t;
    return null != (t = H[e]) ? t : f._e.TIMESTAMP_DESC
  }
  getSelectedGuildJoinRequest(e) {
    let t = W[e];
    return null != t ? j(t.joinRequestId) : null
  }
}
_(X, "displayName", "GuildJoinRequestStoreV2");
let Z = new X(Chunk73153.h, {
  GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS: I,
  GUILD_JOIN_REQUESTS_FETCH_SUCCESS: C,
  GUILD_JOIN_REQUESTS_FETCH_START: T,
  GUILD_JOIN_REQUESTS_FETCH_FAILURE: N,
  GUILD_JOIN_REQUESTS_BULK_ACTION: V,
  GUILD_JOIN_REQUEST_CREATE: U,
  GUILD_JOIN_REQUEST_UPDATE: U,
  GUILD_JOIN_REQUEST_DELETE: G,
  GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB: B,
  GUILD_JOIN_REQUESTS_SET_SORT_ORDER: Y,
  GUILD_JOIN_REQUESTS_SET_SELECTED: K
})