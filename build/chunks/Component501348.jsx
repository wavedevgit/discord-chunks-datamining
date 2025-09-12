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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493773 = require("./493773.js"),
  Chunk714338 = require("./714338.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk600164 = require("./600164.jsx"),
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
  Chunk329013 = require("./329013.jsx"),
  Chunk333859 = require("./333859.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226518 = require("./226518.js"),
  Chunk197571 = require("./197571.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = "cozy",
  X = "compact",
  Q = (0, Chunk313201.hQ)(),
  J = (0, Chunk313201.hQ)(),
  $ = (0, Chunk313201.hQ)(),
  ee = "1337",
  et = e => {
    let t = 0;
    return [(0, S.e5)(z(W({}, (0, A.ZP)({
      channelId: ee,
      content: F.intl.string(F.t.oZxkEh)
    })), {
      state: G.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(z(W({}, (0, A.ZP)({
      channelId: ee,
      content: (0, u.wj)(e) ? F.intl.string(F.t["WGb/v7"]) : F.intl.string(F.t["62m4m5"])
    })), {
      state: G.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(z(W({}, (0, A.ZP)({
      channelId: ee,
      content: F.intl.string(F.t.a0Byo6)
    })), {
      state: G.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(z(W({}, (0, A.ZP)({
      channelId: ee,
      content: F.intl.string(F.t.bmwEWF)
    })), {
      state: G.yb.SENT,
      id: "".concat(t++)
    })), (0, S.e5)(z(W({}, (0, A.ZP)({
      channelId: ee,
      content: F.intl.string(F.t.hK9QW1)
    })), {
      state: G.yb.SENT,
      id: "".concat(t)
    }))]
  },
  en = () => (0, Chunk951288.jsxs)("div", {
    className: Chunk226518.themeTitle,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk226518.themeTitleContainer,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk226518.title,
        children: Chunk388032.intl.string(Chunk388032.t["0EzVsr"])
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk226518.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.PV3dGR)
      })]
    }), (0, Chunk951288.jsx)(Chunk329013.g, {})]
  });
class er extends Chunk647438.Component {
  renderZoomSlider() {
    return Chunk358085.isPlatformEmbedded ? (0, Chunk951288.jsxs)("div", {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        id: Q,
        className: o()(Chunk226518.title, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.i19n5O)
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk226518.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.ip0uSU)
      }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
        className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom4),
        initialValue: this.props.zoom,
        defaultValue: Chunk981631.yqN.ZOOM_DEFAULT,
        markers: Chunk981631.yqN.ZOOM_SCALES,
        stickToMarkers: true,
        onValueChange: this.handleZoomChange,
        onValueRender: this.handleSliderRender,
        "aria-labelledby": Q
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: Chunk388032.intl.format(Chunk388032.t.OMkSUl, {
          modKey: Chunk714338.Z.modKey
        })
      })]
    }) : null
  }
  renderFontScaleSlider() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        id: J,
        className: o()(Chunk226518.title, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.qPOqoK)
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk226518.subtext,
        children: "Increase or decrease the size of the chat font"
      }), (0, Chunk951288.jsx)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          className: o()({
            [Chunk197571.marginTop20]: false,
            [Chunk197571.marginBottom4]: false
          }),
          initialValue: this.props.fontSize,
          defaultValue: Chunk981631.yqN.FONT_SIZE_DEFAULT,
          markers: Chunk981631.yqN.FONT_SIZES,
          stickToMarkers: true,
          onValueChange: this.handleFontSizeChange,
          onValueRender: this.handleSliderRenderPX,
          onMarkerRender: this.handleSliderRenderPX,
          getAriaValueText: this.handleSliderValueText,
          "aria-labelledby": J
        })
      })]
    })
  }
  renderMessageGroupSpacingSlider() {
    let {
      messageDisplayCompact: e,
      messageGroupSpacing: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk226518.messageGroupingSpacing,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        id: $,
        className: o()(Chunk226518.title, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t.Q6lKkp)
      }), (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.geA.DESCRIPTION,
        className: Chunk226518.subtext,
        children: Chunk388032.intl.string(Chunk388032.t.p7eUra)
      }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
        initialValue: exports,
        defaultValue: module ? Chunk959517.c8 : Chunk959517.pq,
        markers: Chunk959517.fP,
        stickToMarkers: true,
        onValueChange: this.handleMessageSpacingChange,
        onValueRender: this.handleSliderRenderPX,
        onMarkerRender: this.handleSliderRenderPX,
        getAriaValueText: this.handleSliderValueText,
        "aria-labelledby": $
      })]
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
        className: o()(Chunk226518.preview, Chunk197571.marginBottom40, module ? Chunk226518.compactPreview : true, "group-spacing-".concat(null != require ? require : module ? Chunk959517.c8 : Chunk959517.pq)),
        outline: true,
        "aria-hidden": true,
        children: Chunk120356.map((t, n) => (0, r.jsx)(N.Z, {
          author: (0, C.ZH)(t),
          message: t,
          compact: e,
          isGroupStart: n % 2 == 0,
          className: 0 === n ? V.firstMessage : true,
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
      className: o()(Chunk197571.marginTop8, Chunk197571.marginBottom40),
      title: (0, Chunk951288.jsx)("div", {
        className: Chunk226518.themeTitle,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk226518.title,
          children: Chunk388032.intl.string(Chunk388032.t.Ksh3io)
        })
      }),
      children: (0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DEFAULT,
        className: Chunk226518.forcedColorsWarning,
        children: (0, Chunk627845.b)() ? Chunk388032.intl.format(Chunk388032.t.Jae48P, {
          onClick: () => {
            Chunk230711.Z.open(Chunk981631.oAB.ACCESSIBILITY)
          }
        }) : Chunk388032.intl.string(Chunk388032.t.AUMSZG)
      })
    }) : (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 24,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        className: Chunk226518.title,
        children: Chunk388032.intl.string(Chunk388032.t.Ksh3io)
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: (0, Chunk951288.jsx)(en, {}),
        children: (0, Chunk951288.jsx)(Chunk329013.i, {})
      })]
    })
  }
  renderDisplayMode() {
    return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t.ZEoGMT),
      className: Chunk197571.marginTop8,
      children: [(0, Chunk951288.jsx)(Chunk755721.Gu, {
        options: [{
          name: Chunk388032.intl.string(Chunk388032.t.KZIadn),
          value: q
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["6+nTjY"]),
          value: X
        }],
        onChange: this.handleMessageDisplayModeChange,
        value: this.props.messageDisplayCompact ? X : q
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
        disabled: !this.props.messageDisplayCompact,
        onChange: this.handleDisplayCompactAvatarsChanged,
        className: Chunk197571.marginTop20,
        children: Chunk388032.intl.string(Chunk388032.t["7FVjFB"])
      })]
    })
  }
  renderListSpacing() {
    let {
      density: e
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_LIST_SPACING,
      children: [(0, Chunk951288.jsxs)(Chunk481060.xJW, {
        title: (0, Chunk951288.jsx)("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: "center"
          },
          children: "UI Density"
        }),
        className: Chunk197571.marginTop8,
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          className: Chunk197571.marginBottom8,
          children: "Adjust the spacing and layout to balance readability and content based on your preferences."
        }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
          options: [{
            name: Chunk388032.intl.string(Chunk388032.t.T7G4Y2),
            value: Chunk524437.Pi.COZY,
            desc: "Comfortable spacing for easier readability"
          }, {
            name: Chunk388032.intl.string(Chunk388032.t["7iegX1"]),
            value: Chunk524437.Pi.COMPACT,
            desc: "Tighter layout to fit more content"
          }],
          onChange: this.handleUIDensityChange,
          value: module
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk197571.marginTop8
      })]
    })
  }
  handleDarkSidebarChecked() {
    (0, Chunk857595.lq)()
  }
  renderScalingAndSpacing() {
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk197571.marginTop20
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
      onChange: e => j.hg.updateSetting(e.value),
      value: module
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["iHH+k5"]),
      children: [(0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.APPEARANCE_THEME,
        children: [this.renderPreview(), this.renderTheme()]
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
        children: this.renderDisplayMode()
      }), this.renderListSpacing(), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.APPEARANCE_SCALING_SPACING,
        children: this.renderScalingAndSpacing()
      }), (0, Chunk951288.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
        children: [this.renderTimestampHourCycle(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk197571.marginTop8
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        className: Chunk197571.marginTop20,
        children: Chunk388032.intl.format(Chunk388032.t["5LEQdX"], {
          onAccessibilityClick() {
            Chunk230711.Z.open(Chunk981631.oAB.ACCESSIBILITY)
          }
        })
      })]
    })
  }
  handleSliderRender(e) {
    return "".concat(e.toFixed(0), "%")
  }
  handleSliderRenderPX(e) {
    return "".concat(e.toFixed(0), "px")
  }
  handleSliderValueText(e) {
    return F.intl.formatToPlainString(F.t["0hpvOT"], {
      value: e
    })
  }
  handleFontSizeChange(e) {
    (0, g.oL)(e)
  }
  handleMessageSpacingChange(e) {
    switch (e) {
      case 0:
      case 4:
      case 8:
      case 16:
      case 24:
        (0, g.ZZ)(e)
    }
  }
  handleZoomChange(e) {
    (0, g.cq)(e)
  }
  constructor(...e) {
    super(...e), Y(this, "darkMessages", et(G.BRd.DARK)), Y(this, "lightMessages", et(G.BRd.LIGHT)), Y(this, "handleDisplayCompactAvatarsChanged", e => {
      _.ZP.updatedUnsyncedSettings({
        displayCompactAvatars: e
      })
    }), Y(this, "handleDesktopRefreshEnabledChanged", e => {
      _.ZP.updatedUnsyncedSettings({
        disableVisualRefresh: !e
      })
    }), Y(this, "handleMessageDisplayModeChange", e => {
      let {
        value: t
      } = e;
      j.jU.updateSetting(t === X), (0, g.ZZ)()
    }), Y(this, "handleUIDensityChange", e => {
      let {
        value: t
      } = e;
      t !== c.Pi.UNSET_UI_DENSITY && j.YC.updateSetting(t)
    })
  }
}
class ei extends er {
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
      children: [(0, Chunk951288.jsxs)(Chunk481060.xJW, {
        title: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-lg/medium",
          className: Chunk226518.title,
          children: Chunk388032.intl.string(Chunk388032.t["C/5V0N"])
        }),
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          className: Chunk226518.subtext,
          children: Chunk388032.intl.string(Chunk388032.t.QLZhYm)
        }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
          options: Chunk647438,
          onChange: this.handleUIDensityChange,
          value: module
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk226518.divider
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
          className: Chunk226518.title,
          children: Chunk388032.intl.string(Chunk388032.t["2ed/sL"])
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          className: Chunk226518.subtext,
          children: Chunk388032.intl.string(Chunk388032.t.u9N6Qk)
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        titleClassName: Chunk226518.title,
        title: Chunk388032.intl.string(Chunk388032.t.nKRoPj),
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          type: Chunk481060.geA.DESCRIPTION,
          className: Chunk226518.subtext,
          children: Chunk388032.intl.string(Chunk388032.t.QntEEB)
        }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
          options: [{
            name: Chunk388032.intl.string(Chunk388032.t.Jqj4cX),
            value: q
          }, {
            name: Chunk388032.intl.string(Chunk388032.t["1JNcPT"]),
            value: X
          }],
          onChange: this.handleMessageDisplayModeChange,
          value: this.props.messageDisplayCompact ? X : q
        }), this.props.messageDisplayCompact && (0, Chunk951288.jsx)(Chunk481060.j7V, {
          className: Chunk226518.compactModeToggle,
          hideBorder: true,
          value: !this.props.displayCompactAvatars,
          onChange: e => this.handleDisplayCompactAvatarsChanged(!e),
          children: (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/medium",
            children: Chunk388032.intl.string(Chunk388032.t["//vhWl"])
          })
        })]
      }), this.renderMessageGroupSpacingSlider(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk226518.divider
      })]
    }), s = (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_SCALING_SPACING,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        className: Chunk226518.title,
        children: Chunk388032.intl.string(Chunk388032.t["0Yh+ZW"])
      }), this.renderFontScaleSlider(), this.renderZoomSlider(), (0, Chunk951288.jsx)(Chunk481060.$i$, {
        className: Chunk226518.divider
      })]
    }), l = (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
      children: this.renderTimestampHourCycle()
    }), u = (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk226518.a11yCallout,
      children: Chunk388032.intl.format(Chunk388032.t["5LEQdX"], {
        onAccessibilityClick() {
          Chunk230711.Z.open(Chunk981631.oAB.ACCESSIBILITY)
        }
      })
    });
    return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["iHH+k5"]),
      children: [exports, require, Chunk120356, o, Chunk442837, Chunk704215, Chunk780384]
    })
  }
}
let ea = e => {
  (0, T.zu)(e) || (0, T.Q3)(e, {
    dismissAction: B.L.AUTO,
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
    }).enabled;
  (0, Chunk493773.ZP)(() => {
    ea(Chunk704215.z.CLIENT_THEMES_SETTINGS_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ea(Chunk704215.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK)
  }), Chunk647438.useEffect(() => {
    Chunk780384 && ea(Chunk704215.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE)
  }, [Chunk780384]);
  let d = (0, Chunk984802.A6)(),
    f = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z, Chunk594174.default, Chunk514361.Z], () => {
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
  return (0, Chunk951288.jsx)(ei, W({
    messageDisplayCompact: module,
    hideSimpleEmbedContent: exports && require,
    clientTheme: Chunk120356,
    timestampHourCycle: o,
    density: Chunk524437,
    darkSidebar: Chunk755721
  }, Chunk481060))
}