/** Chunk was on 12236 **/
/** chunk id: 688927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk861662 = require("./861662.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk888791 = require("./888791.js");
let c = e => {
  let {
    node: {
      header: t,
      subheader: n,
      button: c
    },
    isModeratorReport: u,
    isTidaReport: m = false
  } = e, p = (null == c ? true : c.type) === "submit", b = r.useMemo(() => {
    var e, t;
    return a.A.reactParserFor((e = function(e) {
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
    }({}, a.A.defaultRules), t = t = {
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
  return (0, l.jsxs)("div", {
    className: d.N,
    children: [null != t && "" !== t ? (0, l.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: t
    }) : null, null != n && "" !== t ? (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: b(n)
    }) : null, p && !u && !m && (0, l.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: o.intl.format(o.t.Q0tSKT, {})
    })]
  })
}