/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    transitionState: n,
    onConfirm: e,
    onClose: o,
    onDismiss: c
  } = t, [d, u] = a.useState(false), [h, p] = a.useState(true), [b, g] = a.useState(true);
  return (0, i.jsx)(s.Modal, {
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
        d || (u(true), e(h, b), u(false), o())
      },
      disabled: d,
      loading: d
    }],
    actionBarInput: (0, i.jsx)(l.XZJ, {
      checked: b,
      onChange: t => {
        g(t)
      },
      label: r.intl.string(r.t.KX8WJi),
      labelType: "secondary"
    }),
    children: (0, i.jsx)(l.j7V, {
      hideBorder: true,
      onChange: t => {
        p(t)
      },
      value: h,
      children: r.intl.string(r.t["zLb+u7"])
    })
  })
}