/** Chunk was on 94904 **/
/** chunk id: 190054, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk481775 = require("./481775.js");

function f(e) {
  var t, r, {
      chunks: c,
      className: f,
      onCopy: p
    } = e,
    b = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["chunks", "className", "onCopy"]);
  let O = o.useMemo(() => null == c ? true : c.join(" "), [c]),
    [y, j] = o.useState(false),
    h = o.useCallback(() => {
      (0, a.JG)(O, () => {
        j(true), null == p || p()
      })
    }, [p, O]),
    m = y ? s.owK : s.TIy;
  return (0, n.jsx)(s.P3F, {
    className: i()(d.container, f),
    onClick: h,
    children: (0, n.jsx)(l.u, {
      text: y ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
      children: (0, n.jsx)(m, (t = function(e) {
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
        color: y ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : s.TVs.colors.INTERACTIVE_NORMAL
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