/** Chunk was on 34078 **/
/** chunk id: 952116, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk13008 = require("./13008.jsx"),
  Chunk854378 = require("./854378.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk930774 = require("./930774.js"),
  Chunk473169 = require("./473169.js");

function h(e) {
  let {
    title: t,
    subtitle: r,
    error: h,
    onSubmit: d,
    onCancel: p
  } = e;
  return (0, n.jsxs)(i.A, {
    direction: i.A.Direction.VERTICAL,
    children: [(0, n.jsx)(a.hE, {
      className: u.QB,
      children: t
    }), (0, n.jsx)(a.tK, {
      className: c.p6,
      children: r
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(l.A, {
        inputClassName: c.IX,
        onSubmit: d
      }), null != h ? (0, n.jsx)(s.Text, {
        className: c.z3,
        variant: "text-sm/normal",
        children: h
      }) : null]
    }), null != p && (0, n.jsx)("div", {
      className: c.x6,
      children: (0, n.jsx)(s.Button, {
        text: o.intl.string(o.t["ETE/oC"]),
        variant: "secondary",
        fullWidth: true,
        onClick: p
      })
    })]
  })
}