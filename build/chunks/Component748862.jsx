/** Chunk was on 85045 **/
/** chunk id: 748862, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk979651 = require("./979651.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    username: n,
    onConfirm: i,
    onClose: l,
    transitionState: c
  } = t, d = (0, e.e7)([o.Z], () => o.Z.isCurrentClientInVoiceChannel());
  return (0, a.jsx)(r.Modal, {
    title: s.intl.formatToPlainString(s.t.RNAFdw, {
      username: n
    }),
    onClose: l,
    actions: [{
      text: s.intl.string(s.t["ETE/oC"]),
      onClick: l,
      variant: "secondary"
    }, {
      text: s.intl.string(s.t["7Xq/nV"]),
      onClick: i,
      variant: "primary"
    }],
    subtitle: s.intl.format(s.t["0P8VTO"], {
      username: n
    }) + (d ? " " + s.intl.string(s.t.dFPOQw) : ""),
    transitionState: c
  })
}