/** Chunk was on 42402 **/
/** chunk id: 805577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => en,
  YD: () => er,
  iI: () => eb
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

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function J(e, t) {
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
let Q = (0, Chunk915089.Ld)(),
  Z = (0, Chunk915089.Ld)(),
  $ = (0, Chunk915089.Ld)(),
  ee = s().debounce(e => {
    (0, p.HU)(e)
  }, 250),
  et = s().debounce(e => {
    (0, N.zU)(e)
  }, 250);

function en(e) {
  g.z.useExperiment({
    location: "useAccessibilityItems"
  }, {
    autoTrackExposure: true
  }).enabled;
  let t = (0, A.t)("UserSettingsAccessibility"),
    n = (0, O.y)("UserSettingsAccessibility"),
    l = (0, m.i)("UserSettingsAccessibility");
  return (0, r.jsx)(k.A, {
    title: K.intl.string(K.t.G0neg7),
    children: (0, r.jsxs)(c.BJc, {
      gap: 16,
      children: [(0, r.jsx)(er, {}), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_SATURATION,
        children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.cGx, {})]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_LINK_DECORATIONS,
        children: [(0, r.jsx)(ea, {}), (0, r.jsx)(c.cGx, {})]
      }), t ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(I.x, {
          setting: B.H.ACCESSIBILITY_CUSTOM_CURSOR,
          children: (0, r.jsx)(eo, {})
        }), (0, r.jsx)(c.cGx, {})]
      }) : null, (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_ROLE_STYLE,
        children: [(0, r.jsx)(eu, {}), (0, r.jsx)(c.cGx, {})]
      }), l && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_DISPLAY_NAME_STYLES,
        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.cGx, {})]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_PROFILE_COLORS,
        children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_CONTRAST,
        children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_REDUCED_MOTION,
        children: [(0, r.jsx)(eg, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_MESSAGES,
        children: [(0, r.jsx)(em, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), n && (0, r.jsxs)(I.x, {
        setting: B.H.ACCESSIBILITY_SWITCH_ICON,
        children: [(0, r.jsx)(ei, {}), (0, r.jsx)(c.cGx, {
          gap: 4
        })]
      }), (0, r.jsx)(ey, {}), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_APPEARANCE_UPSELL,
        children: (0, r.jsx)("div", {
          className: z.oq,
          children: (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: K.intl.format(K.t.DHpTjT, {
              onAppearanceClick() {
                (0, U.openUserSettings)(L.X.APPEARANCE_PANEL, {
                  section: H.nc_.APPEARANCE
                })
              }
            })
          })
        })
      })]
    })
  })
}

function er() {
  let e = D.hH.useSetting(),
    [t] = l.useState(() => {
      let e = (0, _.rh)(J(q({}, (0, v.Ay)({
        channelId: "1337",
        content: K.intl.formatToPlainString(K.t.bB80LC, {
          previewLink: "https://discord.com/accessibility"
        })
      })), {
        state: H.cmJ.SENT,
        id: "".concat(0)
      }));
      return e.colorString = "green", e
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
          text: K.intl.string(K.t["2RHHgz"])
        }), (0, r.jsx)("div", {
          className: z.hD,
          children: [H.clD.ONLINE, H.clD.DND, H.clD.IDLE].map(e => (0, r.jsx)(c.JsQ, {
            "aria-label": K.intl.string(K.t.lqaIxI),
            src: X,
            size: c._3J.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, r.jsx)("div", {
        className: z.QS,
        children: (0, r.jsx)(C.A, {
          compact: e,
          author: J(q({}, (0, E.p_)(t)), {
            colorString: "#DD80F4"
          }),
          message: t
        })
      })]
    })
  })
}

function el() {
  let e = (0, a.bG)([h.A], () => h.A.isHighContrastModeEnabled);

  function t(e) {
    (0, p.uh)(e ? h._.HIGH : h._.DEFAULT)
  }
  return (0, r.jsx)(j.Ay, {
    contentTypes: [o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
    children: n => {
      let {
        visibleContent: l
      } = n;
      return (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t.aZlePv),
        description: K.intl.string(K.t["v2qF8+"]),
        badge: l === o.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : true,
        checked: e,
        onChange: t
      })
    }
  })
}

function ei() {
  let e = (0, a.bG)([h.A], () => h.A.isSwitchIconsEnabled);
  return (0, r.jsx)(c.dOG, {
    label: K.intl.string(K.t["S3z+pV"]),
    description: K.intl.string(K.t["3QuI9+"]),
    checked: e,
    onChange: e => (0, p.Gm)(e),
    hasIcon: true
  })
}

function es() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, a.cf)([h.A], () => ({
    saturation: h.A.saturation,
    desaturateUserColors: h.A.desaturateUserColors
  }));
  return (0, r.jsxs)(c.BJc, {
    gap: 16,
    children: [(0, r.jsx)(c.Apm, {
      label: K.intl.string(K.t["5PWWCY"]),
      description: K.intl.string(K.t["0PbE/H"]),
      "aria-labelledby": Q,
      "aria-describedby": Z,
      markers: H.hH7.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: e,
      onValueChange: ee,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, r.jsx)(I.x, {
      setting: B.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t.bQCodD),
        description: K.intl.string(K.t.nlAOEW),
        checked: t,
        onChange: p.YV
      })
    })]
  })
}

function ea() {
  let e = (0, a.bG)([h.A], () => h.A.alwaysShowLinkDecorations);
  return (0, r.jsx)(c.dOG, {
    label: K.intl.string(K.t.OLZFB8),
    description: K.intl.string(K.t["72i5GI"]),
    checked: e,
    onChange: function() {
      (0, p.kI)(!e)
    }
  })
}

function eo() {
  let e = (0, a.bG)([h.A], () => {
    var e;
    return null == (e = h.A.enableCustomCursor) || e
  });
  return (0, r.jsx)(c.dOG, {
    label: K.intl.string(K.t["+Isihb"]),
    description: K.intl.string(K.t.nNZ1Tz),
    checked: e,
    onChange: () => (0, p.ts)(!e)
  })
}

function ec() {
  let e = (0, a.bG)([R.Ay], () => R.Ay.hdrDynamicRange);
  return (0, r.jsx)(I.x, {
    setting: B.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE,
    children: (0, r.jsx)(c.z6M, {
      label: K.intl.string(K.t.nemtgW),
      badge: "beta",
      description: K.intl.string(K.t["O/Gjvn"]),
      options: [{
        name: K.intl.string(K.t.D5Fma9),
        desc: K.intl.string(K.t.Qj75ck),
        value: "no-limit"
      }, {
        name: K.intl.string(K.t.ldcGIH),
        desc: K.intl.string(K.t["+V/bDk"]),
        value: "standard"
      }],
      onChange: function(e) {
        (0, p.FU)(e)
      },
      value: e
    })
  })
}

function eu() {
  let e = (0, a.bG)([h.A], () => h.A.roleStyle);
  return (0, r.jsx)(c.z6M, {
    label: K.intl.string(K.t.uSOPWm),
    description: K.intl.string(K.t["86hjzQ"]),
    options: [{
      name: K.intl.string(K.t.YEOEi6),
      value: "username"
    }, {
      name: K.intl.string(K.t.mQaro3),
      value: "dot"
    }, {
      name: K.intl.string(K.t.Ji2EVJ),
      value: "hidden"
    }],
    onChange: function(e) {
      (0, p.IX)(e)
    },
    value: e
  })
}

function ed() {
  let e = (0, a.bG)([h.A], () => h.A.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, b.Ay)();
  return (0, r.jsx)(c.dOG, {
    label: K.intl.string(W.default["2gFUEw"]),
    description: K.intl.format(W.default.L8U56h, {
      onClickOpenModal() {
        (0, x.L)({
          analyticsLocations: t
        })
      }
    }),
    checked: e,
    onChange: function(e) {
      (0, p.Dm)(e), P.default.track(H.HAw.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
        enabled: e
      })
    }
  })
}

function ep() {
  let e = (0, a.bG)([h.A], () => h.A.syncProfileThemeWithUserTheme);
  return (0, r.jsx)(c.nVY, {
    label: K.intl.string(K.t.BT8Bmp),
    children: (0, r.jsx)(I.x, {
      setting: B.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
      children: (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t["sSY+mD"]),
        description: K.intl.format(K.t.u6UjrL, {
          onThemeClick() {
            (0, U.openUserSettings)(L.X.APPEARANCE_PANEL, {
              section: H.nc_.APPEARANCE
            })
          }
        }),
        checked: e,
        onChange: p.M1
      })
    })
  })
}

function eh() {
  let [e] = (0, a.yK)([h.A], () => [h.A.syncForcedColors, h.A.systemForcedColors]), [t, n] = l.useState(e);
  l.useEffect(() => {
    n(e)
  }, [e]);
  let i = l.useRef(null);
  l.useEffect(() => {
    null != i.current && (clearTimeout(i.current), i.current = null), t !== e && (i.current = setTimeout(() => (0, p.D3)(t), 150))
  }, [t, e]);
  let s = K.intl.format(K.t.GwEVE2, {
    learnMoreLink: w.A.getArticleURL(H.MVz.FORCED_COLORS)
  });
  return (0, r.jsxs)(c.nVY, {
    label: K.intl.string(K.t["TYyfO/"]),
    children: [(0, r.jsx)(I.x, {
      setting: B.H.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, r.jsx)(el, {})
    }), (0, f.D)() ? (0, r.jsx)(I.x, {
      setting: B.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t.cguiec),
        description: s,
        checked: t,
        onChange: n
      })
    }) : null]
  })
}

function eg() {
  let e = D.kt.useSetting(),
    t = D.Sf.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: i,
      systemPrefersReducedMotion: s,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: u
    } = (0, a.cf)([h.A, M.A], () => ({
      systemPrefersReducedMotion: h.A.systemPrefersReducedMotion,
      rawPrefersReducedMotion: h.A.rawPrefersReducedMotion,
      useReducedMotion: h.A.useReducedMotion,
      gifAutoPlayOverrideReason: M.A.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: M.A.getAppliedOverrideReasonKey("animateEmoji")
    })),
    d = l.useCallback(e => {
      (0, p.qz)(e ? "auto" : s)
    }, [s]),
    g = l.useCallback(e => {
      (0, p.qz)(e ? "reduce" : "no-preference")
    }, []);
  return (0, r.jsx)("div", {
    title: K.intl.string(K.t.e3TR1b),
    className: z.VN,
    children: (0, r.jsxs)(c.nVY, {
      label: K.intl.string(K.t.e3TR1b),
      description: K.intl.format(K.t["2l9U2j"], {
        helpdeskArticle: w.A.getArticleURL(H.MVz.REDUCED_MOTION)
      }),
      children: [(0, r.jsx)(c.dOG, {
        label: K.intl.string(K.t["+Dx+HD"]),
        checked: "auto" === i,
        onChange: d
      }), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
        children: (0, r.jsx)(c.dOG, {
          label: K.intl.string(K.t.b3XBzg),
          checked: n,
          onChange: g
        })
      }), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
        children: (0, r.jsx)(c.dOG, {
          label: K.intl.string(K.t.Iayoh5),
          description: null != o ? (0, S.A)(o) : true,
          checked: e,
          onChange: D.kt.updateSetting
        })
      }), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
        children: (0, r.jsx)(c.dOG, {
          label: K.intl.string(K.t.iIaOlc),
          description: null != u ? (0, S.A)(u) : true,
          checked: t,
          onChange: D.Sf.updateSetting
        })
      }), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_STICKERS,
        children: (0, r.jsx)(ef, {})
      })]
    })
  })
}

function ef() {
  let e = D.S0.useSetting(),
    t = (0, a.bG)([M.A], () => M.A.getAppliedOverrideReasonKey("animateStickers")),
    n = l.useCallback(e => {
      D.S0.updateSetting(e)
    }, []);
  return (0, r.jsx)(c.z6M, {
    label: K.intl.string(K.t["6NtAuJ"]),
    description: null != t ? (0, S.A)(t) : K.intl.string(K.t.GRa6U7),
    options: [{
      name: K.intl.string(K.t["Xp+X2U"]),
      value: F.BJ.ALWAYS_ANIMATE
    }, {
      name: K.intl.string(K.t.IlLT7e),
      desc: K.intl.string(K.t.bIW9Tl),
      value: F.BJ.ANIMATE_ON_INTERACTION
    }, {
      name: K.intl.string(K.t.IGu8x3),
      value: F.BJ.NEVER_ANIMATE
    }],
    onChange: e => n(e),
    value: e
  })
}

function em() {
  let e = (0, a.bG)([h.A], () => h.A.isSubmitButtonEnabled),
    t = D.D_.useSetting(),
    n = l.useRef(null);
  return (0, G.A)(n, V.Yu.LEGACY_CHAT_INPUT), (0, r.jsx)("div", {
    ref: n,
    children: (0, r.jsxs)(c.nVY, {
      label: K.intl.string(K.t.onqU6o),
      children: [(0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
        children: (0, r.jsx)(c.dOG, {
          label: K.intl.string(K.t["3Fztn5"]),
          checked: e,
          onChange: p.Xt
        })
      }), (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
        children: (0, r.jsx)(c.dOG, {
          label: K.intl.string(K.t.TZ2hZH),
          description: K.intl.string(K.t.Q7wgHc),
          checked: t,
          onChange: e => {
            P.default.track(H.HAw.LEGACY_CHAT_INPUT_TOGGLED, {
              enabled: e,
              location: {
                section: H.JJy.SETTINGS_ACCESSIBILITY
              }
            }), D.D_.updateSetting(e)
          }
        })
      })]
    })
  })
}

function eb() {
  let e = (0, a.bG)([T.A], () => T.A.speechRate);
  return (0, r.jsxs)(c.BJc, {
    gap: 16,
    children: [(0, r.jsx)(c.Apm, {
      label: K.intl.string(K.t.lsW5Ev),
      markers: Y.P,
      initialValue: e,
      defaultValue: 1,
      stickToMarkers: true,
      onValueChange: et,
      onValueRender: e => "x".concat(e.toFixed(2)),
      onMarkerRender: e => 0 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: K.intl.string(K.t["493lwX"])
      }) : 10 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: K.intl.string(K.t.ZSZEdS)
      }) : 1 === e ? (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-feedback-positive",
        children: "x1.0"
      }) : e % 1 == 0 ? "" : true,
      "aria-labelledby": $
    }), (0, r.jsx)(eA, {})]
  })
}

function eA() {
  let [e, t] = l.useState(false);
  return (0, u.l0)(() => (0, N.pr)()), (0, r.jsx)(c.Button, {
    text: K.intl.string(K.t.SKNnqq),
    icon: e ? c.E$n : c.udU,
    size: "sm",
    onClick: () => {
      if (e) {
        (0, N.pr)(), t(false);
        return
      }(0, N.AU)(K.intl.string(K.t.PKaNJL), true, true, () => t(true), () => t(false)), t(true)
    }
  })
}

function ey() {
  return d.$j ? (0, r.jsx)(I.x, {
    setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH,
    children: (0, r.jsx)(c.nVY, {
      label: K.intl.string(K.t.VpSKeO),
      children: (0, r.jsx)(I.x, {
        setting: B.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
        children: (0, r.jsx)(eb, {})
      })
    })
  }) : null
}