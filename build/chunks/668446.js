/** Chunk was on 97492 **/
/** chunk id: 668446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Sk: () => y,
  lF: () => O
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk855687 = require("./855687.js"),
  Chunk143413 = require("./143413.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk498642 = require("./498642.js"),
  Chunk71393 = require("./71393.js"),
  Chunk186111 = require("./186111.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function y(e, t) {
  return (0, a.cf)([g.A], () => ({
    canInvite: (0, s.K)(g.A, t, e),
    canManageGuild: null != t && g.A.can(A.xBc.MANAGE_GUILD, t),
    canMessage: null != e && g.A.can(A.xBc.SEND_MESSAGES, e),
    canCreateChannel: null != t && g.A.can(A.xBc.MANAGE_CHANNELS, t)
  }), [t, e])
}

function O(e) {
  var t;
  let n, l, s, g, y, O;
  return {
    guildPopulated: (n = (0, a.bG)([u.A], () => u.A.getChannel(null == e ? true : e.systemChannelId)), l = (0, a.yK)([b.A], () => null != n ? b.A.getMessages(n.id).toArray() : []), (0, a.bG)([f.A], () => {
      var t;
      let n = null != (t = f.A.getMemberCount(null == e ? true : e.id)) ? t : 0,
        r = l.some(e => e.type === A.lAJ.USER_JOIN);
      return n > 1 || r
    }, [e, l])),
    guildMessaged: (s = (0, a.bG)([u.A], () => null != e ? u.A.getMutableBasicGuildChannelsForGuild(e.id) : null), t = r.useMemo(() => null == s ? [] : i().values(s), [s]), g = (0, a.bG)([c.default], () => c.default.getId()), (0, a.bG)([b.A], () => i().some(t, e => {
      let t = b.A.getMessages(e.id).toArray();
      return i().some(t, e => e.author.id === g && !(0, o.A)(e))
    }))),
    guildPersonalized: (y = (0, a.bG)([h.A], () => h.A.hasLayers()), (null == (O = (0, a.bG)([p.A], () => p.A.getGuild(null == e ? true : e.id))) ? true : O.icon) != null && !y),
    guildChannelCreated: (0, a.bG)([d.Ay], () => {
      let t = d.Ay.getChannels(null == e ? true : e.id),
        n = t[d.vM];

      function r(t) {
        return null != e && m.default.extractTimestamp(t.channel.id) - m.default.extractTimestamp(e.id) > 500
      }
      return t[d.I6].some(r) || n.some(r)
    }, [e])
  }
}