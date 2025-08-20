/** Chunk was on 71350 **/
/** chunk id: 323597, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e) {
  let n = e.isForumPost(),
    t = (0, r.e7)([f.default], () => e.isOwner(f.default.getId()), [e]),
    b = (0, u.HL)(e),
    {
      canManageChannel: v,
      canAccessChannel: y
    } = (0, r.cj)([h.Z], () => ({
      canAccessChannel: h.Z.can(e.accessPermissions, e),
      canManageChannel: h.Z.can(e.isThread() ? g.Plq.MANAGE_THREADS : g.Plq.MANAGE_CHANNELS, e)
    }), [e]),
    Z = (0, r.e7)([d.Z], () => {
      var n;
      return null != (n = d.Z.getCount(e.id)) ? n : 0
    }, [e.id]),
    {
      firstMessage: m
    } = (0, r.e7)([c.Z], () => c.Z.getMessage(e.id), [e.id]),
    _ = b && v && null == m,
    j = n && (v || t && Z < 1 || _),
    C = n && t && !v && Z > 0 && null != m;
  return y && (!b || _) && (v || j || C) ? (0, i.jsx)(l.sNh, {
    id: "delete-channel",
    label: e.type === g.d4z.GUILD_CATEGORY ? O.intl.string(O.t.ifbXnJ) : e.isForumPost() ? j ? O.intl.string(O.t.nEOg1N) : O.intl.string(O.t.xwMqDw) : e.isThread() ? O.intl.string(O.t.H7vTe3) : O.intl.string(O.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.w)(e, function() {
        C ? o.Z.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : a.ZP.deleteChannel(e.id)
      })
    }
  }) : null
}