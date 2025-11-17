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
  Chunk658855 = require("./658855.js");

function u(t) {
  let {
    onConfirm: e,
    onClose: n,
    guildName: u,
    transitionState: c
  } = t, [d, m] = i.useState(""), [p, f] = i.useState(null), x = i.useMemo(() => [{
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
      if (t.preventDefault(), d.toLowerCase() !== u.toLowerCase()) return void f(l.intl.string(l.t["c2/DS/"]));
      null == e || e(), n()
    },
    children: (0, r.jsxs)(o.u_l, {
      title: l.intl.formatToPlainString(l.t.us7mC1, {
        name: u
      }),
      subtitle: l.intl.format(l.t["Zuo+Vd"], {
        name: u
      }),
      actions: x,
      onClose: n,
      transitionState: c,
      children: [(0, r.jsx)(a.oil, {
        id: "text-entry-confirm",
        type: "text",
        label: l.intl.string(l.t.abprOC),
        value: d,
        autoComplete: "off",
        onChange: m,
        autoFocus: true
      }), null != p && "" !== p ? (0, r.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: s.error,
        children: p
      }) : null]
    })
  })
}