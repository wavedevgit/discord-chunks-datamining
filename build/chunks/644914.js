/** Chunk was on 7891 **/
/** chunk id: 644914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  TE: () => y,
  h_: () => v
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

function y(e, t) {
  return (0, a.cj)([g.Z], () => ({
    canInvite: (0, o.b)(g.Z, t, e),
    canManageGuild: null != t && g.Z.can(C.Plq.MANAGE_GUILD, t),
    canMessage: null != e && g.Z.can(C.Plq.SEND_MESSAGES, e),
    canCreateChannel: null != t && g.Z.can(C.Plq.MANAGE_CHANNELS, t)
  }), [t, e])
}

function v(e) {
  return {
    guildPopulated: function(e) {
      let t = (0, a.e7)([u.Z], () => u.Z.getChannel(null == e ? true : e.systemChannelId)),
        n = (0, a.Wu)([m.Z], () => null != t ? m.Z.getMessages(t.id).toArray() : []);
      return (0, a.e7)([p.Z], () => {
        var t;
        let i = null != (t = p.Z.getMemberCount(null == e ? true : e.id)) ? t : 0,
          r = n.some(e => e.type === C.uaV.USER_JOIN);
        return i > 1 || r
      }, [e, n])
    }(e),
    guildMessaged: function(e) {
      let t = (0, a.e7)([u.Z], () => null != e ? u.Z.getMutableBasicGuildChannelsForGuild(e.id) : null);
      var n = i.useMemo(() => null == t ? [] : l().values(t), [t]);
      let r = (0, a.e7)([c.default], () => c.default.getId());
      return (0, a.e7)([m.Z], () => l().some(n, e => {
        let t = m.Z.getMessages(e.id).toArray();
        return l().some(t, e => e.author.id === r && !(0, s.Z)(e))
      }))
    }(e),
    guildPersonalized: function(e) {
      let t = (0, a.e7)([f.Z], () => f.Z.hasLayers()),
        n = (0, a.e7)([h.Z], () => h.Z.getGuild(null == e ? true : e.id));
      return (null == n ? true : n.icon) != null && !t
    }(e),
    guildChannelCreated: (0, a.e7)([d.ZP], () => {
      let t = d.ZP.getChannels(null == e ? true : e.id),
        n = t[d.Zb];

      function i(t) {
        return null != e && b.default.extractTimestamp(t.channel.id) - b.default.extractTimestamp(e.id) > 500
      }
      return t[d.sH].some(i) || n.some(i)
    }, [e])
  }
}