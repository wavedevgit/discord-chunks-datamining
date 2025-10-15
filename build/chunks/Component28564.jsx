/** Chunk was on 59128 **/
/** chunk id: 28564, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function e(t) {
  let {
    onClose: i,
    onConfirmDelete: n,
    transitionState: e
  } = t;
  return (0, a.jsx)(r.Modal, {
    transitionState: e,
    "aria-label": l.intl.string(l.t["u/2TkZ"]),
    onClose: i,
    title: l.intl.string(l.t["u/2TkZ"]),
    actions: [{
      text: l.intl.string(l.t["ETE/oK"]),
      variant: "secondary",
      onClick: i
    }, {
      text: l.intl.string(l.t.dO8DLC),
      variant: "critical-primary",
      onClick: n
    }],
    children: (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: l.intl.string(l.t["9sgGbG"])
    })
  })
}