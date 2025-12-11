/** Chunk was on web.js **/
/** chunk id: 501348, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407626 = require("./407626.js"),
  Chunk478411 = require("./478411.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = "cozy",
  z = "compact",
  q = (0, Chunk313201.hQ)(),
  Q = (0, Chunk313201.hQ)(),
  X = "1337",
  J = e => {
    let t = 0;
    return [(0, O.e5)(W(H({}, (0, v.ZP)({
      channelId: X,
      content: Z.intl.string(Z.t.oZxkEq)
    })), {
      state: U.yb.SENT,
      id: "".concat(t++)
    })), (0, O.e5)(W(H({}, (0, v.ZP)({
      channelId: X,
      content: (0, c.wj)(e) ? Z.intl.string(Z.t["WGb/v7"]) : Z.intl.string(Z.t["62m4mz"])
    })), {
      state: U.yb.SENT,
      id: "".concat(t++)
    })), (0, O.e5)(W(H({}, (0, v.ZP)({
      channelId: X,
      content: Z.intl.string(Z.t.a0Byo5)
    })), {
      state: U.yb.SENT,
      id: "".concat(t++)
    })), (0, O.e5)(W(H({}, (0, v.ZP)({
      channelId: X,
      content: Z.intl.string(Z.t.bmwEWJ)
    })), {
      state: U.yb.SENT,
      id: "".concat(t++)
    })), (0, O.e5)(W(H({}, (0, v.ZP)({
      channelId: X,
      content: Z.intl.string(Z.t["hK9QW/"])
    })), {
      state: U.yb.SENT,
      id: "".concat(t)
    }))]
  },
  $ = () => (0, Chunk54381.jsxs)("div", {
    className: Chunk407626.themeTitle,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk407626.themeTitleContainer,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk407626.title,
        children: Chunk388032.intl.string(Chunk388032.t["0EzVst"])
      }), (0, Chunk54381.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk407626.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.PV3dGX)
      })]
    }), (0, Chunk54381.jsx)(Chunk329013.g, {})]
  }),
  ee = () => Chunk388032.intl.format(Chunk388032.t.Jae48E, {
    onClick: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.ACCESSIBILITY_PANEL, {
        section: Chunk981631.oAB.ACCESSIBILITY
      })
    }
  });
class et extends Chunk473749.Component {
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
      "aria-labelledby": q
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
      "aria-labelledby": Q
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
        className: o()(Chunk407626.preview, Chunk478411.marginBottom40, module ? Chunk407626.compactPreview : true, "group-spacing-".concat(null != require ? require : module ? Chunk959517.c8 : Chunk959517.pq)),
        outline: true,
        "aria-hidden": true,
        children: Chunk120356.map((t, n) => (0, r.jsx)(I.Z, {
          author: (0, S.ZH)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? F.firstMessage : true,
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
        children: (0, Chunk627845.b)() ? (0, Chunk54381.jsx)(ee, {}) : Chunk388032.intl.string(Chunk388032.t.AUMSZP)
      })
    }) : (0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.Ksh3ik),
      children: (0, Chunk54381.jsx)(Chunk481060.xJW, {
        title: (0, Chunk54381.jsx)($, {}),
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
    return Z.intl.formatToPlainString(Z.t["0hpvOV"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, _.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, _.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, _.cq)(e)
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
        className: Chunk407626.divider
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
            value: K
          }, {
            name: Chunk388032.intl.string(Chunk388032.t["1JNcPS"]),
            value: z
          }],
          onChange: e => this.handleMessageDisplayModeChange({
            value: e
          }),
          value: this.props.messageDisplayCompact ? z : K
        }), this.props.messageDisplayCompact && (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["//vhWi"]),
          checked: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e)
        }), this.renderMessageGroupSpacingSlider()]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk407626.divider
      })]
    }), s = (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_SCALING_SPACING,
      children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: Chunk388032.intl.string(Chunk388032.t["0Yh+ZX"]),
        children: [this.renderFontScaleSlider(), this.renderZoomSlider()]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk407626.divider
      })]
    }), c = (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk407626.a11yCallout,
      children: (0, Chunk54381.jsx)(ee, {})
    });
    return (0, Chunk54381.jsxs)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["iHH+ky"]),
      children: [exports, require, Chunk120356, o, Chunk442837, Chunk780384]
    })
  }
  constructor(...e) {
    super(...e), V(this, "darkMessages", J(U.BRd.DARK)), V(this, "lightMessages", J(U.BRd.LIGHT)), V(this, "handleDisplayCompactAvatarsChanged", e => {
      d.ZP.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), V(this, "handleDesktopRefreshEnabledChanged", e => {
      d.ZP.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), V(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      w.jU.updateSetting(t === z), (0, _.ZZ)()
    }), V(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== l.Pi.UNSET_UI_DENSITY && w.YC.updateSetting(t)
    })
  }
}

function en() {
  let e = Chunk695346.jU.useSetting(),
    t = Chunk695346.RS.useSetting(),
    n = Chunk695346.NA.useSetting(),
    i = Chunk695346.L1.useSetting(),
    a = Chunk695346.YC.useSetting(),
    o = Chunk990924.y.useConfig({
      location: "UserSettingsAppearance"
    }).enabled;
  (0, Chunk493773.ZP)(() => {
    o && (0, Chunk93262.w)()
  });
  let l = (0, Chunk984802.A6)(),
    c = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z, Chunk594174.default, Chunk514361.Z], () => {
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
  return (0, Chunk54381.jsx)(et, H({
    messageDisplayCompact: module,
    hideSimpleEmbedContent: exports && require,
    clientTheme: Chunk473749,
    density: Chunk120356,
    darkSidebar: Chunk524437
  }, Chunk780384))
}