/** Chunk was on 73726 **/
/** chunk id: 655687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk933557 = require("./933557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    channel: t,
    isReadonly: n = false,
    isCreatingThread: a = false
  } = e, o = (0, r.ZP)(t, true), s = (0, r.ZP)(t, false);
  return null == t || null == o ? {
    placeholder: l.intl.string(l.t.MKDeyL),
    accessibilityLabel: l.intl.string(l.t.MKDeyL)
  } : a ? {
    placeholder: l.intl.string(l.t.YzpScd),
    accessibilityLabel: l.intl.string(l.t.YzpScd)
  } : n ? {
    placeholder: l.intl.string(l.t["RRvRp/"]),
    accessibilityLabel: l.intl.string(l.t["RRvRp/"])
  } : t.isForumPost() ? {
    placeholder: l.intl.formatToPlainString(l.t.Y6qWLc, {
      channel: o
    }),
    accessibilityLabel: l.intl.formatToPlainString(l.t.KffKoR, {
      channel: s
    })
  } : i.TPd.THREADS.has(t.type) ? {
    placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], {
      channel: o
    }),
    accessibilityLabel: l.intl.formatToPlainString(l.t.UZIMWS, {
      channel: s
    })
  } : t.type === i.d4z.DM ? {
    placeholder: l.intl.formatToPlainString(l.t["4c+CAx"], {
      channel: o
    }),
    accessibilityLabel: l.intl.formatToPlainString(l.t.fqOxbV, {
      channel: s
    })
  } : {
    placeholder: l.intl.formatToPlainString(l.t["8lzR/R"], {
      channel: o
    }),
    accessibilityLabel: l.intl.formatToPlainString(l.t.ih7ZSA, {
      channel: s
    })
  }
}