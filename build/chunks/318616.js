/** Chunk was on 33648 **/
/** chunk id: 318616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => i
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk408433 = require("./408433.js");

function i(e) {
  var t, n, i;
  let {
    message: s,
    channel: o,
    forwardOptions: u
  } = e, c = null == u ? true : u.onlyAttachmentIds, d = null == u ? true : u.onlyEmbedIndices, h = null != (i = null == (t = s.messageSnapshots[0]) ? true : t.message) ? i : s, m = h.attachments;
  null != c ? m = h.attachments.filter(e => c.includes(e.id)) : null != d && (m = []);
  let g = [];
  return (0, l.e7)([a.Z], () => null != o && !(0, r.eC)(o, a.Z) && (0, r.En)(s)) || (g = h.embeds, null != d ? g = h.embeds.filter((e, t) => d.includes(t)) : null != c && (g = [])), (null != d || "" === h.content && g.length > 0) && (h = h.set("content", g.map(e => e.url).join("\n"))), "" === h.content && (null == (n = h.embeds[0]) ? true : n.rawDescription) != null && (h = h.set("content", h.embeds[0].rawDescription)), {
    attachments: m,
    embeds: g,
    hasContent: "" !== h.content && null == c,
    contentMessage: h
  }
}