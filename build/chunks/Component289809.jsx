/** Chunk was on 54844 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk273744 = require("./273744.jsx"),
  Chunk938315 = require("./938315.js");

function c(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: c
      }
    }
  } = e, d = l.useMemo(() => {
    var e, t;
    return a.Z.reactParserFor((e = function(e) {
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
    }({}, a.Z.defaultRules), t = t = {
      link: s.s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, []);
  return c && (null != t || null != n) ? (0, r.jsxs)("div", {
    children: [null != t && (0, r.jsx)(i.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: o.header,
      children: t
    }), null != n && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: o.body,
      children: d(n)
    })]
  }) : null
}