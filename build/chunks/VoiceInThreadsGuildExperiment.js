/** Chunk was on web.js **/
/** chunk id: 665906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $R: () => D,
  C7: () => A,
  Ek: () => I,
  Gu: () => Z,
  JQ: () => C,
  NE: () => b,
  RG: () => x,
  Xb: () => M,
  Xu: () => O,
  Y: () => G,
  cD: () => v,
  ki: () => y,
  kn: () => w,
  tM: () => E,
  tc: () => R,
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
  return S((0, o.e7)([_.Z], () => {
    let t = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
    return _.Z.can(t, e)
  }, [e]), e, t)
}

function y(e, t) {
  let n = e.isForumLikeChannel() ? g.Plq.SEND_MESSAGES : a.$e(g.Plq.CREATE_PUBLIC_THREADS, g.Plq.READ_MESSAGE_HISTORY);
  return S(_.Z.can(n, e), e, t)
}

function O(e) {
  let t = (0, o.e7)([_.Z], () => _.Z.can(a.$e(g.Plq.CREATE_PRIVATE_THREADS), e), [e]);
  return e.type === g.d4z.GUILD_TEXT && S(t, e)
}

function v(e) {
  let t = b(e),
    n = O(e);
  return t || n
}

function S(e, t, n) {
  return !(__OVERLAY__ || !e || !d.uC.has(t.type) || null != n && (n.hasFlag(g.iLy.HAS_THREAD) || (0, u.Z)(n))) && true
}

function I(e) {
  let t = (0, o.e7)([p.Z], () => p.Z.getChannel(m.default.castMessageIdAsChannelId(e.id)), [e]);
  return T((0, o.e7)([_.Z], () => _.Z.can(g.Plq.VIEW_CHANNEL, t), [t]), e, t)
}

function T(e, t, n) {
  return !!t.hasFlag(g.iLy.HAS_THREAD) && null != n && !!e
}

function C(e) {
  return (0, o.cj)([h.Z, _.Z], () => {
    let t = h.Z.getActiveJoinedThreadsForParent(e.guild_id, e.id),
      n = h.Z.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
      r = h.Z.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
      a = i()(n).some(e => _.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
      o = i()(t).some(e => !(e.channel.id in n) && _.Z.can(g.Plq.VIEW_CHANNEL, e.channel)),
      s = i()(r).some(e => _.Z.can(g.Plq.VIEW_CHANNEL, e));
    return {
      hasActiveThreads: a || o || s,
      hasMoreActiveThreads: s || o
    }
  })
}

function A(e) {
  let t = (0, o.e7)([p.Z], () => p.Z.getChannel(null == e ? true : e.parent_id)),
    n = (0, o.e7)([_.Z], () => null != t && _.Z.can(g.Plq.MANAGE_THREADS, t), [t]),
    r = (0, o.e7)([f.default], () => f.default.getId());
  return null != e && null != t && !!e.isThread() && (!!n || !e.isLockedThread() && e.ownerId === r)
}

function N(e, t) {
  return null != e && t.can(g.Plq.SEND_MESSAGES_IN_THREADS, e)
}

function P(e, t, n) {
  var r;
  return null != e && !!e.isThread() && ((null == (r = e.threadMetadata) ? true : r.locked) ? n : t)
}

function R(e) {
  let t = (0, o.e7)([_.Z], () => N(e, _.Z)),
    n = M(e);
  return P(e, t, n)
}

function w(e) {
  let t = N(e, _.Z),
    n = k(e);
  return P(e, t, n)
}

function D(e) {
  var t;
  let n = (0, o.e7)([_.Z], () => null != e && _.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e));
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? true : t.locked) !== true && n)
}

function x(e) {
  var t;
  return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null == (t = e.threadMetadata) ? true : t.locked) !== true && _.Z.can(g.Plq.SEND_MESSAGES_IN_THREADS, e))
}

function L(e) {
  let t = _.Z.can(g.Plq.MANAGE_THREADS, e);
  return e.isArchivedLockedThread() && !t
}

function j(e, t) {
  return null != e && t.can(g.Plq.MANAGE_THREADS, e)
}

function M(e) {
  return (0, o.e7)([_.Z], () => k(e, [_.Z]))
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [_.Z],
    [n] = t;
  return j(e, n)
}

function U(e) {
  return (0, o.e7)([p.Z, _.Z, f.default], () => {
    let t = p.Z.getChannel(e);
    if (null == t) returnfalse;
    let n = f.default.getId();
    return t.type === g.d4z.PRIVATE_THREAD && t.ownerId === n || k(t, [_.Z])
  })
}

function G(e) {
  let t = (0, c.Z)(),
    n = (0, o.e7)([_.Z], () => _.Z.can(g.Plq.CONNECT, e)),
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

function Z(e) {
  let t = M(e);
  return e.isLockedThread() && !t
}