/** Chunk was on 8818 **/
/** chunk id: 764871, original params: e,t,n (module,exports,require) **/
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
    forwardOptions: c
  } = e, u = null == c ? true : c.onlyAttachmentIds, d = null == c ? true : c.onlyEmbedIndices, h = null != (i = null == (t = s.messageSnapshots[0]) ? true : t.message) ? i : s, m = h.attachments;
  null != u ? m = h.attachments.filter(e => u.includes(e.id)) : null != d && (m = []);
  let g = [];
  return (0, a.e7)([l.Z], () => null != o && !(0, r.eC)(o, l.Z) && (0, r.En)(s)) || (g = h.embeds, null != d ? g = h.embeds.filter((e, t) => d.includes(t)) : null != u && (g = [])), (null != d || "" === h.content && g.length > 0) && (h = h.set("content", g.map(e => e.url).join("\n"))), "" === h.content && (null == (n = h.embeds[0]) ? true : n.rawDescription) != null && (h = h.set("content", h.embeds[0].rawDescription)), {
    attachments: m,
    embeds: g,
    hasContent: "" !== h.content && null == u,
    contentMessage: h
  }
}