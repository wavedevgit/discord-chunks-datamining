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
  Chunk213331 = require("./213331.js");

function o(e) {
  var t, n, {
      isSlideReady: o
    } = e,
    c = function(e, t) {
      if (null == e) return {};
      var n, l, r = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.keys(e);
        for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["isSlideReady"]);
  return (0, l.jsxs)("div", {
    className: s.__invalid_slideContainer,
    children: [(0, l.jsx)("div", {
      className: s.header,
      children: (0, l.jsxs)(r.Kqy, {
        gap: 4,
        children: [(0, l.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          children: a.intl.string(a.t.GG6vbr)
        }), (0, l.jsx)(r.Text, {
          color: "text-subtle",
          variant: "text-sm/normal",
          children: a.intl.string(a.t.q5lgwV)
        })]
      })
    }), (0, l.jsx)(i.Z, (t = function(e) {
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
    }({}, c), n = n = {
      canSetFocus: o
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}