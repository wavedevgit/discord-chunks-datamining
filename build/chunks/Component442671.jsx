/** Chunk was on 78376 **/
/** chunk id: 442671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk331011 = require("./331011.js");
let p = e => {
  let {
    userId: t,
    children: n,
    isLast: l,
    className: p
  } = e, [m, g] = i.useState(false), {
    analyticsLocations: A
  } = (0, d.Ay)(), f = i.useCallback(() => {
    (0, u.openUserProfileModal)({
      userId: t,
      sourceAnalyticsLocations: A
    })
  }, [t, A]), b = () => {
    g(true)
  }, h = () => {
    g(false)
  };
  return (0, r.jsx)(o.tG, {
    id: t,
    children: e => {
      var t, i;
      return (0, r.jsx)(c.vN3, {
        offset: {
          left: false,
          right: false
        },
        children: (0, r.jsx)(a.A.div, (t = function(e) {
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
        }({
          style: {
            opacity: 1
          },
          className: s()(_.KG, p, {
            [_.HV]: l,
            [_.vu]: m
          }),
          onMouseEnter: b,
          onMouseLeave: h,
          onClick: f
        }, e), i = i = {
          children: n(m)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      })
    }
  })
}