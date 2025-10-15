/** Chunk was on 33356 **/
/** chunk id: 477782, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
      title: l.intl.string(l.t["ISN+ND"]),
      actions: [{
        text: l.intl.string(l.t["ETE/oK"]),
        onClick: n,
        variant: "secondary"
      }, {
        text: l.intl.string(l.t["ISN+ND"]),
        variant: "primary",
        type: "submit",
        autoFocus: false,
        disabled: "" === u
      }],
      transitionState: i,
      onClose: n,
      children: (0, e.jsx)(o.oil, {
        label: l.intl.string(l.t.OCAkGB),
        value: u,
        onChange: c,
        maxLength: 100,
        placeholder: l.intl.string(l.t.eTVbt7),
        autoFocus: true
      })
    })
  })
}