/** Chunk was on 24255 **/
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
  } = e, o = (0, r.ZP)(t, true), u = (0, r.ZP)(t, false);
  return null == t || null == o ? {
    placeholder: i.intl.string(i.t.MKDeyM),
    accessibilityLabel: i.intl.string(i.t.MKDeyM)
  } : a ? {
    placeholder: i.intl.string(i.t.YzpScX),
    accessibilityLabel: i.intl.string(i.t.YzpScX)
  } : n ? {
    placeholder: i.intl.string(i.t.RRvRp6),
    accessibilityLabel: i.intl.string(i.t.RRvRp6)
  } : t.isForumPost() ? {
    placeholder: i.intl.formatToPlainString(i.t.Y6qWLS, {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.KffKoa, {
      channel: u
    })
  } : l.TPd.THREADS.has(t.type) ? {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/f"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.UZIMWV, {
      channel: u
    })
  } : t.type === l.d4z.DM ? {
    placeholder: i.intl.formatToPlainString(i.t["4c+CAw"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.fqOxbW, {
      channel: u
    })
  } : {
    placeholder: i.intl.formatToPlainString(i.t["8lzR/f"], {
      channel: o
    }),
    accessibilityLabel: i.intl.formatToPlainString(i.t.ih7ZSE, {
      channel: u
    })
  }
}