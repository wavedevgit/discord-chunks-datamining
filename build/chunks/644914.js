/** Chunk was on web.js **/
/** chunk id: 644914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TE: () => y,
  h_: () => A
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk159300 = require("./159300.js"),
  Chunk901461 = require("./901461.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk819640 = require("./819640.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");
let b = 500;

function y(e, t) {
  return (0, a.cj)([m.Z], () => ({
    canInvite: (0, s.b)(m.Z, t, e),
    canManageGuild: null != t && m.Z.can(E.Plq.MANAGE_GUILD, t),
    canMessage: null != e && m.Z.can(E.Plq.SEND_MESSAGES, e),
    canCreateChannel: null != t && m.Z.can(E.Plq.MANAGE_CHANNELS, t)
  }), [t, e])
}

function O(e) {
  return (0, a.e7)([d.ZP], () => {
    let t = d.ZP.getChannels(null == e ? true : e.id),
      n = t[d.Zb];

    function r(t) {
      return null != e && g.default.extractTimestamp(t.channel.id) - g.default.extractTimestamp(e.id) > b
    }
    return t[d.sH].some(r) || n.some(r)
  }, [e])
}

function v(e) {
  let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? true : e.systemChannelId)),
    n = (0, a.Wu)([h.Z], () => null != t ? h.Z.getMessages(t.id).toArray() : []);
  return (0, a.e7)([f.Z], () => {
    var t;
    let r = null != (t = f.Z.getMemberCount(null == e ? true : e.id)) ? t : 0,
      i = n.some(e => e.type === E.uaV.USER_JOIN);
    return r > 1 || i
  }, [e, n])
}

function I(e) {
  let t = (0, a.e7)([p.Z], () => p.Z.hasLayers()),
    n = (0, a.e7)([_.Z], () => _.Z.getGuild(null == e ? true : e.id));
  return (null == n ? true : n.icon) != null && !t
}

function T(e) {
  let t = (0, a.e7)([c.default], () => c.default.getId());
  return (0, a.e7)([h.Z], () => o().some(e, e => {
    let n = h.Z.getMessages(e.id).toArray();
    return o().some(n, e => e.author.id === t && !(0, l.Z)(e))
  }))
}

function S(e) {
  let t = (0, a.e7)([u.Z], () => null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null);
  return T(r.useMemo(() => null == t ? [] : o().values(t), [t]))
}

function A(e) {
  return {
    guildPopulated: v(e),
    guildMessaged: S(e),
    guildPersonalized: I(e),
    guildChannelCreated: O(e)
  }
}