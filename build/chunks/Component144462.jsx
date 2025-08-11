/** Chunk was on 94005 **/
/** chunk id: 144462, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    initialCustomMessage: n,
    onSubmit: i,
    onClose: c,
    transitionState: u
  } = t, [d, h] = s.useState(n);
  return (0, e.jsx)(a.Modal, {
    onClose: c,
    transitionState: u,
    title: o.intl.string(o.t.Df4aUF),
    subtitle: o.intl.string(o.t.eOWEmJ),
    actions: [{
      text: o.intl.string(o.t["ETE/oK"]),
      onClick: () => {
        c()
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.bt75u7),
      onClick: () => {
        i(d)
      }
    }],
    children: (0, e.jsx)(l.Kx8, {
      placeholder: o.intl.string(o.t.gDZw7O),
      value: d,
      onChange: h,
      maxLength: r._6
    })
  })
}