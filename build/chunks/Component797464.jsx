/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    transitionState: n,
    onConfirm: i,
    onClose: d,
    onDismiss: c
  } = t, [u, h] = a.useState(false), [p, g] = a.useState(true), [x, C] = a.useState(true);
  return (0, e.jsx)(s.Modal, {
    transitionState: n,
    onClose: d,
    title: o.intl.string(o.t["6rP+BQ"]),
    subtitle: o.intl.string(o.t["1LuCnZ"]),
    actions: [{
      variant: "secondary",
      text: o.intl.string(o.t["ETE/oK"]),
      onClick: () => {
        c(), d()
      },
      disabled: u
    }, {
      text: o.intl.string(o.t["cY+Ooa"]),
      onClick: () => {
        u || (h(true), i(p, x), h(false), d())
      },
      disabled: u,
      loading: u
    }],
    actionBarInput: (0, e.jsx)(r.$q, {
      value: x,
      type: r.M0.INVERTED,
      onChange: (t, n) => {
        C(n)
      },
      children: (0, e.jsx)(l.Text, {
        tag: "span",
        variant: "text-sm/normal",
        children: o.intl.string(o.t.KX8WJi)
      })
    }),
    children: (0, e.jsx)(l.j7V, {
      hideBorder: true,
      onChange: t => {
        g(t)
      },
      value: p,
      children: o.intl.string(o.t["zLb+u7"])
    })
  })
}