/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function r(t) {
  let {
    transitionState: n,
    onConfirm: e,
    onClose: r,
    onDismiss: o
  } = t, [d, u] = s.useState(false), [b, h] = s.useState(true), [C, k] = s.useState(true);
  return (0, i.jsx)(a.Modal, {
    transitionState: n,
    onClose: r,
    title: c.intl.string(c.t["6rP+Bd"]),
    subtitle: c.intl.string(c.t["1LuCnS"]),
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: () => {
        o(), r()
      },
      disabled: d
    }, {
      text: c.intl.string(c.t["cY+Oob"]),
      onClick: () => {
        d || (u(true), e(b, C), u(false), r())
      },
      disabled: d,
      loading: d
    }],
    actionBarInput: (0, i.jsx)(l.Checkbox, {
      checked: C,
      onChange: t => {
        k(t)
      },
      label: c.intl.string(c.t.KX8WJm),
      labelType: "secondary"
    }),
    children: (0, i.jsx)(l.rsf, {
      label: c.intl.string(c.t["zLb+ux"]),
      checked: b,
      onChange: t => {
        h(t)
      }
    })
  })
}