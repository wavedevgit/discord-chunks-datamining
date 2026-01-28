/** Chunk was on 5606 **/
/** chunk id: 39190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk69940 = require("./69940.js");
let o = Chunk64700.forwardRef(function(e, t) {
  var n, i;
  let [o, ...c] = [e, t], {
    currentPageIndex: d,
    numPages: u,
    onChangePage: p,
    children: _,
    showPageCount: m = true
  } = o, g = function(e, t) {
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
  }(o, ["currentPageIndex", "numPages", "onChangePage", "children", "showPageCount"]), [f] = c, b = m ? s.intl.format(s.t.MtpIwg, {
    currentPage: d + 1,
    numPages: u
  }) : s.intl.format(s.t.bKI77c, {
    currentPage: d + 1
  });
  return (0, r.jsxs)("div", (n = function(e) {
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
    ref: f
  }, g), i = i = {
    children: [_, (0, r.jsx)("div", {
      className: a.v,
      children: (0, r.jsxs)("div", {
        className: a.U,
        children: [(0, r.jsx)(l.K0, {
          variant: "icon-only",
          icon: l.n2b,
          disabled: d <= 0,
          onClick: () => p(d - 1),
          "aria-label": s.intl.string(s.t.vgfxaA)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: b
        }), (0, r.jsx)(l.K0, {
          variant: "icon-only",
          icon: l._BQ,
          disabled: d >= u - 1,
          onClick: () => p(d + 1),
          "aria-label": s.intl.string(s.t.XiOHRX)
        })]
      })
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
  }), n))
})