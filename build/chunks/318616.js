/** Chunk was on 33648 **/
/** chunk id: 318616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk496675 = require("./496675.js"),
  Chunk408433 = require("./408433.js");

function s(e) {
  var t, n, s;
  let {
    message: i,
    channel: o,
    forwardOptions: u
  } = e, c = null == u ? true : u.onlyAttachmentIds, d = null == u ? true : u.onlyEmbedIndices, h = null != (s = null == (t = i.messageSnapshots[0]) ? true : t.message) ? s : i, f = h.attachments;
  null != c ? f = h.attachments.filter(e => c.includes(e.id)) : null != d && (f = []);
  let m = [];
  return (0, l.e7)([r.Z], () => null != o && !(0, a.eC)(o, r.Z) && (0, a.En)(i)) || (m = h.embeds, null != d ? m = h.embeds.filter((e, t) => d.includes(t)) : null != c && (m = [])), (null != d || "" === h.content && m.length > 0) && (h = h.set("content", m.map(e => e.url).join("\n"))), "" === h.content && (null == (n = h.embeds[0]) ? true : n.rawDescription) != null && (h = h.set("content", h.embeds[0].rawDescription)), {
    attachments: f,
    embeds: m,
    hasContent: "" !== h.content && null == c,
    contentMessage: h
  }
}