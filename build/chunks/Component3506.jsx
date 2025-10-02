/** Chunk was on web.js **/
/** chunk id: 3506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
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
  Chunk703943 = require("./703943.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = k(null);

function M() {
  let e = k(j);
  s().isEqual(module, j) || (Chunk626135.default.track(Chunk981631.rMx.OVERLAY_SETTINGS_UPDATED, module), j = module)
}

function k(e) {
  var t;
  let n = S.default.getNotificationPositionMode(),
    r = n !== N._vf.DISABLED,
    i = I.ZP.getOverlayKeybind(),
    a = I.ZP.getOverlayChatKeybind();
  return {
    enabled: T.default.enabled,
    notifications_enabled: r,
    notifications_position: r ? n : null,
    text_notifications_mode: O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT) ? "DISABLED" : "ENABLED",
    hotkey: null != i ? (0, C.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, C.BB)(a.shortcut) : null,
    text_opacity_slider: S.default.getTextWidgetOpacity(),
    old_enabled: null != (t = null == e ? true : e.enabled) ? t : T.default.enabled
  }
}

function U(e) {
  let {
    children: t,
    title: n
  } = e;
  return (0, r.jsx)(u.xJW, {
    title: n,
    className: P.userSettingsOverlayField,
    children: t
  })
}

function G(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, {
    oopEnabled: i,
    legacyEnabled: o
  } = (0, l.cj)([y.default], () => y.default.getGlobalEnabledStatus()), {
    avatarSizeMode: s,
    displayNameMode: T,
    displayUserMode: A,
    textChatDisabled: C,
    notificationPositionMode: w,
    shouldShowKeybindIndicators: L
  } = (0, l.cj)([S.default, O.Z], () => ({
    avatarSizeMode: S.default.getAvatarSizeMode(),
    displayNameMode: S.default.getDisplayNameMode(),
    displayUserMode: S.default.getDisplayUserMode(),
    notificationPositionMode: S.default.getNotificationPositionMode(),
    shouldShowKeybindIndicators: S.default.showKeybindIndicators,
    textChatDisabled: O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT)
  })), j = (0, l.e7)([I.ZP], () => I.ZP.getOverlayKeybind()), k = (0, b.Z)({
    location: "overlay_user_settings"
  }), G = (0, p.$1)();

  function B(e) {
    var t, n;
    f.Z.setEnabled(e, i);
    let r = null != (n = null == (t = h.ZP.getCurrentGameForAnalytics()) ? true : t.id) ? n : null;
    (0, g.ou)(e, g.AE.LEGACY, r), !e && o && (0, v.l)(g.AE.LEGACY, r)
  }

  function Z() {
    let e = O.Z.isNotificationDisabled(E.OverlayNotificationDisabledSetting.TEXT_CHAT);
    f.Z.setNotificationDisabledSetting(E.OverlayNotificationDisabledSetting.TEXT_CHAT, !e)
  }

  function F(e) {
    a()(null != j, "Keybind should never be undefined"), d.Z.setKeybind(x(D({}, j), {
      shortcut: e
    }))
  }
  return M(), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.hjN, {
      className: t,
      tag: u.RB0.H1,
      title: n ? R.intl.string(R.t["9cb1U1"]) : null,
      children: [false, (0, r.jsxs)("div", {
        className: P.enableOverlaySection,
        children: [(0, r.jsx)(u.xJW, {
          title: R.intl.string(R.t.XkaTrq),
          className: P.enableOverlayItem,
          children: (0, r.jsx)(u.rsf, {
            label: R.intl.string(R.t.vSP6c3),
            description: G ? R.intl.string(R.t.Eb0lnJ) : true,
            checked: o,
            disabled: G,
            onChange: B
          })
        }), (0, r.jsx)(u.xJW, {
          title: R.intl.string(R.t.VsAZcH),
          className: P.enableOverlayItem,
          children: (0, r.jsx)(_.Z, {
            disabled: !o,
            defaultValue: null != j ? j.shortcut : [],
            onChange: F
          })
        })]
      }), (0, r.jsx)(U, {
        title: R.intl.string(R.t.dnvZSk),
        children: (0, r.jsx)(c.E, {
          options: [{
            name: R.intl.string(R.t.YcOxtr),
            value: N.ipw.LARGE
          }, {
            name: R.intl.string(R.t.BKIKq6),
            value: N.ipw.SMALL
          }],
          onChange: e => f.Z.setAvatarSizeMode(e),
          value: s
        })
      }), (0, r.jsx)(U, {
        title: R.intl.string(R.t.J0dpcH),
        children: (0, r.jsx)(c.E, {
          options: [{
            name: R.intl.string(R.t.nBmDra),
            value: N.wC$.ALWAYS
          }, {
            name: R.intl.string(R.t["2OvIZW"]),
            value: N.wC$.ONLY_WHILE_SPEAKING
          }, {
            name: R.intl.string(R.t.ekjlPD),
            value: N.wC$.NEVER
          }],
          onChange: e => f.Z.setDisplayNameMode(e),
          value: T
        })
      }), (0, r.jsx)(U, {
        title: R.intl.string(R.t.swsWWF),
        children: (0, r.jsx)(c.E, {
          options: [{
            name: R.intl.string(R.t.nBmDra),
            value: N.OYC.ALWAYS
          }, {
            name: R.intl.string(R.t["2OvIZW"]),
            value: N.OYC.ONLY_WHILE_SPEAKING
          }],
          onChange: e => f.Z.setDisplayUserMode(e),
          value: A
        })
      }), k && (0, r.jsx)(U, {
        children: (0, r.jsx)(u.rsf, {
          label: R.intl.string(R.t.XZTl9v),
          checked: L,
          onChange: e => f.Z.setShowKeybindIndicators(e)
        })
      })]
    }), (0, r.jsxs)(u.hjN, {
      tag: u.RB0.H1,
      title: R.intl.string(R.t["3GMnLi"]),
      className: P.notificationSection,
      children: [(0, r.jsx)(U, {
        title: R.intl.string(R.t.IQv8Eh),
        children: (0, r.jsx)("div", {
          className: P.notificationSettings,
          children: (0, r.jsx)(m.Z, {
            position: w,
            onChange: (e, t) => f.Z.setNotificationPositionMode(t)
          })
        })
      }), (0, r.jsx)(U, {
        children: (0, r.jsx)(u.rsf, {
          label: R.intl.string(R.t.Fy5kPj),
          checked: w !== N._vf.DISABLED && !C,
          onChange: Z,
          disabled: w === N._vf.DISABLED
        })
      })]
    })]
  })
}