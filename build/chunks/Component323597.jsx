/** Chunk was on 89250 **/
/** chunk id: 323597, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(t) {
  let n = t.isForumPost(),
    e = (0, a.e7)([h.default], () => t.isOwner(h.default.getId()), [t]),
    m = (0, u.HL)(t),
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
    O = m && b && null == _,
    N = n && (b || e && C < 1 || O),
    j = n && e && !b && C > 0 && null != _;
  return p && (!m || O) && (b || N || j) ? (0, i.jsx)(l.sNh, {
    id: "delete-channel",
    label: t.type === v.d4z.GUILD_CATEGORY ? Z.intl.string(Z.t.ifbXnL) : t.isForumPost() ? N ? Z.intl.string(Z.t.nEOg1N) : Z.intl.string(Z.t.xwMqD7) : t.isThread() ? Z.intl.string(Z.t.H7vTe2) : Z.intl.string(Z.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, o.w)(t, function() {
        j ? s.Z.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id)
      })
    }
  }) : null
}