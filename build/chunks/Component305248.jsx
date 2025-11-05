/** Chunk was on 27 **/
/** chunk id: 305248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk45114 = require("./45114.js"),
  Chunk404616 = require("./404616.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk344185 = require("./344185.js"),
  Chunk488131 = require("./488131.js"),
  Chunk592125 = require("./592125.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js"),
  Chunk479014 = require("./479014.js");

function O(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: l
  } = e, O = (0, a.Wu)([p.Z, f.Z], () => o()(p.Z.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return m.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return f.Z.getChannel(t)
  }).filter(g.lm).sort((e, t) => m.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), v = i.useCallback((e, t) => {
    (0, h.ok)(e, t, _.on.INBOX)
  }, []);
  return i.useEffect(() => {
    null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== O.length || s.Z.wait(() => {
      (0, c.ack)(t.channelId, {
        section: b.jXE.INBOX,
        object: b.qAy.ACK_INBOX_FORUM_NO_POSTS,
        objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true), l(t.channelId)
    })
  }), (0, r.jsx)("div", {
    className: y.container,
    children: O.map(e => (0, r.jsx)(d.oL, {
      channel: n,
      children: (0, r.jsx)(u.ZP, {
        className: y.forumPost,
        threadId: e.id,
        goToThread: v
      })
    }, e.id))
  })
}