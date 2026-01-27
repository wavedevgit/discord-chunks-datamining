/** Chunk was on 86901 **/
/** chunk id: 307623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let t = e.isForumPost(),
    n = (0, i.bG)([f.default], () => e.isOwner(f.default.getId()), [e]),
    h = (0, u.V)(e),
    {
      canManageChannel: g,
      canAccessChannel: O
    } = (0, i.cf)([A.A], () => ({
      canAccessChannel: A.A.can(e.accessPermissions, e),
      canManageChannel: A.A.can(e.isThread() ? b.xBc.MANAGE_THREADS : b.xBc.MANAGE_CHANNELS, e)
    }), [e]),
    y = (0, i.bG)([d.A], () => {
      var t;
      return null != (t = d.A.getCount(e.id)) ? t : 0
    }, [e.id]),
    {
      firstMessage: m
    } = (0, i.bG)([s.A], () => s.A.getMessage(e.id), [e.id]),
    _ = h && g && null == m,
    C = t && (g || n && y < 1 || _),
    E = t && n && !g && y > 0 && null != m;
  return O && (!h || _) && (g || C || E) ? (0, r.jsx)(l.Drp, {
    id: "delete-channel",
    label: e.type === b.rbe.GUILD_CATEGORY ? v.intl.string(v.t.ifbXnL) : e.isForumPost() ? C ? v.intl.string(v.t.nEOg1N) : v.intl.string(v.t.xwMqD7) : e.isThread() ? v.intl.string(v.t.H7vTe2) : v.intl.string(v.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, c.O)(e, function() {
        E ? o.A.deleteMessage(e.id, p.default.castChannelIdAsMessageId(e.id)) : a.Ay.deleteChannel(e.id)
      })
    }
  }) : null
}