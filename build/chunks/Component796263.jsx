/** Chunk was on 32202 **/
/** chunk id: 796263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js");

function l(e) {
  let {
    text: t,
    icon: n,
    onClick: l,
    disabled: a,
    submitting: o
  } = e;
  return (0, r.jsx)(i.ua7, {
    text: null != t ? t : true,
    children: e => {
      var s, c;
      return (0, r.jsx)(i.hU, (s = function(e) {
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
      }({}, e), c = c = {
        icon: n,
        variant: "secondary",
        onClick: l,
        disabled: a,
        loading: o,
        "aria-label": t,
        size: "sm"
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(c)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(c, e))
      }), s))
    }
  })
}