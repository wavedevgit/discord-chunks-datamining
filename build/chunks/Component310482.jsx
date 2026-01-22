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
  } = t, [d, m] = i.useState(""), [p, x] = i.useState(null), f = i.useMemo(() => [{
    text: s.intl.string(s.t["ETE/oC"]),
    onClick: n,
    variant: "secondary"
  }, {
    text: s.intl.string(s.t.l3hWP6),
    variant: "critical-primary",
    type: "submit"
  }], [n]);
  return (0, a.jsx)("form", {
    onSubmit: function(t) {
      (t.preventDefault(), d.toLowerCase() !== u.toLowerCase()) ? x(s.intl.string(s.t["c2/DS/"])): (null == e || e(), n())
    },
    children: (0, a.jsxs)(l.aFV, {
      title: s.intl.formatToPlainString(s.t.us7mC1, {
        name: u
      }),
      subtitle: s.intl.format(s.t["Zuo+Vd"], {
        name: u
      }),
      actions: f,
      onClose: n,
      transitionState: c,
      children: [(0, a.jsx)(r.ksK, {
        id: "text-entry-confirm",
        type: "text",
        label: s.intl.string(s.t.abprOC),
        value: d,
        autoComplete: "off",
        onChange: m,
        autoFocus: true
      }), null != p && "" !== p ? (0, a.jsx)(r.Text, {
        color: "text-feedback-critical",
        variant: "text-xs/normal",
        className: o.z,
        children: p
      }) : null]
    })
  })
}