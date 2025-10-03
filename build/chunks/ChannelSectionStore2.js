/** Chunk was on web.js **/
/** chunk id: 433355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D5: () => j,
  ZP: () => en,
  uZ: () => A
});
var r, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk171900 = require("./171900.js"),
  Chunk945577 = require("./945577.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = "message_requests",
  C = false,
  N = false,
  R = true,
  P = {},
  w = {},
  D = false,
  L = false,
  x = null;

function M(e) {
  if (null == e) return null;
  if ((0, y.AB)(e)) {
    let t = g.Z.getGuildId();
    return null == t ? null : (0, y.Qk)(e, t)
  }
  return e
}

function j(e) {
  return [u.tI.VIEW_CHANNEL, u.tI.VIEW_THREAD, u.tI.VIEW_MESSAGE_REQUEST, u.tI.VIEW_MOD_REPORT].includes(e.type)
}

function k(e) {
  let t = false;
  L && (L = false, t = true);
  let n = M(m.Z.getChannelId());
  return null != n && n in P && (delete P[n], t = true), t && e ? e : !e
}

function U() {
  L && Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), N && (N = k(N)), C = k(C)
}

function G() {
  C && (C = k(C)), N = k(N)
}

function B() {
  R || Chunk585483.S.dispatch(Chunk981631.CkL.SEARCH_RESULTS_CLOSE), R = k(R)
}

function Z(e) {
  let {
    sidebarType: t,
    guildId: n,
    baseChannelId: r,
    details: i
  } = e;
  L = false;
  let a = M(r);
  return null != a && (w[n] = {
    type: t,
    baseChannelId: a,
    guildId: n,
    details: i
  }, true)
}

function F(e) {
  let {
    guildId: t
  } = e;
  return null != w[t] && (delete w[t], true)
}

function V(e) {
  let {
    sidebarType: t,
    baseChannelId: n,
    channelId: r,
    details: i
  } = e;
  L = false;
  let a = M(n);
  if (null == a) returnfalse;
  let o = {
    type: t,
    channelId: r,
    details: i
  };
  return t === u.tI.VIEW_MOD_REPORT && (o = S(I({}, o), {
    baseChannelId: n
  })), P[a] = o, true
}

function H(e) {
  let {
    parentChannelId: t,
    parentMessageId: n,
    location: r
  } = e;
  L = false;
  let i = M(t);
  null != i && (P[i] = {
    type: u.tI.CREATE_THREAD,
    parentChannelId: t,
    parentMessageId: n,
    location: r
  })
}

function Y(e) {
  let {
    channel: t
  } = e;
  if (t.id in P) return delete P[t.id], true;
  let n = false;
  for (let e in P) {
    let r = P[e];
    null != r && r.type === u.tI.VIEW_CHANNEL && r.channelId === t.id && (delete P[e], n = true)
  }
  return n
}

function W(e) {
  let {
    channel: t
  } = e, n = P[t.parent_id];
  if (null == n || n.type !== u.tI.VIEW_THREAD || n.channelId !== t.id) returnfalse;
  delete P[t.parent_id]
}

function K(e) {
  var t;
  let {
    channel: n
  } = e;
  if (n.ownerId === (null == (t = E.default.getCurrentUser()) ? true : t.id)) returnfalse;
  let r = P[n.parent_id];
  null != r && r.type === u.tI.CREATE_THREAD && r.parentMessageId === f.default.castChannelIdAsMessageId(n.id) && (P[n.parent_id] = {
    type: u.tI.VIEW_THREAD,
    channelId: n.id
  })
}

function z() {
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

function q(e) {
  let {
    baseChannelId: t
  } = e, n = M(t);
  null != n && delete P[n]
}

function X() {
  if (null == x) returnfalse;
  let e = Chunk171900.Z.hasSearchState(x);
  if (L === module) returnfalse;
  L = module
}

function Q(e) {
  if (null == e);
  else if (e === b.aib.DMS) return b.aib.DMS;
  else if (e === b.I_8) return b.aib.FAVORITES;
  else if (null != p.Z.getGuild(e)) return b.aib.GUILD;
  else if (null != _.Z.getChannel(e)) return b.aib.CHANNEL;
  return null
}

function J(e) {
  if (e === x) returnfalse;
  x = e, X()
}

function $() {
  D = true, null != x && Q(x) === Chunk981631.aib.CHANNEL && (0, Chunk945577.ad)({
    location: "SearchStore_handleConnectionOpen"
  }) && J(Chunk981631.aib.DMS)
}

function ee(e) {
  let {
    guildId: t,
    channelId: n
  } = e;
  i.tq && C && (C = false, N = false), null != t ? J(t) : (0, c.ad)({
    location: "ChannelSectionStore_handleChannelSelect",
    autoTrackExposure: D
  }) ? J(b.aib.DMS) : J(n)
}
class et extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n, r, i, a;
      C = null != (t = e.isMembersOpen) && t, N = null != (n = e.isSummariesOpen) && n, R = null == (r = e.isProfileOpen) || r, P = null != (i = e.sidebars) ? i : {}, w = null != (a = e.guildSidebars) ? a : {}
    }
    this.syncWith([l.Z], X), this.syncWith([h.Z], z), this.waitFor(l.Z, p.Z, _.Z, s.Z)
  }
  getState() {
    return {
      isMembersOpen: C,
      isSummariesOpen: N,
      isProfileOpen: R,
      sidebars: P,
      guildSidebars: w
    }
  }
  getSection(e, t) {
    if (L) return b.ULH.SEARCH;
    let n = M(e);
    return null != n && null != P[n] ? b.ULH.SIDEBAR_CHAT : t && R ? b.ULH.PROFILE : N ? b.ULH.SUMMARIES : C ? b.ULH.MEMBERS : b.ULH.NONE
  }
  getSidebarState(e) {
    let t = M(e);
    return null == t ? true : P[t]
  }
  getGuildSidebarState(e) {
    return null == e ? true : w[e]
  }
  getCurrentSidebarChannelId(e) {
    let t = M(e);
    if (null == t || L) return null;
    let n = P[t];
    return null == n ? null : n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL || n.type === u.tI.VIEW_MOD_REPORT ? n.channelId : null
  }
  getCurrentSidebarMessageId(e) {
    var t;
    let n = M(e);
    if (null == n || L) return null;
    let r = P[n];
    return null == r ? null : r.type === u.tI.VIEW_THREAD || r.type === u.tI.VIEW_CHANNEL || r.type === u.tI.VIEW_MOD_REPORT ? null == (t = r.details) ? true : t.initialMessageId : null
  }
}
v(et, "displayName", "ChannelSectionStore"), v(et, "persistKey", "ChannelSectionStore2");
let en = new et(Chunk570140.Z, {
  CONNECTION_OPEN: $,
  CHANNEL_TOGGLE_MEMBERS_SECTION: U,
  USER_PROFILE_SIDEBAR_TOGGLE_SECTION: B,
  CHANNEL_TOGGLE_SUMMARIES_SECTION: G,
  SIDEBAR_VIEW_CHANNEL: V,
  SIDEBAR_VIEW_GUILD: Z,
  SIDEBAR_CREATE_THREAD: H,
  SIDEBAR_CLOSE: q,
  SIDEBAR_CLOSE_GUILD: F,
  CHANNEL_DELETE: Y,
  CHANNEL_SELECT: ee,
  THREAD_CREATE: K,
  THREAD_DELETE: W
})