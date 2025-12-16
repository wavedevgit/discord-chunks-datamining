/** Chunk was on 1272 **/
/** chunk id: 826946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857395 = require("./857395.jsx"),
  Chunk886558 = require("./886558.js");
let s = function(e) {
  let {
    className: t,
    guildId: n
  } = e, s = i.useRef(null), c = i.useCallback((e, t) => {
    e.stopPropagation(), t.onClick(e)
  }, []);
  return (0, r.jsx)(a.Z, {
    guildId: n,
    position: "left",
    targetElementRef: s,
    children: e => {
      var n, i;
      return (0, r.jsx)(l.P3F, (n = function(e) {
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
        innerRef: s,
        className: t,
        onClick: t => c(t, e),
        children: (0, r.jsx)("div", {
          className: o.icon,
          children: (0, r.jsx)(l.bJT, {
            size: "xs",
            color: "currentColor"
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })
}