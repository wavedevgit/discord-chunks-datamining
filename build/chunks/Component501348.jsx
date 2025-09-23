/** Chunk was on web.js **/
/** chunk id: 501348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk368763 = require("./368763.js"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
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
  Chunk947889 = require("./947889.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk5874 = require("./5874.js"),
  Chunk10198 = require("./10198.js");

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
    return [(0, I.e5)(q(K({}, (0, T.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.oZxkEh)
    })), {
      state: B.yb.SENT,
      id: "".concat(t++)
    })), (0, I.e5)(q(K({}, (0, T.ZP)({
      channelId: ee,
      content: (0, u.wj)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4m5"])
    })), {
      state: B.yb.SENT,
      id: "".concat(t++)
    })), (0, I.e5)(q(K({}, (0, T.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.a0Byo6)
    })), {
      state: B.yb.SENT,
      id: "".concat(t++)
    })), (0, I.e5)(q(K({}, (0, T.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.bmwEWF)
    })), {
      state: B.yb.SENT,
      id: "".concat(t++)
    })), (0, I.e5)(q(K({}, (0, T.ZP)({
      channelId: ee,
      content: V.intl.string(V.t.hK9QW1)
    })), {
      state: B.yb.SENT,
      id: "".concat(t)
    }))]
  },
  en = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk5874.themeTitle,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk5874.themeTitleContainer,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk5874.title,
        children: Chunk388032.intl.string(Chunk388032.t["0EzVsr"])
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk5874.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.PV3dGR)
      })]
    }), (0, Chunk951288.jsx)(Chunk329013.g, {})]
  }),
  er = () => {
    let e = (0, Chunk947889.Z)();
    return Chunk388032.intl.format(Chunk388032.t.Jae48P, {
      onClick: () => {
        module(Chunk313789.n.ACCESSIBILITY_PANEL, {
          section: Chunk981631.oAB.ACCESSIBILITY
        })
      }
    })
  };
class ei extends Chunk647438.Component {
  renderZoomSlider() {
    return Chunk358085.isPlatformEmbedded ? (0, Chunk951288.jsxs)("div", {
      className: Chunk10198.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        id: J,
        className: o()(Chunk5874.title, Chunk10198.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.i19n5O)
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk5874.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.ip0uSU)
      }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
        className: o()(Chunk10198.marginTop20, Chunk10198.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: Chunk981631.yqN.ZOOM_DEFAULT,
        markers: Chunk981631.yqN.ZOOM_SCALES,
        stickToMarkers: true,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": J
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.OMkSUl, {
          modKey: Chunk714338.Z.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk10198.marginTop20,
      children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t.qPOqoK),
        description: Chunk388032.intl.string(Chunk388032.t.XrtbPj),
        initialValue: this.props.fontSize,
        defaultValue: Chunk981631.yqN.FONT_SIZE_DEFAULT,
        markers: Chunk981631.yqN.FONT_SIZES,
        stickToMarkers: true,
        onValueChange: this.handleFontSizeChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText
      })
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: Chunk5874.messageGroupingSpacing,
      children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
        label: Chunk388032.intl.string(Chunk388032.t.Q6lKkp),
        description: Chunk388032.intl.string(Chunk388032.t.p7eUra),
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
    })
  }
  renderPreview() {
    let {
      messageDisplayCompact: e,
      theme: t,
      messageGroupSpacing: n,
      hideSimpleEmbedContent: i
    } = this.props, a = (0, Chunk780384.wj)(exports) ? this.darkMessages : this.lightMessages;
    return (0, Chunk951288.jsx)(Chunk481060.Rny, {
      children: (0, Chunk951288.jsx)(Chunk481060.Zbd, {
        className: o()(Chunk5874.preview, Chunk10198.marginBottom40, module ? Chunk5874.compactPreview : true, "group-spacing-".concat(null != require ? require : module ? Chunk959517.c8 : Chunk959517.pq)),
        outline: true,
        "aria-hidden": true,
        children: Chunk120356.map((t, n) => (0, r.jsx)(A.Z, {
          author: (0, S.ZH)(t),
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
    return module ? (0, Chunk951288.jsx)(Chunk481060.xJW, {
      className: o()(Chunk10198.marginTop8, Chunk10198.marginBottom40),
      title: (0, Chunk951288.jsx)("div", {
        className: Chunk5874.themeTitle,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk5874.title,
          children: Chunk388032.intl.string(Chunk388032.t.Ksh3io)
        })
      }),
      children: (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DEFAULT,
        className: Chunk5874.forcedColorsWarning,
        children: (0, Chunk627845.b)() ? (0, Chunk951288.jsx)(er, {}) : Chunk388032.intl.string(Chunk388032.t.AUMSZG)
      })
    }) : (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        className: Chunk5874.title,
        children: Chunk388032.intl.string(Chunk388032.t.Ksh3io)
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: (0, Chunk951288.jsx)(en, {}),
        children: (0, Chunk951288.jsx)(Chunk329013.i, {})
      })]
    })
  }
  renderTimestampHourCycle() {
    let {
      timestampHourCycle: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.FXm, {
      label: Chunk388032.intl.string(Chunk388032.t.dyamEB),
      options: [{
        name: Chunk388032.intl.string(Chunk388032.t.FMWYvb),
        value: Chunk524437.hg.AUTO
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.p8NOws),
        value: Chunk524437.hg.H12
      }, {
        name: Chunk388032.intl.string(Chunk388032.t["+o/sOj"]),
        value: Chunk524437.hg.H23
      }],
      onChange: e => x.hg.updateSetting(e),
      value: module
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return V.intl.formatToPlainString(V.t["0hpvOT"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, h.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, h.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, h.cq)(e)
  }
  render() {
    let {
      density: e
    } = this.props, t = (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_THEME,
      children: [this.renderPreview(), this.renderTheme()]
    }), n = (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_ICON,
      children: (0, Chunk951288.jsx)(Chunk333859.c, {})
    }), i = [{
      name: Chunk388032.intl.string(Chunk388032.t["7iegX1"]),
      value: Chunk524437.Pi.COMPACT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.bBvAEB),
      value: Chunk524437.Pi.DEFAULT
    }, {
      name: Chunk388032.intl.string(Chunk388032.t["4cuYHx"]),
      value: Chunk524437.Pi.COZY
    }], a = (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_LIST_SPACING,
      children: [(0, Chunk951288.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t["C/5V0N"]),
        description: Chunk388032.intl.string(Chunk388032.t.QLZhYm),
        options: Chunk647438,
        onChange: e => this.handleUIDensityChange({
          value: e
        }),
        value: module
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk5874.divider
      })]
    }), o = (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        padding: {
          bottom: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-lg/medium",
          className: Chunk5874.title,
          children: Chunk388032.intl.string(Chunk388032.t["2ed/sL"])
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          className: Chunk5874.subtext,
          children: Chunk388032.intl.string(Chunk388032.t.u9N6Qk)
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.FXm, {
        label: Chunk388032.intl.string(Chunk388032.t.nKRoPj),
        description: Chunk388032.intl.string(Chunk388032.t.QntEEB),
        options: [{
          name: Chunk388032.intl.string(Chunk388032.t.Jqj4cX),
          value: X
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["1JNcPT"]),
          value: Q
        }],
        onChange: e => this.handleMessageDisplayModeChange({
          value: e
        }),
        value: this.props.messageDisplayCompact ? Q : X
      }), this.props.messageDisplayCompact && (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk5874.compactModeToggle,
        hideBorder: true,
        value: !this.props.displayCompactAvatars,
        onChange: e => this.handleDisplayCompactAvatarsChanged(!e),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: Chunk388032.intl.string(Chunk388032.t["//vhWl"])
        })
      }), this.renderMessageGroupSpacingSlider(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk5874.divider
      })]
    }), s = (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_SCALING_SPACING,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        className: Chunk5874.title,
        children: Chunk388032.intl.string(Chunk388032.t["0Yh+ZW"])
      }), this.renderFontScaleSlider(), this.renderZoomSlider(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk5874.divider
      })]
    }), l = (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
      children: this.renderTimestampHourCycle()
    }), u = (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk5874.a11yCallout,
      children: (0, Chunk951288.jsx)(er, {})
    });
    return (0, Chunk951288.jsxs)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["iHH+k5"]),
      children: [exports, require, Chunk120356, o, Chunk442837, Chunk704215, Chunk780384]
    })
  }
  constructor(...e) {
    super(...e), W(this, "darkMessages", et(B.BRd.DARK)), W(this, "lightMessages", et(B.BRd.LIGHT)), W(this, "handleDisplayCompactAvatarsChanged", e => {
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
      x.jU.updateSetting(t === Q), (0, h.ZZ)()
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
    dismissAction: Z.L.AUTO,
    forceTrack: true
  })
};

function eo() {
  let e = Chunk695346.jU.useSetting(),
    t = Chunk695346.RS.useSetting(),
    n = Chunk695346.NA.useSetting(),
    a = Chunk695346.L1.useSetting(),
    o = Chunk695346.hg.useSetting(),
    c = Chunk695346.YC.useSetting(),
    u = Chunk803038.Mc.useExperiment({
      location: "UserSettingsAppearance"
    }).enabled,
    d = (0, Chunk368763.T)("UserSettingsAppearance");
  (0, Chunk493773.ZP)(() => {
    ea(Chunk704215.z.CLIENT_THEMES_SETTINGS_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK)
  }), Chunk647438.useEffect(() => {
    Chunk780384 && ea(Chunk704215.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE), Chunk481060 && ea(Chunk704215.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE)
  }, [Chunk780384, Chunk481060]);
  let f = (0, Chunk984802.A6)(),
    p = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z, Chunk594174.default, Chunk514361.Z], () => {
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
  return (0, Chunk951288.jsx)(ei, K({
    messageDisplayCompact: module,
    hideSimpleEmbedContent: exports && require,
    clientTheme: Chunk120356,
    timestampHourCycle: o,
    density: Chunk524437,
    darkSidebar: Chunk153867
  }, Chunk714338))
}