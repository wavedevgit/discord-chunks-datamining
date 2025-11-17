/** Chunk was on 33356 **/
/** chunk id: 477782, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk117984 = require("./117984.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let {
    onClose: n,
    transitionState: i
  } = t, [u, c] = a.useState("");
  return (0, e.jsx)("form", {
    onSubmit: function(t) {
      t.preventDefault(), (0, r.CM)(u), n()
    },
    children: (0, e.jsx)(s.Modal, {
      title: l.intl.string(l.t["ISN+NM"]),
      actions: [{
        text: l.intl.string(l.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
      }, {
        text: l.intl.string(l.t["ISN+NM"]),
        variant: "primary",
        type: "submit",
        autoFocus: false,
        disabled: "" === u
      }],
      transitionState: i,
      onClose: n,
      children: (0, e.jsx)(o.oil, {
        label: l.intl.string(l.t.OCAkGP),
        value: u,
        onChange: c,
        maxLength: 100,
        placeholder: l.intl.string(l.t.eTVbtx),
        autoFocus: true
      })
    })
  })
}