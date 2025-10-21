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
    n = (0, l.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
    h = (0, c.HL)(e),
    {
      canManageChannel: _,
      canAccessChannel: E
    } = (0, l.cj)([g.Z], () => ({
      canAccessChannel: g.Z.can(e.accessPermissions, e),
      canManageChannel: g.Z.can(e.isThread() ? v.Plq.MANAGE_THREADS : v.Plq.MANAGE_CHANNELS, e)
    }), [e]),
    b = (0, l.e7)([d.Z], () => {
      var t;
      return null != (t = d.Z.getCount(e.id)) ? t : 0
    }, [e.id]),
    {
      firstMessage: C
    } = (0, l.e7)([u.Z], () => u.Z.getMessage(e.id), [e.id]),
    y = h && _ && null == C,
    N = t && (_ || n && b < 1 || y),
    A = t && n && !_ && b > 0 && null != C;
  return E && (!h || y) && (_ || N || A) ? (0, i.jsx)(a.sNh, {
    id: "delete-channel",
    label: e.type === v.d4z.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnL) : e.isForumPost() ? N ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7) : e.isThread() ? p.intl.string(p.t.H7vTe2) : p.intl.string(p.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.w)(e, function() {
        A ? o.Z.deleteMessage(e.id, O.default.castChannelIdAsMessageId(e.id)) : r.ZP.deleteChannel(e.id)
      })
    }
  }) : null
}