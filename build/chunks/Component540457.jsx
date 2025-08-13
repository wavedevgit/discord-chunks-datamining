/** Chunk was on 60458 **/
/** chunk id: 540457, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk753554 = require("./753554.js");

function a(e) {
  let {
    text: t,
    tooltipText: n,
    onClick: a,
    disabled: s
  } = e;
  return s ? (0, r.jsxs)("div", {
    className: l.container,
    children: [(0, r.jsx)(i.qJs, {
      size: "md",
      color: "currentColor",
      className: l.icon
    }), (0, r.jsx)(i.Text, {
      color: "interactive-active",
      variant: "text-md/semibold",
      children: t
    })]
  }) : (0, r.jsx)(i.ua7, {
    text: n,
    shouldShow: null != n,
    children: e => {
      var n, s;
      return (0, r.jsxs)(i.P3F, (n = function(e) {
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
      }({}, e), s = s = {
        className: l.container,
        onClick: a,
        children: [(0, r.jsx)(i.qJs, {
          size: "md",
          color: "currentColor",
          className: l.icon
        }), (0, r.jsx)(i.Text, {
          color: "interactive-active",
          variant: "text-md/semibold",
          children: t
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e))
      }), n))
    }
  })
}