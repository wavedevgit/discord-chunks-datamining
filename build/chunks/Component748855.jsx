/** Chunk was on 21616 **/
/** chunk id: 748855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk948790 = require("./948790.js"),
  Chunk334405 = require("./334405.js");

function d(e) {
  let {
    label: t,
    icon: n,
    isSelected: l = false,
    setStatus: d,
    clearStatus: p,
    isFavorited: h,
    onFavoriteClick: f
  } = e, [m, g] = i.useState(false), b = m && l, y = null != f, C = i.useCallback(() => {
    b ? null == p || p() : d()
  }, [b, p, d]), _ = i.useCallback(e => {
    e.stopPropagation(), null == f || f()
  }, [f]);
  return (0, r.jsxs)(s.P3F, {
    onClick: C,
    onMouseEnter: () => {
      g(true)
    },
    onMouseLeave: () => {
      g(false)
    },
    className: a()(u.item, u.labelContainer, c.container, {
      [c.isSelected]: l
    }),
    children: [n, (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      className: c.itemText,
      children: t
    }), l ? (0, r.jsx)(s.k$p, {
      className: c.closeIcon,
      color: m ? o.Z.colors.ICON_PRIMARY : o.Z.colors.ICON_SECONDARY
    }) : m && y && (0, r.jsx)(s.P3F, {
      onClick: _,
      children: (0, r.jsx)(s.r7p, {
        className: c.closeIcon,
        color: h ? o.Z.colors.ICON_FEEDBACK_WARNING : true
      })
    })]
  })
}