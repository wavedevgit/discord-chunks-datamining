/** Chunk was on web.js **/
/** chunk id: 761640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => $,
  JU: () => L,
  fe: () => I
});
var r, Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk517381 = require("./517381.js"),
  Chunk940382 = require("./940382.js"),
  Chunk203982 = require("./203982.js"),
  Chunk661191 = require("./661191.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk818348 = require("./818348.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = "message_requests",
  T = false,
  C = false,
  N = true,
  R = {},
  w = {},
  P = false,
  D = null;

function x(e) {
  if (null == e) return null;
  if ((0, b.jq)(e)) {
    let t = m.A.getGuildId();
    return null == t ? null : (0, b.Gr)(e, t)
  }
  return e
}

function L(e) {
  return [c.PE.VIEW_CHANNEL, c.PE.VIEW_THREAD, c.PE.VIEW_MESSAGE_REQUEST, c.PE.VIEW_MOD_REPORT].includes(e.type)
}

function j(e) {
  let t = false;
  P && (P = false, t = true);
  let n = x(h.A.getChannelId());
  return null != n && n in R && (delete R[n], t = true), t && e ? e : !e
}

function M() {
  P && u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), C && (C = j(C)), T = j(T)
}

function k() {
  T && (T = j(T)), C = j(C)
}

function U() {
  N || u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), N = j(N)
}

function G(e) {
  let {
    sidebarType: t,
    guildId: n,
    baseChannelId: r,
    details: i
  } = e;
  P = false;
  let a = x(r);
  return null != a && (w[n] = {
    type: t,
    baseChannelId: a,
    guildId: n,
    details: i
  }, true)
}

function V(e) {
  let {
    guildId: t
  } = e;
  return null != w[t] && (delete w[t], true)
}

function F(e) {
  let {
    sidebarType: t,
    baseChannelId: n,
    channelId: r,
    details: i
  } = e;
  P = false;
  let a = x(n);
  if (null == a) returnfalse;
  let s = {
    type: t,
    channelId: r,
    details: i
  };
  return t === c.PE.VIEW_MOD_REPORT && (s = S(A({}, s), {
    baseChannelId: n
  })), R[a] = s, true
}

function B(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: r
  } = e;
  P = false;
  let i = x(t);
  null != i && (R[i] = {
    type: c.PE.CREATE_THREAD,
    parentChannelId: t,
    parentMessageId: n,
    location: r
  })
}

function H(e) {
  let {
    channel: t
  } = e;
  if (t.id in R) return delete R[t.id], true;
  let n = false;
  for (let e in R) {
    let r = R[e];
    null != r && r.type === c.PE.VIEW_CHANNEL && r.channelId === t.id && (delete R[e], n = true)
  }
  return n
}

function Y(e) {
  let {
    channel: t
  } = e, n = R[t.parent_id];
  if (null == n || n.type !== c.PE.VIEW_THREAD || n.channelId !== t.id) returnfalse;
  delete R[t.parent_id]
}

function W(e) {
  var t;
  let {
    channel: n
  } = e;
  if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? true : t.id)) returnfalse;
  let r = R[n.parent_id];
  null != r && r.type === c.PE.CREATE_THREAD && r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (R[n.parent_id] = {
    type: c.PE.VIEW_THREAD,
    channelId: n.id
  })
}

function K() {
  let e = false;
  for (let t in R) {
    let n = R[t];
    if (n.type === c.PE.VIEW_THREAD || n.type === c.PE.VIEW_CHANNEL) {
      let r = f.A.getChannel(n.channelId);
      null != r && _.A.can(y.xB.VIEW_CHANNEL, r) || (delete R[t], e = true)
    }
  }
  return e
}

function z(e) {
  let {
    baseChannelId: t
  } = e, n = x(t);
  null != n && delete R[n]
}

function q() {
  let e = null != D && l.A.hasSearchState(D);
  if (e === P) returnfalse;
  P = e
}

function X() {
  i.Fr && T && (T = false, C = false)
}

function Z(e) {
  return D = e.searchContextId, q()
}
class Q extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r, i, a;
      T = null != (t = e.isMembersOpen) && t, C = null != (n = e.isSummariesOpen) && n, N = null == (r = e.isProfileOpen) || r, R = null != (i = e.sidebars) ? i : {}, w = null != (a = e.guildSidebars) ? a : {}
    }
    this.syncWith([l.A], q), this.syncWith([_.A], K), this.waitFor(f.A, o.A, p.A, _.A, l.A, h.A, m.A, g.default)
  }
  getState() {
    return {
      isMembersOpen: T,
      isSummariesOpen: C,
      isProfileOpen: N,
      sidebars: R,
      guildSidebars: w
    }
  }
  getSection(e, t) {
    if (P) return E.YvQ.SEARCH;
    let n = x(e);
    return null != n && null != R[n] ? E.YvQ.SIDEBAR_CHAT : t && N ? E.YvQ.PROFILE : C ? E.YvQ.SUMMARIES : T ? E.YvQ.MEMBERS : E.YvQ.NONE
  }
  getSidebarState(e) {
    let t = x(e);
    return null == t ? true : R[t]
  }
  getGuildSidebarState(e) {
    return null == e ? true : w[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = x(e);
    if (null == t || P) return null;
    let n = R[t];
    return null == n ? null : n.type === c.PE.VIEW_THREAD || n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = x(e);
    if (null == n || P) return null;
    let r = R[n];
    return null == r ? null : r.type === c.PE.VIEW_THREAD || r.type === c.PE.VIEW_CHANNEL || r.type === c.PE.VIEW_MOD_REPORT ? null == (t = r.details) ? true : t.initialMessageId : null
  }
  getCurrentSearchContextId() {
    return D
  }
}
O(Q, "displayName", "ChannelSectionStore"), O(Q, "persistKey", "ChannelSectionStore2");
let $ = new Q(Chunk73153.h, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: Z,
  CHANNEL_TOGGLE_MEMBERS_SECTION: M,
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: U,
  CHANNEL_TOGGLE_SUMMARIES_SECTION: k,
  SIDEBAR_VIEW_CHANNEL: F,
  SIDEBAR_VIEW_GUILD: G,
  SIDEBAR_CREATE_THREAD: B,
  SIDEBAR_CLOSE: z,
  SIDEBAR_CLOSE_GUILD: V,
  CHANNEL_DELETE: H,
  CHANNEL_SELECT: X,
  THREAD_CREATE: W,
  THREAD_DELETE: Y
})