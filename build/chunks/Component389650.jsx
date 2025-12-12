/** Chunk was on web.js **/
/** chunk id: 389650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => K
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk825209 = require("./825209.jsx"),
  Chunk721383 = require("./721383.js"),
  Chunk612226 = require("./612226.js"),
  Chunk714338 = require("./714338.js"),
  Chunk924557 = require("./924557.js"),
  Chunk74299 = require("./74299.js"),
  Chunk577153 = require("./577153.js"),
  Chunk365023 = require("./365023.js"),
  Chunk509140 = require("./509140.js"),
  Chunk825655 = require("./825655.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk556296 = require("./556296.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk526665 = require("./526665.js"),
  Chunk659947 = require("./659947.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk125612 = require("./125612.js"),
  Chunk579480 = require("./579480.js"),
  Chunk478411 = require("./478411.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  let {
    children: t
  } = e;
  return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS])
}

function H() {
  return l()((0, Chunk612226.Rv)()).filter(e => e.description !== j.intl.string(j.t.HnNtEI)).groupBy(e => e.group).value()
}
class Y extends Chunk473749.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = Chunk13140.BB(module.shortcut);
    return Chunk714338.Z.hasBind(exports) ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.ERROR,
      children: Chunk388032.intl.string(Chunk388032.t["7lQlw3"])
    }) : Chunk295907.Sp.has(exports) ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
      messageType: Chunk481060.QYI.ERROR,
      children: Chunk388032.intl.format(Chunk388032.t.MOIaNd, {
        keyboardNavArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk125612.keybindMessage,
      children: this.props.keybindDescriptions[module.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk125612.keybindGroup, {
        [Chunk579480.card]: !this.props.isUserSettingsRedesignEnabled
      }),
      children: [!module && !this.props.isUserSettingsRedesignEnabled && (0, Chunk54381.jsx)(Chunk225433.Z, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t.qEHmmB),
        className: Chunk125612.removeKeybindFloating,
        onClick: this.handleDeleteKeybind
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk125612.keybindGroupContent,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk125612.item,
          children: (0, Chunk54381.jsx)(Chunk199849.y6, {
            label: Chunk388032.intl.string(Chunk388032.t.UUpAD6),
            value: this.props.keybind.action,
            options: this.props.keybindActionTypes,
            onChange: this.handleActionChanged,
            isDisabled: module
          })
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk125612.item,
          children: (0, Chunk54381.jsx)(Chunk481060.gNt, {
            label: Chunk388032.intl.string(Chunk388032.t["1La4tC"]),
            children: (0, Chunk54381.jsx)(Chunk825209.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), !module && this.props.isUserSettingsRedesignEnabled && (0, Chunk54381.jsx)("div", {
          className: Chunk125612.removeKeybind,
          children: (0, Chunk54381.jsx)(Chunk481060.hU, {
            variant: "icon-only",
            onClick: this.handleDeleteKeybind,
            icon: Chunk481060.XHJ,
            "aria-label": Chunk388032.intl.string(Chunk388032.t.qEHmmB)
          })
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk125612.switch,
          children: (0, Chunk54381.jsx)(Chunk481060.aML, {
            "data-migration-pending": true,
            text: Chunk388032.intl.string(Chunk388032.t.uCD7qK),
            children: e => (0, r.jsx)("div", B(Z({}, e), {
              children: (0, r.jsx)(f.rsf, {
                checked: t,
                onChange: this.handleEnableDisable
              })
            }))
          })
        })]
      }), this.renderMessage(), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    return module === Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, Chunk54381.jsx)(Chunk659947.Z, {
      keybind: this.props.keybind
    }) : true
  }
  constructor(...e) {
    super(...e), G(this, "handleActionChanged", e => {
      p.Z.setKeybind(B(Z({}, this.props.keybind), {
        action: e
      }))
    }), G(this, "handleShortcutChange", e => {
      p.Z.setKeybind(B(Z({}, this.props.keybind), {
        shortcut: e
      }))
    }), G(this, "handleDeleteKeybind", () => {
      p.Z.deleteKeybind(this.props.keybind.id)
    }), G(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      p.Z.setKeybind(B(Z({}, this.props.keybind), {
        enabled: !e.enabled
      }))
    })
  }
}
class W extends Chunk473749.PureComponent {
  componentDidMount() {
    Chunk660216.Z.enableAll(false)
  }
  componentWillUnmount() {
    Chunk660216.Z.enableAll(true)
  }
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: t,
      allowSoundboard: n,
      enableClips: r,
      enableScreenshotKeybind: i
    } = this.props, a = Chunk577153.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind ? [{
      value: Chunk981631.kg4.VAD_PRIORITY,
      label: Chunk388032.intl.string(Chunk388032.t["49d6Nd"])
    }] : [], o = [{
      value: Chunk981631.kg4.UNASSIGNED,
      label: Chunk388032.intl.string(Chunk388032.t["0Uh579"])
    }, {
      value: Chunk981631.kg4.PUSH_TO_TALK,
      label: Chunk388032.intl.string(Chunk388032.t.Y5lgTP)
    }, {
      value: Chunk981631.kg4.PUSH_TO_TALK_PRIORITY,
      label: Chunk388032.intl.string(Chunk388032.t.DkSwJ2)
    }, {
      value: Chunk981631.kg4.PUSH_TO_MUTE,
      label: Chunk388032.intl.string(Chunk388032.t.hSCRqd)
    }, ...Chunk120356, {
      value: Chunk981631.kg4.TOGGLE_MUTE,
      label: Chunk388032.intl.string(Chunk388032.t.PlkYKD)
    }, {
      value: Chunk981631.kg4.TOGGLE_DEAFEN,
      label: Chunk388032.intl.string(Chunk388032.t.NvGq1K)
    }, {
      value: Chunk981631.kg4.TOGGLE_VOICE_MODE,
      label: Chunk388032.intl.string(Chunk388032.t.Wa5H9S)
    }, {
      value: Chunk981631.kg4.TOGGLE_STREAMER_MODE,
      label: Chunk388032.intl.string(Chunk388032.t.BK0Ncc)
    }];
    return (0, Chunk365023.l)() && o.push({
      value: Chunk981631.kg4.TOGGLE_CAMERA,
      label: Chunk388032.intl.string(Chunk388032.t.hf8JVT)
    }), module && (o.push({
      value: Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      label: Chunk388032.intl.string(Chunk388032.t.VsAZcC)
    }), o.push({
      value: Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: Chunk388032.intl.string(Chunk388032.t.hurHWo)
    })), exports && ((0, Chunk358085.isWindows)() || Chunk131951.Z.getUseSystemScreensharePicker()) && o.push({
      value: Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING,
      label: Chunk388032.intl.string(Chunk388032.t.ybdjJD)
    }), (0, Chunk358085.isDesktop)() && (o.push({
      value: Chunk981631.kg4.NAVIGATE_BACK,
      label: Chunk388032.intl.string(Chunk388032.t.gRSaOa)
    }, {
      value: Chunk981631.kg4.NAVIGATE_FORWARD,
      label: Chunk388032.intl.string(Chunk388032.t.zOXpjU)
    }, {
      value: Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL,
      label: Chunk388032.intl.string(Chunk388032.t.ty7Lxy)
    }, {
      value: Chunk981631.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
      label: Chunk388032.intl.string(Chunk388032.t.CV7mT7)
    }), require && o.push({
      value: Chunk981631.kg4.SOUNDBOARD,
      label: Chunk388032.intl.string(Chunk388032.t.yPH4xm)
    }, {
      value: Chunk981631.kg4.SOUNDBOARD_HOLD,
      label: Chunk388032.intl.string(Chunk388032.t["1xFbP/"])
    }), Chunk54381 && (o.push({
      value: Chunk981631.kg4.SAVE_CLIP,
      label: Chunk388032.intl.string(Chunk388032.t.U4URzP)
    }), Chunk473749 && o.push({
      value: Chunk981631.kg4.SAVE_SCREENSHOT,
      label: Chunk388032.intl.string(Chunk388032.t["+WloFH"])
    }))), o
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: n,
      enableScreenshotKeybind: r
    } = this.props, i = {
      [Chunk981631.kg4.UNASSIGNED]: Chunk388032.intl.string(Chunk388032.t.rvlNLv),
      [Chunk981631.kg4.PUSH_TO_MUTE]: Chunk388032.intl.string(Chunk388032.t.xtESim),
      [Chunk981631.kg4.PUSH_TO_TALK]: Chunk388032.intl.string(Chunk388032.t.wTcBSy),
      [Chunk981631.kg4.PUSH_TO_TALK_PRIORITY]: Chunk388032.intl.string(Chunk388032.t.FhHvWH),
      [Chunk981631.kg4.TOGGLE_MUTE]: Chunk388032.intl.string(Chunk388032.t.X2fbUm),
      [Chunk981631.kg4.TOGGLE_DEAFEN]: Chunk388032.intl.string(Chunk388032.t.MjREZV),
      [Chunk981631.kg4.TOGGLE_VOICE_MODE]: Chunk388032.intl.string(Chunk388032.t.snm5YW),
      [Chunk981631.kg4.TOGGLE_STREAMER_MODE]: Chunk388032.intl.string(Chunk388032.t.YszLLx)
    };
    return Chunk577153.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind && (Chunk473749[Chunk981631.kg4.VAD_PRIORITY] = Chunk388032.intl.string(Chunk388032.t.rSe8IZ)), (0, Chunk365023.l)() && (Chunk473749[Chunk981631.kg4.TOGGLE_CAMERA] = Chunk388032.intl.string(Chunk388032.t.v1JBtL)), module && (Chunk473749[Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Chunk388032.intl.string(Chunk388032.t.IoP5vc)), exports && (0, Chunk358085.isWindows)() && (Chunk473749[Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING] = Chunk388032.intl.string(Chunk388032.t.s4C238)), (0, Chunk358085.isDesktop)() && (Chunk473749[Chunk981631.kg4.NAVIGATE_BACK] = Chunk388032.intl.string(Chunk388032.t.nKDlEt), Chunk473749[Chunk981631.kg4.NAVIGATE_FORWARD] = Chunk388032.intl.string(Chunk388032.t.DK0FFk), Chunk473749[Chunk981631.kg4.SOUNDBOARD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t["5wJefL"]) : Chunk388032.intl.string(Chunk388032.t.gzjsSP), Chunk473749[Chunk981631.kg4.SOUNDBOARD_HOLD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t.RRkZc9) : Chunk388032.intl.string(Chunk388032.t.laNlTl), require && (Chunk473749[Chunk981631.kg4.SAVE_CLIP] = Chunk388032.intl.string(Chunk388032.t.z3Wbam), Chunk54381 && (Chunk473749[Chunk981631.kg4.SAVE_SCREENSHOT] = Chunk388032.intl.string(Chunk388032.t.m0zd57)))), Chunk473749
  }
  renderKeybinds(e) {
    return e.map((t, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(Y, {
        keybind: t,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes,
        isUserSettingsRedesignEnabled: this.props.isUserSettingsRedesignEnabled
      }, t.id), n !== e.length - 1 ? (0, r.jsx)(f.izJ, {}) : null]
    }, t.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return null
  }
  renderKeybindWarning() {
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk125612.warning,
      children: [(0, Chunk54381.jsx)(Chunk481060.d3s, {
        size: "xs",
        color: Chunk692547.Z.colors.ICON_SUBTLE
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: Chunk388032.intl.string(Chunk388032.t.NoKjWP)
      })]
    })
  }
  render() {
    let {
      enableClips: e,
      enableScreenshotKeybind: t
    } = this.props, n = l()(this.props.keybinds).reject(e => e.managed && ![x.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, x.kg4.SAVE_CLIP, x.kg4.SAVE_SCREENSHOT].includes(e.action)).reject(t => !e && (t.action === x.kg4.SAVE_CLIP || t.action === x.kg4.SAVE_SCREENSHOT)).reject(e => !t && e.action === x.kg4.SAVE_SCREENSHOT).reject(e => !this.props.allowSoundboard && (e.action === x.kg4.SOUNDBOARD || e.action === x.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => true === e.managed ? false : 0).value(), a = H();
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk273313.Z, {
        title: Chunk388032.intl.string(Chunk388032.t.T9DA2K),
        children: Chunk358085.isPlatformEmbedded ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsxs)("div", {
            className: Chunk125612.ctaContainer,
            children: [this.renderKeybindWarning(), (0, Chunk54381.jsx)("div", {
              className: Chunk125612.addButton,
              children: (0, Chunk54381.jsx)(Chunk481060.Button, {
                size: "md",
                onClick: this.handleAddKeybind,
                text: Chunk388032.intl.string(Chunk388032.t.zk6Xbs),
                variant: "primary"
              })
            })]
          }), (0, Chunk54381.jsx)(Chunk825655.Z, {
            className: Chunk125612.systemServiceUpsell,
            sourcePage: "keybinds"
          }), (0, Chunk54381.jsx)(Chunk481060.izJ, {}), this.renderKeybinds(require), this.renderEmpty(require)]
        }) : (0, Chunk54381.jsx)(Chunk481060.Wn, {
          messageType: Chunk481060.QYI.INFO,
          className: Chunk125612.browserNotice,
          children: Chunk388032.intl.format(Chunk388032.t.mPi3F3, {
            downloadLink: Chunk981631.EYA.DOWNLOAD
          })
        })
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk478411.marginBottom60
      }), (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 48,
        children: [(0, Chunk54381.jsx)(Chunk481060.C3N, {
          label: Chunk388032.intl.string(Chunk388032.t.Lz5KHI),
          children: (0, Chunk54381.jsx)("div", {
            className: Chunk125612.defaultKeybindGroup,
            children: (0, Chunk54381.jsxs)("div", {
              className: Chunk125612.defaultKeybind,
              children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
                variant: "text-md/normal",
                children: Chunk388032.intl.string(Chunk388032.t.sMWLBj)
              }), (0, Chunk54381.jsx)("div", {
                className: Chunk125612.defaultKeybindShortcutGroup,
                children: (0, Chunk54381.jsx)(Chunk481060.M2$, {
                  shortcut: Chunk721383._.binds["0"]
                })
              })]
            })
          })
        }), (0, Chunk54381.jsx)(V, {
          children: e => (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) => {
              let n = (0, g.UD)(e),
                o = (0, g.U6)(e),
                s = a[e];
              return (0, r.jsx)(f.C3N, {
                label: n,
                description: o,
                children: (0, r.jsx)("div", {
                  className: M.defaultKeybindGroup,
                  children: s.map((e, t) => (0, r.jsxs)(i.Fragment, {
                    children: [0 !== t && (0, r.jsx)(f.izJ, {}), (0, r.jsxs)("div", {
                      className: M.defaultKeybind,
                      children: [(0, r.jsx)(f.Text, {
                        variant: "text-md/normal",
                        children: e.description
                      }), (0, r.jsx)("div", {
                        className: M.defaultKeybindShortcutGroup,
                        children: e.binds.map(e => (0, r.jsx)(f.M2$, {
                          shortcut: e
                        }, e))
                      })]
                    })]
                  }, e.description))
                })
              }, t)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), G(this, "handleAddKeybind", () => {
      p.Z.addKeybind()
    })
  }
}

function K() {
  let e = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getState()),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)),
    n = (0, Chunk442837.e7)([Chunk509140.Z], () => Chunk509140.Z.isSupported),
    i = (0, Chunk924557.w9)(),
    a = (0, Chunk924557.PP)(),
    o = (0, Chunk526665.wy)("UserSettingsKeybindsConnected");
  return (0, Chunk54381.jsx)(W, {
    keybinds: module,
    canGoLive: exports,
    overlaySupported: require,
    allowSoundboard: (0, Chunk358085.isWindows)(),
    enableClips: Chunk473749,
    enableScreenshotKeybind: Chunk120356,
    isUserSettingsRedesignEnabled: o
  })
}