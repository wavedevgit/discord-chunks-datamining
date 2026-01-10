/** Chunk was on 69813 **/
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
  } = e, o = (0, r.ZP)(t, true), c = (0, r.ZP)(t, false);
  return null == t || null == o ? {
    placeholder: i.intl.string(i.t.MKDeyL),
    accessibilityLabel: i.intl.string(i.t.MKDeyL)
  } : a ? {
    placeholder: i.intl.string(i.t.YzpScd),
    accessibilityLabel: i.intl.string(i.t.YzpScd)
  } : n ? {
    placeholder: i.intl.string(i.t["RRvRp/"]),
    accessibilityLabel: i.intl.string(i.t["RRvRp/"])
  } : t.isForumPost() ? {
    placeholder: i.intl.formatToPlainString(i.t.Y6qWLc, {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoR, {
      channel: c
    })
  } : l.TPd.THREADS.has(t.type) ? {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWS, {
      channel: c
    })
  } : t.type === l.d4z.DM ? {
    placeholder: i.intl.formatToPlainString(i.t["4c+CAx"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbV, {
      channel: c
    })
  } : {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSA, {
      channel: c
    })
  }
}