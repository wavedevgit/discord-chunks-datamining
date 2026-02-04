/** Chunk was on 17869 **/
/** chunk id: 668446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Sk: () => _,
  lF: () => y
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

function _(e, t) {
  return (0, a.cf)([g.A], () => ({
    canInvite: (0, s.K)(g.A, t, e),
    canManageGuild: null != t && g.A.can(b.xBc.MANAGE_GUILD, t),
    canMessage: null != e && g.A.can(b.xBc.SEND_MESSAGES, e),
    canCreateChannel: null != t && g.A.can(b.xBc.MANAGE_CHANNELS, t)
  }), [t, e])
}

function y(e) {
  var t;
  let n, r, s, g, _, y;
  return {
    guildPopulated: (n = (0, a.bG)([u.A], () => u.A.getChannel(null == e ? true : e.systemChannelId)), r = (0, a.yK)([m.A], () => null != n ? m.A.getMessages(n.id).toArray() : []), (0, a.bG)([h.A], () => {
      var t;
      let n = null != (t = h.A.getMemberCount(null == e ? true : e.id)) ? t : 0,
        l = r.some(e => e.type === b.lAJ.USER_JOIN);
      return n > 1 || l
    }, [e, r])),
    guildMessaged: (s = (0, a.bG)([u.A], () => null != e ? u.A.getMutableBasicGuildChannelsForGuild(e.id) : null), t = l.useMemo(() => null == s ? [] : i().values(s), [s]), g = (0, a.bG)([c.default], () => c.default.getId()), (0, a.bG)([m.A], () => i().some(t, e => {
      let t = m.A.getMessages(e.id).toArray();
      return i().some(t, e => e.author.id === g && !(0, o.A)(e))
    }))),
    guildPersonalized: (_ = (0, a.bG)([f.A], () => f.A.hasLayers()), (null == (y = (0, a.bG)([p.A], () => p.A.getGuild(null == e ? true : e.id))) ? true : y.icon) != null && !_),
    guildChannelCreated: (0, a.bG)([d.Ay], () => {
      let t = d.Ay.getChannels(null == e ? true : e.id),
        n = t[d.vM];

      function l(t) {
        return null != e && A.default.extractTimestamp(t.channel.id) - A.default.extractTimestamp(e.id) > 500
      }
      return t[d.I6].some(l) || n.some(l)
    }, [e])
  }
}