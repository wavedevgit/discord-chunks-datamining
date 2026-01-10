/** Chunk was on 91736 **/
/** chunk id: 323597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk904245 = require("./904245.js"),
  Chunk787263 = require("./787263.jsx"),
  Chunk660189 = require("./660189.js"),
  Chunk216572 = require("./216572.js"),
  Chunk144140 = require("./144140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let e = t.isForumPost(),
    n = (0, l.e7)([g.default], () => t.isOwner(g.default.getId()), [t]),
    h = (0, o.HL)(t),
    {
      canManageChannel: p,
      canAccessChannel: v
    } = (0, l.cj)([O.Z], () => ({
      canAccessChannel: O.Z.can(t.accessPermissions, t),
      canManageChannel: O.Z.can(t.isThread() ? b.Plq.MANAGE_THREADS : b.Plq.MANAGE_CHANNELS, t)
    }), [t]),
    y = (0, l.e7)([d.Z], () => {
      var e;
      return null != (e = d.Z.getCount(t.id)) ? e : 0
    }, [t.id]),
    {
      firstMessage: j
    } = (0, l.e7)([c.Z], () => c.Z.getMessage(t.id), [t.id]),
    P = h && p && null == j,
    _ = e && (p || n && y < 1 || P),
    Z = e && n && !p && y > 0 && null != j;
  return v && (!h || P) && (p || _ || Z) ? (0, i.jsx)(r.sNh, {
    id: "delete-channel",
    label: t.type === b.d4z.GUILD_CATEGORY ? m.intl.string(m.t.ifbXnL) : t.isForumPost() ? _ ? m.intl.string(m.t.nEOg1N) : m.intl.string(m.t.xwMqD7) : t.isThread() ? m.intl.string(m.t.H7vTe2) : m.intl.string(m.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, u.w)(t, function() {
        Z ? s.Z.deleteMessage(t.id, f.default.castChannelIdAsMessageId(t.id)) : a.ZP.deleteChannel(t.id)
      })
    }
  }) : null
}