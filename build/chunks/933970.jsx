/** Chunk was on 75708 **/
/** chunk id: 933970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk216419 = require("./216419.js");

function o(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: r,
    className: o
  } = e, c = e => {
    e.preventDefault(), e.stopPropagation(), r(e)
  };
  return <a.ua7 text={n}>{e => {
      var r, d;
      return (0, i.jsx)(a.P3F, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), d = d = {
        "aria-label": n,
        onClick: c,
        className: s()(l.actionButton, o),
        children: (0, i.jsx)(t, {
          className: l.icon,
          color: "currentColor"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(d)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(d, e))
      }), r))
    }}</a.ua7>
}