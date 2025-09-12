/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    transitionState: n,
    onConfirm: i,
    onClose: o,
    onDismiss: c
  } = t, [d, u] = a.useState(false), [h, b] = a.useState(true), [g, p] = a.useState(true);
  return (0, e.jsx)(s.Modal, {
    transitionState: n,
    onClose: o,
    title: r.intl.string(r.t["6rP+BQ"]),
    subtitle: r.intl.string(r.t["1LuCnZ"]),
    actions: [{
      variant: "secondary",
      text: r.intl.string(r.t["ETE/oK"]),
      onClick: () => {
        c(), o()
      },
      disabled: d
    }, {
      text: r.intl.string(r.t["cY+Ooa"]),
      onClick: () => {
        d || (u(true), i(h, g), u(false), o())
      },
      disabled: d,
      loading: d
    }],
    actionBarInput: (0, e.jsx)(l.XZJ, {
      checked: g,
      onChange: t => {
        p(t)
      },
      label: r.intl.string(r.t.KX8WJi),
      labelSize: "small"
    }),
    children: (0, e.jsx)(l.j7V, {
      hideBorder: true,
      onChange: t => {
        b(t)
      },
      value: h,
      children: r.intl.string(r.t["zLb+u7"])
    })
  })
}