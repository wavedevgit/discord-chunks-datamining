/** Chunk was on 20501 **/
/** chunk id: 389650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk131951 = require("./131951.js"),
  Chunk556296 = require("./556296.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk659947 = require("./659947.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84601 = require("./84601.js"),
  Chunk423279 = require("./423279.js"),
  Chunk881488 = require("./881488.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e) {
  let {
    children: t
  } = e;
  return t([b.Q2.MESSAGE, b.Q2.NAVIGATION, b.Q2.DND, b.Q2.CHAT, b.Q2.VOICE_AND_VIDEO, b.Q2.MISCELLANEOUS])
}
let V = o()((0, Chunk612226.Rv)()).filter(e => e.description !== D.intl.string(D.t.HnNtEB)).groupBy(e => e.group).value();
class G extends Chunk73800.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = Chunk13140.BB(module.shortcut);
    return Chunk714338.Z.hasBind(exports) ? (0, Chunk255367.jsx)(Chunk481060.R94, {
      className: Chunk84601.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      style: {
        color: Chunk692547.Z.unsafe_rawColors.RED_400.css
      },
      children: Chunk388032.intl.string(Chunk388032.t["7lQlw8"])
    }) : Chunk420212.Sp.has(exports) ? (0, Chunk255367.jsx)(Chunk481060.R94, {
      className: Chunk84601.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      style: {
        color: Chunk692547.Z.unsafe_rawColors.RED_400.css
      },
      children: Chunk388032.intl.format(Chunk388032.t.MOIaNT, {
        keyboardNavArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, Chunk255367.jsx)(Chunk481060.R94, {
      className: Chunk84601.keybindMessage,
      type: Chunk481060.geA.DESCRIPTION,
      children: this.props.keybindDescriptions[module.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: a()(Chunk84601.keybindGroup, Chunk423279.card),
      children: [!module && (0, Chunk255367.jsx)(Chunk225433.Z, {
        "aria-label": Chunk388032.intl.string(Chunk388032.t.qEHmmJ),
        className: Chunk84601.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: Chunk225433.Z.Looks.FILLED
      }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk881488.marginBottom8,
        children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          basis: "45%",
          children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t.UUpADw),
            className: Chunk84601.item,
            children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: module
            })
          })
        }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          basis: "45%",
          children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
            title: Chunk388032.intl.string(Chunk388032.t["1La4tL"]),
            className: Chunk84601.item,
            children: (0, Chunk255367.jsx)(Chunk825209.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
            className: Chunk84601.switch,
            children: (0, Chunk255367.jsx)(Chunk481060.ua7, {
              text: Chunk388032.intl.string(Chunk388032.t.uCD7qK),
              children: e => (0, i.jsx)("div", M(B({}, e), {
                children: (0, i.jsx)(m.rsf, {
                  checked: t,
                  onChange: this.handleEnableDisable
                })
              }))
            })
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    return module === Chunk981631.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, Chunk255367.jsx)(Chunk659947.Z, {
      keybind: this.props.keybind
    }) : true
  }
  constructor(...e) {
    super(...e), L(this, "handleActionChanged", e => {
      p.Z.setKeybind(M(B({}, this.props.keybind), {
        action: e
      }))
    }), L(this, "handleShortcutChange", e => {
      p.Z.setKeybind(M(B({}, this.props.keybind), {
        shortcut: e
      }))
    }), L(this, "handleDeleteKeybind", () => {
      p.Z.deleteKeybind(this.props.keybind.id)
    }), L(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      p.Z.setKeybind(M(B({}, this.props.keybind), {
        enabled: !e.enabled
      }))
    })
  }
}
class F extends Chunk73800.PureComponent {
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
      enableClips: i
    } = this.props, r = Chunk577153.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind ? [{
      value: Chunk981631.kg4.VAD_PRIORITY,
      label: Chunk388032.intl.string(Chunk388032.t["49d6NT"])
    }] : [], s = [{
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
    }, ...Chunk73800, {
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
    }), Chunk255367 && Chunk120356.push({
      value: Chunk981631.kg4.SAVE_CLIP,
      label: Chunk388032.intl.string(Chunk388032.t.U4URzM)
    })), Chunk120356
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: n
    } = this.props, i = {
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
    }).separateKeybind && (Chunk255367[Chunk981631.kg4.VAD_PRIORITY] = Chunk388032.intl.string(Chunk388032.t.rSe8IS)), (0, Chunk365023.l)() && (Chunk255367[Chunk981631.kg4.TOGGLE_CAMERA] = Chunk388032.intl.string(Chunk388032.t.v1JBtL)), module && (Chunk255367[Chunk981631.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Chunk388032.intl.string(Chunk388032.t.IoP5vb)), exports && (0, Chunk358085.isWindows)() && (Chunk255367[Chunk981631.kg4.TOGGLE_GO_LIVE_STREAMING] = Chunk388032.intl.string(Chunk388032.t.s4C239)), (0, Chunk358085.isDesktop)() && (Chunk255367[Chunk981631.kg4.NAVIGATE_BACK] = Chunk388032.intl.string(Chunk388032.t.nKDlEh), Chunk255367[Chunk981631.kg4.NAVIGATE_FORWARD] = Chunk388032.intl.string(Chunk388032.t.DK0FFh), Chunk255367[Chunk981631.kg4.SOUNDBOARD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t["5wJefH"]) : Chunk388032.intl.string(Chunk388032.t.gzjsSE), Chunk255367[Chunk981631.kg4.SOUNDBOARD_HOLD] = (0, Chunk358085.isWindows)() ? Chunk388032.intl.string(Chunk388032.t.RRkZc3) : Chunk388032.intl.string(Chunk388032.t.laNlTk), require && (Chunk255367[Chunk981631.kg4.SAVE_CLIP] = Chunk388032.intl.string(Chunk388032.t.z3Wbam))), Chunk255367
  }
  renderKeybinds(e) {
    return e.map(e => (0, i.jsx)("div", {
      className: Z.row,
      children: (0, i.jsx)(G, {
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
      t = o()(this.props.keybinds).reject(e => e.managed && ![P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, P.kg4.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === P.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => true === e.managed ? false : 0).value();
    return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.T9DA2N),
        children: Chunk358085.isPlatformEmbedded ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsxs)(Chunk600164.Z, {
            justify: Chunk600164.Z.Justify.BETWEEN,
            className: Chunk881488.marginBottom20,
            children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
              grow: 0,
              children: (0, Chunk255367.jsx)(Chunk481060.Wn, {
                messageType: Chunk481060.QYI.WARNING,
                children: Chunk388032.intl.string(Chunk388032.t.NoKjWF)
              })
            }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
              wrap: true,
              grow: 0,
              children: (0, Chunk255367.jsx)(Chunk755721.zx, {
                size: Chunk755721.Ph.LARGE,
                onClick: this.handleAddKeybind,
                children: Chunk388032.intl.string(Chunk388032.t.zk6Xbm)
              })
            })]
          }), (0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
            children: [this.renderKeybinds(exports), this.renderEmpty(exports)]
          })]
        }) : (0, Chunk255367.jsx)(Chunk481060.Wn, {
          messageType: Chunk481060.QYI.INFO,
          textVariant: "text-lg/medium",
          className: Chunk84601.browserNotice,
          children: Chunk388032.intl.format(Chunk388032.t.mPi3Fx, {
            downloadLink: Chunk981631.EYA.DOWNLOAD
          })
        })
      }), (0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
        tag: Chunk481060.RB0.H1,
        title: Chunk388032.intl.string(Chunk388032.t.Lz5KHB),
        className: Chunk881488.marginTop60,
        children: [(0, Chunk255367.jsxs)("div", {
          className: Chunk84601.defaultKeybind,
          children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            children: Chunk388032.intl.string(Chunk388032.t.sMWLBg)
          }), (0, Chunk255367.jsx)("div", {
            className: Chunk84601.defaultKeybindShortcutGroup,
            children: (0, Chunk255367.jsx)(Chunk481060.M2$, {
              shortcut: Chunk721383._.binds["0"],
              className: Chunk84601.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.$i$, {}), (0, Chunk255367.jsx)(U, {
          children: e => (0, i.jsx)(i.Fragment, {
            children: e.map((e, t) => {
              let n = (0, b.UD)(e),
                s = (0, b.U6)(e),
                l = V[e];
              return (0, i.jsxs)("div", {
                className: Z.defaultKeybindGroup,
                children: [(0, i.jsx)(m.X6q, {
                  variant: "heading-deprecated-12/semibold",
                  className: a()(Z.defaultKeybindGroupHeader, {
                    [Z.defaultKeybindGroupWithDescription]: null != s
                  }),
                  children: n
                }), null != s && (0, i.jsx)(m.Text, {
                  color: "header-secondary",
                  className: Z.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: s
                }), (0, i.jsx)(m.$i$, {}), l.map(e => (0, i.jsxs)(r.Fragment, {
                  children: [(0, i.jsxs)("div", {
                    className: Z.defaultKeybind,
                    children: [(0, i.jsx)(m.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, i.jsx)("div", {
                      className: Z.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, i.jsx)(m.M2$, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, i.jsx)(m.$i$, {})]
                }, e.description))]
              }, t)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), L(this, "handleAddKeybind", () => {
      p.Z.addKeybind()
    })
  }
}

function H() {
  let e = (0, Chunk442837.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getState()),
    t = (0, Chunk442837.e7)([Chunk131951.Z], () => (0, Chunk74299.Z)(Chunk131951.Z)),
    n = (0, Chunk442837.e7)([Chunk610394.ZP], () => Chunk610394.ZP.isSupported()),
    r = (0, Chunk924557.Go)();
  return (0, Chunk255367.jsx)(F, {
    keybinds: module,
    canGoLive: exports,
    overlaySupported: require,
    allowSoundboard: (0, Chunk358085.isWindows)(),
    enableClips: Chunk73800
  })
}