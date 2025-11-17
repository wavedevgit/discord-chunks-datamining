/** Chunk was on web.js **/
/** chunk id: 154022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk419363 = require("./419363.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk296812 = require("./296812.js"),
  Chunk313201 = require("./313201.js"),
  Chunk877371 = require("./877371.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594928 = require("./594928.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk786761 = require("./786761.js"),
  Chunk3148 = require("./3148.js"),
  Chunk739566 = require("./739566.js"),
  Chunk753206 = require("./753206.jsx"),
  Chunk440849 = require("./440849.js"),
  Chunk921801 = require("./921801.js"),
  Chunk196051 = require("./196051.js"),
  Chunk441729 = require("./441729.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk263937 = require("./263937.js"),
  Chunk996073 = require("./996073.js"),
  Chunk273313 = require("./273313.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk611480 = require("./611480.js"),
  Chunk653477 = require("./653477.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk88406 = require("./88406.js"),
  Chunk953752 = require("./953752.js"),
  Chunk328756 = require("./328756.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = (0, Chunk313201.hQ)(),
  J = (0, Chunk313201.hQ)(),
  $ = (0, Chunk313201.hQ)(),
  ee = o().debounce(e => {
    (0, d.o2)(e)
  }, 250),
  et = o().debounce(e => {
    (0, N.Ct)(e)
  }, 250);

function en(e) {
  _.U.useExperiment({
    location: "useAccessibilityItems"
  }, {
    autoTrackExposure: true
  }).enabled;
  let t = (0, m.A)("UserSettingsAccessibility"),
    n = y.fN.useExperiment({
      location: "UserSettingsAccessibility"
    }).enabled,
    i = (0, E.A)("UserSettingsAccessibility");
  return (0, r.jsx)(k.Z, {
    title: V.intl.string(V.t.G0neg7),
    children: (0, r.jsxs)(c.Kqy, {
      gap: 16,
      children: [(0, r.jsx)(er, {}), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_SATURATION,
        children: [(0, r.jsx)(eo, {}), (0, r.jsx)(c.izJ, {})]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_LINK_DECORATIONS,
        children: [(0, r.jsx)(es, {}), (0, r.jsx)(c.izJ, {})]
      }), t ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(C.F, {
          setting: G.s6.ACCESSIBILITY_CUSTOM_CURSOR,
          children: (0, r.jsx)(el, {})
        }), (0, r.jsx)(c.izJ, {})]
      }) : null, (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_ROLE_STYLE,
        children: [(0, r.jsx)(ec, {}), (0, r.jsx)(c.izJ, {})]
      }), n && (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
        children: [(0, r.jsx)(eu, {}), (0, r.jsx)(c.izJ, {})]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_PROFILE_COLORS,
        children: [(0, r.jsx)(ed, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_CONTRAST,
        children: [(0, r.jsx)(ef, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_STICKERS,
        children: [(0, r.jsx)(ep, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_REDUCED_MOTION,
        children: [(0, r.jsx)(e_, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_MESSAGES,
        children: [(0, r.jsx)(eh, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), i && (0, r.jsxs)(C.F, {
        setting: G.s6.ACCESSIBILITY_SWITCH_ICON,
        children: [(0, r.jsx)(ea, {}), (0, r.jsx)(c.izJ, {
          gap: 4
        })]
      }), (0, r.jsx)(em, {}), (0, r.jsx)(C.F, {
        setting: G.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          children: V.intl.format(V.t.DHpTjT, {
            onAppearanceClick() {
              (0, j.openUserSettings)(x.n.APPEARANCE_PANEL, {
                section: B.oAB.APPEARANCE
              })
            }
          })
        })
      })]
    })
  })
}

function er() {
  let e = Chunk695346.jU.useSetting(),
    [t] = Chunk473749.useState(() => {
      let e = "1337",
        t = (0, Chunk786761.e5)(X(z({}, (0, Chunk3148.ZP)({
          channelId: module,
          content: Chunk388032.intl.formatToPlainString(Chunk388032.t.bB80LC, {
            previewLink: "https://discord.com/accessibility"
          })
        })), {
          state: Chunk981631.yb.SENT,
          id: "".concat(0)
        }));
      return exports.colorString = "green", exports
    });
  return (0, Chunk54381.jsx)(Chunk481060.Rny, {
    children: (0, Chunk54381.jsxs)(Chunk481060.Zbd, {
      className: Chunk953752.preview,
      "aria-hidden": true,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk953752.previewHeader,
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["2RHHgz"])
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk953752.previewAvatars,
          children: [Chunk981631.Skl.ONLINE, Chunk981631.Skl.DND, Chunk981631.Skl.IDLE].map(e => (0, r.jsx)(c.Xo$, {
            "aria-label": V.intl.string(V.t.lqaIxI),
            src: W,
            size: c.EFr.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk953752.previewMessage,
        children: (0, Chunk54381.jsx)(Chunk753206.Z, {
          compact: module,
          author: X(z({}, (0, Chunk739566.ZH)(exports)), {
            colorString: "#DD80F4"
          }),
          message: exports
        })
      })]
    })
  })
}

function ei() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isHighContrastModeEnabled);

  function t(e) {
    (0, d.vW)(e ? f.X.HIGH : f.X.DEFAULT)
  }
  return (0, Chunk54381.jsx)(Chunk243778.ZP, {
    contentTypes: [Chunk704215.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
    children: n => {
      let {
        visibleContent: i
      } = n;
      return (0, r.jsx)(c.rsf, {
        label: V.intl.string(V.t.aZlePv),
        description: V.intl.string(V.t["v2qF8+"]),
        badge: i === l.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? "new" : true,
        checked: e,
        onChange: t
      })
    }
  })
}

function ea() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isSwitchIconsEnabled);
  return (0, Chunk54381.jsx)(Chunk481060.rsf, {
    label: Chunk388032.intl.string(Chunk388032.t["S3z+pV"]),
    description: Chunk388032.intl.string(Chunk388032.t["3QuI9+"]),
    checked: module,
    onChange: e => (0, d.ky)(e),
    hasIcon: true
  })
}

function eo() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, Chunk442837.cj)([Chunk607070.Z], () => ({
    saturation: Chunk607070.Z.saturation,
    desaturateUserColors: Chunk607070.Z.desaturateUserColors
  }));
  return (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
    gap: 16,
    children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
      label: Chunk388032.intl.string(Chunk388032.t["5PWWCY"]),
      description: Chunk388032.intl.string(Chunk388032.t["0PbE/H"]),
      "aria-labelledby": Q,
      "aria-describedby": J,
      markers: Chunk981631.yqN.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: module,
      onValueChange: ee,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.bQCodD),
        description: Chunk388032.intl.string(Chunk388032.t.nlAOEW),
        checked: exports,
        onChange: Chunk857595.f1
      })
    })]
  })
}

function es() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.alwaysShowLinkDecorations);

  function t() {
    (0, Chunk857595.gs)(!module)
  }
  return (0, Chunk54381.jsx)(Chunk481060.rsf, {
    label: Chunk388032.intl.string(Chunk388032.t.OLZFB8),
    description: Chunk388032.intl.string(Chunk388032.t["72i5GI"]),
    checked: module,
    onChange: exports
  })
}

function el() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => {
    var e;
    return null == (e = Chunk607070.Z.enableCustomCursor) || module
  });
  return (0, Chunk54381.jsx)(Chunk481060.rsf, {
    label: Chunk388032.intl.string(Chunk388032.t["+Isihb"]),
    description: Chunk388032.intl.string(Chunk388032.t.nNZ1Tz),
    checked: module,
    onChange: () => (0, Chunk857595.HU)(!module)
  })
}

function ec() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle);

  function t(e) {
    (0, d.u1)(e)
  }
  return (0, Chunk54381.jsx)(Chunk481060.FXm, {
    label: Chunk388032.intl.string(Chunk388032.t.uSOPWm),
    description: Chunk388032.intl.string(Chunk388032.t["86hjzQ"]),
    options: [{
      name: Chunk388032.intl.string(Chunk388032.t.YEOEi6),
      value: "username"
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.mQaro3),
      value: "dot"
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.Ji2EVJ),
      value: "hidden"
    }],
    onChange: exports,
    value: module
  })
}

function eu() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();

  function n(e) {
    (0, d.X2)(e), P.default.track(B.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
      enabled: e
    })
  }
  return (0, Chunk54381.jsx)(Chunk481060.rsf, {
    label: Chunk388032.intl.string(Chunk88406.default["2gFUEw"]),
    description: Chunk388032.intl.format(Chunk88406.default.L8U56h, {
      onClickOpenModal() {
        (0, Chunk829716.I)({
          analyticsLocations: exports
        })
      }
    }),
    checked: module,
    onChange: require
  })
}

function ed() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncProfileThemeWithUserTheme),
    t = Chunk473749.useRef(null);
  return (0, Chunk996073.Z)(exports, Chunk526761.rP.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, Chunk54381.jsx)("div", {
    ref: exports,
    children: (0, Chunk54381.jsx)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.BT8Bmp),
      children: (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["sSY+mD"]),
          description: Chunk388032.intl.format(Chunk388032.t.u6UjrL, {
            onThemeClick() {
              (0, Chunk518596.openUserSettings)(Chunk313789.n.APPEARANCE_PANEL, {
                section: Chunk981631.oAB.APPEARANCE
              })
            }
          }),
          checked: module,
          onChange: Chunk857595.Uv
        })
      })
    })
  })
}

function ef() {
  let [e] = (0, Chunk442837.Wu)([Chunk607070.Z], () => [Chunk607070.Z.syncForcedColors, Chunk607070.Z.systemForcedColors]), [t, n] = Chunk473749.useState(module);
  Chunk473749.useEffect(() => {
    require(module)
  }, [module]);
  let a = Chunk473749.useRef(null);
  Chunk473749.useEffect(() => {
    null != Chunk392711.current && (clearTimeout(Chunk392711.current), Chunk392711.current = null), exports !== module && (Chunk392711.current = setTimeout(() => (0, Chunk857595.qz)(exports), 150))
  }, [exports, module]);
  let o = Chunk388032.intl.format(Chunk388032.t.GwEVE2, {
    learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FORCED_COLORS)
  });
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t["TYyfO/"]),
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, Chunk54381.jsx)(ei, {})
    }), (0, Chunk627845.b)() ? (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.cguiec),
        description: o,
        checked: exports,
        onChange: require
      })
    }) : null]
  })
}

function e_() {
  let e = Chunk695346.QK.useSetting(),
    t = Chunk695346.Yk.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: a,
      systemPrefersReducedMotion: o,
      gifAutoPlayOverrideReason: l,
      animateEmojiOverrideReason: u
    } = (0, Chunk442837.cj)([Chunk607070.Z, Chunk263937.Z], () => ({
      systemPrefersReducedMotion: Chunk607070.Z.systemPrefersReducedMotion,
      rawPrefersReducedMotion: Chunk607070.Z.rawPrefersReducedMotion,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      gifAutoPlayOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("animateEmoji")
    })),
    _ = "auto" === Chunk392711,
    p = Chunk473749.useRef(null);
  (0, Chunk996073.Z)(Chunk627845, Chunk526761.rP.REDUCED_MOTION);
  let h = Chunk473749.useCallback(e => {
      (0, d.Zt)(e ? "auto" : o)
    }, [o]),
    m = Chunk473749.useCallback(e => {
      (0, d.Zt)(e ? "reduce" : "no-preference")
    }, []);
  return (0, Chunk54381.jsx)("div", {
    ref: Chunk627845,
    title: Chunk388032.intl.string(Chunk388032.t.e3TR1b),
    className: Chunk953752.reducedMotion,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.e3TR1b),
      description: Chunk388032.intl.format(Chunk388032.t["2l9U2j"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REDUCED_MOTION)
      }),
      children: [(0, Chunk54381.jsx)(Chunk481060.Checkbox, {
        checked: Chunk299363,
        onChange: Chunk906732,
        label: Chunk388032.intl.string(Chunk388032.t["+Dx+HD"])
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.b3XBzg),
          checked: require,
          onChange: Chunk296812
        })
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.Iayoh5),
          description: null != Chunk704215 ? (0, Chunk440849.Z)(Chunk704215) : true,
          checked: module,
          onChange: Chunk695346.QK.updateSetting
        })
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.iIaOlc),
          description: null != Chunk419363 ? (0, Chunk440849.Z)(Chunk419363) : true,
          checked: exports,
          onChange: Chunk695346.Yk.updateSetting
        })
      })]
    })
  })
}

function ep() {
  let e = Chunk695346.Wp.useSetting(),
    t = (0, Chunk442837.e7)([Chunk263937.Z], () => Chunk263937.Z.getAppliedOverrideReasonKey("animateStickers")),
    n = Chunk473749.useCallback(e => {
      w.Wp.updateSetting(e)
    }, []);
  return (0, Chunk54381.jsx)(Chunk481060.FXm, {
    label: Chunk388032.intl.string(Chunk388032.t["6NtAuJ"]),
    description: null != exports ? (0, Chunk440849.Z)(exports) : Chunk388032.intl.string(Chunk388032.t.GRa6U7),
    options: [{
      name: Chunk388032.intl.string(Chunk388032.t["Xp+X2U"]),
      value: Chunk611480.yr.ALWAYS_ANIMATE
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.IlLT7e),
      desc: Chunk388032.intl.string(Chunk388032.t.bIW9Tl),
      value: Chunk611480.yr.ANIMATE_ON_INTERACTION
    }, {
      name: Chunk388032.intl.string(Chunk388032.t.IGu8x3),
      value: Chunk611480.yr.NEVER_ANIMATE
    }],
    onChange: e => n(e),
    value: module
  })
}

function eh() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isSubmitButtonEnabled),
    t = Chunk695346.dN.useSetting(),
    n = Chunk473749.useRef(null);
  return (0, Chunk996073.Z)(require, Chunk526761.rP.LEGACY_CHAT_INPUT), (0, Chunk54381.jsx)("div", {
    ref: require,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.onqU6o),
      children: [(0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["3Fztn5"]),
          checked: module,
          onChange: Chunk857595.eN
        })
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.TZ2hZH),
          description: Chunk388032.intl.string(Chunk388032.t.Q7wgHc),
          checked: exports,
          onChange: e => {
            P.default.track(B.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
              enabled: e,
              location: {
                section: B.jXE.SETTINGS_ACCESSIBILITY
              }
            }), w.dN.updateSetting(e)
          }
        })
      })]
    })
  })
}

function em() {
  let e = Chunk695346.OW.useSetting(),
    t = (0, Chunk442837.e7)([Chunk441729.Z], () => Chunk441729.Z.speechRate),
    [n, a] = Chunk473749.useState(false);
  if (!Chunk419363.Zh) return null;
  let o = () => {
    if (require) {
      (0, Chunk196051.NB)(), Chunk392711(false);
      return
    }
    let e = () => Chunk392711(true),
      t = () => Chunk392711(false);
    (0, Chunk196051.cP)(Chunk388032.intl.string(Chunk388032.t.PKaNJL), true, true, module, exports), Chunk392711(true)
  };
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
    children: (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      label: Chunk388032.intl.string(Chunk388032.t.VpSKeO),
      children: [(0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
        children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.qvTIwX),
          checked: module,
          onChange: Chunk695346.OW.updateSetting
        })
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
        children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk54381.jsx)(Chunk481060.iRW, {
            label: Chunk388032.intl.string(Chunk388032.t.lsW5Ev),
            markers: Chunk653477.q,
            initialValue: exports,
            defaultValue: 1,
            stickToMarkers: true,
            onValueChange: et,
            onValueRender: e => "x".concat(e.toFixed(2)),
            onMarkerRender: e => 0 === e ? (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: V.intl.string(V.t["493lwX"])
            }) : 10 === e ? (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              children: V.intl.string(V.t.ZSZEdS)
            }) : 1 === e ? (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-feedback-positive",
              children: "x1.0"
            }) : e % 1 == 0 ? "" : true,
            "aria-labelledby": $
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk953752.ttsPreviewWrapper,
            children: (0, Chunk54381.jsx)(Chunk481060.Button, {
              size: "sm",
              icon: require ? Chunk481060.fpf : Chunk481060.o1U,
              text: Chunk388032.intl.string(Chunk388032.t.hymc8s),
              onClick: o,
              "aria-label": "".concat(Chunk388032.intl.string(Chunk388032.t.hymc8s), " ").concat(Chunk388032.intl.string(Chunk388032.t.lsW5Ev))
            })
          })]
        })
      })]
    })
  })
}