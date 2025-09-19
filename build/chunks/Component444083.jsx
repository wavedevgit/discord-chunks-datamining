/** Chunk was on 85683 **/
/** chunk id: 444083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk809741 = require("./809741.jsx"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587983 = require("./587983.js");
let b = {
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

function p(e) {
  let {
    guildId: t,
    instance: n
  } = e, l = a.useRef(null);
  return (0, r.jsx)(i.yRy, {
    targetElementRef: l,
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
          (0, s.Zy)(), a()
        },
        "aria-label": d.intl.string(u.default.xCq1DA),
        onSelect: true,
        children: (0, r.jsxs)(i.kSQ, {
          children: [(0, r.jsx)(i.sNh, {
            id: "get-support",
            icon: i.kBi,
            label: d.intl.string(u.default["TciV8/"]),
            action: () => {}
          }), (0, r.jsx)(i.sNh, {
            id: "settings",
            icon: i.ewm,
            label: d.intl.string(u.default.NUTl4u),
            action: () => {
              (0, o.Z)({
                guildId: t,
                stepConfig: b,
                initialPortkeyInstance: n,
                analyticsLocation: c.Z.PORTKEY_OVERVIEW
              })
            }
          })]
        })
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)(i.P3F, (t = function(e) {
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
        "aria-label": d.intl.string(d.t.UKOtz8),
        className: m.clickable
      }, e), n = n = {
        innerRef: l,
        children: (0, r.jsx)(i.xhG, {
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