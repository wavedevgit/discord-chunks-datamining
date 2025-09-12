/** Chunk was on 70127 **/
/** chunk id: 748855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk103198 = require("./103198.js"),
  Chunk515527 = require("./515527.js");

function p(e) {
  let {
    label: t,
    icon: n,
    isSelected: l = false,
    setStatus: p,
    clearStatus: h
  } = e, [f, m] = i.useState(false), g = f && l, b = g ? c.intl.string(c.t.S90Fub) : t, y = i.useCallback(() => {
    g ? null == h || h() : p()
  }, [g, h, p]);
  return (0, r.jsxs)(s.P3F, {
    onClick: y,
    onMouseEnter: () => {
      m(true)
    },
    onMouseLeave: () => {
      m(false)
    },
    className: a()(d.item, d.labelContainer, u.container, {
      [u.isSelected]: l
    }),
    children: [n, (0, r.jsx)(s.Text, {
      color: g ? "text-danger" : f || l ? "text-primary" : "text-secondary",
      variant: "text-sm/medium",
      className: u.itemText,
      children: b
    }), l && (0, r.jsx)(s.k$p, {
      className: u.closeIcon,
      color: g ? o.Z.colors.TEXT_DANGER : true
    })]
  })
}