/** Chunk was on 62934 **/
/** chunk id: 941762, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk49012 = require("./49012.js"),
  Chunk639777 = require("./639777.js"),
  Chunk47695 = require("./47695.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk619733 = require("./619733.js"),
  Chunk400580 = require("./400580.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk799070 = require("./799070.js");
let v = {
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
  } = e, m = a.useRef(null), _ = (0, d.Z)(t.providerType, t.gameServerPanelUrl);
  return (0, c.Z)(n) ? (0, r.jsx)(i.yRy, {
    targetElementRef: m,
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
        "aria-label": f.intl.string(g.default["yb+ork"]),
        onSelect: true,
        children: (0, r.jsxs)(i.kSQ, {
          children: [null != _ && (0, r.jsx)(i.sNh, {
            id: "get-support",
            icon: i.kBi,
            label: f.intl.string(g.default.bBkeMs),
            action: () => {
              (0, o.q)({
                href: _
              })
            }
          }), (0, r.jsx)(i.sNh, {
            id: "settings",
            icon: i.ewm,
            label: f.intl.string(g.default["feUiM/"]),
            action: () => {
              (0, u.Z)({
                guildId: n,
                stepConfig: v,
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
        "aria-label": f.intl.string(f.t["UKOtz+"]),
        className: x.clickable
      }, e), t = t = {
        innerRef: m,
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