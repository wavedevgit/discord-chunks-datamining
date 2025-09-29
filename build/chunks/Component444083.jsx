/** Chunk was on 85683 **/
/** chunk id: 444083, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk809741 = require("./809741.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk412247 = require("./412247.js");
let m = {
  steps: {
    [Chunk473682.Vb.SERVER_SETTINGS]: {
      onBack: {
        type: "close"
      },
      onNext: {
        type: "save"
      }
    }
  }
};

function g(e) {
  let {
    guildId: n,
    instance: t
  } = e, l = r.useRef(null);
  return (0, a.jsx)(i.yRy, {
    targetElementRef: l,
    align: "top",
    position: "right",
    animationPosition: "bottom",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, a.jsx)(i.v2r, {
        navId: "portkey-popout-context-menu",
        onClose: () => {
          (0, s.Zy)(), r()
        },
        "aria-label": u.intl.string(d.default.xCq1DA),
        onSelect: true,
        children: (0, a.jsxs)(i.kSQ, {
          children: [(0, a.jsx)(i.sNh, {
            id: "get-support",
            icon: i.kBi,
            label: u.intl.string(d.default["TciV8/"]),
            action: () => {}
          }), (0, a.jsx)(i.sNh, {
            id: "settings",
            icon: i.ewm,
            label: u.intl.string(d.default.NUTl4u),
            action: () => {
              (0, c.Z)({
                guildId: n,
                stepConfig: m,
                initialPortkeyInstance: t,
                analyticsLocation: o.Z.PORTKEY_OVERVIEW
              })
            }
          })]
        })
      })
    },
    children: e => {
      var n, t;
      return (0, a.jsx)(i.P3F, (n = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), a.forEach(function(n) {
            var a;
            a = t[n], n in e ? Object.defineProperty(e, n, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = a
          })
        }
        return e
      }({
        "aria-label": u.intl.string(u.t.UKOtz8),
        className: b.clickable
      }, e), t = t = {
        innerRef: l,
        children: (0, a.jsx)(i.xhG, {
          color: "currentColor",
          size: "sm"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t.push.apply(t, a)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n))
    }
  })
}