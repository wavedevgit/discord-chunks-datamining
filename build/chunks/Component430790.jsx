/** Chunk was on 72651 **/
/** chunk id: 430790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk684066 = require("./684066.js");

function s() {
  let {
    trackUserProfileEditAction: e
  } = (0, Chunk785717.KZ)(), t = Chunk647438.useCallback(() => {
    module({
      action: "PRESS_ADD_WIDGET"
    }), (0, Chunk481060.ZDy)(async () => {
      let {
        default: t
      } = await require.e("38576").then(require.bind(require, 925170));
      return n => {
        var i, a;
        return (0, r.jsx)(t, (i = function(e) {
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
        }({}, n), a = a = {
          trackUserProfileEditAction: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
        }), i))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk481060.P3F, {
    className: Chunk684066.addWidgetButton,
    onClick: exports,
    children: [(0, Chunk951288.jsx)(Chunk481060.qJs, {
      size: "sm",
      color: "currentColor"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t["lBG2s/"])
    })]
  })
}