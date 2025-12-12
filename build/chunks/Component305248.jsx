/** Chunk was on 51235 **/
/** chunk id: 305248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
  Chunk392261 = require("./392261.js");

function v(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: l
  } = e, v = (0, o.Wu)([f.Z, p.Z], () => a()(f.Z.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return b.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return p.Z.getChannel(t)
  }).filter(g.lm).sort((e, t) => b.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), j = i.useCallback((e, t) => {
    (0, h.ok)(e, t, y.on.INBOX)
  }, []);
  return i.useEffect(() => {
    null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== v.length || s.Z.wait(() => {
      (0, c.ack)(t.channelId, {
        section: m.jXE.INBOX,
        object: m.qAy.ACK_INBOX_FORUM_NO_POSTS,
        objectType: m.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true), l(t.channelId)
    })
  }), (0, r.jsx)("div", {
    className: O.container,
    children: v.map(e => (0, r.jsx)(d.oL, {
      channel: n,
      children: (0, r.jsx)(u.ZP, {
        className: O.forumPost,
        threadId: e.id,
        goToThread: j
      })
    }, e.id))
  })
}