/** Chunk was on web.js **/
/** chunk id: 389650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
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
  Chunk681715 = require("./681715.js"),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let {
    children: t
  } = e;
  return t([E.Q2.MESSAGE, E.Q2.NAVIGATION, E.Q2.DND, E.Q2.CHAT, E.Q2.VOICE_AND_VIDEO, E.Q2.MISCELLANEOUS])
}

function Y() {
  return l()((0, E.Rv)()).filter(e => e.description !== M.intl.string(M.t.HnNtEI)).groupBy(e => e.group).value()
}
class W extends Chunk473749.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = R.BB(e.shortcut);
    return b.Z.hasBind(t) ? (0, r.jsx)(p.Wn, {
      messageType: p.QYI.ERROR,
      children: M.intl.string(M.t["7lQlw3"])
    }) : j.Sp.has(t) ? (0, r.jsx)(p.Wn, {
      messageType: p.QYI.ERROR,
      children: M.intl.format(M.t.MOIaNd, {
        keyboardNavArticle: N.Z.getArticleURL(L.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, r.jsx)(p.Text, {
      variant: "text-md/normal",
      className: k.keybindMessage,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, r.jsxs)("div", {
      className: o()(k.keybindGroup, {
        [U.card]: !this.props.isUserSettingsRedesignEnabled
      }),
      children: [!e && !this.props.isUserSettingsRedesignEnabled && (0, r.jsx)(m.Z, {
        "aria-label": M.intl.string(M.t.qEHmmB),
        className: k.removeKeybindFloating,
        onClick: this.handleDeleteKeybind
      }), (0, r.jsxs)("div", {
        className: k.keybindGroupContent,
        children: [(0, r.jsx)("div", {
          className: k.item,
          children: (0, r.jsx)(d.y6, {
            label: M.intl.string(M.t.UUpAD6),
            value: this.props.keybind.action,
            options: this.props.keybindActionTypes,
            onChange: this.handleActionChanged,
            isDisabled: e
          })
        }), (0, r.jsx)("div", {
          className: k.item,
          children: (0, r.jsx)(p.gNt, {
            label: M.intl.string(M.t["1La4tC"]),
            children: (0, r.jsx)(h.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), !e && this.props.isUserSettingsRedesignEnabled && (0, r.jsx)("div", {
          className: k.removeKeybind,
          children: (0, r.jsx)(p.hU, {
            variant: "icon-only",
            onClick: this.handleDeleteKeybind,
            icon: p.XHJ,
            "aria-label": M.intl.string(M.t.qEHmmB)
          })
        }), (0, r.jsx)("div", {
          className: k.switch,
          children: (0, r.jsx)(f.u, {
            text: M.intl.string(M.t.uCD7qK),
            children: (0, r.jsx)("div", {
              children: (0, r.jsx)(p.rsf, {
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
    return e === L.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(D.Z, {
      keybind: this.props.keybind
    }) : true
  }
  constructor(...e) {
    super(...e), Z(this, "handleActionChanged", e => {
      _.Z.setKeybind(V(F({}, this.props.keybind), {
        action: e
      }))
    }), Z(this, "handleShortcutChange", e => {
      _.Z.setKeybind(V(F({}, this.props.keybind), {
        shortcut: e
      }))
    }), Z(this, "handleDeleteKeybind", () => {
      _.Z.deleteKeybind(this.props.keybind.id)
    }), Z(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      _.Z.setKeybind(V(F({}, this.props.keybind), {
        enabled: !e.enabled
      }))
    })
  }
}
class K extends Chunk473749.PureComponent {
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: t,
      allowSoundboard: n,
      enableClips: r,
      enableScreenshotKeybind: i
    } = this.props, a = v.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind ? [{
      value: L.kg4.VAD_PRIORITY,
      label: M.intl.string(M.t["49d6Nd"])
    }] : [], o = [{
      value: L.kg4.UNASSIGNED,
      label: M.intl.string(M.t["0Uh579"])
    }, {
      value: L.kg4.PUSH_TO_TALK,
      label: M.intl.string(M.t.Y5lgTP)
    }, {
      value: L.kg4.PUSH_TO_TALK_PRIORITY,
      label: M.intl.string(M.t.DkSwJ2)
    }, {
      value: L.kg4.PUSH_TO_MUTE,
      label: M.intl.string(M.t.hSCRqd)
    }, ...a, {
      value: L.kg4.TOGGLE_MUTE,
      label: M.intl.string(M.t.PlkYKD)
    }, {
      value: L.kg4.TOGGLE_DEAFEN,
      label: M.intl.string(M.t.NvGq1K)
    }, {
      value: L.kg4.TOGGLE_VOICE_MODE,
      label: M.intl.string(M.t.Wa5H9S)
    }, {
      value: L.kg4.TOGGLE_STREAMER_MODE,
      label: M.intl.string(M.t.BK0Ncc)
    }];
    return (0, S.l)() && o.push({
      value: L.kg4.TOGGLE_CAMERA,
      label: M.intl.string(M.t.hf8JVT)
    }), e && (o.push({
      value: L.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      label: M.intl.string(M.t.VsAZcC)
    }), o.push({
      value: L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: M.intl.string(M.t.hurHWo)
    })), t && ((0, P.isWindows)() || C.Z.getUseSystemScreensharePicker()) && o.push({
      value: L.kg4.TOGGLE_GO_LIVE_STREAMING,
      label: M.intl.string(M.t.ybdjJD)
    }), (0, P.isDesktop)() && (o.push({
      value: L.kg4.NAVIGATE_BACK,
      label: M.intl.string(M.t.gRSaOa)
    }, {
      value: L.kg4.NAVIGATE_FORWARD,
      label: M.intl.string(M.t.zOXpjU)
    }, {
      value: L.kg4.SWITCH_TO_VOICE_CHANNEL,
      label: M.intl.string(M.t.ty7Lxy)
    }, {
      value: L.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
      label: M.intl.string(M.t.CV7mT7)
    }), n && o.push({
      value: L.kg4.SOUNDBOARD,
      label: M.intl.string(M.t.yPH4xm)
    }, {
      value: L.kg4.SOUNDBOARD_HOLD,
      label: M.intl.string(M.t["1xFbP/"])
    }), r && (o.push({
      value: L.kg4.SAVE_CLIP,
      label: M.intl.string(M.t.U4URzP)
    }), i && o.push({
      value: L.kg4.SAVE_SCREENSHOT,
      label: M.intl.string(M.t["+WloFH"])
    }))), o
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: n,
      enableScreenshotKeybind: r
    } = this.props, i = {
      [L.kg4.UNASSIGNED]: M.intl.string(M.t.rvlNLv),
      [L.kg4.PUSH_TO_MUTE]: M.intl.string(M.t.xtESim),
      [L.kg4.PUSH_TO_TALK]: M.intl.string(M.t.wTcBSy),
      [L.kg4.PUSH_TO_TALK_PRIORITY]: M.intl.string(M.t.FhHvWH),
      [L.kg4.TOGGLE_MUTE]: M.intl.string(M.t.X2fbUm),
      [L.kg4.TOGGLE_DEAFEN]: M.intl.string(M.t.MjREZV),
      [L.kg4.TOGGLE_VOICE_MODE]: M.intl.string(M.t.snm5YW),
      [L.kg4.TOGGLE_STREAMER_MODE]: M.intl.string(M.t.YszLLx)
    };
    return v.Z.getCurrentConfig({
      location: "UserSettingsKeybinds"
    }, {
      autoTrackExposure: false
    }).separateKeybind && (i[L.kg4.VAD_PRIORITY] = M.intl.string(M.t.rSe8IZ)), (0, S.l)() && (i[L.kg4.TOGGLE_CAMERA] = M.intl.string(M.t.v1JBtL)), e && (i[L.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = M.intl.string(M.t.IoP5vc)), t && (0, P.isWindows)() && (i[L.kg4.TOGGLE_GO_LIVE_STREAMING] = M.intl.string(M.t.s4C238)), (0, P.isDesktop)() && (i[L.kg4.NAVIGATE_BACK] = M.intl.string(M.t.nKDlEt), i[L.kg4.NAVIGATE_FORWARD] = M.intl.string(M.t.DK0FFk), i[L.kg4.SOUNDBOARD] = (0, P.isWindows)() ? M.intl.string(M.t["5wJefL"]) : M.intl.string(M.t.gzjsSP), i[L.kg4.SOUNDBOARD_HOLD] = (0, P.isWindows)() ? M.intl.string(M.t.RRkZc9) : M.intl.string(M.t.laNlTl), n && (i[L.kg4.SAVE_CLIP] = M.intl.string(M.t.z3Wbam), r && (i[L.kg4.SAVE_SCREENSHOT] = M.intl.string(M.t.m0zd57)))), i
  }
  renderKeybinds(e) {
    return e.map((t, n) => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(W, {
        keybind: t,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes,
        isUserSettingsRedesignEnabled: this.props.isUserSettingsRedesignEnabled
      }, t.id), n !== e.length - 1 ? (0, r.jsx)(p.izJ, {}) : null]
    }, t.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return null
  }
  renderKeybindWarning() {
    return (0, r.jsxs)("div", {
      className: k.warning,
      children: [(0, r.jsx)(p.d3s, {
        size: "xs",
        color: u.Z.colors.ICON_SUBTLE
      }), (0, r.jsx)(p.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: M.intl.string(M.t.NoKjWP)
      })]
    })
  }
  render() {
    let {
      enableClips: e,
      enableScreenshotKeybind: t
    } = this.props, n = l()(this.props.keybinds).reject(e => e.managed && ![L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, L.kg4.SAVE_CLIP, L.kg4.SAVE_SCREENSHOT].includes(e.action)).reject(t => !e && (t.action === L.kg4.SAVE_CLIP || t.action === L.kg4.SAVE_SCREENSHOT)).reject(e => !t && e.action === L.kg4.SAVE_SCREENSHOT).reject(e => !this.props.allowSoundboard && (e.action === L.kg4.SOUNDBOARD || e.action === L.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => true === e.managed ? false : 0).value(), a = Y();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x.Z, {
        title: M.intl.string(M.t.T9DA2K),
        children: P.isPlatformEmbedded ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("div", {
            className: k.ctaContainer,
            children: [this.renderKeybindWarning(), (0, r.jsx)("div", {
              className: k.addButton,
              children: (0, r.jsx)(p.Button, {
                size: "md",
                onClick: this.handleAddKeybind,
                text: M.intl.string(M.t.zk6Xbs),
                variant: "primary"
              })
            })]
          }), (0, r.jsx)(T.Z, {
            className: k.systemServiceUpsell,
            sourcePage: "keybinds"
          }), (0, r.jsx)(p.izJ, {}), this.renderKeybinds(n), this.renderEmpty(n)]
        }) : (0, r.jsx)(p.Wn, {
          messageType: p.QYI.INFO,
          className: k.browserNotice,
          children: M.intl.format(M.t.mPi3F3, {
            downloadLink: L.EYA.DOWNLOAD
          })
        })
      }), (0, r.jsx)(p.izJ, {
        className: G.marginBottom60
      }), (0, r.jsxs)(p.Kqy, {
        gap: 48,
        children: [(0, r.jsx)(p.C3N, {
          label: M.intl.string(M.t.Lz5KHI),
          children: (0, r.jsx)("div", {
            className: k.defaultKeybindGroup,
            children: (0, r.jsxs)("div", {
              className: k.defaultKeybind,
              children: [(0, r.jsx)(p.Text, {
                variant: "text-md/normal",
                children: M.intl.string(M.t.sMWLBj)
              }), (0, r.jsx)("div", {
                className: k.defaultKeybindShortcutGroup,
                children: (0, r.jsx)(p.M2$, {
                  shortcut: g._.binds["0"]
                })
              })]
            })
          })
        }), (0, r.jsx)(H, {
          children: e => (0, r.jsx)(r.Fragment, {
            children: e.map((e, t) => {
              let n = (0, E.UD)(e),
                o = (0, E.U6)(e),
                s = a[e];
              return (0, r.jsx)(p.C3N, {
                label: n,
                description: o,
                children: (0, r.jsx)("div", {
                  className: k.defaultKeybindGroup,
                  children: s.map((e, t) => (0, r.jsxs)(i.Fragment, {
                    children: [0 !== t && (0, r.jsx)(p.izJ, {}), (0, r.jsxs)("div", {
                      className: k.defaultKeybind,
                      children: [(0, r.jsx)(p.Text, {
                        variant: "text-md/normal",
                        children: e.description
                      }), (0, r.jsx)("div", {
                        className: k.defaultKeybindShortcutGroup,
                        children: e.binds.map(e => (0, r.jsx)(p.M2$, {
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
    super(...e), Z(this, "handleAddKeybind", () => {
      _.Z.addKeybind()
    })
  }
}

function z() {
  i.useEffect(() => (_.Z.enableAll(false), () => {
    _.Z.enableAll(true)
  }), []);
  let e = (0, c.e7)([A.ZP], () => A.ZP.getState()),
    t = (0, c.e7)([C.Z], () => (0, O.Z)(C.Z)),
    n = (0, c.e7)([I.Z], () => I.Z.isSupported),
    a = (0, y.w9)(),
    o = (0, y.PP)(),
    s = (0, w.wy)("UserSettingsKeybindsConnected");
  return (0, r.jsx)(K, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: n,
    allowSoundboard: (0, P.isWindows)(),
    enableClips: a,
    enableScreenshotKeybind: o,
    isUserSettingsRedesignEnabled: s
  })
}