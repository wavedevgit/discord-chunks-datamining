/** Chunk was on 83792 **/
/** chunk id: 922529, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk813516 = require("./813516.jsx"),
  Chunk119907 = require("./119907.js");
let A = Chunk64700.forwardRef(function(e, t) {
    var r, a;
    let [s, ...A] = [e, t], {
      className: c,
      isBeforeGroup: u = false
    } = s, _ = function(e, t) {
      if (null == e) return {};
      var r, n, a, s = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
      }
      if (s = function(e, t) {
          if (null == e) return {};
          var r, n, a = {},
            s = Object.getOwnPropertyNames(e);
          for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
          return a
        }(e, t), Object.getOwnPropertySymbols)
        for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
      return s
    }(s, ["className", "isBeforeGroup"]), [I] = A, {
      children: f
    } = _;
    return (0, n.jsx)(i.A, (r = function(e) {
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
    }({}, _), a = a = {
      ref: I,
      role: "separator",
      "aria-label": "string" == typeof f ? f : true,
      className: l()(c, {
        [o.yF]: true,
        [o.ov]: null != f,
        [o.rd]: u
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
    }), r))
  }),
  c = Chunk64700.memo(A)