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
    onDismiss: d
  } = t, [c, u] = a.useState(false), [h, p] = a.useState(true), [g, x] = a.useState(true);
  return (0, e.jsx)(s.Modal, {
    transitionState: n,
    onClose: o,
    title: l.intl.string(l.t["6rP+BQ"]),
    subtitle: l.intl.string(l.t["1LuCnZ"]),
    actions: [{
      variant: "secondary",
      text: l.intl.string(l.t["ETE/oK"]),
      onClick: () => {
        d(), o()
      },
      disabled: c
    }, {
      text: l.intl.string(l.t["cY+Ooa"]),
      onClick: () => {
        c || (u(true), i(h, g), u(false), o())
      },
      disabled: c,
      loading: c
    }],
    actionBarInput: (0, e.jsx)(r.XZJ, {
      value: g,
      type: r.XZJ.Types.INVERTED,
      onChange: (t, n) => {
        x(n)
      },
      children: (0, e.jsx)(r.Text, {
        tag: "span",
        variant: "text-sm/normal",
        children: l.intl.string(l.t.KX8WJi)
      })
    }),
    children: (0, e.jsx)(r.j7V, {
      hideBorder: true,
      onChange: t => {
        p(t)
      },
      value: h,
      children: l.intl.string(l.t["zLb+u7"])
    })
  })
}