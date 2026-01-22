/** Chunk was on 55631 **/
/** chunk id: 185074, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => e
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

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