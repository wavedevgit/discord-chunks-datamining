/** Chunk was on 27069 **/
/** chunk id: 430790, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk810473 = require("./810473.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk684066 = require("./684066.js");

function d() {
  let e = 0 === (0, Chunk810473.Z)().length,
    t = Chunk647438.useCallback(() => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("38576").then(require.bind(require, 925170));
        return t => (0, n.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, t))
      }, {
        stackingBehavior: "stack"
      })
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.P3F, {
    className: a()(Chunk684066.addWidgetButton, module && Chunk684066.disabled),
    onClick: module ? true : exports,
    "aria-disabled": module,
    children: [(0, Chunk951288.jsx)(Chunk481060.qJs, {
      size: "sm",
      color: "currentColor"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: module ? "text-muted" : "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.lBG2s7)
    })]
  })
}