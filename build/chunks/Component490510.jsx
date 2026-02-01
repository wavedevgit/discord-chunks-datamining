/** Chunk was on 42402 **/
/** chunk id: 490510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => V
}), require("./228524.js"), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk512513 = require("./512513.js"),
  Chunk915967 = require("./915967.js"),
  Chunk775121 = require("./775121.js"),
  Chunk734066 = require("./734066.js"),
  Chunk880144 = require("./880144.js"),
  Chunk541185 = require("./541185.js"),
  Chunk168943 = require("./168943.js"),
  Chunk680243 = require("./680243.js"),
  Chunk843401 = require("./843401.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk532624 = require("./532624.js"),
  Chunk975571 = require("./975571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk350535 = require("./350535.js"),
  Chunk958831 = require("./958831.jsx"),
  Chunk790174 = require("./790174.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk924348 = require("./924348.js"),
  Chunk473169 = require("./473169.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    children: t
  } = e;
  return t([g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.DND, g.Q_.CHAT, g.Q_.VOICE_AND_VIDEO, g.Q_.MISCELLANEOUS])
}
class k extends Chunk64700.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = C.dI(e.shortcut);
    return f.A.hasBind(t) ? (0, r.jsx)(u.po8, {
      messageType: u.YCn.ERROR,
      children: P.intl.string(P.t["7lQlw3"])
    }) : T.Yy.has(t) ? (0, r.jsx)(u.po8, {
      messageType: u.YCn.ERROR,
      children: P.intl.format(P.t.MOIaNd, {
        keyboardNavArticle: v.A.getArticleURL(N.MVz.KEYBOARD_NAVIGATION)
      })
    }) : (0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: w.qD,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, r.jsxs)("div", {
      className: w.YI,
      children: [(0, r.jsxs)("div", {
        className: w.PO,
        children: [(0, r.jsx)("div", {
          className: w.AS,
          children: (0, r.jsx)(u.l6P, {
            selectionMode: "single",
            label: P.intl.string(P.t.UUpAD6),
            value: this.props.keybind.action,
            options: this.props.keybindActionTypes,
            onSelectionChange: this.handleActionChanged,
            disabled: e
          })
        }), (0, r.jsx)("div", {
          className: w.AS,
          children: (0, r.jsx)(u.D0$, {
            label: P.intl.string(P.t["1La4tC"]),
            children: (0, r.jsx)(p.A, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), !e && (0, r.jsx)("div", {
          className: w.d9,
          children: (0, r.jsx)(u.K0, {
            variant: "icon-only",
            onClick: this.handleDeleteKeybind,
            icon: u.ucK,
            "aria-label": P.intl.string(P.t.qEHmmB)
          })
        }), (0, r.jsx)("div", {
          className: w.ZW,
          children: (0, r.jsx)(c.m_, {
            text: P.intl.string(P.t.uCD7qK),
            children: (0, r.jsx)("div", {
              children: (0, r.jsx)(u.dOG, {
                checked: t,
                onChange: this.handleEnableDisable
              })
            })
          })
        })]
      }), this.renderMessage(), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    return e === N.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(S.A, {
      keybind: this.props.keybind
    }) : true
  }
  constructor(...e) {
    super(...e), D(this, "handleActionChanged", e => {
      d.A.setKeybind(M(L({}, this.props.keybind), {
        action: e
      }))
    }), D(this, "handleShortcutChange", e => {
      d.A.setKeybind(M(L({}, this.props.keybind), {
        shortcut: e
      }))
    }), D(this, "handleDeleteKeybind", () => {
      d.A.deleteKeybind(this.props.keybind.id)
    }), D(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      d.A.setKeybind(M(L({}, this.props.keybind), {
        enabled: !e.enabled
      }))
    })
  }
}
class U extends Chunk64700.PureComponent {
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: t,
      allowSoundboard: n,
      enableClips: r,
      enableScreenshotKeybind: l
    } = this.props, i = A.A.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind ? [{
      id: "vad-priority",
      value: N.hCu.VAD_PRIORITY,
      label: P.intl.string(P.t["49d6Nd"])
    }] : [], s = [{
      id: "unassigned",
      value: N.hCu.UNASSIGNED,
      label: P.intl.string(P.t["0Uh579"])
    }, {
      id: "push-to-talk",
      value: N.hCu.PUSH_TO_TALK,
      label: P.intl.string(P.t.Y5lgTP)
    }, {
      id: "push-to-talk-priority",
      value: N.hCu.PUSH_TO_TALK_PRIORITY,
      label: P.intl.string(P.t.DkSwJ2)
    }, {
      id: "push-to-mute",
      value: N.hCu.PUSH_TO_MUTE,
      label: P.intl.string(P.t.hSCRqd)
    }, ...i, {
      id: "toggle-mute",
      value: N.hCu.TOGGLE_MUTE,
      label: P.intl.string(P.t.PlkYKD)
    }, {
      id: "toggle-deafen",
      value: N.hCu.TOGGLE_DEAFEN,
      label: P.intl.string(P.t.NvGq1K)
    }, {
      id: "toggle-voice-mode",
      value: N.hCu.TOGGLE_VOICE_MODE,
      label: P.intl.string(P.t.Wa5H9S)
    }, {
      id: "toggle-streamer-mode",
      value: N.hCu.TOGGLE_STREAMER_MODE,
      label: P.intl.string(P.t.BK0Ncc)
    }];
    return (0, y.L)() && s.push({
      id: "toggle-camera",
      value: N.hCu.TOGGLE_CAMERA,
      label: P.intl.string(P.t.hf8JVT)
    }), e && (s.push({
      id: "toggle-overlay-input-lock",
      value: N.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
      label: P.intl.string(P.t.VsAZcC)
    }), s.push({
      id: "activate-overlay-region-text-widget",
      value: N.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: P.intl.string(P.t.hurHWo)
    })), t && ((0, E.isWindows)() || x.A.getUseSystemScreensharePicker()) && s.push({
      id: "toggle-go-live-streaming",
      value: N.hCu.TOGGLE_GO_LIVE_STREAMING,
      label: P.intl.string(P.t.ybdjJD)
    }), (0, E.isDesktop)() && (s.push({
      id: "navigate-back",
      value: N.hCu.NAVIGATE_BACK,
      label: P.intl.string(P.t.gRSaOa)
    }, {
      id: "navigate-forward",
      value: N.hCu.NAVIGATE_FORWARD,
      label: P.intl.string(P.t.zOXpjU)
    }, {
      id: "switch-to-voice-channel",
      value: N.hCu.SWITCH_TO_VOICE_CHANNEL,
      label: P.intl.string(P.t.ty7Lxy)
    }, {
      id: "disconnect-from-voice-channel",
      value: N.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
      label: P.intl.string(P.t.CV7mT7)
    }), n && s.push({
      id: "soundboard",
      value: N.hCu.SOUNDBOARD,
      label: P.intl.string(P.t.yPH4xm)
    }, {
      id: "soundboard-hold",
      value: N.hCu.SOUNDBOARD_HOLD,
      label: P.intl.string(P.t["1xFbP/"])
    }), r && (s.push({
      id: "save-clip",
      value: N.hCu.SAVE_CLIP,
      label: P.intl.string(P.t.U4URzP)
    }), l && s.push({
      id: "save-screenshot",
      value: N.hCu.SAVE_SCREENSHOT,
      label: P.intl.string(P.t["+WloFH"])
    }))), s
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: n,
      enableScreenshotKeybind: r
    } = this.props, l = {
      [N.hCu.UNASSIGNED]: P.intl.string(P.t.rvlNLv),
      [N.hCu.PUSH_TO_MUTE]: P.intl.string(P.t.xtESim),
      [N.hCu.PUSH_TO_TALK]: P.intl.string(P.t.wTcBSy),
      [N.hCu.PUSH_TO_TALK_PRIORITY]: P.intl.string(P.t.FhHvWH),
      [N.hCu.TOGGLE_MUTE]: P.intl.string(P.t.X2fbUm),
      [N.hCu.TOGGLE_DEAFEN]: P.intl.string(P.t.MjREZV),
      [N.hCu.TOGGLE_VOICE_MODE]: P.intl.string(P.t.snm5YW),
      [N.hCu.TOGGLE_STREAMER_MODE]: P.intl.string(P.t.YszLLx)
    };
    return A.A.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind && (l[N.hCu.VAD_PRIORITY] = P.intl.string(P.t.rSe8IZ)), (0, y.L)() && (l[N.hCu.TOGGLE_CAMERA] = P.intl.string(P.t.v1JBtL)), e && (l[N.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = P.intl.string(P.t.IoP5vc)), t && (0, E.isWindows)() && (l[N.hCu.TOGGLE_GO_LIVE_STREAMING] = P.intl.string(P.t.s4C238)), (0, E.isDesktop)() && (l[N.hCu.NAVIGATE_BACK] = P.intl.string(P.t.nKDlEt), l[N.hCu.NAVIGATE_FORWARD] = P.intl.string(P.t.DK0FFk), l[N.hCu.SOUNDBOARD] = (0, E.isWindows)() ? P.intl.string(P.t["5wJefL"]) : P.intl.string(P.t.gzjsSP), l[N.hCu.SOUNDBOARD_HOLD] = (0, E.isWindows)() ? P.intl.string(P.t.RRkZc9) : P.intl.string(P.t.laNlTl), n && (l[N.hCu.SAVE_CLIP] = P.intl.string(P.t.z3Wbam), r && (l[N.hCu.SAVE_SCREENSHOT] = P.intl.string(P.t.m0zd57)))), l
  }
  renderKeybinds(e) {
    return e.map((t, n) => (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(k, {
        keybind: t,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, t.id), n !== e.length - 1 ? (0, r.jsx)(u.cGx, {}) : null]
    }, t.id))
  }
  renderKeybindWarning() {
    return (0, r.jsxs)("div", {
      className: w.$e,
      children: [(0, r.jsx)(u.mir, {
        size: "xs",
        color: o.A.colors.ICON_SUBTLE
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: P.intl.string(P.t.NoKjWP)
      })]
    })
  }
  render() {
    let {
      enableClips: e,
      enableScreenshotKeybind: t
    } = this.props, n = s()(this.props.keybinds).reject(e => e.managed && ![N.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, N.hCu.SAVE_CLIP, N.hCu.SAVE_SCREENSHOT].includes(e.action)).reject(t => !e && (t.action === N.hCu.SAVE_CLIP || t.action === N.hCu.SAVE_SCREENSHOT)).reject(e => !t && e.action === N.hCu.SAVE_SCREENSHOT).reject(e => !this.props.allowSoundboard && (e.action === N.hCu.SOUNDBOARD || e.action === N.hCu.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => true === e.managed ? false : 0).value(), i = s()((0, g.Bx)()).filter(e => e.description !== P.intl.string(P.t.HnNtEI)).groupBy(e => e.group).value();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I.A, {
        title: P.intl.string(P.t.T9DA2K),
        className: R.IE,
        children: E.isPlatformEmbedded ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: w.OQ,
            children: [this.renderKeybindWarning(), (0, r.jsx)("div", {
              className: w.c9,
              children: (0, r.jsx)(u.Button, {
                size: "md",
                onClick: this.handleAddKeybind,
                text: P.intl.string(P.t.zk6Xbs),
                variant: "primary"
              })
            })]
          }), (0, r.jsx)(j.A, {
            className: w.Qo,
            sourcePage: "keybinds"
          }), n.length > 0 && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(u.cGx, {}), this.renderKeybinds(n)]
          }), (0, r.jsx)(u.cGx, {})]
        }) : (0, r.jsx)(u.po8, {
          messageType: u.YCn.INFO,
          className: w.Ly,
          children: P.intl.format(P.t.mPi3F3, {
            downloadLink: N.X7G.DOWNLOAD
          })
        })
      }), (0, r.jsxs)(u.BJc, {
        gap: 48,
        children: [(0, r.jsx)(u.nVY, {
          label: P.intl.string(P.t.Lz5KHI),
          children: (0, r.jsx)("div", {
            className: w.jh,
            children: (0, r.jsxs)("div", {
              className: w.yZ,
              children: [(0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                children: P.intl.string(P.t.sMWLBj)
              }), (0, r.jsx)("div", {
                className: w.DM,
                children: (0, r.jsx)(u.e7I, {
                  shortcut: h.z.binds["0"],
                  className: w.LE
                })
              })]
            })
          })
        }), (0, r.jsx)(G, {
          children: e => (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) => {
              let n = (0, g.Gm)(e),
                s = (0, g.zF)(e),
                a = i[e];
              return (0, r.jsx)(u.nVY, {
                label: n,
                description: s,
                children: (0, r.jsx)("div", {
                  className: w.jh,
                  children: a.map((e, t) => (0, r.jsxs)(l.Fragment, {
                    children: [0 !== t && (0, r.jsx)(u.cGx, {}), (0, r.jsxs)("div", {
                      className: w.yZ,
                      children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: e.description
                      }), (0, r.jsx)("div", {
                        className: w.DM,
                        children: e.binds.map(e => (0, r.jsx)(u.e7I, {
                          shortcut: e,
                          className: w.LE
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
    super(...e), D(this, "handleAddKeybind", () => {
      d.A.addKeybind()
    })
  }
}

function V() {
  l.useEffect(() => (d.A.enableAll(false), () => {
    d.A.enableAll(true)
  }), []);
  let e = (0, a.bG)([_.Ay], () => _.Ay.getState()),
    t = (0, a.bG)([x.A], () => (0, b.A)(x.A)),
    n = (0, a.bG)([O.A], () => O.A.isSupported),
    i = (0, m.sw)(),
    s = (0, m.BW)();
  return (0, r.jsx)(U, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: n,
    allowSoundboard: (0, E.isWindows)(),
    enableClips: i,
    enableScreenshotKeybind: s
  })
}