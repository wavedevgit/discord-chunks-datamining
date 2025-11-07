/** Chunk was on 13140 **/
/** chunk id: 748855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk106301 = require("./106301.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk948790 = require("./948790.js"),
  Chunk334405 = require("./334405.js");

function h(e) {
  let {
    label: t,
    icon: n,
    setStatus: l,
    isFavorited: h,
    onFavoriteClick: m
  } = e, [g, b] = i.useState(false), _ = (0, o.e7)([u.Z], () => u.Z.getFavoritedStatuses().length >= u.o), y = i.useCallback(e => {
    e.stopPropagation(), null == m || m()
  }, [m]), C = h ? c.r7p : c.vxU;
  return (0, r.jsxs)(c.P3F, {
    onClick: l,
    onMouseEnter: () => {
      b(true)
    },
    onMouseLeave: () => {
      b(false)
    },
    className: a()(f.item, f.labelContainer, p.container),
    children: [n, (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      className: p.itemText,
      children: t
    }), g && null != m && (0, r.jsx)(c.aML, {
      "data-migration-pending": true,
      text: _ && !h ? d.intl.string(d.t.YSDH9n) : true,
      children: e => {
        var t, n;
        return (0, r.jsx)(c.P3F, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), n = n = {
          className: a()(p.centerAlign, p.favoriteIcon),
          onClick: y,
          children: (0, r.jsx)(C, {
            className: p.closeIcon,
            color: h ? s.Z.colors.ICON_FEEDBACK_WARNING : "currentColor"
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}