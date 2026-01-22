/** Chunk was on 28020 **/
/** chunk id: 395199, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk422258 = require("./422258.js"),
  Chunk985018 = require("./985018.jsx");

function u(t) {
  let {
    onClose: n,
    transitionState: e
  } = t, [u, c] = a.useState("");
  return (0, i.jsx)("form", {
    onSubmit: function(t) {
      t.preventDefault(), (0, l.od)(u), n()
    },
    children: (0, i.jsx)(o.Modal, {
      title: s.intl.string(s.t["ISN+NM"]),
      actions: [{
        text: s.intl.string(s.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
      }, {
        text: s.intl.string(s.t["ISN+NM"]),
        variant: "primary",
        type: "submit",
        autoFocus: false,
        disabled: "" === u
      }],
      transitionState: e,
      onClose: n,
      children: (0, i.jsx)(r.ksK, {
        label: s.intl.string(s.t.OCAkGP),
        value: u,
        onChange: c,
        maxLength: 100,
        placeholder: s.intl.string(s.t.eTVbtx),
        autoFocus: true
      })
    })
  })
}