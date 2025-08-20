/** Chunk was on web.js **/
/** chunk id: 433355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D5: () => D,
  ZP: () => q,
  uZ: () => T
});
var r, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk171900 = require("./171900.js"),
  Chunk518944 = require("./518944.js"),
  Chunk897473 = require("./897473.js"),
  Chunk585483 = require("./585483.js"),
  Chunk709054 = require("./709054.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk231338 = require("./231338.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = "message_requests",
  S = false,
  A = false,
  C = true,
  N = false,
  R = {},
  P = {};

function w(e) {
  if (null == e) return null;
  if ((0, E.AB)(e)) {
    let t = h.Z.getGuildId();
    return null == t ? null : (0, E.Qk)(e, t)
  }
  return e
}

function D(e) {
  return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST, c.tI.VIEW_MOD_REPORT].includes(e.type)
}

function x(e) {
  let t = false;
  N && (N = false, t = true);
  let n = w(p.Z.getChannelId());
  return null != n && n in R && (delete R[n], t = true), t && e ? e : !e
}

function L() {
  N && Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), A && (A = x(A)), S = x(S)
}

function j() {
  S && (S = x(S)), A = x(A)
}

function M() {
  C || Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), C = x(C)
}

function k(e) {
  let {
    sidebarType: t,
    guildId: n,
    baseChannelId: r,
    details: i
  } = e;
  N = false;
  let a = w(r);
  return null != a && (P[n] = {
    type: t,
    baseChannelId: a,
    guildId: n,
    details: i
  }, true)
}

function U(e) {
  let {
    guildId: t
  } = e;
  return null != P[t] && (delete P[t], true)
}

function G(e) {
  let {
    sidebarType: t,
    baseChannelId: n,
    channelId: r,
    details: i
  } = e;
  N = false;
  let a = w(n);
  if (null == a) returnfalse;
  let o = {
    type: t,
    channelId: r,
    details: i
  };
  return t === c.tI.VIEW_MOD_REPORT && (o = I(O({}, o), {
    baseChannelId: n
  })), R[a] = o, true
}

function B(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: r
  } = e;
  N = false;
  let i = w(t);
  null != i && (R[i] = {
    type: c.tI.CREATE_THREAD,
    parentChannelId: t,
    parentMessageId: n,
    location: r
  })
}

function Z(e) {
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

function V(e) {
  let {
    channel: t
  } = e, n = R[t.parent_id];
  if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) returnfalse;
  delete R[t.parent_id]
}

function F(e) {
  var t;
  let {
    channel: n
  } = e;
  if (n.ownerId === (null == (t = m.default.getCurrentUser()) ? true : t.id)) returnfalse;
  let r = R[n.parent_id];
  null != r && r.type === c.tI.CREATE_THREAD && r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (R[n.parent_id] = {
    type: c.tI.VIEW_THREAD,
    channelId: n.id
  })
}

function H() {
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

function Y(e) {
  let {
    baseChannelId: t
  } = e, n = w(t);
  null != n && delete R[n]
}

function W() {
  let e = Chunk518944.Z.getSelectedSearchContextId();
  if (null == module) returnfalse;
  let t = Chunk171900.Z.hasSearchState(module);
  if (N === exports) returnfalse;
  N = exports
}

function K() {
  Chunk873546.tq && S && (S = false, A = false)
}
class z extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r, i, a;
      S = null != (t = e.isMembersOpen) && t, A = null != (n = e.isSummariesOpen) && n, C = null == (r = e.isProfileOpen) || r, R = null != (i = e.sidebars) ? i : {}, P = null != (a = e.guildSidebars) ? a : {}
    }
    this.syncWith([s.Z, l.Z], W), this.syncWith([_.Z], H), this.waitFor(l.Z, s.Z)
  }
  getState() {
    return {
      isMembersOpen: S,
      isSummariesOpen: A,
      isProfileOpen: C,
      sidebars: R,
      guildSidebars: P
    }
  }
  getSection(e, t) {
    if (N) return g.ULH.SEARCH;
    let n = w(e);
    return null != n && null != R[n] ? g.ULH.SIDEBAR_CHAT : t && C ? g.ULH.PROFILE : A ? g.ULH.SUMMARIES : S ? g.ULH.MEMBERS : g.ULH.NONE
  }
  getSidebarState(e) {
    let t = w(e);
    return null == t ? true : R[t]
  }
  getGuildSidebarState(e) {
    return null == e ? true : P[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = w(e);
    if (null == t || N) return null;
    let n = R[t];
    return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL || n.type === c.tI.VIEW_MOD_REPORT ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = w(e);
    if (null == n || N) return null;
    let r = R[n];
    return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL || r.type === c.tI.VIEW_MOD_REPORT ? null == (t = r.details) ? true : t.initialMessageId : null
  }
}
y(z, "displayName", "ChannelSectionStore"), y(z, "persistKey", "ChannelSectionStore2");
let q = new z(Chunk570140.Z, {
  CHANNEL_TOGGLE_MEMBERS_SECTION: L,
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: M,
  CHANNEL_TOGGLE_SUMMARIES_SECTION: j,
  SIDEBAR_VIEW_CHANNEL: G,
  SIDEBAR_VIEW_GUILD: k,
  SIDEBAR_CREATE_THREAD: B,
  SIDEBAR_CLOSE: Y,
  SIDEBAR_CLOSE_GUILD: U,
  CHANNEL_DELETE: Z,
  CHANNEL_SELECT: K,
  THREAD_CREATE: F,
  THREAD_DELETE: V
})