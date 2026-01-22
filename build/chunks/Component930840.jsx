/** Chunk was on 46115 **/
/** chunk id: 930840, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  c: () => p
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

function p(e) {
  var t, r;
  let {
    chunks: o,
    className: p,
    onCopy: f
  } = e, y = function(e, t) {
    if (null == e) return {};
    var r, n, c, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (c = 0, r = Reflect.ownKeys(e); c < r.length; c++) n = r[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var r, n, c = {},
          o = Object.getOwnPropertyNames(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
        return c
      }(e, t), Object.getOwnPropertySymbols)
      for (c = 0, r = Object.getOwnPropertySymbols(e); c < r.length; c++) n = r[c], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    return o
  }(e, ["chunks", "className", "onCopy"]), O = c.useMemo(() => null == o ? true : o.join(" "), [o]), [d, j] = c.useState(false), m = c.useCallback(() => {
    (0, i.C)(O, () => {
      j(true), null == f || f()
    })
  }, [f, O]), g = d ? s.yr3 : s.TdU;
  return (0, n.jsx)(s.DUT, {
    className: l()(b.k, p),
    onClick: m,
    children: (0, n.jsx)(a.m, {
      text: d ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
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
      }({}, y), r = r = {
        size: "xxs",
        color: d ? s.LU0.colors.TEXT_FEEDBACK_POSITIVE : s.LU0.colors.INTERACTIVE_TEXT_DEFAULT
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