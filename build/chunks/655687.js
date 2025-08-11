/** Chunk was on web.js **/
/** chunk id: 655687, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, s = (0, r.ZP)(t, true), l = (0, r.ZP)(t, false);
  return null == t || null == s ? {
    placeholder: o.intl.string(o.t.MKDeyM),
    accessibilityLabel: o.intl.string(o.t.MKDeyM)
  } : a ? {
    placeholder: o.intl.string(o.t.YzpScX),
    accessibilityLabel: o.intl.string(o.t.YzpScX)
  } : n ? {
    placeholder: o.intl.string(o.t.RRvRp6),
    accessibilityLabel: o.intl.string(o.t.RRvRp6)
  } : t.isForumPost() ? {
    placeholder: o.intl.formatToPlainString(o.t.Y6qWLS, {
      channel: s
    }),
    accessibilityLabel: o.intl.formatToPlainString(o.t.KffKoa, {
      channel: l
    })
  } : i.TPd.THREADS.has(t.type) ? {
    placeholder: o.intl.formatToPlainString(o.t["8lzR/f"], {
      channel: s
    }),
    accessibilityLabel: o.intl.formatToPlainString(o.t.UZIMWV, {
      channel: l
    })
  } : t.type === i.d4z.DM ? {
    placeholder: o.intl.formatToPlainString(o.t["4c+CAw"], {
      channel: s
    }),
    accessibilityLabel: o.intl.formatToPlainString(o.t.fqOxbW, {
      channel: l
    })
  } : {
    placeholder: o.intl.formatToPlainString(o.t["8lzR/f"], {
      channel: s
    }),
    accessibilityLabel: o.intl.formatToPlainString(o.t.ih7ZSE, {
      channel: l
    })
  }
}