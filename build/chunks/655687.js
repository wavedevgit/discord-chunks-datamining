/** Chunk was on 12416 **/
n.d(t, {
  Z: () => o
});
var r = n(933557),
  i = n(981631),
  l = n(388032);

function o(e) {
  let {
    channel: t,
    isReadonly: n = !1,
    isCreatingThread: o = !1
  } = e, a = (0, r.ZP)(t, !0), s = (0, r.ZP)(t, !1);
  return null == t || null == a ? {
    placeholder: l.NW.string(l.t.MKDeyM),
    accessibilityLabel: l.NW.string(l.t.MKDeyM)
  } : o ? {
    placeholder: l.NW.string(l.t.YzpScX),
    accessibilityLabel: l.NW.string(l.t.YzpScX)
  } : n ? {
    placeholder: l.NW.string(l.t.RRvRp6),
    accessibilityLabel: l.NW.string(l.t.RRvRp6)
  } : t.isForumPost() ? {
    placeholder: l.NW.formatToPlainString(l.t.Y6qWLS, {
      channel: a
    }),
    accessibilityLabel: l.NW.formatToPlainString(l.t.KffKoa, {
      channel: s
    })
  } : i.TPd.THREADS.has(t.type) ? {
    placeholder: l.NW.formatToPlainString(l.t["8lzR/f"], {
      channel: a
    }),
    accessibilityLabel: l.NW.formatToPlainString(l.t.UZIMWV, {
      channel: s
    })
  } : t.type === i.d4z.DM ? {
    placeholder: l.NW.formatToPlainString(l.t["4c+CAw"], {
      channel: a
    }),
    accessibilityLabel: l.NW.formatToPlainString(l.t.fqOxbW, {
      channel: s
    })
  } : {
    placeholder: l.NW.formatToPlainString(l.t["8lzR/f"], {
      channel: a
    }),
    accessibilityLabel: l.NW.formatToPlainString(l.t.ih7ZSE, {
      channel: s
    })
  }
}