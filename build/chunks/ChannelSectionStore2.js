/** Chunk was on web.js **/
/** chunk id: 433355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D5: () => x,
  ZP: () => J,
  uZ: () => S
});
var r, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk171900 = require("./171900.js"),
  Chunk897473 = require("./897473.js"),
  Chunk585483 = require("./585483.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk231338 = require("./231338.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = "message_requests",
  A = false,
  C = false,
  N = true,
  R = {},
  P = {},
  w = false,
  D = null;

function L(e) {
  if (null == e) return null;
  if ((0, b.AB)(e)) {
    let t = m.Z.getGuildId();
    return null == t ? null : (0, b.Qk)(e, t)
  }
  return e
}

function x(e) {
  return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST, c.tI.VIEW_MOD_REPORT].includes(e.type)
}

function M(e) {
  let t = false;
  w && (w = false, t = true);
  let n = L(h.Z.getChannelId());
  return null != n && n in R && (delete R[n], t = true), t && e ? e : !e
}

function k() {
  w && Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), C && (C = M(C)), A = M(A)
}

function j() {
  A && (A = M(A)), C = M(C)
}

function U() {
  N || Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), N = M(N)
}

function G(e) {
  let {
    sidebarType: t,
    guildId: n,
    baseChannelId: r,
    details: i
  } = e;
  w = false;
  let a = L(r);
  return null != a && (P[n] = {
    type: t,
    baseChannelId: a,
    guildId: n,
    details: i
  }, true)
}

function B(e) {
  let {
    guildId: t
  } = e;
  return null != P[t] && (delete P[t], true)
}

function Z(e) {
  let {
    sidebarType: t,
    baseChannelId: n,
    channelId: r,
    details: i
  } = e;
  w = false;
  let a = L(n);
  if (null == a) returnfalse;
  let o = {
    type: t,
    channelId: r,
    details: i
  };
  return t === c.tI.VIEW_MOD_REPORT && (o = T(v({}, o), {
    baseChannelId: n
  })), R[a] = o, true
}

function F(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: r
  } = e;
  w = false;
  let i = L(t);
  null != i && (R[i] = {
    type: c.tI.CREATE_THREAD,
    parentChannelId: t,
    parentMessageId: n,
    location: r
  })
}

function V(e) {
  let {
    channel: t
  } = e;
  if (t.id in R) return delete R[t.id], true;
  let n = false;
  for (let e in R) {
    let r = R[e];
    null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete R[e], n = true)
  }
  return n
}

function H(e) {
  let {
    channel: t
  } = e, n = R[t.parent_id];
  if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) returnfalse;
  delete R[t.parent_id]
}

function Y(e) {
  var t;
  let {
    channel: n
  } = e;
  if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? true : t.id)) returnfalse;
  let r = R[n.parent_id];
  null != r && r.type === c.tI.CREATE_THREAD && r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (R[n.parent_id] = {
    type: c.tI.VIEW_THREAD,
    channelId: n.id
  })
}

function W() {
  let e = false;
  for (let t in R) {
    let n = R[exports];
    if (require.type === Chunk897473.tI.VIEW_THREAD || require.type === Chunk897473.tI.VIEW_CHANNEL) {
      let r = Chunk592125.Z.getChannel(require.channelId);
      null != r && Chunk496675.Z.can(Chunk231338.Pl.VIEW_CHANNEL, r) || (delete R[exports], e = true)
    }
  }
  return module
}

function K(e) {
  let {
    baseChannelId: t
  } = e, n = L(t);
  null != n && delete R[n]
}

function z() {
  let e = null != D && Chunk171900.Z.hasSearchState(D);
  if (module === w) returnfalse;
  w = module
}

function q() {
  Chunk873546.tq && A && (A = false, C = false)
}

function X(e) {
  return D = e.searchContextId, z()
}
class Q extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r, i, a;
      A = null != (t = e.isMembersOpen) && t, C = null != (n = e.isSummariesOpen) && n, N = null == (r = e.isProfileOpen) || r, R = null != (i = e.sidebars) ? i : {}, P = null != (a = e.guildSidebars) ? a : {}
    }
    this.syncWith([l.Z], z), this.syncWith([p.Z], W), this.waitFor(f.Z, s.Z, _.Z, p.Z, l.Z, h.Z, m.Z, g.default)
  }
  getState() {
    return {
      isMembersOpen: A,
      isSummariesOpen: C,
      isProfileOpen: N,
      sidebars: R,
      guildSidebars: P
    }
  }
  getSection(e, t) {
    if (w) return E.ULH.SEARCH;
    let n = L(e);
    return null != n && null != R[n] ? E.ULH.SIDEBAR_CHAT : t && N ? E.ULH.PROFILE : C ? E.ULH.SUMMARIES : A ? E.ULH.MEMBERS : E.ULH.NONE
  }
  getSidebarState(e) {
    let t = L(e);
    return null == t ? true : R[t]
  }
  getGuildSidebarState(e) {
    return null == e ? true : P[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = L(e);
    if (null == t || w) return null;
    let n = R[t];
    return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL || n.type === c.tI.VIEW_MOD_REPORT ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = L(e);
    if (null == n || w) return null;
    let r = R[n];
    return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL || r.type === c.tI.VIEW_MOD_REPORT ? null == (t = r.details) ? true : t.initialMessageId : null
  }
}
O(Q, "displayName", "ChannelSectionStore"), O(Q, "persistKey", "ChannelSectionStore2");
let J = new Q(Chunk570140.Z, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: X,
  CHANNEL_TOGGLE_MEMBERS_SECTION: k,
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: U,
  CHANNEL_TOGGLE_SUMMARIES_SECTION: j,
  SIDEBAR_VIEW_CHANNEL: Z,
  SIDEBAR_VIEW_GUILD: G,
  SIDEBAR_CREATE_THREAD: F,
  SIDEBAR_CLOSE: K,
  SIDEBAR_CLOSE_GUILD: B,
  CHANNEL_DELETE: V,
  CHANNEL_SELECT: q,
  THREAD_CREATE: Y,
  THREAD_DELETE: H
})