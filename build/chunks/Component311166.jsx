/** Chunk was on 61 **/
/** chunk id: 311166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk195367 = require("./195367.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk675169 = require("./675169.js");

function o(e) {
  var t, n, {
      isSlideReady: o
    } = e,
    c = function(e, t) {
      if (null == e) return {};
      var n, r, l = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["isSlideReady"]);
  return (0, r.jsxs)("div", {
    className: s.__invalid_slideContainer,
    children: [(0, r.jsx)("div", {
      className: s.header,
      children: (0, r.jsxs)(l.Kqy, {
        gap: 4,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          children: a.intl.string(a.t.GG6vbr)
        }), (0, r.jsx)(l.Text, {
          color: "text-secondary",
          variant: "text-sm/normal",
          children: a.intl.string(a.t.q5lgwV)
        })]
      })
    }), (0, r.jsx)(i.Z, (t = function(e) {
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
    }({}, c), n = n = {
      canSetFocus: o
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}