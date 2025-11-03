/** Chunk was on 89250 **/
/** chunk id: 323597, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function Z(t) {
  let n = t.isForumPost(),
    e = (0, a.e7)([h.default], () => t.isOwner(h.default.getId()), [t]),
    Z = (0, u.HL)(t),
    {
      canManageChannel: b,
      canAccessChannel: p
    } = (0, a.cj)([f.Z], () => ({
      canAccessChannel: f.Z.can(t.accessPermissions, t),
      canManageChannel: f.Z.can(t.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, t)
    }), [t]),
    C = (0, a.e7)([c.Z], () => {
      var n;
      return null != (n = c.Z.getCount(t.id)) ? n : 0
    }, [t.id]),
    {
      firstMessage: _
    } = (0, a.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
    O = Z && b && null == _,
    N = n && (b || e && C < 1 || O),
    j = n && e && !b && C > 0 && null != _;
  return p && (!Z || O) && (b || N || j) ? (0, i.jsx)(l.sNh, {
    id: "delete-channel",
    label: t.type === v.d4z.GUILD_CATEGORY ? m.intl.string(m.t.ifbXnL) : t.isForumPost() ? N ? m.intl.string(m.t.nEOg1N) : m.intl.string(m.t.xwMqD7) : t.isThread() ? m.intl.string(m.t.H7vTe2) : m.intl.string(m.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, o.w)(t, function() {
        j ? s.Z.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id)
      })
    }
  }) : null
}