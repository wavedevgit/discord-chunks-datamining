/** Chunk was on 77870 **/
/** chunk id: 955454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk334738 = require("./334738.js"),
  Chunk835369 = require("./835369.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk970278 = require("./970278.js"),
  Chunk747926 = require("./747926.js"),
  Chunk734057 = require("./734057.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk37411 = require("./37411.js"),
  Chunk357976 = require("./357976.js");

function _(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: i
  } = e, _ = (0, a.yK)([p.A, f.A], () => s()(p.A.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return m.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return f.A.getChannel(t)
  }).filter(g.Vq).sort((e, t) => m.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), O = l.useCallback((e, t) => {
    (0, h.JA)(e, t, A.H9.INBOX)
  }, []);
  return l.useEffect(() => {
    null == n || !t.isFullyLoaded || t.hasError || t.collapsed || 0 !== _.length || o.h.wait(() => {
      (0, c.ack)(t.channelId, {
        section: b.JJy.INBOX,
        object: b.ZSU.ACK_INBOX_FORUM_NO_POSTS,
        objectType: b.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true), i(t.channelId)
    })
  }), (0, r.jsx)("div", {
    className: y.k,
    children: _.map(e => (0, r.jsx)(d.Cp, {
      channel: n,
      children: (0, r.jsx)(u.Ay, {
        className: y.u,
        threadId: e.id,
        goToThread: O
      })
    }, e.id))
  })
}