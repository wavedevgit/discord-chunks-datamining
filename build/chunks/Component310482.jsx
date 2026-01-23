/** Chunk was on 45199 **/
/** chunk id: 310482, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk945280 = require("./945280.js");

function u(t) {
  let {
    onConfirm: e,
    onClose: n,
    guildName: u,
    transitionState: c
  } = t, [m, p] = i.useState(""), [d, x] = i.useState(null), f = i.useMemo(() => [{
    text: o.intl.string(o.t["ETE/oC"]),
    onClick: n,
    variant: "secondary"
  }, {
    text: o.intl.string(o.t.l3hWP6),
    variant: "critical-primary",
    type: "submit"
  }], [n]);
  return (0, a.jsx)("form", {
    onSubmit: function(t) {
      (t.preventDefault(), m.toLowerCase() !== u.toLowerCase()) ? x(o.intl.string(o.t["c2/DS/"])): (null == e || e(), n())
    },
    children: (0, a.jsxs)(r.aFV, {
      title: o.intl.formatToPlainString(o.t.us7mC1, {
        name: u
      }),
      subtitle: o.intl.format(o.t["Zuo+Vd"], {
        name: u
      }),
      actions: f,
      onClose: n,
      transitionState: c,
      children: [(0, a.jsx)(l.ksK, {
        id: "text-entry-confirm",
        type: "text",
        label: o.intl.string(o.t.abprOC),
        value: m,
        autoComplete: "off",
        onChange: p,
        autoFocus: true
      }), null != d && "" !== d ? (0, a.jsx)(l.Text, {
        color: "text-feedback-critical",
        variant: "text-xs/normal",
        className: s.z,
        children: d
      }) : null]
    })
  })
}