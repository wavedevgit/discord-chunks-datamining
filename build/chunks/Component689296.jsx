/** Chunk was on 5606 **/
/** chunk id: 689296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927078 = require("./927078.js");

function c(e) {
  var t, n;
  let {
    children: c,
    lineClamp: d = 2
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["children", "lineClamp"]), [p, _] = i.useState(false), [m, g] = i.useState(null), f = null != m && (0, r.jsx)("button", {
    className: o.x6,
    onClick: () => _(e => !e),
    children: (0, r.jsxs)(s.Text, {
      className: o.B0,
      variant: "text-sm/medium",
      color: "text-brand",
      children: [p ? a.intl.string(a.t["JQX/Pb"]) : a.intl.string(a.t.Fbrd8J), p ? (0, r.jsx)(s.tN5, {
        color: l.A.colors.TEXT_BRAND,
        size: "xs"
      }) : (0, r.jsx)(s.abt, {
        color: l.A.colors.TEXT_BRAND,
        size: "xs"
      })]
    })
  }), [b, h] = i.useState(null), A = i.useCallback(() => {
    if (null == b) return;
    let {
      scrollHeight: e,
      clientHeight: t
    } = b;
    e > t && g({
      truncatedHeight: t,
      expandedHeight: e
    })
  }, [b]);
  i.useEffect(() => {
    requestAnimationFrame(A)
  }, [A, c, d]);
  let E = "auto";
  return null != m && (E = p ? "".concat(m.expandedHeight, "px") : "".concat(m.truncatedHeight, "px")), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Text, (t = function(e) {
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
    }({}, u), n = n = {
      className: o.Qs,
      lineClamp: p ? true : d,
      ref: h,
      style: {
        height: E
      },
      children: c
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), f]
  })
}