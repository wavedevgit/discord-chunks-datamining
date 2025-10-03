/** Chunk was on 85683 **/
/** chunk id: 444083, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk639777 = require("./639777.js"),
  Chunk809741 = require("./809741.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587983 = require("./587983.js");
let g = {
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

function f(e) {
  let {
    guildId: n,
    instance: t
  } = e, d = a.useRef(null), f = (0, l.Z)(n);
  return (0, r.jsx)(i.yRy, {
    targetElementRef: d,
    align: "top",
    position: "right",
    animationPosition: "bottom",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, r.jsx)(i.v2r, {
        navId: "portkey-popout-context-menu",
        onClose: () => {
          (0, o.Zy)(), a()
        },
        "aria-label": m.intl.string(u.default.xCq1DA),
        onSelect: true,
        children: (0, r.jsxs)(i.kSQ, {
          children: [(0, r.jsx)(i.sNh, {
            id: "get-support",
            icon: i.kBi,
            label: m.intl.string(u.default["TciV8/"]),
            action: () => {}
          }), f && (0, r.jsx)(i.sNh, {
            id: "settings",
            icon: i.ewm,
            label: m.intl.string(u.default.NUTl4u),
            action: () => {
              (0, c.Z)({
                guildId: n,
                stepConfig: g,
                initialPortkeyInstance: t,
                analyticsLocation: s.Z.PORTKEY_OVERVIEW
              })
            }
          })]
        })
      })
    },
    children: e => {
      var n, t;
      return (0, r.jsx)(i.P3F, (n = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = r
          })
        }
        return e
      }({
        "aria-label": m.intl.string(m.t.UKOtz8),
        className: b.clickable
      }, e), t = t = {
        innerRef: d,
        children: (0, r.jsx)(i.xhG, {
          color: "currentColor",
          size: "sm"
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n))
    }
  })
}