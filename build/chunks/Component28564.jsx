/** Chunk was on 59128 **/
/** chunk id: 28564, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    "aria-label": l.intl.string(l.t["u/2TkU"]),
    onClose: i,
    title: l.intl.string(l.t["u/2TkU"]),
    actions: [{
      text: l.intl.string(l.t["ETE/oC"]),
      variant: "secondary",
      onClick: i
    }, {
      text: l.intl.string(l.t.dO8DLI),
      variant: "critical-primary",
      onClick: n
    }],
    children: (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: l.intl.string(l.t["9sgGbL"])
    })
  })
}