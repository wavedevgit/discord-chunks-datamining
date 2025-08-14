/** Chunk was on 40725 **/
/** chunk id: 514698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    onConfirm: t,
    onCancel: n,
    channelId: c
  } = e, d = (0, i.e7)([s.Z], () => null != c ? s.Z.getChannel(c) : null), u = (0, a.ZP)(d, true);
  return (0, r.jsx)(l.sYh, {
    dismissable: true,
    header: o.intl.string(o.t.S2eoq6),
    confirmText: o.intl.string(o.t.N86XcH),
    cancelText: o.intl.string(o.t["ETE/oK"]),
    onConfirm: t,
    onCancel: n,
    children: (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: null != d ? o.intl.format(o.t["1KT3Fh"], {
        channelName: u
      }) : o.intl.string(o.t.VOPUV1)
    })
  })
}