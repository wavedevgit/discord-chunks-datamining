/** Chunk was on 46115 **/
/** chunk id: 930840, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk770778 = require("./770778.js");

function d(e) {
  var t, r;
  let {
    chunks: c,
    className: d,
    onCopy: f
  } = e, b = function(e, t) {
    if (null == e) return {};
    var r, n, o, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["chunks", "className", "onCopy"]), y = o.useMemo(() => null == c ? true : c.join(" "), [c]), [O, j] = o.useState(false), m = o.useCallback(() => {
    (0, i.C)(y, () => {
      j(true), null == f || f()
    })
  }, [f, y]), g = O ? a.yr3 : a.TdU;
  return (0, n.jsx)(a.DUT, {
    className: l()(p.k, d),
    onClick: m,
    children: (0, n.jsx)(s.m, {
      text: O ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
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
        color: O ? a.LU0.colors.TEXT_FEEDBACK_POSITIVE : a.LU0.colors.INTERACTIVE_TEXT_DEFAULT
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