/** Chunk was on 19750 **/
/** chunk id: 684610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk307600 = require("./307600.js"),
  Chunk363487 = require("./363487.js"),
  Chunk365003 = require("./365003.js"),
  Chunk843095 = require("./843095.jsx"),
  Chunk800007 = require("./800007.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk396936 = require("./396936.js");
let j = {
  steps: {
    [Chunk800007.HS.SERVER_SETTINGS]: {
      onBack: {
        type: "close"
      },
      onNext: {
        type: "save"
      }
    }
  }
};

function v(e) {
  let {
    guildId: t,
    instance: n
  } = e, f = a.useRef(null), v = (0, d.A)(n.providerType, n.gameServerPanelUrl);
  return (0, o.A)(t) ? (0, r.jsx)(l.YNO, {
    targetElementRef: f,
    align: "top",
    position: "right",
    animationPosition: "bottom",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, r.jsx)(l.W1t, {
        navId: "game_server-popout-context-menu",
        onClose: () => {
          (0, i.Z_)(), a()
        },
        "aria-label": m.intl.string(b.default["yb+ork"]),
        onSelect: true,
        children: (0, r.jsxs)(l.rXV, {
          children: [null != v && (0, r.jsx)(l.Drp, {
            id: "get-support",
            icon: l.oyn,
            label: m.intl.string(b.default.bBkeMs),
            action: () => {
              (0, c.h)({
                href: v
              })
            }
          }), (0, r.jsx)(l.Drp, {
            id: "settings",
            icon: l.Zes,
            label: m.intl.string(b.default["feUiM/"]),
            action: () => {
              (0, u.A)({
                guildId: t,
                stepConfig: j,
                initialGameServerInstance: n,
                analyticsLocation: s.A.GAME_SERVER_PAGE
              })
            }
          })]
        })
      })
    },
    children: e => {
      var t, n;
      return (0, r.jsx)(l.DUT, (t = function(e) {
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
        "aria-label": m.intl.string(m.t["UKOtz+"]),
        className: x.v
      }, e), n = n = {
        innerRef: f,
        children: (0, r.jsx)(l.jNK, {
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
  }) : null
}