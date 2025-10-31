/** Chunk was on 62934 **/
/** chunk id: 941762, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk799070 = require("./799070.js");
let x = {
  steps: {
    [Chunk619733.EK.SERVER_SETTINGS]: {
      onBack: {
        type: "close"
      },
      onNext: {
        type: "save"
      }
    }
  }
};

function _(e) {
  let {
    guildId: n,
    instance: t
  } = e, _ = a.useRef(null);
  return (0, c.Z)(n) ? (0, r.jsx)(i.yRy, {
    targetElementRef: _,
    align: "top",
    position: "right",
    animationPosition: "bottom",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, r.jsx)(i.v2r, {
        navId: "game_server-popout-context-menu",
        onClose: () => {
          (0, l.Zy)(), a()
        },
        "aria-label": g.intl.string(m.default["yb+ork"]),
        onSelect: true,
        children: (0, r.jsxs)(i.kSQ, {
          children: [null != t.providerType && (0, r.jsx)(i.sNh, {
            id: "get-support",
            icon: i.kBi,
            label: g.intl.string(m.default.bBkeMs),
            action: () => {
              (0, o.q)({
                href: u.uz[t.providerType]
              })
            }
          }), (0, r.jsx)(i.sNh, {
            id: "settings",
            icon: i.ewm,
            label: g.intl.string(m.default["feUiM/"]),
            action: () => {
              (0, d.Z)({
                guildId: n,
                stepConfig: x,
                initialGameServerInstance: t,
                analyticsLocation: s.Z.GAME_SERVER_PAGE
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
        "aria-label": g.intl.string(g.t["UKOtz+"]),
        className: f.clickable
      }, e), t = t = {
        innerRef: _,
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
  }) : null
}