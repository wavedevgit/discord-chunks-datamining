/** Chunk was on 30202 **/
/** chunk id: 250285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk708816 = require("./708816.jsx"),
  Chunk748780 = require("./748780.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk326218 = require("./326218.js");
let p = e => {
  let {
    userId: t,
    children: n,
    isLast: s,
    className: p
  } = e, [g, h] = r.useState(false), {
    analyticsLocations: f
  } = (0, d.ZP)(), b = r.useCallback(() => {
    (0, u.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: f
    })
  }, [t, f]), x = () => {
    h(true)
  }, _ = () => {
    h(false)
  };
  return (0, i.jsx)(c.mh, {
    id: t,
    children: e => {
      var t, r;
      return (0, i.jsx)(l.tE, {
        offset: {
          left: false,
          right: false
        },
        children: (0, i.jsx)(o.Z.div, (t = function(e) {
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
        }({
          style: {
            opacity: 1
          },
          className: a()(m.rowItem, p, {
            [m.last]: s,
            [m.active]: g
          }),
          onMouseEnter: x,
          onMouseLeave: _,
          onClick: b
        }, e), r = r = {
          children: n(g)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      })
    }
  })
}