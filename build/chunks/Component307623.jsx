/** Chunk was on 78441 **/
/** chunk id: 307623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function v(t) {
  let e = t.isForumPost(),
    n = (0, r.bG)([A.default], () => t.isOwner(A.default.getId()), [t]),
    v = (0, u.V)(t),
    {
      canManageChannel: b,
      canAccessChannel: m
    } = (0, r.cf)([f.A], () => ({
      canAccessChannel: f.A.can(t.accessPermissions, t),
      canManageChannel: f.A.can(t.isThread() ? h.xBc.MANAGE_THREADS : h.xBc.MANAGE_CHANNELS, t)
    }), [t]),
    _ = (0, r.bG)([c.A], () => {
      var e;
      return null != (e = c.A.getCount(t.id)) ? e : 0
    }, [t.id]),
    {
      firstMessage: C
    } = (0, r.bG)([d.A], () => d.A.getMessage(t.id), [t.id]),
    O = v && b && null == C,
    j = e && (b || n && _ < 1 || O),
    y = e && n && !b && _ > 0 && null != C;
  return m && (!v || O) && (b || j || y) ? (0, i.jsx)(l.Drp, {
    id: "delete-channel",
    label: t.type === h.rbe.GUILD_CATEGORY ? p.intl.string(p.t.ifbXnL) : t.isForumPost() ? j ? p.intl.string(p.t.nEOg1N) : p.intl.string(p.t.xwMqD7) : t.isThread() ? p.intl.string(p.t.H7vTe2) : p.intl.string(p.t["8D8Rsb"]),
    color: "danger",
    action: () => {
      (0, s.O)(t, function() {
        y ? o.A.deleteMessage(t.id, g.default.castChannelIdAsMessageId(t.id)) : a.Ay.deleteChannel(t.id)
      })
    }
  }) : null
}