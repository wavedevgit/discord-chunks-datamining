/** Chunk was on 29458 **/
/** chunk id: 430790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810473 = require("./810473.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915642 = require("./915642.js");

function u() {
  let e = 0 === (0, Chunk810473.Z)().length,
    t = Chunk73800.useCallback(() => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("38576").then(require.bind(require, 925170));
        return t => (0, r.jsx)(e, function(e) {
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
        }({}, t))
      }, {
        stackingBehavior: "stack"
      })
    }, []);
  return (0, Chunk255367.jsxs)(Chunk481060.P3F, {
    className: o()(Chunk915642.addWidgetButton, module && Chunk915642.disabled),
    onClick: module ? true : exports,
    "aria-disabled": module,
    children: [(0, Chunk255367.jsx)(Chunk481060.qJs, {
      size: "sm",
      color: "currentColor"
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: module ? "text-muted" : "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.lBG2s7)
    })]
  })
}