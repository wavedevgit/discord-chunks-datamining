/** Chunk was on 4117 **/
/** chunk id: 217723, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    transitionState: n,
    onConfirm: i,
    onClose: o,
    onDismiss: l
  } = t, [r, u] = s.useState(false), d = async () => {
    if (!r) {
      u(true);
      try {
        await i()
      } catch (t) {} finally {
        u(false)
      }
      o()
    }
  }, k = () => (l(), o());
  return (0, a.jsx)(c.Modal, {
    transitionState: n,
    onClose: k,
    title: e.intl.string(e.t["66tnno"]),
    subtitle: e.intl.string(e.t["c/k4SW"]),
    actions: [{
      text: e.intl.string(e.t["ETE/oC"]),
      onClick: k,
      variant: "secondary"
    }, {
      text: e.intl.string(e.t["cY+Oob"]),
      onClick: d,
      loading: r
    }]
  })
}