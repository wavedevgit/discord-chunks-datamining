/** Chunk was on web.js **/
/** chunk id: 665906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $R: () => D,
  C7: () => C,
  Ek: () => T,
  Gu: () => B,
  JQ: () => A,
  NE: () => b,
  RG: () => x,
  Xb: () => j,
  Xu: () => O,
  Y: () => G,
  cD: () => v,
  ki: () => y,
  kn: () => w,
  tM: () => E,
  tc: () => P,
  xl: () => L,
  yw: () => U
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622822 = require("./622822.js"),
  Chunk987170 = require("./987170.js"),
  Chunk590293 = require("./590293.js"),
  Chunk901461 = require("./901461.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk601070 = require("./601070.js"),
  Chunk981631 = require("./981631.js");
let E = (0, Chunk987170.Z)({
  id: "2022-07_voice_in_threads",
  label: "Voice in Threads",
  kind: "guild",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: true
    }
  }]
});

function b(e, t) {
  return I((0, o.e7)([p.Z], () => {
    let t = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
    return p.Z.can(t, e)
  }, [e]), e, t)
}

function y(e, t) {
  let n = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
  return I(p.Z.can(n, e), e, t)
}

function O(e) {
  let t = (0, o.e7)([p.Z], () => p.Z.can(a.$e(g.Plq.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === g.d4z.GUILD_TEXT && I(t, e)
}

function v(e) {
  let t = b(e),
    n = O(e);
  return t || n
}

function I(e, t, n) {
  return !(__OVERLAY__ || !e || !d.uC.has(t.type) || null != n && (n.hasFlag(g.iLy.HAS_THREAD) || (0, u.Z)(n))) && true
}

function T(e) {
  let t = (0, o.e7)([_.Z], () => _.Z.getChannel(h.default.castMessageIdAsChannelId(e.id)), [e]);
  return S((0, o.e7)([p.Z], () => p.Z.can(g.Plq.VIEW_CHANNEL, t), [t]), e, t)
}

function S(e, t, n) {
  return !!t.hasFlag(g.iLy.HAS_THREAD) && null != n && !!e
}

function A(e) {
  return (0, o.cj)([m.Z, p.Z], () => {
    let t = m.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = m.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      r = m.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      a = i()(n).some(e => p.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
      o = i()(t).some(e => !(e.channel.id in n) && p.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
      s = i()(r).some(e => p.Z.can(g.Plq.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: a || o || s,
      hasMoreActiveThreads: s || o
    }
  })
}

function C(e) {
  let t = (0, o.e7)([_.Z], () => _.Z.getChannel(null == e ? true : e.parent_id)),
    n = (0, o.e7)([p.Z], () => null != t && p.Z.can(g.Plq.MANAGE_THREADS, t), [t]),
    r = (0, o.e7)([f.default], () => f.default.getId());
  return null != e && null != t && !!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r)
}

function N(e, t) {
  return null != e && t.can(g.Plq.SEND_MESSAGES_IN_THREADS, e)
}

function R(e, t, n) {
  var r;
  return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? true : r.locked) ? n : t)
}

function P(e) {
  let t = (0, o.e7)([p.Z], () => N(e, p.Z)),
    n = j(e);
  return R(e, t, n)
}

function w(e) {
  let t = N(e, p.Z),
    n = k(e);
  return R(e, t, n)
}

function D(e) {
  var t;
  let n = (0, o.e7)([p.Z], () => null != e && p.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? true : t.locked) !== true && n)
}

function x(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? true : t.locked) !== true && p.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e))
}

function L(e) {
  let t = p.Z.can(g.Plq.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function M(e, t) {
  return null != e && t.can(g.Plq.MANAGE_THREADS, e)
}

function j(e) {
  return (0, o.e7)([p.Z], () => k(e, [p.Z]))
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [p.Z],
    [n] = t;
  return M(e, n)
}

function U(e) {
  return (0, o.e7)([_.Z, p.Z, f.default], () => {
    let t = _.Z.getChannel(e);
    if (null == t) returnfalse;
    let n = f.default.getId();
    return t.type === g.d4z.PRIVATE_THREAD && t.ownerId === n || k(t, [p.Z])
  })
}

function G(e) {
  let t = (0, c.Z)(),
    n = (0, o.e7)([p.Z], () => p.Z.can(g.Plq.CONNECT, e)),
    r = D(e),
    i = E.useExperiment({
      guildId: e.guild_id,
      location: "e791ea_1"
    }, {
      autoTrackExposure: false
    }).enabled,
    a = (0, s.Kt)() && (0, s.zd)(e.id);
  return !t && e.isVocalThread() && i && n && r && !a
}

function B(e) {
  let t = j(e);
  return e.isLockedThread() && !t
}