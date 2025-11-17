/** Chunk was on 54844 **/
/** chunk id: 473121, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk273744 = require("./273744.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204800 = require("./204800.js");
let d = e => {
  var t, n;
  let {
    node: {
      header: d,
      subheader: u,
      button: m
    },
    isModeratorReport: p
  } = e, g = (null == m ? true : m.type) === "submit", _ = i.useRef(a.Z.reactParserFor((t = function(e) {
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
  }({}, a.Z.defaultRules), n = n = {
    link: s.s
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t)));
  return (0, r.jsxs)("div", {
    className: c.headerContainer,
    children: [null != d && "" !== d ? (0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: d
    }) : null, null != u && "" !== d ? (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: _.current(u)
    }) : null, g && !p && (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: o.intl.format(o.t.Q0tSKT, {})
    })]
  })
}