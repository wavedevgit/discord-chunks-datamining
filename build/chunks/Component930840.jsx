/** Chunk was on 61344 **/
/** chunk id: 930840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk957565 = require("./957565.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk770778 = require("./770778.js");

function h(e) {
  var t, n;
  let {
    chunks: i,
    className: h,
    onCopy: p
  } = e, f = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["chunks", "className", "onCopy"]), m = r.useMemo(() => null == i ? true : i.join(" "), [i]), [g, A] = r.useState(false), b = r.useCallback(() => {
    (0, c.C)(m, () => {
      A(true), null == p || p()
    })
  }, [p, m]), _ = g ? o.yr3 : o.TdU;
  return (0, l.jsx)(o.DUT, {
    className: a()(d.k, h),
    onClick: b,
    children: (0, l.jsx)(s.m, {
      text: g ? u.intl.string(u.t.t5VZ88) : u.intl.string(u.t.OpuAlK),
      children: (0, l.jsx)(_, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, f), n = n = {
        size: "xxs",
        color: g ? o.LU0.colors.TEXT_FEEDBACK_POSITIVE : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  })
}