/** Chunk was on 66181 **/
/** chunk id: 889029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk223245 = require("./223245.js"),
  Chunk230711 = require("./230711.js"),
  Chunk921801 = require("./921801.js"),
  Chunk246946 = require("./246946.js"),
  Chunk358085 = require("./358085.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk40086 = require("./40086.js"),
  Chunk197571 = require("./197571.js");

function x() {
  let {
    enabled: e,
    autoToggle: t,
    hideInstantInvites: r,
    hidePersonalInformation: x,
    disableSounds: _,
    disableNotifications: j,
    enableContentProtection: E
  } = (0, Chunk442837.cj)([Chunk246946.Z], () => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  })({}, Chunk246946.Z.getSettings())), C = (e, t) => {
    o.Z.update({
      [e]: t
    })
  };
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    className: Chunk40086.container,
    tag: Chunk481060.RB0.H1,
    title: Chunk388032.intl.string(Chunk388032.t.S5GfOT),
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.STREAMER_MODE_INTEGRATIONS,
      children: (0, Chunk951288.jsx)(Chunk481060.ToO, {
        className: Chunk197571.marginBottom40,
        iconClassName: Chunk40086.noticeIcon,
        type: Chunk481060.Dd5.PRIMARY,
        imageData: {
          src: require("./560264.js"),
          width: 184,
          height: 110,
          position: Chunk481060.SwA.RIGHT
        },
        title: Chunk388032.intl.string(Chunk388032.t.bxGbHB),
        body: Chunk388032.intl.format(Chunk388032.t["4rmZn5"], {
          streamkitURL: Chunk981631.EYA.STREAMKIT
        })
      })
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.STREAMER_MODE_ENABLE,
      children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => C("enabled", e),
        note: Chunk388032.intl.format(Chunk388032.t.MLVL2N, {
          onClick: () => {
            Chunk230711.Z.setSection(Chunk981631.oAB.KEYBINDS)
          }
        }),
        children: Chunk388032.intl.string(Chunk388032.t.p9ZAJS)
      }), (() => {
        if (Chunk358085.isPlatformEmbedded) return (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: exports,
          onChange: e => C("autoToggle", e),
          note: Chunk388032.intl.string(Chunk388032.t.ZPi4lJ),
          children: Chunk388032.intl.string(Chunk388032.t.PKDAJy)
        })
      })()]
    }), (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        className: s()(Chunk197571.marginTop40, Chunk197571.marginBottom8, Chunk40086.sectionLabel),
        children: Chunk388032.intl.string(Chunk388032.t["+1H47u"])
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: x,
          onChange: e => C("hidePersonalInformation", e),
          note: Chunk388032.intl.string(Chunk388032.t["+9Lra2"]),
          children: Chunk388032.intl.string(Chunk388032.t.UpQziI)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_HIDE_INVITE_LINKS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: Chunk120356,
          onChange: e => C("hideInstantInvites", e),
          note: Chunk388032.intl.string(Chunk388032.t.m7mS2d),
          children: Chunk388032.intl.string(Chunk388032.t.q7WNGh)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_DISABLE_SOUNDS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: _,
          onChange: e => C("disableSounds", e),
          note: Chunk388032.intl.string(Chunk388032.t.eAkaio),
          children: Chunk388032.intl.string(Chunk388032.t.o56OZm)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: j,
          onChange: e => C("disableNotifications", e),
          note: Chunk388032.intl.string(Chunk388032.t.ZAmpQ0),
          children: Chunk388032.intl.string(Chunk388032.t.qmYiYW)
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE,
        children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: E,
          onChange: e => C("enableContentProtection", e),
          note: Chunk388032.intl.string(Chunk388032.t.P4vj0t),
          children: Chunk388032.intl.string(Chunk388032.t["iA81+f"])
        })
      })]
    })]
  })
}