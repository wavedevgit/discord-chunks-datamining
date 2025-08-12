/** Chunk was on 29458 **/
/** chunk id: 430790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915642 = require("./915642.js");

function d(e) {
  let {
    disabled: t
  } = e, i = l.useCallback(() => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("38576").then(n.bind(n, 925170));
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
  return (0, r.jsxs)(a.P3F, {
    className: o()(s.addWidgetButton, t && s.disabled),
    onClick: t ? true : i,
    "aria-disabled": t,
    children: [(0, r.jsx)(a.qJs, {
      size: "sm",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: t ? "text-muted" : "text-default",
      children: c.intl.string(c.t.lBG2s7)
    })]
  })
}