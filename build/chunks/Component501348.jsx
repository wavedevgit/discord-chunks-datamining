/** Chunk was on web.js **/
/** chunk id: 501348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk524437 = require("./524437.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk493773 = require("./493773.js"),
  Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk93262 = require("./93262.js"),
  Chunk990924 = require("./990924.js"),
  Chunk313201 = require("./313201.js"),
  Chunk266454 = require("./266454.js"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk984802 = require("./984802.js"),
  Chunk594174 = require("./594174.js"),
  Chunk358085 = require("./358085.js"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk329013 = require("./329013.jsx"),
  Chunk333859 = require("./333859.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226518 = require("./226518.js"),
  Chunk197571 = require("./197571.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = "cozy",
  Q = "compact",
  J = (0, Chunk313201.hQ)(),
  $ = (0, Chunk313201.hQ)(),
  ee = "1337",
  et = e => {
    let t = 0;
    return [(0, S.e5)(q(K({}, (0, I.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.oZxkEq)
    })), {
      state: Z.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(q(K({}, (0, I.ZP)({
      channelId: ee,
      content: (0, u.wj)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4mz"])
    })), {
      state: Z.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(q(K({}, (0, I.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.a0Byo5)
    })), {
      state: Z.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(q(K({}, (0, I.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.bmwEWJ)
    })), {
      state: Z.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(q(K({}, (0, I.ZP)({
      channelId: ee,
      content: V.intl.string(V.t["hK9QW/"])
    })), {
      state: Z.yb.SENT,
      id: "".concat(t)
    }))]
  },
  en = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk226518.themeTitle,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk226518.themeTitleContainer,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk226518.title,
        children: Chunk388032.intl.string(Chunk388032.t["0EzVst"])
      }), (0, Chunk54381.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk226518.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.PV3dGX)
      })]
    }), (0, Chunk54381.jsx)(Chunk329013.g, {})]
  }),
  er = () => Chunk388032.intl.format(Chunk388032.t.Jae48E, {
    onClick: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCESSIBILITY_PANEL, {
        section: Chunk981631.oAB.ACCESSIBILITY
      })
    }
  });
class ei extends Chunk473749.Component {
  renderZoomSlider() {
    return !Chunk358085.isPlatformEmbedded, (0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.i19n5L),
      description: Chunk388032.intl.string(Chunk388032.t.ip0uSf),
      helperText: Chunk388032.intl.format(Chunk388032.t.OMkSUo, {
        modKey: Chunk714338.Z.modKey
      }),
      initialValue: this.props.zoom,
      defaultValue: Chunk981631.yqN.ZOOM_DEFAULT,
      markers: Chunk981631.yqN.ZOOM_SCALES,
      stickToMarkers: true,
      onValueChange: this.handleZoomChange,
      onValueRender: this.handleSliderRender,
      "aria-labelledby": J
    })
  }
  renderFontScaleSlider() {
    return (0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.qPOqoK),
      description: Chunk388032.intl.string(Chunk388032.t.XrtbPo),
      initialValue: this.props.fontSize,
      defaultValue: Chunk981631.yqN.FONT_SIZE_DEFAULT,
      markers: Chunk981631.yqN.FONT_SIZES,
      stickToMarkers: true,
      onValueChange: this.handleFontSizeChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t.Q6lKkg),
      description: Chunk388032.intl.string(Chunk388032.t.p7eUrb),
      initialValue: exports,
      defaultValue: module ? Chunk959517.c8 : Chunk959517.pq,
      markers: Chunk959517.fP,
      stickToMarkers: true,
      onValueChange: this.handleMessageSpacingChange,
      onValueRender: this.handleSliderRenderPX,
      onMarkerRender: this.handleSliderRenderPX,
      getAriaValueText: this.handleSliderValueText,
      "aria-labelledby": $
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: t,
      messageGroupSpacing: n,
      hideSimpleEmbedContent: i
    } = this.props, a = (0, Chunk780384.wj)(exports) ? this.darkMessages : this.lightMessages;
    return (0, Chunk54381.jsx)(Chunk481060.Rny, {
      children: (0, Chunk54381.jsx)(Chunk481060.Zbd, {
        className: o()(Chunk226518.preview, Chunk197571.marginBottom40, module ? Chunk226518.compactPreview : true, "group-spacing-".concat(null != require ? require : module ? Chunk959517.c8 : Chunk959517.pq)),
        outline: true,
        "aria-hidden": true,
        children: Chunk120356.map((t, n) => (0, r.jsx)(A.Z, {
          author: (0, T.ZH)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? H.firstMessage : true,
          hideSimpleEmbedContent: i
        }, t.id))
      })
    })
  }
  renderTheme() {
    let {
      useForcedColors: e
    } = this.props;
    return module ? (0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.Ksh3ik),
      children: (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.INFO,
        children: (0, Chunk627845.b)() ? (0, Chunk54381.jsx)(er, {}) : Chunk388032.intl.string(Chunk388032.t.AUMSZP)
      })
    }) : (0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.Ksh3ik),
      children: (0, Chunk54381.jsx)(Chunk481060.xJW, {
        title: (0, Chunk54381.jsx)(en, {}),
        children: (0, Chunk54381.jsx)(Chunk329013.i, {})
      })
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return V.intl.formatToPlainString(V.t["0hpvOV"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, m.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, m.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, m.cq)(e)
  }
  render() {
    let {
      density: e
    } = this.props, t = (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_THEME,
      children: [this.renderPreview(), this.renderTheme()]
    }), n = (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_ICON,
      children: (0, Chunk54381.jsx)(Chunk333859.c, {})
    }), i = [{
      name: Chunk388032.intl.string(Chunk388032.t["7iegX4"]),
      value: Chunk524437.Pi.COMPACT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.bBvAEH),
      value: Chunk524437.Pi.DEFAULT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["4cuYHx"]),
      value: Chunk524437.Pi.COZY
    }], a = (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_LIST_SPACING,
      children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t["C/5V0A"]),
        description: Chunk388032.intl.string(Chunk388032.t.QLZhYk),
        options: Chunk473749,
        onChange: e => this.handleUIDensityChange({
          value: e
        }),
        value: module
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk226518.divider
      })]
    }), o = (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t["2ed/sA"]),
        description: Chunk388032.intl.string(Chunk388032.t.u9N6Qh),
        children: [(0, Chunk54381.jsx)(Chunk481060.FXm, {
          label: Chunk388032.intl.string(Chunk388032.t.nKRoPv),
          description: Chunk388032.intl.string(Chunk388032.t.QntEEG),
          options: [{
            name: Chunk388032.intl.string(Chunk388032.t.Jqj4cZ),
            value: X
          }, {
            name: Chunk388032.intl.string(Chunk388032.t["1JNcPS"]),
            value: Q
          }],
          onChange: e => this.handleMessageDisplayModeChange({
            value: e
          }),
          value: this.props.messageDisplayCompact ? Q : X
        }), this.props.messageDisplayCompact && (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["//vhWi"]),
          checked: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
        }), this.renderMessageGroupSpacingSlider()]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk226518.divider
      })]
    }), s = (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_SCALING_SPACING,
      children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t["0Yh+ZX"]),
        children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk226518.divider
      })]
    }), l = (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk226518.a11yCallout,
      children: (0, Chunk54381.jsx)(er, {})
    });
    return (0, Chunk54381.jsxs)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
      children: [exports, require, Chunk120356, o, Chunk442837, Chunk704215]
    })
  }
  constructor(...e) {
    super(...e), W(this, "darkMessages", et(Z.BRd.DARK)), W(this, "lightMessages", et(Z.BRd.LIGHT)), W(this, "handleDisplayCompactAvatarsChanged", e => {
      f.ZP.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), W(this, "handleDesktopRefreshEnabledChanged", e => {
      f.ZP.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), W(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      x.jU.updateSetting(t === Q), (0, m.ZZ)()
    }), W(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== c.Pi.UNSET_UI_DENSITY && x.YC.updateSetting(t)
    })
  }
}
let ea = e => {
  (0, v.zu)(e) || (0, v.Q3)(e, {
    dismissAction: B.L.AUTO,
    forceTrack: true
  })
};

function eo() {
  let e = Chunk695346.jU.useSetting(),
    t = Chunk695346.RS.useSetting(),
    n = Chunk695346.NA.useSetting(),
    i = Chunk695346.L1.useSetting(),
    a = Chunk695346.YC.useSetting(),
    o = Chunk990924.y.useConfig({
      location: "UserSettingsAppearance"
    }).enabled;
  (0, Chunk493773.ZP)(() => {
    ea(Chunk704215.z.CLIENT_THEMES_SETTINGS_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK), ea(Chunk704215.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE), o && (0, Chunk93262.w)()
  });
  let c = (0, Chunk984802.A6)(),
    u = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z, Chunk594174.default, Chunk514361.Z], () => {
      var e, t;
      return {
        theme: Chunk210887.Z.theme,
        useForcedColors: Chunk607070.Z.useForcedColors,
        useSystemTheme: Chunk740492.ZP.useSystemTheme,
        fontSize: Chunk607070.Z.fontSize,
        zoom: Chunk607070.Z.zoom,
        messageGroupSpacing: Chunk607070.Z.messageGroupSpacing,
        displayCompactAvatars: Chunk740492.ZP.displayCompactAvatars,
        isStaff: null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff) && exports,
        gradientPreset: Chunk514361.Z.gradientPreset
      }
    });
  return (0, Chunk54381.jsx)(ei, K({
    messageDisplayCompact: module,
    hideSimpleEmbedContent: exports && require,
    clientTheme: Chunk473749,
    density: Chunk120356,
    darkSidebar: Chunk524437
  }, Chunk780384))
}