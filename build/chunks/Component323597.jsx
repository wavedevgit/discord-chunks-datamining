/** Chunk was on 98350 **/
/** chunk id: 323597, original params: e,t,n (module,exports,require) **/
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

function h(e) {
  let t = e.isForumPost(),
    n = (0, a.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
    h = (0, c.HL)(e),
    {
      canManageChannel: E,
      canAccessChannel: _
    } = (0, a.cj)([g.Z], () => ({
      canAccessChannel: g.Z.can(e.accessPermissions, e),
      canManageChannel: g.Z.can(e.isThread() ? p.Plq.MANAGE_THREADS : p.Plq.MANAGE_CHANNELS, e)
    }), [e]),
    b = (0, a.e7)([d.Z], () => {
      var t;
      return null != (t = d.Z.getCount(e.id)) ? t : 0
    }, [e.id]),
    {
      firstMessage: C
    } = (0, a.e7)([u.Z], () => u.Z.getMessage(e.id), [e.id]),
    y = h && E && null == C,
    N = t && (E || n && b < 1 || y),
    A = t && n && !E && b > 0 && null != C;
  return _ && (!h || y) && (E || N || A) ? (0, i.jsx)(l.sNh, {
    id: "delete-channel",
    label: e.type === p.d4z.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnJ) : e.isForumPost() ? N ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqDw) : e.isThread() ? v.intl.string(v.t.H7vTe3) : v.intl.string(v.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.w)(e, function() {
        A ? o.Z.deleteMessage(e.id, O.default.castChannelIdAsMessageId(e.id)) : r.ZP.deleteChannel(e.id)
      })
    }
  }) : null
}