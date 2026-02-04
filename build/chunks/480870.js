/** Chunk was on 17869 **/
/** chunk id: 480870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk47167 = require("./47167.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    channel: t,
    isReadonly: n = false,
    isCreatingThread: a = false
  } = e, s = (0, l.Ay)(t, true), o = (0, l.Ay)(t, false);
  return null == t || null == s ? {
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
      channel: s
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoR, {
      channel: o
    })
  } : r.kvI.THREADS.has(t.type) ? {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
      channel: s
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWS, {
      channel: o
    })
  } : t.type === r.rbe.DM ? {
    placeholder: i.intl.formatToPlainString(i.t["4c+CAx"], {
      channel: s
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbV, {
      channel: o
    })
  } : {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/R"], {
      channel: s
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSA, {
      channel: o
    })
  }
}