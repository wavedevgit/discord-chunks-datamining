/** Chunk was on 68784 **/
n.d(t, {
  Z: () => s
}), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(192379),
  a = n(442837),
  o = n(703558),
  l = n(117530),
  i = n(524100);

function s(e) {
  var t, n;
  let {
    channelId: s,
    localCreationAnswerId: c,
    image: u
  } = e, d = null == u ? void 0 : u.emoji, f = (null == u ? void 0 : null === (t = u.mediaAttachmentState) || void 0 === t ? void 0 : t.status) === i._.PREPARING, m = (0, a.e7)([l.Z], () => l.Z.getUpload(s, c, o.d.Poll)), [p, b] = r.useState(), [g, h] = r.useState("");
  return r.useEffect(() => {
    var e;
    if ((null == m ? void 0 : null === (e = m.item) || void 0 === e ? void 0 : e.file) == null) return;
    let t = URL.createObjectURL(m.item.file);
    return b(t), h(m.item.file.name), () => {
      URL.revokeObjectURL(t)
    }
  }, [null == m ? void 0 : null === (n = m.item) || void 0 === n ? void 0 : n.file]), {
    emoji: d,
    isLoadingMedia: f,
    hasUpload: null != m,
    upload: m,
    mediaUrl: p,
    mediaFilename: g
  }
}