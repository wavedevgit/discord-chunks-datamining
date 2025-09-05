/** Chunk was on 30355 **/
/** chunk id: 430790, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407442 = require("./407442.js");

function c() {
  let {
    trackUserProfileEditAction: e
  } = (0, Chunk785717.KZ)(), t = Chunk647438.useCallback(() => {
    module({
      action: "PRESS_ADD_WIDGET"
    }), (0, Chunk481060.ZDy)(async () => {
      let {
        default: t
      } = await require.e("38576").then(require.bind(require, 925170));
      return r => {
        var l, i;
        return (0, n.jsx)(t, (l = function(e) {
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
        }({}, r), i = i = {
          trackUserProfileEditAction: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      stackingBehavior: "stack"
    })
  }, [module]);
  return (0, Chunk951288.jsxs)(Chunk481060.P3F, {
    className: Chunk407442.addWidgetButton,
    onClick: exports,
    children: [(0, Chunk951288.jsx)(Chunk481060.qJs, {
      size: "sm",
      color: "currentColor"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: Chunk388032.intl.string(Chunk388032.t.lBG2s7)
    })]
  })
}