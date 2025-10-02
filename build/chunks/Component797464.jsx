/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    transitionState: n,
    onConfirm: e,
    onClose: c,
    onDismiss: o
  } = t, [d, u] = s.useState(false), [h, b] = s.useState(true), [p, g] = s.useState(true);
  return (0, i.jsx)(a.Modal, {
    transitionState: n,
    onClose: c,
    title: r.intl.string(r.t["6rP+BQ"]),
    subtitle: r.intl.string(r.t["1LuCnZ"]),
    actions: [{
      variant: "secondary",
      text: r.intl.string(r.t["ETE/oK"]),
      onClick: () => {
        o(), c()
      },
      disabled: d
    }, {
      text: r.intl.string(r.t["cY+Ooa"]),
      onClick: () => {
        d || (u(true), e(h, p), u(false), c())
      },
      disabled: d,
      loading: d
    }],
    actionBarInput: (0, i.jsx)(l.XZJ, {
      checked: p,
      onChange: t => {
        g(t)
      },
      label: r.intl.string(r.t.KX8WJi),
      labelType: "secondary"
    }),
    children: (0, i.jsx)(l.rsf, {
      label: r.intl.string(r.t["zLb+u7"]),
      checked: h,
      onChange: t => {
        b(t)
      }
    })
  })
}