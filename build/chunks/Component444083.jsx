/** Chunk was on 85683 **/
/** chunk id: 444083, original params: e,t,n (module,exports,require) **/
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
let p = {
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
    guildId: t,
    instance: n
  } = e, c = i.useRef(null);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: c,
    align: "top",
    position: "right",
    animationPosition: "bottom",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "portkey-popout-context-menu",
        onClose: () => {
          (0, o.Zy)(), i()
        },
        "aria-label": u.intl.string(d.default.xCq1DA),
        onSelect: true,
        children: (0, r.jsxs)(a.kSQ, {
          children: [(0, r.jsx)(a.sNh, {
            id: "get-support",
            icon: a.kBi,
            label: u.intl.string(d.default["TciV8/"]),
            action: () => {}
          }), (0, r.jsx)(a.sNh, {
            id: "settings",
            icon: a.ewm,
            label: u.intl.string(d.default.NUTl4u),
            action: () => {
              (0, l.Z)({
                guildId: t,
                stepConfig: p,
                initialPortkeyInstance: n,
                analyticsLocation: s.Z.PORTKEY_OVERVIEW
              })
            }
          })]
        })
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)(a.P3F, (t = function(e) {
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
      }({
        "aria-label": u.intl.string(u.t.UKOtz8),
        className: m.clickable
      }, e), n = n = {
        innerRef: c,
        children: (0, r.jsx)(a.xhG, {
          color: "currentColor",
          size: "sm"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}