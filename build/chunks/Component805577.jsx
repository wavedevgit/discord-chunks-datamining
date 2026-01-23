/** Chunk was on web.js **/
/** chunk id: 805577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => ei,
  YD: () => ea,
  iI: () => ey
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk100767 = require("./100767.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk536199 = require("./536199.js"),
  Chunk502229 = require("./502229.jsx"),
  Chunk406360 = require("./406360.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk652525 = require("./652525.js"),
  Chunk915089 = require("./915089.js"),
  Chunk614738 = require("./614738.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk259065 = require("./259065.jsx"),
  Chunk141468 = require("./141468.js"),
  Chunk963852 = require("./963852.js"),
  Chunk763754 = require("./763754.js"),
  Chunk20851 = require("./20851.jsx"),
  Chunk652961 = require("./652961.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk54570 = require("./54570.js"),
  Chunk8880 = require("./8880.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk397438 = require("./397438.js"),
  Chunk193658 = require("./193658.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk823894 = require("./823894.js"),
  Chunk75804 = require("./75804.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk927961 = require("./927961.js"),
  Chunk630765 = require("./630765.js"),
  Chunk513653 = require("./513653.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
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

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let $ = (0, Chunk915089.Ld)(),
  ee = (0, Chunk915089.Ld)(),
  et = (0, Chunk915089.Ld)(),
  en = s().debounce(e => {
    (0, f.HU)(e)
  }, 250),
  er = s().debounce(e => {
    (0, w.zU)(e)
  }, 250);

function ei(e) {
  _.z.useExperiment({
    location: "useAccessibilityItems"
  }, {
    autoTrackExposure: true
  }).enabled;
  let t = (0, E.t)("UserSettingsAccessibility"),
    n = (0, b.y)("UserSettingsAccessibility"),
    i = (0, m.i)("UserSettingsAccessibility");
  return (0, r.jsx)(U.A, {
    title: W.intl.string(W.t.G0neg7),
    children: (0, r.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, r.jsx)(ea, {}), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_SATURATION,
        children: [(0, r.jsx)(el, {}), (0, r.jsx)(c.cGx, {})]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_LINK_DECORATIONS,
        children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.cGx, {})]
      }), t ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N.x, {
          setting: F.H.ACCESSIBILITY_CUSTOM_CURSOR,
          children: (0, r.jsx)(eu, {})
        }), (0, r.jsx)(c.cGx, {})]
      }) : null, (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_ROLE_STYLE,
        children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.cGx, {})]
      }), i && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
        children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.cGx, {})]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_PROFILE_COLORS,
        children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_CONTRAST,
        children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_REDUCED_MOTION,
        children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_MESSAGES,
        children: [(0, r.jsx)(eE, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), n && (0, r.jsxs)(N.x, {
        setting: F.H.ACCESSIBILITY_SWITCH_ICON,
        children: [(0, r.jsx)(eo, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsx)(eO, {}), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_APPEARANCE_UPSELL,
        children: (0, r.jsx)("div", {
          className: z.oq,
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: W.intl.format(W.t.DHpTjT, {
              onAppearanceClick() {
                (0, G.openUserSettings)(j.X.APPEARANCE_PANEL, {
                  section: B.nc_.APPEARANCE
                })
              }
            })
          })
        })
      })]
    })
  })
}

function ea() {
  let e = L.hH.useSetting(),
    [t] = i.useState(() => {
      let e = "1337",
        t = (0, A.rh)(J(X({}, (0, I.Ay)({
          channelId: e,
          content: W.intl.formatToPlainString(W.t.bB80LC, {
            previewLink: "https://discord.com/accessibility"
          })
        })), {
          state: B.cmJ.SENT,
          id: "".concat(0)
        }));
      return t.colorString = "green", t
    });
  return (0, r.jsx)(c.M1G, {
    children: (0, r.jsxs)(c.ZpM, {
      className: z.VH,
      "aria-hidden": true,
      children: [(0, r.jsxs)("div", {
        className: z.yl,
        children: [(0, r.jsx)(c.Button, {
          variant: "primary",
          size: "sm",
          text: W.intl.string(W.t["2RHHgz"])
        }), (0, r.jsx)("div", {
          className: z.hD,
          children: [B.clD.ONLINE, B.clD.DND, B.clD.IDLE].map(e => (0, r.jsx)(c.JsQ, {
            "aria-label": W.intl.string(W.t.lqaIxI),
            src: q,
            size: c._3J.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, r.jsx)("div", {
        className: z.QS,
        children: (0, r.jsx)(T.A, {
          compact: e,
          author: J(X({}, (0, S.p_)(t)), {
            colorString: "#DD80F4"
          }),
          message: t
        })
      })]
    })
  })
}

function es() {
  let e = (0, o.bG)([p.A], () => p.A.isHighContrastModeEnabled);

  function t(e) {
    (0, f.uh)(e ? p._.HIGH : p._.DEFAULT)
  }
  return (0, r.jsx)(O.Ay, {
    contentTypes: [l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
    children: n => {
      let {
        visibleContent: i
      } = n;
      return (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t.aZlePv),
        description: W.intl.string(W.t["v2qF8+"]),
        badge: i === l.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : true,
        checked: e,
        onChange: t
      })
    }
  })
}

function eo() {
  let e = (0, o.bG)([p.A], () => p.A.isSwitchIconsEnabled);
  return (0, r.jsx)(c.dOG, {
    label: W.intl.string(W.t["S3z+pV"]),
    description: W.intl.string(W.t["3QuI9+"]),
    checked: e,
    onChange: e => (0, f.Gm)(e),
    hasIcon: true
  })
}

function el() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, o.cf)([p.A], () => ({
    saturation: p.A.saturation,
    desaturateUserColors: p.A.desaturateUserColors
  }));
  return (0, r.jsxs)(c.BJc, {
    gap: 16,
    children: [(0, r.jsx)(c.Apm, {
      label: W.intl.string(W.t["5PWWCY"]),
      description: W.intl.string(W.t["0PbE/H"]),
      "aria-labelledby": $,
      "aria-describedby": ee,
      markers: B.hH7.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: en,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, r.jsx)(N.x, {
      setting: F.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t.bQCodD),
        description: W.intl.string(W.t.nlAOEW),
        checked: t,
        onChange: f.YV
      })
    })]
  })
}

function ec() {
  let e = (0, o.bG)([p.A], () => p.A.alwaysShowLinkDecorations);

  function t() {
    (0, f.kI)(!e)
  }
  return (0, r.jsx)(c.dOG, {
    label: W.intl.string(W.t.OLZFB8),
    description: W.intl.string(W.t["72i5GI"]),
    checked: e,
    onChange: t
  })
}

function eu() {
  let e = (0, o.bG)([p.A], () => {
    var e;
    return null == (e = p.A.enableCustomCursor) || e
  });
  return (0, r.jsx)(c.dOG, {
    label: W.intl.string(W.t["+Isihb"]),
    description: W.intl.string(W.t.nNZ1Tz),
    checked: e,
    onChange: () => (0, f.ts)(!e)
  })
}

function ed() {
  let e = (0, o.bG)([x.Ay], () => x.Ay.hdrDynamicRange);

  function t(e) {
    (0, f.FU)(e)
  }
  return (0, r.jsx)(N.x, {
    setting: F.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
    children: (0, r.jsx)(c.z6M, {
      label: W.intl.string(W.t.nemtgW),
      badge: "beta",
      description: W.intl.string(W.t["O/Gjvn"]),
      options: [{
        name: W.intl.string(W.t.D5Fma9),
        desc: W.intl.string(W.t.Qj75ck),
        value: "no-limit"
      }, {
        name: W.intl.string(W.t.ldcGIH),
        desc: W.intl.string(W.t["+V/bDk"]),
        value: "standard"
      }],
      onChange: t,
      value: e
    })
  })
}

function ef() {
  let e = (0, o.bG)([p.A], () => p.A.roleStyle);

  function t(e) {
    (0, f.IX)(e)
  }
  return (0, r.jsx)(c.z6M, {
    label: W.intl.string(W.t.uSOPWm),
    description: W.intl.string(W.t["86hjzQ"]),
    options: [{
      name: W.intl.string(W.t.YEOEi6),
      value: "username"
    }, {
      name: W.intl.string(W.t.mQaro3),
      value: "dot"
    }, {
      name: W.intl.string(W.t.Ji2EVJ),
      value: "hidden"
    }],
    onChange: t,
    value: e
  })
}

function ep() {
  let e = (0, o.bG)([p.A], () => p.A.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, g.Ay)();

  function n(e) {
    (0, f.Dm)(e), P.default.track(B.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
      enabled: e
    })
  }
  return (0, r.jsx)(c.dOG, {
    label: W.intl.string(K.default["2gFUEw"]),
    description: W.intl.format(K.default.L8U56h, {
      onClickOpenModal() {
        (0, v.L)({
          analyticsLocations: t
        })
      }
    }),
    checked: e,
    onChange: n
  })
}

function e_() {
  let e = (0, o.bG)([p.A], () => p.A.syncProfileThemeWithUserTheme);
  return (0, r.jsx)(c.nVY, {
    label: W.intl.string(W.t.BT8Bmp),
    children: (0, r.jsx)(N.x, {
      setting: F.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
      children: (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t["sSY+mD"]),
        description: W.intl.format(W.t.u6UjrL, {
          onThemeClick() {
            (0, G.openUserSettings)(j.X.APPEARANCE_PANEL, {
              section: B.nc_.APPEARANCE
            })
          }
        }),
        checked: e,
        onChange: f.M1
      })
    })
  })
}

function eh() {
  let [e] = (0, o.yK)([p.A], () => [p.A.syncForcedColors, p.A.systemForcedColors]), [t, n] = i.useState(e);
  i.useEffect(() => {
    n(e)
  }, [e]);
  let a = i.useRef(null);
  i.useEffect(() => {
    null != a.current && (clearTimeout(a.current), a.current = null), t !== e && (a.current = setTimeout(() => (0, f.D3)(t), 150))
  }, [t, e]);
  let s = W.intl.format(W.t.GwEVE2, {
    learnMoreLink: D.A.getArticleURL(B.MVz.FORCED_COLORS)
  });
  return (0, r.jsxs)(c.nVY, {
    label: W.intl.string(W.t["TYyfO/"]),
    children: [(0, r.jsx)(N.x, {
      setting: F.H.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, r.jsx)(es, {})
    }), (0, h.D)() ? (0, r.jsx)(N.x, {
      setting: F.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t.cguiec),
        description: s,
        checked: t,
        onChange: n
      })
    }) : null]
  })
}

function em() {
  let e = L.kt.useSetting(),
    t = L.Sf.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: a,
      systemPrefersReducedMotion: s,
      gifAutoPlayOverrideReason: l,
      animateEmojiOverrideReason: u
    } = (0, o.cf)([p.A, M.A], () => ({
      systemPrefersReducedMotion: p.A.systemPrefersReducedMotion,
      rawPrefersReducedMotion: p.A.rawPrefersReducedMotion,
      useReducedMotion: p.A.useReducedMotion,
      gifAutoPlayOverrideReason: M.A.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: M.A.getAppliedOverrideReasonKey("animateEmoji")
    })),
    d = "auto" === a,
    _ = i.useCallback(e => {
      (0, f.qz)(e ? "auto" : s)
    }, [s]),
    h = i.useCallback(e => {
      (0, f.qz)(e ? "reduce" : "no-preference")
    }, []);
  return (0, r.jsx)("div", {
    title: W.intl.string(W.t.e3TR1b),
    className: z.VN,
    children: (0, r.jsxs)(c.nVY, {
      label: W.intl.string(W.t.e3TR1b),
      description: W.intl.format(W.t["2l9U2j"], {
        helpdeskArticle: D.A.getArticleURL(B.MVz.REDUCED_MOTION)
      }),
      children: [(0, r.jsx)(c.dOG, {
        label: W.intl.string(W.t["+Dx+HD"]),
        checked: d,
        onChange: _
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t.b3XBzg),
          checked: n,
          onChange: h
        })
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t.Iayoh5),
          description: null != l ? (0, C.A)(l) : true,
          checked: e,
          onChange: L.kt.updateSetting
        })
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t.iIaOlc),
          description: null != u ? (0, C.A)(u) : true,
          checked: t,
          onChange: L.Sf.updateSetting
        })
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_STICKERS,
        children: (0, r.jsx)(eg, {})
      })]
    })
  })
}

function eg() {
  let e = L.S0.useSetting(),
    t = (0, o.bG)([M.A], () => M.A.getAppliedOverrideReasonKey("animateStickers")),
    n = i.useCallback(e => {
      L.S0.updateSetting(e)
    }, []);
  return (0, r.jsx)(c.z6M, {
    label: W.intl.string(W.t["6NtAuJ"]),
    description: null != t ? (0, C.A)(t) : W.intl.string(W.t.GRa6U7),
    options: [{
      name: W.intl.string(W.t["Xp+X2U"]),
      value: H.BJ.ALWAYS_ANIMATE
    }, {
      name: W.intl.string(W.t.IlLT7e),
      desc: W.intl.string(W.t.bIW9Tl),
      value: H.BJ.ANIMATE_ON_INTERACTION
    }, {
      name: W.intl.string(W.t.IGu8x3),
      value: H.BJ.NEVER_ANIMATE
    }],
    onChange: e => n(e),
    value: e
  })
}

function eE() {
  let e = (0, o.bG)([p.A], () => p.A.isSubmitButtonEnabled),
    t = L.D_.useSetting(),
    n = i.useRef(null);
  return (0, k.A)(n, V.Yu.LEGACY_CHAT_INPUT), (0, r.jsx)("div", {
    ref: n,
    children: (0, r.jsxs)(c.nVY, {
      label: W.intl.string(W.t.onqU6o),
      children: [(0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t["3Fztn5"]),
          checked: e,
          onChange: f.Xt
        })
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t.TZ2hZH),
          description: W.intl.string(W.t.Q7wgHc),
          checked: t,
          onChange: e => {
            P.default.track(B.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
              enabled: e,
              location: {
                section: B.JJy.SETTINGS_ACCESSIBILITY
              }
            }), L.D_.updateSetting(e)
          }
        })
      })]
    })
  })
}

function ey() {
  let e = (0, o.bG)([R.A], () => R.A.speechRate);
  return (0, r.jsxs)(c.BJc, {
    gap: 16,
    children: [(0, r.jsx)(c.Apm, {
      label: W.intl.string(W.t.lsW5Ev),
      markers: Y.P,
      initialValue: e,
      defaultValue: 1,
      stickToMarkers: true,
      onValueChange: er,
      onValueRender: e => "x".concat(e.toFixed(2)),
      onMarkerRender: e => 0 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: W.intl.string(W.t["493lwX"])
      }) : 10 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: W.intl.string(W.t.ZSZEdS)
      }) : 1 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: "x1.0"
      }) : e % 1 == 0 ? "" : true,
      "aria-labelledby": et
    }), (0, r.jsx)(eb, {})]
  })
}

function eb() {
  let [e, t] = i.useState(false), n = () => {
    if (e) {
      (0, w.pr)(), t(false);
      return
    }
    let n = () => t(true),
      r = () => t(false);
    (0, w.AU)(W.intl.string(W.t.PKaNJL), true, true, n, r), t(true)
  };
  return (0, u.l0)(() => (0, w.pr)()), (0, r.jsx)(c.Button, {
    text: W.intl.string(W.t.SKNnqq),
    icon: e ? c.E$n : c.udU,
    size: "sm",
    onClick: n
  })
}

function eO() {
  let e = L.on.useSetting();
  return d.$j ? (0, r.jsx)(N.x, {
    setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH,
    children: (0, r.jsxs)(c.nVY, {
      label: W.intl.string(W.t.VpSKeO),
      children: [(0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
        children: (0, r.jsx)(c.dOG, {
          label: W.intl.string(W.t.qvTIwX),
          checked: e,
          onChange: L.on.updateSetting
        })
      }), (0, r.jsx)(N.x, {
        setting: F.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
        children: (0, r.jsx)(ey, {})
      })]
    })
  }) : null
}