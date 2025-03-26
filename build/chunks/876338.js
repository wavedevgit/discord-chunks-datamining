/** Chunk was on 52272 **/
n.d(t, {
  j: () => o
});
var r = n(406432),
  i = n(981631);

function o(e, t) {
  let {
    targetKind: n,
    embedIndex: o
  } = t;
  if ("media" === n) {
    var a, l;
    let t = e;
    return (null === (a = e.messageReference) || void 0 === a ? void 0 : a.type) === i.Uvt.FORWARD && (t = null === (l = e.messageSnapshots[0]) || void 0 === l ? void 0 : l.message), {
      onlyAttachmentIds: null == t ? void 0 : t.attachments.filter(e => {
        let {
          filename: t
        } = e;
        return (0, r.CO)(t) || (0, r.NU)(t)
      }).map(e => e.id)
    }
  }
  return "embed" === n && null != o ? {
    onlyEmbedIndices: [o]
  } : "shortcut" === n ? {} : void 0
}