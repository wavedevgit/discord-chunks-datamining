/** Chunk was on 98350 **/
/** chunk id: 323597, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(t) {
  let e = t.isForumPost(),
    n = (0, l.e7)([f.default], () => t.isOwner(f.default.getId()), [t]),
    h = (0, c.HL)(t),
    {
      canManageChannel: E,
      canAccessChannel: _
    } = (0, l.cj)([g.Z], () => ({
      canAccessChannel: g.Z.can(t.accessPermissions, t),
      canManageChannel: g.Z.can(t.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, t)
    }), [t]),
    b = (0, l.e7)([d.Z], () => {
      var e;
      return null != (e = d.Z.getCount(t.id)) ? e : 0
    }, [t.id]),
    {
      firstMessage: C
    } = (0, l.e7)([u.Z], () => u.Z.getMessage(t.id), [t.id]),
    y = h && E && null == C,
    N = e && (E || n && b < 1 || y),
    A = e && n && !E && b > 0 && null != C;
  return _ && (!h || y) && (E || N || A) ? (0, i.jsx)(a.sNh, {
    id: "delete-channel",
    label: t.type === v.d4z.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnJ) : t.isForumPost() ? N ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqDw) : t.isThread() ? p.intl.string(p.t.H7vTe3) : p.intl.string(p.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.w)(t, function() {
        A ? o.Z.deleteMessage(t.id, O.default.castChannelIdAsMessageId(t.id)) : r.ZP.deleteChannel(t.id)
      })
    }
  }) : null
}