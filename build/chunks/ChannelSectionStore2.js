/** Chunk was on web.js **/
/** chunk id: 433355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D5: () => L,
  ZP: () => J,
  uZ: () => T
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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = "message_requests",
  C = false,
  A = false,
  N = true,
  P = {},
  R = {},
  w = false,
  D = null;

function x(e) {
  if (null == e) return null;
  if ((0, b.AB)(e)) {
    let t = h.Z.getGuildId();
    return null == t ? null : (0, b.Qk)(e, t)
  }
  return e
}

function L(e) {
  return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST, c.tI.VIEW_MOD_REPORT].includes(e.type)
}

function j(e) {
  let t = false;
  w && (w = false, t = true);
  let n = x(m.Z.getChannelId());
  return null != n && n in P && (delete P[n], t = true), t && e ? e : !e
}

function M() {
  w && Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), A && (A = j(A)), C = j(C)
}

function k() {
  C && (C = j(C)), A = j(A)
}

function U() {
  N || Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), N = j(N)
}

function G(e) {
  let {
    sidebarType: t,
    guildId: n,
    baseChannelId: r,
    details: i
  } = e;
  w = false;
  let a = x(r);
  return null != a && (R[n] = {
    type: t,
    baseChannelId: a,
    guildId: n,
    details: i
  }, true)
}

function Z(e) {
  let {
    guildId: t
  } = e;
  return null != R[t] && (delete R[t], true)
}

function F(e) {
  let {
    sidebarType: t,
    baseChannelId: n,
    channelId: r,
    details: i
  } = e;
  w = false;
  let a = x(n);
  if (null == a) returnfalse;
  let o = {
    type: t,
    channelId: r,
    details: i
  };
  return t === c.tI.VIEW_MOD_REPORT && (o = I(v({}, o), {
    baseChannelId: n
  })), P[a] = o, true
}

function B(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: r
  } = e;
  w = false;
  let i = x(t);
  null != i && (P[i] = {
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
  if (t.id in P) return delete P[t.id], true;
  let n = false;
  for (let e in P) {
    let r = P[e];
    null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete P[e], n = true)
  }
  return n
}

function H(e) {
  let {
    channel: t
  } = e, n = P[t.parent_id];
  if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) returnfalse;
  delete P[t.parent_id]
}

function Y(e) {
  var t;
  let {
    channel: n
  } = e;
  if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? true : t.id)) returnfalse;
  let r = P[n.parent_id];
  null != r && r.type === c.tI.CREATE_THREAD && r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (P[n.parent_id] = {
    type: c.tI.VIEW_THREAD,
    channelId: n.id
  })
}

function W() {
  let e = false;
  for (let t in P) {
    let n = P[exports];
    if (require.type === Chunk897473.tI.VIEW_THREAD || require.type === Chunk897473.tI.VIEW_CHANNEL) {
      let r = Chunk592125.Z.getChannel(require.channelId);
      null != r && Chunk496675.Z.can(Chunk231338.Pl.VIEW_CHANNEL, r) || (delete P[exports], e = true)
    }
  }
  return module
}

function K(e) {
  let {
    baseChannelId: t
  } = e, n = x(t);
  null != n && delete P[n]
}

function z() {
  let e = null != D && Chunk171900.Z.hasSearchState(D);
  if (module === w) returnfalse;
  w = module
}

function q() {
  Chunk873546.tq && C && (C = false, A = false)
}

function Q(e) {
  return D = e.searchContextId, z()
}
class X extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r, i, a;
      C = null != (t = e.isMembersOpen) && t, A = null != (n = e.isSummariesOpen) && n, N = null == (r = e.isProfileOpen) || r, P = null != (i = e.sidebars) ? i : {}, R = null != (a = e.guildSidebars) ? a : {}
    }
    this.syncWith([l.Z], z), this.syncWith([_.Z], W), this.waitFor(f.Z, s.Z, p.Z, _.Z, l.Z, m.Z, h.Z, g.default)
  }
  getState() {
    return {
      isMembersOpen: C,
      isSummariesOpen: A,
      isProfileOpen: N,
      sidebars: P,
      guildSidebars: R
    }
  }
  getSection(e, t) {
    if (w) return E.ULH.SEARCH;
    let n = x(e);
    return null != n && null != P[n] ? E.ULH.SIDEBAR_CHAT : t && N ? E.ULH.PROFILE : A ? E.ULH.SUMMARIES : C ? E.ULH.MEMBERS : E.ULH.NONE
  }
  getSidebarState(e) {
    let t = x(e);
    return null == t ? true : P[t]
  }
  getGuildSidebarState(e) {
    return null == e ? true : R[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = x(e);
    if (null == t || w) return null;
    let n = P[t];
    return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL || n.type === c.tI.VIEW_MOD_REPORT ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = x(e);
    if (null == n || w) return null;
    let r = P[n];
    return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL || r.type === c.tI.VIEW_MOD_REPORT ? null == (t = r.details) ? true : t.initialMessageId : null
  }
  getCurrentSearchContextId() {
    return D
  }
}
O(X, "displayName", "ChannelSectionStore"), O(X, "persistKey", "ChannelSectionStore2");
let J = new X(Chunk570140.Z, {
  SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: Q,
  CHANNEL_TOGGLE_MEMBERS_SECTION: M,
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: U,
  CHANNEL_TOGGLE_SUMMARIES_SECTION: k,
  SIDEBAR_VIEW_CHANNEL: F,
  SIDEBAR_VIEW_GUILD: G,
  SIDEBAR_CREATE_THREAD: B,
  SIDEBAR_CLOSE: K,
  SIDEBAR_CLOSE_GUILD: Z,
  CHANNEL_DELETE: V,
  CHANNEL_SELECT: q,
  THREAD_CREATE: Y,
  THREAD_DELETE: H
})