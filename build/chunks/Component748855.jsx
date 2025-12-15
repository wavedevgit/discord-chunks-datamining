/** Chunk was on 40184 **/
/** chunk id: 748855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk106301 = require("./106301.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk227426 = require("./227426.js"),
  Chunk564546 = require("./564546.js");

function m(e) {
  let {
    label: t,
    icon: n,
    setStatus: l,
    isFavorited: m,
    onFavoriteClick: g
  } = e, [b, C] = r.useState(false), y = (0, o.e7)([d.Z], () => d.Z.getFavoritedStatuses().length >= d.o), v = null != g, x = r.useCallback(e => {
    e.stopPropagation(), null == g || g()
  }, [g]), O = m ? u.r7p : u.vxU;
  return (0, i.jsxs)(u.P3F, {
    onClick: l,
    onMouseEnter: () => {
      C(true)
    },
    onMouseLeave: () => {
      C(false)
    },
    className: a()(h.item, h.labelContainer, f.container),
    children: [n, (0, i.jsx)(u.Text, {
      variant: "text-md/normal",
      className: f.itemText,
      children: t
    }), b && v && (0, i.jsx)(c.u, {
      text: y && !m ? p.intl.string(p.t.YSDH9n) : true,
      children: (0, i.jsx)(u.P3F, {
        className: a()(f.centerAlign, f.favoriteIcon),
        onClick: x,
        children: (0, i.jsx)(O, {
          className: f.closeIcon,
          color: m ? s.Z.colors.ICON_FEEDBACK_WARNING : "currentColor"
        })
      })
    })]
  })
}