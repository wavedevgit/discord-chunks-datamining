/** Chunk was on 72879 **/
/** chunk id: 48274, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk977997 = require("./977997.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    username: n,
    onConfirm: i,
    onClose: o,
    transitionState: c
  } = t, d = (0, e.bG)([s.A], () => s.A.isCurrentClientInVoiceChannel());
  return (0, a.jsx)(r.Modal, {
    title: l.intl.formatToPlainString(l.t.RNAFdw, {
      username: n
    }),
    onClose: o,
    actions: [{
      text: l.intl.string(l.t["ETE/oC"]),
      onClick: o,
      variant: "secondary"
    }, {
      text: l.intl.string(l.t["7Xq/nV"]),
      onClick: i,
      variant: "primary"
    }],
    subtitle: l.intl.format(l.t["0P8VTO"], {
      username: n
    }) + (d ? " " + l.intl.string(l.t.dFPOQw) : ""),
    transitionState: c
  })
}