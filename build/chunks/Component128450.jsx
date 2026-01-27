/** Chunk was on 82220 **/
/** chunk id: 128450, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./747238.js"), require("./812715.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk453771 = require("./453771.js"),
  Chunk450232 = require("./450232.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk317448 = require("./317448.js");

function f(e) {
  let {
    errors: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: n.map((e, n) => (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: s.gJ,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let n = 1024 * parseInt(e, 10);
        return isNaN(n) ? e : (0, c.Hb)(n)
      })
    }, n))
  })
}
let h = Chunk64700.forwardRef(function(e, n) {
  let {
    title: t,
    titleIcon: i,
    titleId: l,
    description: c,
    children: h,
    className: v,
    errors: m,
    disabled: g = false,
    hideDivider: p = false,
    showBorder: x = false,
    borderType: A,
    hasBackground: _ = false,
    forcedDivider: b = false,
    showPremiumIcon: j = false
  } = e;
  return (0, r.jsx)("div", {
    className: a()(s.fz, v, {
      [s.r9]: g,
      [s.Ai]: p,
      [s.Ac]: x,
      [s.Cx]: b
    }),
    ref: n,
    children: (0, r.jsxs)(o.A, {
      className: s.D6,
      backgroundClassName: s.fr,
      isShown: x,
      type: A,
      hasBackground: _,
      children: [(0, r.jsxs)(d.zEo, {
        className: s.DD,
        id: l,
        "data-migration-pending": true,
        children: [t, j && (0, r.jsx)(u.A, {}), i]
      }), null != c ? (0, r.jsx)(d.ayl, {
        type: d.ayl.Types.DESCRIPTION,
        className: s.yV,
        "data-migration-pending": true,
        children: c
      }) : null, h, null != m && (0, r.jsx)(f, {
        errors: m
      })]
    })
  })
})