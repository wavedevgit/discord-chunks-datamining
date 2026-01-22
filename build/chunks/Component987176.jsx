/** Chunk was on 61841 **/
/** chunk id: 987176, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk985018 = require("./985018.jsx");

function l(t) {
  let {
    transitionState: i,
    onConfirm: n,
    onClose: l,
    onDismiss: o
  } = t, [r, u] = s.useState(false), d = async () => {
    if (!r) {
      u(true);
      try {
        await n()
      } catch (t) {} finally {
        u(false)
      }
      l()
    }
  }, k = () => (o(), l());
  return (0, a.jsx)(e.Modal, {
    transitionState: i,
    onClose: k,
    title: c.intl.string(c.t["66tnno"]),
    subtitle: c.intl.string(c.t["c/k4SW"]),
    actions: [{
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: k,
      variant: "secondary"
    }, {
      text: c.intl.string(c.t["cY+Oob"]),
      onClick: d,
      loading: r
    }]
  })
}