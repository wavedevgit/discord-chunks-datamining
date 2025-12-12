/** Chunk was on 93197 **/
/** chunk id: 848876, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk502577 = require("./502577.js");

function u(t) {
  let {
    onConfirm: e,
    onClose: n,
    guildName: u,
    transitionState: c
  } = t, [f, d] = i.useState(""), [m, p] = i.useState(null), x = i.useMemo(() => [{
    text: l.intl.string(l.t["ETE/oC"]),
    onClick: n,
    variant: "secondary"
  }, {
    text: l.intl.string(l.t.l3hWP6),
    variant: "critical-primary",
    type: "submit"
  }], [n]);
  return (0, r.jsx)("form", {
    onSubmit: function(t) {
      if (t.preventDefault(), f.toLowerCase() !== u.toLowerCase()) return void p(l.intl.string(l.t["c2/DS/"]));
      null == e || e(), n()
    },
    children: (0, r.jsxs)(a.u_l, {
      title: l.intl.formatToPlainString(l.t.us7mC1, {
        name: u
      }),
      subtitle: l.intl.format(l.t["Zuo+Vd"], {
        name: u
      }),
      actions: x,
      onClose: n,
      transitionState: c,
      children: [(0, r.jsx)(o.oil, {
        id: "text-entry-confirm",
        type: "text",
        label: l.intl.string(l.t.abprOC),
        value: f,
        autoComplete: "off",
        onChange: d,
        autoFocus: true
      }), null != m && "" !== m ? (0, r.jsx)(o.Text, {
        color: "text-feedback-critical",
        variant: "text-xs/normal",
        className: s.error,
        children: m
      }) : null]
    })
  })
}