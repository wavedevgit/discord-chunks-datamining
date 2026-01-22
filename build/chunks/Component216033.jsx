/** Chunk was on 58652 **/
/** chunk id: 216033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk861662 = require("./861662.jsx"),
  Chunk232409 = require("./232409.js");

function c(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: c
      }
    }
  } = e, d = r.useMemo(() => {
    var e, t;
    return i.A.reactParserFor((e = function(e) {
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
    }({}, i.A.defaultRules), t = t = {
      link: s.B
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, []);
  return c && (null != t || null != n) ? (0, l.jsxs)("div", {
    children: [null != t && (0, l.jsx)(a.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: o.w,
      children: t
    }), null != n && (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: o.r,
      children: d(n)
    })]
  }) : null
}