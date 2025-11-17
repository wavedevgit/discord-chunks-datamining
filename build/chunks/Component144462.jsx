/** Chunk was on 94005 **/
/** chunk id: 144462, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
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
    title: o.intl.string(o.t.Df4aUN),
    subtitle: o.intl.string(o.t.eOWEmL),
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: () => {
        c()
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.bt75uw),
      onClick: () => {
        i(d)
      }
    }],
    children: (0, e.jsx)(l.Kx8, {
      placeholder: o.intl.string(o.t.gDZw7A),
      value: d,
      onChange: h,
      maxLength: r._6
    })
  })
}