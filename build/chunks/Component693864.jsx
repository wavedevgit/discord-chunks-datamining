/** Chunk was on 19729 **/
/** chunk id: 693864, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => r
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function r(t) {
  let {
    transitionState: e,
    onConfirm: n,
    onClose: r,
    onDismiss: d
  } = t, [o, u] = s.useState(false), [b, h] = s.useState(true), [C, k] = s.useState(true);
  return (0, i.jsx)(a.Modal, {
    transitionState: e,
    onClose: r,
    title: c.intl.string(c.t["6rP+Bd"]),
    subtitle: c.intl.string(c.t["1LuCnS"]),
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: () => {
        d(), r()
      },
      disabled: o
    }, {
      text: c.intl.string(c.t["cY+Oob"]),
      onClick: () => {
        o || (u(true), n(b, C), u(false), r())
      },
      disabled: o,
      loading: o
    }],
    actionBarInput: (0, i.jsx)(l.Checkbox, {
      checked: C,
      onChange: t => {
        k(t)
      },
      label: c.intl.string(c.t.KX8WJm),
      labelType: "secondary"
    }),
    children: (0, i.jsx)(l.dOG, {
      label: c.intl.string(c.t["zLb+ux"]),
      checked: b,
      onChange: t => {
        h(t)
      }
    })
  })
}