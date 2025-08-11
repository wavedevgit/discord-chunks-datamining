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
    forwardOptions: c
  } = e, u = null == c ? true : c.onlyAttachmentIds, d = null == c ? true : c.onlyEmbedIndices, h = null != (i = null == (t = s.messageSnapshots[0]) ? true : t.message) ? i : s, f = h.attachments;
  null != u ? f = h.attachments.filter(e => u.includes(e.id)) : null != d && (f = []);
  let m = [];
  return (0, l.e7)([r.Z], () => null != o && !(0, a.eC)(o, r.Z) && (0, a.En)(s)) || (m = h.embeds, null != d ? m = h.embeds.filter((e, t) => d.includes(t)) : null != u && (m = [])), (null != d || "" === h.content && m.length > 0) && (h = h.set("content", m.map(e => e.url).join("\n"))), "" === h.content && (null == (n = h.embeds[0]) ? true : n.rawDescription) != null && (h = h.set("content", h.embeds[0].rawDescription)), {
    attachments: f,
    embeds: m,
    hasContent: "" !== h.content && null == u,
    contentMessage: h
  }
}