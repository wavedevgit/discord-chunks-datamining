/** Chunk was on 88712 **/
/** chunk id: 804570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk905791 = require("./905791.js");
let c = Chunk73800.memo(function(e) {
  let {
    emptyText: t,
    icon: n,
    absolute: i = false
  } = e;
  return (0, r.jsx)("div", {
    className: o()(s.emptyWidgetContainer, i && s.absolute),
    children: (0, r.jsx)(a.ua7, {
      text: t,
      children: e => {
        var t, i;
        return (0, r.jsx)("div", (t = function(e) {
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
        }({}, e), i = i = {
          children: (0, r.jsx)(n, {
            size: "md",
            color: a.TVs.colors.WHITE,
            className: s.emptyWidgetIcon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    })
  })
})