/** Chunk was on 98865 **/
/** chunk id: 307623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608226 = require("./608226.jsx"),
  Chunk969043 = require("./969043.js"),
  Chunk715757 = require("./715757.js"),
  Chunk456874 = require("./456874.js"),
  Chunk961350 = require("./961350.js"),
  Chunk576705 = require("./576705.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  let t = e.isForumPost(),
    n = (0, i.bG)([f.default], () => e.isOwner(f.default.getId()), [e]),
    g = (0, u.V)(e),
    {
      canManageChannel: h,
      canAccessChannel: O
    } = (0, i.cf)([A.A], () => ({
      canAccessChannel: A.A.can(e.accessPermissions, e),
      canManageChannel: A.A.can(e.isThread() ? p.xBc.MANAGE_THREADS : p.xBc.MANAGE_CHANNELS, e)
    }), [e]),
    m = (0, i.bG)([d.A], () => {
      var t;
      return null != (t = d.A.getCount(e.id)) ? t : 0
    }, [e.id]),
    {
      firstMessage: y
    } = (0, i.bG)([c.A], () => c.A.getMessage(e.id), [e.id]),
    _ = g && h && null == y,
    j = t && (h || n && m < 1 || _),
    C = t && n && !h && m > 0 && null != y;
  return O && (!g || _) && (h || j || C) ? (0, r.jsx)(l.Drp, {
    id: "delete-channel",
    label: e.type === p.rbe.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnL) : e.isForumPost() ? j ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqD7) : e.isThread() ? v.intl.string(v.t.H7vTe2) : v.intl.string(v.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.O)(e, function() {
        C ? o.A.deleteMessage(e.id, b.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id)
      })
    }
  }) : null
}