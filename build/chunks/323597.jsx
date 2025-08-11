/** Chunk was on 46154 **/
/** chunk id: 323597, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk904245 = require("./904245.js"),
  Chunk787263 = require("./787263.js"),
  Chunk660189 = require("./660189.js"),
  Chunk216572 = require("./216572.js"),
  Chunk144140 = require("./144140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk496675 = require("./496675.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");

function p(t) {
  let n = t.isForumPost(),
    e = (0, a.e7)([f.default], () => t.isOwner(f.default.getId()), [t]),
    p = (0, u.HL)(t),
    {
      canManageChannel: b,
      canAccessChannel: C
    } = (0, a.cj)([h.Z], () => ({
      canAccessChannel: h.Z.can(t.accessPermissions, t),
      canManageChannel: h.Z.can(t.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, t)
    }), [t]),
    m = (0, a.e7)([c.Z], () => {
      var n;
      return null != (n = c.Z.getCount(t.id)) ? n : 0
    }, [t.id]),
    {
      firstMessage: _
    } = (0, a.e7)([d.Z], () => d.Z.getMessage(t.id), [t.id]),
    E = p && b && null == _,
    O = n && (b || e && m < 1 || E),
    N = n && e && !b && m > 0 && null != _;
  return C && (!p || E) && (b || O || N) ? <l.sNh id={"delete-channel"} label={t.type === g.d4z.GUILD_CATEGORY ? Z.intl.string(Z.t.ifbXnJ) : t.isForumPost() ? O ? Z.intl.string(Z.t.nEOg1N) : Z.intl.string(Z.t.xwMqDw) : t.isThread() ? Z.intl.string(Z.t.H7vTe3) : Z.intl.string(Z.t["8D8Rsb"])} color={"danger"} action={() => {
      (0, s.w)(t, function() {
        N ? o.Z.deleteMessage(t.id, v.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id)
      })
    }} /> : null
}