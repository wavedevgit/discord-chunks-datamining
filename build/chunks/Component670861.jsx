/** Chunk was on 21738 **/
/** chunk id: 670861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk883344 = require("./883344.js"),
  Chunk691611 = require("./691611.jsx"),
  Chunk659088 = require("./659088.js");

function p(e) {
  let {
    item: t
  } = e, {
    channelId: n,
    messageIds: p,
    title: h
  } = i.useMemo(() => {
    switch (t.data.kind) {
      case "message":
        return {
          channelId: t.data.message.channel_id, messageIds: [t.data.message.id], title: true
        };
      case "generatedCandidate":
        return {
          channelId: t.data.item.channel_id, messageIds: t.data.item.message_ids.slice(0, 1), title: t.data.item.primary_text
        };
      case "forumThread":
        return {
          channelId: t.data.threadChannel.id, messageIds: [t.data.message.id], title: true
        };
      default:
        return {
          channelId: true, messageIds: [], title: true
        }
    }
  }, [t]), g = (0, l.bG)([a.A], () => null != n ? a.A.getChannel(n) : null, [n]), m = (0, l.bG)([s.A], () => (null == g ? true : g.guild_id) != null ? s.A.getGuild(g.guild_id) : null, [g]), f = (0, l.yK)([c.A, o.A], () => null == n ? [] : p.map(e => {
    var t;
    return null != (t = c.A.getMessage(e)) ? t : o.A.getMessage(n, e)
  }).filter(e => null != e), [n, p]);
  return null == g || null == m || 0 === f.length ? null : (0, r.jsxs)("div", {
    className: d.kL,
    children: [null != h ? (0, r.jsx)("div", {
      className: d.gn,
      children: (0, r.jsx)("div", {
        className: d.DD,
        children: h
      })
    }) : null, (0, r.jsx)("div", {
      className: d.MJ,
      children: f.map(e => (0, r.jsx)(u.A, {
        channel: g,
        message: e,
        renderThreadAccessory: false,
        disableReactionCreates: false,
        disableReactionUpdates: false
      }, e.id))
    })]
  })
}