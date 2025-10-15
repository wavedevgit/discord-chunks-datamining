/** Chunk was on 4117 **/
/** chunk id: 217723, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function l(t) {
  let {
    transitionState: n,
    onConfirm: i,
    onClose: l,
    onDismiss: o
  } = t, [r, u] = s.useState(false), d = async () => {
    if (!r) {
      u(true);
      try {
        await i()
      } catch (t) {} finally {
        u(false)
      }
      l()
    }
  }, p = () => (o(), l());
  return (0, a.jsx)(c.Modal, {
    transitionState: n,
    onClose: p,
    title: e.intl.string(e.t["66tnnp"]),
    subtitle: e.intl.string(e.t["c/k4SU"]),
    actions: [{
      text: e.intl.string(e.t["ETE/oK"]),
      onClick: p,
      variant: "secondary"
    }, {
      text: e.intl.string(e.t["cY+Ooa"]),
      onClick: d,
      loading: r
    }]
  })
}