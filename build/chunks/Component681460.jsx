/** Chunk was on 54052 **/
/** chunk id: 681460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk554571 = require("./554571.js");

function o(e) {
  let {
    pills: t,
    pillClassName: n
  } = e;
  return (0, r.jsx)("div", {
    className: s.container,
    children: t.map(e => (0, r.jsx)(a.ua7, {
      text: e.tooltipText,
      shouldShow: null != e.tooltipText,
      children: t => {
        var i, o;
        return (0, r.jsx)(a.P3F, (i = function(e) {
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
        }({}, t), o = o = {
          className: l()(s.pill, {
            [s.disabled]: e.disabled
          }, n),
          onClick: e.disabled ? true : e.onClick,
          children: (0, r.jsx)(a.Text, {
            tag: "span",
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: e.text
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    }, e.text))
  })
}