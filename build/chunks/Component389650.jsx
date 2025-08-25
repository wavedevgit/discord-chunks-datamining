/** Chunk was on web.js **/
/** chunk id: 389650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk825209 = require("./825209.jsx"),
  Chunk721383 = require("./721383.js"),
  Chunk612226 = require("./612226.js"),
  Chunk714338 = require("./714338.js"),
  Chunk924557 = require("./924557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk74299 = require("./74299.js"),
  Chunk577153 = require("./577153.js"),
  Chunk365023 = require("./365023.js"),
  Chunk610394 = require("./610394.js"),
  Chunk825655 = require("./825655.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk556296 = require("./556296.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk659947 = require("./659947.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk894462 = require("./894462.js"),
  Chunk620842 = require("./620842.js"),
  Chunk197571 = require("./197571.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  let {
    children: t
  } = e;
  return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS])
}
let V = l()((0, Chunk612226.Rv)()).filter(e => e.description !== L.intl.string(L.t.HnNtEB)).groupBy(e => e.group).value();
class H extends Chunk647438.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = Chunk13140.BB(module.shortcut);
    return Chunk714338.Z.hasBind(exports) ? (0, Chunk951288.jsx)(Chunk481060.R94, {
      className: Chunk894462.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      style: {
        color: Chunk692547.Z.unsafe_rawColors.RED_400.css
      },
      children: Chunk388032.intl.string(Chunk388032.t["7lQlw8"])
    }) : Chunk420212.Sp.has(exports) ? (0, Chunk951288.jsx)(Chunk481060.R94, {
      className: Chunk894462.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      style: {
        color: Chunk692547.Z.unsafe_rawColors.RED_400.css
      },
      children: Chunk388032.intl.format(Chunk388032.t.MOIaNT, {
        keyboardNavArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, Chunk951288.jsx)(Chunk481060.R94, {
      className: Chunk894462.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      children: this.props.keybindDescriptions[module.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: a()(Chunk894462.keybindGroup, Chunk620842.card),
      children: [!module && (0, Chunk951288.jsx)(Chunk225433.Z, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t.qEHmmJ),
        className: Chunk894462.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: Chunk225433.Z.Looks.FILLED
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk197571.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          basis: "45%",
          children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t.UUpADw),
            className: Chunk894462.item,
            children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: module
            })
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          basis: "45%",
          children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t["1La4tL"]),
            className: Chunk894462.item,
            children: (0, Chunk951288.jsx)(Chunk825209.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
            className: Chunk894462.switch,
            children: (0, Chunk951288.jsx)(Chunk481060.ua7, {
              text: Chunk388032.intl.string(Chunk388032.t.uCD7qK),
              children: e => (0, r.jsx)("div", Z(G({}, e), {
                children: (0, r.jsx)(f.rsf, {
                  checked: t,
                  onChange: this.handleEnableDisable
                })
              }))
            })
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    return module === Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, Chunk951288.jsx)(Chunk659947.Z, {
      keybind: this.props.keybind
    }) : true
  }
  constructor(...e) {
    super(...e), U(this, "handleActionChanged", e => {
      _.Z.setKeybind(Z(G({}, this.props.keybind), {
        action: e
      }))
    }), U(this, "handleShortcutChange", e => {
      _.Z.setKeybind(Z(G({}, this.props.keybind), {
        shortcut: e
      }))
    }), U(this, "handleDeleteKeybind", () => {
      _.Z.deleteKeybind(this.props.keybind.id)
    }), U(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      _.Z.setKeybind(Z(G({}, this.props.keybind), {
        enabled: !e.enabled
      }))
    })
  }
}
class Y extends Chunk647438.PureComponent {
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
      enableClips: r
    } = this.props, i = Chunk577153.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind ? [{
      value: Chunk981631.kg4.VAD_PRIORITY,
      label: Chunk388032.intl.string(Chunk388032.t["49d6NT"])
    }] : [], o = [{
      value: Chunk981631.kg4.UNASSIGNED,
      label: Chunk388032.intl.string(Chunk388032.t["0Uh57+"])
    }, {
      value: Chunk981631.kg4.PUSH_TO_TALK,
      label: Chunk388032.intl.string(Chunk388032.t.Y5lgTE)
    }, {
      value: Chunk981631.kg4.PUSH_TO_TALK_PRIORITY,
      label: Chunk388032.intl.string(Chunk388032.t.DkSwJy)
    }, {
      value: Chunk981631.kg4.PUSH_TO_MUTE,
      label: Chunk388032.intl.string(Chunk388032.t.hSCRqa)
    }, ...Chunk647438, {
      value: Chunk981631.kg4.TOGGLE_MUTE,
      label: Chunk388032.intl.string(Chunk388032.t.PlkYKC)
    }, {
      value: Chunk981631.kg4.TOGGLE_DEAFEN,
      label: Chunk388032.intl.string(Chunk388032.t.NvGq1N)
    }, {
      value: Chunk981631.kg4.TOGGLE_VOICE_MODE,
      label: Chunk388032.intl.string(Chunk388032.t.Wa5H9f)
    }, {
      value: Chunk981631.kg4.TOGGLE_STREAMER_MODE,
      label: Chunk388032.intl.string(Chunk388032.t.BK0NcX)
    }];
    return (0, Chunk365023.l)() && Chunk120356.push({
      value: Chunk981631.kg4.TOGGLE_CAMERA,
      label: Chunk388032.intl.string(Chunk388032.t.hf8JVV)
    }), module && (Chunk120356.push({
      value: Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      label: Chunk388032.intl.string(Chunk388032.t.VsAZcH)
    }), Chunk120356.push({
      value: Chunk981631.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: Chunk388032.intl.string(Chunk388032.t.hurHWl)
    })), exports && ((0, Chunk358085.isWindows)() || Chunk131951.Z.getUseSystemScreensharePicker()) && Chunk120356.push({
      value: Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING,
      label: Chunk388032.intl.string(Chunk388032.t.ybdjJC)
    }), (0, Chunk358085.isDesktop)() && (Chunk120356.push({
      value: Chunk981631.kg4.NAVIGATE_BACK,
      label: Chunk388032.intl.string(Chunk388032.t.gRSaOT)
    }, {
      value: Chunk981631.kg4.NAVIGATE_FORWARD,
      label: Chunk388032.intl.string(Chunk388032.t.zOXpjY)
    }, {
      value: Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL,
      label: Chunk388032.intl.string(Chunk388032.t.ty7Lx8)
    }, {
      value: Chunk981631.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
      label: Chunk388032.intl.string(Chunk388032.t.CV7mT0)
    }), require && Chunk120356.push({
      value: Chunk981631.kg4.SOUNDBOARD,
      label: Chunk388032.intl.string(Chunk388032.t.yPH4xs)
    }, {
      value: Chunk981631.kg4.SOUNDBOARD_HOLD,
      label: Chunk388032.intl.string(Chunk388032.t["1xFbPz"])
    }), Chunk951288 && Chunk120356.push({
      value: Chunk981631.kg4.SAVE_CLIP,
      label: Chunk388032.intl.string(Chunk388032.t.U4URzM)
    })), Chunk120356
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: n
    } = this.props, r = {
      [Chunk981631.kg4.UNASSIGNED]: Chunk388032.intl.string(Chunk388032.t.rvlNLi),
      [Chunk981631.kg4.PUSH_TO_MUTE]: Chunk388032.intl.string(Chunk388032.t.xtESio),
      [Chunk981631.kg4.PUSH_TO_TALK]: Chunk388032.intl.string(Chunk388032.t.wTcBS0),
      [Chunk981631.kg4.PUSH_TO_TALK_PRIORITY]: Chunk388032.intl.string(Chunk388032.t.FhHvWF),
      [Chunk981631.kg4.TOGGLE_MUTE]: Chunk388032.intl.string(Chunk388032.t.X2fbUl),
      [Chunk981631.kg4.TOGGLE_DEAFEN]: Chunk388032.intl.string(Chunk388032.t.MjREZW),
      [Chunk981631.kg4.TOGGLE_VOICE_MODE]: Chunk388032.intl.string(Chunk388032.t.snm5YW),
      [Chunk981631.kg4.TOGGLE_STREAMER_MODE]: Chunk388032.intl.string(Chunk388032.t.YszLLy)
    };
    return Chunk577153.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind && (Chunk951288[Chunk981631.kg4.VAD_PRIORITY] = Chunk388032.intl.string(Chunk388032.t.rSe8IS)), (0, Chunk365023.l)() && (Chunk951288[Chunk981631.kg4.TOGGLE_CAMERA] = Chunk388032.intl.string(Chunk388032.t.v1JBtL)), module && (Chunk951288[Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Chunk388032.intl.string(Chunk388032.t.IoP5vb)), exports && (0, Chunk358085.isWindows)() && (Chunk951288[Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING] = Chunk388032.intl.string(Chunk388032.t.s4C239)), (0, Chunk358085.isDesktop)() && (Chunk951288[Chunk981631.kg4.NAVIGATE_BACK] = Chunk388032.intl.string(Chunk388032.t.nKDlEh), Chunk951288[Chunk981631.kg4.NAVIGATE_FORWARD] = Chunk388032.intl.string(Chunk388032.t.DK0FFh), Chunk951288[Chunk981631.kg4.SOUNDBOARD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t["5wJefH"]) : Chunk388032.intl.string(Chunk388032.t.gzjsSE), Chunk951288[Chunk981631.kg4.SOUNDBOARD_HOLD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t.RRkZc3) : Chunk388032.intl.string(Chunk388032.t.laNlTk), require && (Chunk951288[Chunk981631.kg4.SAVE_CLIP] = Chunk388032.intl.string(Chunk388032.t.z3Wbam))), Chunk951288
  }
  renderKeybinds(e) {
    return e.map(e => (0, r.jsx)("div", {
      className: j.row,
      children: (0, r.jsx)(H, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return null
  }
  render() {
    let e = this.props.enableClips,
      t = l()(this.props.keybinds).reject(e => e.managed && ![D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.kg4.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === D.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === D.kg4.SOUNDBOARD || e.action === D.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => true === e.managed ? false : 0).value();
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.T9DA2N),
        children: Chunk358085.isPlatformEmbedded ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
            justify: Chunk600164.Z.Justify.BETWEEN,
            className: Chunk197571.marginBottom20,
            children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
              grow: 0,
              children: (0, Chunk951288.jsx)(Chunk481060.Wn, {
                messageType: Chunk481060.QYI.WARNING,
                children: Chunk388032.intl.string(Chunk388032.t.NoKjWF)
              })
            }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
              wrap: true,
              grow: 0,
              children: (0, Chunk951288.jsx)(Chunk755721.zx, {
                size: Chunk755721.Ph.LARGE,
                onClick: this.handleAddKeybind,
                children: Chunk388032.intl.string(Chunk388032.t.zk6Xbm)
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk825655.Z, {
            className: Chunk894462.systemServiceUpsell,
            sourcePage: "keybinds"
          }), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
            children: [this.renderKeybinds(exports), this.renderEmpty(exports)]
          })]
        }) : (0, Chunk951288.jsx)(Chunk481060.Wn, {
          messageType: Chunk481060.QYI.INFO,
          className: Chunk894462.browserNotice,
          children: Chunk388032.intl.format(Chunk388032.t.mPi3Fx, {
            downloadLink: Chunk981631.EYA.DOWNLOAD
          })
        })
      }), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.Lz5KHB),
        className: Chunk197571.marginTop60,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk894462.defaultKeybind,
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            children: Chunk388032.intl.string(Chunk388032.t.sMWLBg)
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk894462.defaultKeybindShortcutGroup,
            children: (0, Chunk951288.jsx)(Chunk481060.M2$, {
              shortcut: Chunk721383._.binds["0"],
              className: Chunk894462.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {}), (0, Chunk951288.jsx)(F, {
          children: e => (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) => {
              let n = (0, g.UD)(e),
                o = (0, g.U6)(e),
                s = V[e];
              return (0, r.jsxs)("div", {
                className: j.defaultKeybindGroup,
                children: [(0, r.jsx)(f.X6q, {
                  variant: "heading-deprecated-12/semibold",
                  className: a()(j.defaultKeybindGroupHeader, {
                    [j.defaultKeybindGroupWithDescription]: null != o
                  }),
                  children: n
                }), null != o && (0, r.jsx)(f.Text, {
                  color: "header-secondary",
                  className: j.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: o
                }), (0, r.jsx)(f.$i$, {}), s.map(e => (0, r.jsxs)(i.Fragment, {
                  children: [(0, r.jsxs)("div", {
                    className: j.defaultKeybind,
                    children: [(0, r.jsx)(f.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, r.jsx)("div", {
                      className: j.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, r.jsx)(f.M2$, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, r.jsx)(f.$i$, {})]
                }, e.description))]
              }, t)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "handleAddKeybind", () => {
      _.Z.addKeybind()
    })
  }
}

function W() {
  let e = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getState()),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)),
    n = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.isSupported()),
    i = (0, Chunk924557.Go)();
  return (0, Chunk951288.jsx)(Y, {
    keybinds: module,
    canGoLive: exports,
    overlaySupported: require,
    allowSoundboard: (0, Chunk358085.isWindows)(),
    enableClips: Chunk647438
  })
}