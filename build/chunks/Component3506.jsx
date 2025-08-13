/** Chunk was on 20501 **/
/** chunk id: 3506, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk13245 = require("./13245.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk887278 = require("./887278.js"),
  Chunk594190 = require("./594190.js"),
  Chunk212632 = require("./212632.jsx"),
  Chunk444295 = require("./444295.js"),
  Chunk486016 = require("./486016.js"),
  Chunk809357 = require("./809357.js"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk957148 = require("./957148.jsx"),
  Chunk556296 = require("./556296.js"),
  Chunk808506 = require("./808506.js"),
  Chunk237997 = require("./237997.js"),
  Chunk626135 = require("./626135.js");
require("./63063.js");
var Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk633897 = require("./633897.js");
let A = P(null);

function P(e) {
  var t;
  let n = v.default.getNotificationPositionMode(),
    i = n !== I._vf.DISABLED,
    r = C.ZP.getOverlayKeybind(),
    s = C.ZP.getOverlayChatKeybind();
  return {
    enabled: O.default.enabled,
    notifications_enabled: i,
    notifications_position: i ? n : null,
    text_notifications_mode: j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != r ? (0, T.BB)(r.shortcut) : null,
    text_activation_hotkey: null != s ? (0, T.BB)(s.shortcut) : null,
    text_opacity_slider: v.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : O.default.enabled
  }
}

function R(e) {
  let {
    children: t,
    title: n
  } = e;
  return (0, i.jsx)(c.xJW, {
    title: n,
    className: y.userSettingsOverlayField,
    children: t
  })
}

function D(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, {
    oopEnabled: r,
    legacyEnabled: a
  } = (0, o.cj)([_.default], () => _.default.getGlobalEnabledStatus()), {
    avatarSizeMode: O,
    displayNameMode: T,
    displayUserMode: D,
    textChatDisabled: Z,
    notificationPositionMode: w,
    shouldShowKeybindIndicators: k
  } = (0, o.cj)([v.default, j.Z], () => ({
    avatarSizeMode: v.default.getAvatarSizeMode(),
    displayNameMode: v.default.getDisplayNameMode(),
    displayUserMode: v.default.getDisplayUserMode(),
    notificationPositionMode: v.default.getNotificationPositionMode(),
    shouldShowKeybindIndicators: v.default.showKeybindIndicators,
    textChatDisabled: j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT)
  })), L = (0, o.e7)([C.ZP], () => C.ZP.getOverlayKeybind()), B = (0, x.Z)({
    location: "overlay_user_settings"
  }), M = (0, p.$1)(), U = P(A);
  return l().isEqual(U, A) || (S.default.track(I.rMx.OVERLAY_SETTINGS_UPDATED, U), A = U), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(c.hjN, {
      className: t,
      tag: c.RB0.H1,
      title: n ? N.intl.string(N.t["9cb1U1"]) : null,
      children: [false, (0, i.jsxs)("div", {
        className: y.enableOverlaySection,
        children: [(0, i.jsx)(c.xJW, {
          title: N.intl.string(N.t.XkaTrq),
          className: y.enableOverlayItem,
          children: (0, i.jsx)(c.j7V, {
            className: y.enableSwitch,
            value: a,
            disabled: M,
            note: M ? N.intl.string(N.t.Eb0lnJ) : null,
            hideBorder: true,
            onChange: function(e) {
              var t, n;
              u.Z.setEnabled(e, r);
              let i = null != (n = null == (t = g.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? n : null;
              (0, f.ou)(e, f.AE.LEGACY, i), !e && a && (0, E.l)(f.AE.LEGACY, i)
            },
            children: N.intl.string(N.t.vSP6c3)
          })
        }), (0, i.jsx)(c.xJW, {
          title: N.intl.string(N.t.VsAZcH),
          className: y.enableOverlayItem,
          children: (0, i.jsx)(m.Z, {
            disabled: !a,
            defaultValue: null != L ? L.shortcut : [],
            onChange: function(e) {
              var t, n;
              s()(null != L, "Keybind should never be undefined"), d.Z.setKeybind((t = function(e) {
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
              }({}, L), n = n = {
                shortcut: e
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }
          })
        })]
      }), (0, i.jsx)(R, {
        title: N.intl.string(N.t.dnvZSk),
        children: (0, i.jsx)(c.FXm, {
          options: [{
            name: N.intl.string(N.t.YcOxtr),
            value: I.ipw.LARGE
          }, {
            name: N.intl.string(N.t.BKIKq6),
            value: I.ipw.SMALL
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return u.Z.setAvatarSizeMode(t)
          },
          value: O
        })
      }), (0, i.jsx)(R, {
        title: N.intl.string(N.t.J0dpcH),
        children: (0, i.jsx)(c.FXm, {
          options: [{
            name: N.intl.string(N.t.nBmDra),
            value: I.wC$.ALWAYS
          }, {
            name: N.intl.string(N.t["2OvIZW"]),
            value: I.wC$.ONLY_WHILE_SPEAKING
          }, {
            name: N.intl.string(N.t.ekjlPD),
            value: I.wC$.NEVER
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return u.Z.setDisplayNameMode(t)
          },
          value: T
        })
      }), (0, i.jsx)(R, {
        title: N.intl.string(N.t.swsWWF),
        children: (0, i.jsx)(c.FXm, {
          options: [{
            name: N.intl.string(N.t.nBmDra),
            value: I.OYC.ALWAYS
          }, {
            name: N.intl.string(N.t["2OvIZW"]),
            value: I.OYC.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return u.Z.setDisplayUserMode(t)
          },
          value: D
        })
      }), B && (0, i.jsx)(R, {
        children: (0, i.jsx)(c.j7V, {
          value: k,
          onChange: e => u.Z.setShowKeybindIndicators(e),
          hideBorder: true,
          children: N.intl.string(N.t.XZTl9v)
        })
      })]
    }), (0, i.jsxs)(c.hjN, {
      tag: c.RB0.H1,
      title: N.intl.string(N.t["3GMnLi"]),
      className: y.notificationSection,
      children: [(0, i.jsx)(R, {
        title: N.intl.string(N.t.IQv8Eh),
        children: (0, i.jsx)("div", {
          className: y.notificationSettings,
          children: (0, i.jsx)(h.Z, {
            position: w,
            onChange: (e, t) => u.Z.setNotificationPositionMode(t)
          })
        })
      }), (0, i.jsx)(R, {
        children: (0, i.jsx)(c.j7V, {
          value: w !== I._vf.DISABLED && !Z,
          disabled: w === I._vf.DISABLED,
          onChange: function() {
            let e = j.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.TEXT_CHAT);
            u.Z.setNotificationDisabledSetting(b.OverlayNotificationDisabledSetting.TEXT_CHAT, !e)
          },
          hideBorder: true,
          children: N.intl.string(N.t.Fy5kPj)
        })
      })]
    })]
  })
}