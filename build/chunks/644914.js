/** Chunk was on 82124 **/
/** chunk id: 644914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TE: () => v,
  h_: () => O
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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

function v(e, t) {
  return (0, a.cj)([m.Z], () => ({
    canInvite: (0, o.b)(m.Z, t, e),
    canManageGuild: null != t && m.Z.can(y.Plq.MANAGE_GUILD, t),
    canMessage: null != e && m.Z.can(y.Plq.SEND_MESSAGES, e),
    canCreateChannel: null != t && m.Z.can(y.Plq.MANAGE_CHANNELS, t)
  }), [t, e])
}

function O(e) {
  return {
    guildPopulated: function(e) {
      let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? true : e.systemChannelId)),
        n = (0, a.Wu)([g.Z], () => null != t ? g.Z.getMessages(t.id).toArray() : []);
      return (0, a.e7)([p.Z], () => {
        var t;
        let r = null != (t = p.Z.getMemberCount(null == e ? true : e.id)) ? t : 0,
          i = n.some(e => e.type === y.uaV.USER_JOIN);
        return r > 1 || i
      }, [e, n])
    }(e),
    guildMessaged: function(e) {
      let t = (0, a.e7)([u.Z], () => null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null);
      var n = r.useMemo(() => null == t ? [] : l().values(t), [t]);
      let i = (0, a.e7)([c.default], () => c.default.getId());
      return (0, a.e7)([g.Z], () => l().some(n, e => {
        let t = g.Z.getMessages(e.id).toArray();
        return l().some(t, e => e.author.id === i && !(0, s.Z)(e))
      }))
    }(e),
    guildPersonalized: function(e) {
      let t = (0, a.e7)([h.Z], () => h.Z.hasLayers()),
        n = (0, a.e7)([f.Z], () => f.Z.getGuild(null == e ? true : e.id));
      return (null == n ? true : n.icon) != null && !t
    }(e),
    guildChannelCreated: (0, a.e7)([d.ZP], () => {
      let t = d.ZP.getChannels(null == e ? true : e.id),
        n = t[d.Zb];

      function r(t) {
        return null != e && b.default.extractTimestamp(t.channel.id) - b.default.extractTimestamp(e.id) > 500
      }
      return t[d.sH].some(r) || n.some(r)
    }, [e])
  }
}