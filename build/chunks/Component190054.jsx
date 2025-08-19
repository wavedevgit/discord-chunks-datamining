/** Chunk was on 94904 **/
/** chunk id: 190054, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk198473 = require("./198473.js");

function d(e) {
  var {
    chunks: t,
    className: r,
    onCopy: c
  } = e, d = function(e, t) {
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
  let f = o.useMemo(() => null == t ? true : t.join(" "), [t]),
    [p, b] = o.useState(false),
    O = o.useCallback(() => {
      (0, s.JG)(f, () => {
        b(true), null == c || c()
      })
    }, [c, f]),
    y = p ? i.owK : i.TIy;
  return (0, n.jsx)(i.P3F, {
    className: l()(u.container, r),
    onClick: O,
    children: (0, n.jsx)(i.ua7, {
      text: p ? a.intl.string(a.t["t5VZ8/"]) : a.intl.string(a.t.OpuAlJ),
      children: e => {
        var t, r;
        return (0, n.jsx)(y, (t = function(e) {
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
        }({}, d, e), r = r = {
          size: "xxs",
          color: p ? i.TVs.colors.TEXT_FEEDBACK_POSITIVE : i.TVs.colors.INTERACTIVE_NORMAL
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
      }
    })
  })
}