/** Chunk was on 34740 **/
/** chunk id: 748855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk106301 = require("./106301.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948790 = require("./948790.js"),
  Chunk334405 = require("./334405.js");

function f(e) {
  let {
    label: t,
    icon: n,
    setStatus: l,
    isFavorited: f,
    onFavoriteClick: m
  } = e, [g, b] = r.useState(false), C = (0, o.e7)([u.Z], () => u.Z.getFavoritedStatuses().length >= u.o), y = r.useCallback(e => {
    e.stopPropagation(), null == m || m()
  }, [m]), v = f ? c.r7p : c.vxU;
  return (0, i.jsxs)(c.P3F, {
    onClick: l,
    onMouseEnter: () => {
      b(true)
    },
    onMouseLeave: () => {
      b(false)
    },
    className: a()(h.item, h.labelContainer, p.container),
    children: [n, (0, i.jsx)(c.Text, {
      variant: "text-md/normal",
      className: p.itemText,
      children: t
    }), g && null != m && (0, i.jsx)(c.aML, {
      "data-migration-pending": true,
      text: C && !f ? d.intl.string(d.t.YSDH9n) : true,
      children: e => {
        var t, n;
        return (0, i.jsx)(c.P3F, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, e), n = n = {
          className: a()(p.centerAlign, p.favoriteIcon),
          onClick: y,
          children: (0, i.jsx)(v, {
            className: p.closeIcon,
            color: f ? s.Z.colors.ICON_FEEDBACK_WARNING : "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}