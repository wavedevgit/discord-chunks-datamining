/** Chunk was on 80037 **/
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
    clearStatus: h,
    isFavorited: f,
    onFavoriteClick: m
  } = e, [g, b] = i.useState(false), y = g && l, C = y ? c.intl.string(c.t.S90Fub) : t, _ = null != m, v = i.useCallback(() => {
    y ? null == h || h() : p()
  }, [y, h, p]), x = i.useCallback(e => {
    e.stopPropagation(), null == m || m()
  }, [m]);
  return (0, r.jsxs)(s.P3F, {
    onClick: v,
    onMouseEnter: () => {
      b(true)
    },
    onMouseLeave: () => {
      b(false)
    },
    className: a()(d.item, d.labelContainer, u.container, {
      [u.isSelected]: l
    }),
    children: [n, (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: u.itemText,
      children: C
    }), l ? (0, r.jsx)(s.k$p, {
      className: u.closeIcon,
      color: g ? o.Z.colors.ICON_PRIMARY : o.Z.colors.ICON_SECONDARY
    }) : g && _ && (0, r.jsx)(s.P3F, {
      onClick: x,
      children: (0, r.jsx)(s.r7p, {
        className: u.closeIcon,
        color: f ? o.Z.colors.ICON_FEEDBACK_WARNING : true
      })
    })]
  })
}