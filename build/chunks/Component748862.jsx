/** Chunk was on 85045 **/
/** chunk id: 748862, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk468026 = require("./468026.jsx"),
  Chunk979651 = require("./979651.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    username: n,
    onConfirm: i,
    onClose: s,
    transitionState: c
  } = t, d = (0, r.e7)([a.Z], () => a.Z.isCurrentClientInVoiceChannel());
  return (0, e.jsx)(o.default, {
    confirmText: l.intl.string(l.t["7Xq/nZ"]),
    title: l.intl.formatToPlainString(l.t.RNAFd3, {
      username: n
    }),
    cancelText: l.intl.string(l.t["ETE/oK"]),
    onConfirm: i,
    onClose: s,
    body: l.intl.format(l.t["0P8VTE"], {
      username: n
    }) + (d ? " " + l.intl.string(l.t.dFPOQ0) : ""),
    transitionState: c
  })
}