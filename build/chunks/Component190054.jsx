/** Chunk was on 94904 **/
/** chunk id: 190054, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk974730 = require("./974730.js");

function f(e) {
  var t, r, {
      chunks: o,
      className: f,
      onCopy: p
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var r, n, c = function(e, t) {
        if (null == e) return {};
        var r, n, c = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (c[r] = e[r]);
        return c
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r])
      }
      return c
    }(e, ["chunks", "className", "onCopy"]);
  let O = c.useMemo(() => null == o ? true : o.join(" "), [o]),
    [y, j] = c.useState(false),
    h = c.useCallback(() => {
      (0, a.JG)(O, () => {
        j(true), null == p || p()
      })
    }, [p, O]),
    g = y ? s.owK : s.TIy;
  return (0, n.jsx)(s.P3F, {
    className: l()(d.container, f),
    onClick: h,
    children: (0, n.jsx)(i.u, {
      text: y ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
      children: (0, n.jsx)(g, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, b), r = r = {
        size: "xxs",
        color: y ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : s.TVs.colors.INTERACTIVE_TEXT_DEFAULT
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    })
  })
}