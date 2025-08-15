/** Chunk was on 78650 **/
/** chunk id: 323597, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function Z(e) {
  let t = e.isForumPost(),
    n = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
    Z = (0, u.HL)(e),
    {
      canManageChannel: p,
      canAccessChannel: m
    } = (0, r.cj)([h.Z], () => ({
      canAccessChannel: h.Z.can(e.accessPermissions, e),
      canManageChannel: h.Z.can(e.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, e)
    }), [e]),
    O = (0, r.e7)([c.Z], () => {
      var t;
      return null != (t = c.Z.getCount(e.id)) ? t : 0
    }, [e.id]),
    {
      firstMessage: _
    } = (0, r.e7)([d.Z], () => d.Z.getMessage(e.id), [e.id]),
    j = Z && p && null == _,
    E = t && (p || n && O < 1 || j),
    y = t && n && !p && O > 0 && null != _;
  return m && (!Z || j) && (p || E || y) ? (0, i.jsx)(l.sNh, {
    id: "delete-channel",
    label: e.type === v.d4z.GUILD_CATEGORY ? b.intl.string(b.t.ifbXnJ) : e.isForumPost() ? E ? b.intl.string(b.t.nEOg1N) : b.intl.string(b.t.xwMqDw) : e.isThread() ? b.intl.string(b.t.H7vTe3) : b.intl.string(b.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.w)(e, function() {
        y ? o.Z.deleteMessage(e.id, g.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id)
      })
    }
  }) : null
}