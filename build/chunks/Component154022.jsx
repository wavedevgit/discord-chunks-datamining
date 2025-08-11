/** Chunk was on 75708 **/
/** chunk id: 154022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => J
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk419363 = require("./419363.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
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
  Chunk263937 = require("./263937.js"),
  Chunk996073 = require("./996073.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk611480 = require("./611480.js"),
  Chunk653477 = require("./653477.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698282 = require("./698282.js"),
  Chunk855112 = require("./855112.js"),
  Chunk20493 = require("./20493.js"),
  Chunk328756 = require("./328756.js");

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function z(e, t) {
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
let W = (0, Chunk313201.hQ)(),
  Y = (0, Chunk313201.hQ)(),
  K = (0, Chunk313201.hQ)(),
  q = o().debounce(e => {
    (0, p.o2)(e)
  }, 250),
  X = o().debounce(e => {
    (0, I.Ct)(e)
  }, 250);

function J(e) {
  let t = h.U.useExperiment({
      location: "useAccessibilityItems"
    }, {
      autoTrackExposure: true
    }).enabled,
    n = _.f.useExperiment({
      location: "UserSettingsAccessibility"
    }).enabled;
  return (0, i.jsxs)(d.hjN, {
    tag: d.RB0.H1,
    title: B.intl.string(B.t.G0neg4),
    children: [(0, i.jsx)("div", {
      className: G.marginBottom20,
      children: (0, i.jsx)(Q, {})
    }), t ? (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, i.jsx)($, {})
    }) : null, (0, i.jsxs)(T.F, {
      setting: w.s6.ACCESSIBILITY_SATURATION,
      children: [(0, i.jsx)(ee, {}), (0, i.jsx)(d.$i$, {})]
    }), (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_LINK_DECORATIONS,
      children: (0, i.jsx)(et, {})
    }), (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_ROLE_STYLE,
      children: (0, i.jsx)(en, {})
    }), n && (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
      children: (0, i.jsx)(ei, {})
    }), (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_PROFILE_COLORS,
      children: (0, i.jsx)(er, {})
    }), (0, f.b)() ? (0, i.jsxs)(T.F, {
      setting: w.s6.ACCESSIBILITY_CONTRAST,
      children: [(0, i.jsx)(es, {}), " "]
    }) : null, (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_REDUCED_MOTION,
      children: (0, i.jsx)(ea, {})
    }), (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_STICKERS,
      children: (0, i.jsx)(el, {})
    }), (0, i.jsx)(T.F, {
      setting: w.s6.ACCESSIBILITY_MESSAGES,
      children: (0, i.jsx)(eo, {})
    }), (0, i.jsx)(ec, {}), (0, i.jsxs)(T.F, {
      setting: w.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
      children: [(0, i.jsx)(d.$i$, {
        className: G.marginTop20
      }), (0, i.jsx)(d.Text, {
        className: G.marginTop20,
        variant: "text-md/normal",
        children: B.intl.format(B.t.DHpTjY, {
          onAppearanceClick() {
            u.Z.open(k.oAB.APPEARANCE)
          }
        })
      })]
    })]
  })
}

function Q() {
  let e = Chunk695346.jU.useSetting(),
    [t] = Chunk73800.useState(() => {
      let e = (0, Chunk786761.e5)(z(H({}, (0, Chunk3148.ZP)({
        channelId: "1337",
        content: Chunk388032.intl.formatToPlainString(Chunk388032.t.bB80LC, {
          previewLink: "https://discord.com/accessibility"
        })
      })), {
        state: Chunk981631.yb.SENT,
        id: "".concat(0)
      }));
      return module.colorString = "green", module
    });
  return (0, Chunk255367.jsx)(Chunk481060.Rny, {
    children: (0, Chunk255367.jsxs)(Chunk481060.Zbd, {
      className: Chunk855112.preview,
      "aria-hidden": true,
      children: [(0, Chunk255367.jsxs)("div", {
        className: Chunk855112.previewHeader,
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["2RHHg4"])
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk855112.previewAvatars,
          children: [Chunk981631.Skl.ONLINE, Chunk981631.Skl.DND, Chunk981631.Skl.IDLE].map(e => (0, i.jsx)(d.Xo$, {
            "aria-label": B.intl.string(B.t.lqaIxM),
            src: F,
            size: d.EFr.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk855112.previewMessage,
        children: (0, Chunk255367.jsx)(Chunk753206.Z, {
          compact: module,
          author: z(H({}, (0, Chunk739566.ZH)(exports)), {
            colorString: "#DD80F4"
          }),
          message: exports
        })
      })]
    })
  })
}

function $() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isHighContrastModeEnabled);
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: function(e) {
        (0, p.vW)(e ? g.X.HIGH : g.X.DEFAULT)
      },
      note: "Enhance visibility with bold colors and sharp contrast.",
      children: "High Contrast Mode"
    })
  })
}

function ee() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, Chunk442837.cj)([Chunk607070.Z], () => ({
    saturation: Chunk607070.Z.saturation,
    desaturateUserColors: Chunk607070.Z.desaturateUserColors
  }));
  return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    className: Chunk20493.marginTop20,
    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
      id: W,
      className: Chunk20493.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t["5PWWCQ"])
    }), (0, Chunk255367.jsx)(Chunk481060.R94, {
      id: Y,
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk20493.marginBottom20,
      children: Chunk388032.intl.string(Chunk388032.t["0PbE/P"])
    }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
      "aria-labelledby": W,
      "aria-describedby": Y,
      markers: Chunk981631.yqN.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: module,
      onValueChange: q,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        className: a()(Chunk20493.marginTop20, Chunk20493.marginBottom20),
        value: exports,
        onChange: Chunk857595.f1,
        note: Chunk388032.intl.string(Chunk388032.t.nlAOER),
        children: Chunk388032.intl.string(Chunk388032.t.bQCodH)
      })
    })]
  })
}

function et() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.alwaysShowLinkDecorations);
  return (0, Chunk255367.jsx)(Chunk481060.xJW, {
    className: Chunk20493.marginTop20,
    children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
      note: Chunk388032.intl.string(Chunk388032.t["72i5GB"]),
      value: module,
      onChange: function() {
        (0, Chunk857595.gs)(!module)
      },
      children: Chunk388032.intl.string(Chunk388032.t.OLZFBw)
    })
  })
}

function en() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle);
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t.uSOPWl),
      className: Chunk20493.marginTop20,
      children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["86hjzc"])
      }), (0, Chunk255367.jsx)(Chunk481060.FXm, {
        options: [{
          name: Chunk388032.intl.string(Chunk388032.t.YEOEi4),
          value: "username"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.mQaro6),
          value: "dot"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.Ji2EVF),
          value: "hidden"
        }],
        onChange: function(e) {
          (0, p.u1)(e.value)
        },
        value: module
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.$i$, {
      className: Chunk20493.marginTop20
    })]
  })
}

function ei() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
  return (0, Chunk255367.jsx)(Chunk481060.xJW, {
    className: Chunk20493.marginTop20,
    children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: function(e) {
        (0, p.X2)(e), y.default.track(k.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
          enabled: e
        })
      },
      note: Chunk388032.intl.format(Chunk698282.default.L8U56u, {
        onClickOpenModal() {
          (0, Chunk829716.I)({
            analyticsLocations: exports
          })
        }
      }),
      children: Chunk388032.intl.string(Chunk698282.default["2gFUEx"])
    })
  })
}

function er() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncProfileThemeWithUserTheme),
    t = Chunk73800.useRef(null);
  return (0, Chunk996073.Z)(exports, Chunk526761.rP.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, Chunk255367.jsx)(Chunk481060.xJW, {
    ref: exports,
    title: Chunk388032.intl.string(Chunk388032.t.BT8Bmp),
    className: a()(Chunk20493.marginTop20, Chunk855112.syncProfileThemeWithUserTheme),
    children: (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        note: Chunk388032.intl.format(Chunk388032.t.u6UjrK, {
          onThemeClick() {
            Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE)
          }
        }),
        className: Chunk20493.marginTop20,
        value: module,
        onChange: Chunk857595.Uv,
        children: Chunk388032.intl.string(Chunk388032.t["sSY+mJ"])
      })
    })
  })
}

function es() {
  let [e] = (0, Chunk442837.Wu)([Chunk607070.Z], () => [Chunk607070.Z.syncForcedColors, Chunk607070.Z.systemForcedColors]), [t, n] = Chunk73800.useState(module);
  Chunk73800.useEffect(() => {
    require(module)
  }, [module]);
  let s = Chunk73800.useRef(null);
  Chunk73800.useEffect(() => {
    null != Chunk120356.current && (clearTimeout(Chunk120356.current), Chunk120356.current = null), exports !== module && (Chunk120356.current = setTimeout(() => (0, Chunk857595.qz)(exports), 150))
  }, [exports, module]);
  let a = Chunk388032.intl.format(Chunk388032.t.GwEVEx, {
    learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FORCED_COLORS)
  });
  return (0, Chunk255367.jsx)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t.TYyfOz),
    className: Chunk20493.marginTop20,
    children: (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: exports,
        note: a,
        onChange: require,
        children: Chunk388032.intl.string(Chunk388032.t.cguieX)
      })
    })
  })
}

function ea() {
  let e = Chunk695346.QK.useSetting(),
    t = Chunk695346.Yk.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: s,
      systemPrefersReducedMotion: l,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: u
    } = (0, Chunk442837.cj)([Chunk607070.Z, Chunk263937.Z], () => ({
      systemPrefersReducedMotion: Chunk607070.Z.systemPrefersReducedMotion,
      rawPrefersReducedMotion: Chunk607070.Z.rawPrefersReducedMotion,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      gifAutoPlayOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("animateEmoji")
    })),
    m = Chunk73800.useRef(null);
  (0, Chunk996073.Z)(Chunk419363, Chunk526761.rP.REDUCED_MOTION);
  let h = Chunk73800.useCallback((e, t) => {
      (0, p.Zt)(t ? "auto" : l)
    }, [Chunk392711]),
    f = Chunk73800.useCallback(e => {
      (0, p.Zt)(e ? "reduce" : "no-preference")
    }, []);
  return (0, Chunk255367.jsxs)(Chunk481060.xJW, {
    ref: Chunk419363,
    title: Chunk388032.intl.string(Chunk388032.t.e3TR1d),
    className: a()(Chunk20493.marginTop20, Chunk855112.reducedMotion),
    children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk20493.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["2l9U2t"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REDUCED_MOTION)
      })
    }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
      className: a()(Chunk20493.marginTop20, Chunk20493.marginBottom20),
      value: "auto" === Chunk120356,
      shape: Chunk481060.XZJ.Shapes.BOX,
      type: Chunk481060.XZJ.Types.INVERTED,
      onChange: Chunk299363,
      children: (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["+Dx+HB"])
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk627845,
        children: Chunk388032.intl.string(Chunk388032.t.b3XBzs)
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        className: Chunk20493.marginBottom20,
        value: module,
        note: null != o ? (0, Chunk440849.Z)(o) : true,
        onChange: Chunk695346.QK.updateSetting,
        children: Chunk388032.intl.string(Chunk388032.t.Iayoh4)
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        className: Chunk20493.marginBottom20,
        value: exports,
        note: null != Chunk230711 ? (0, Chunk440849.Z)(Chunk230711) : true,
        onChange: Chunk695346.Yk.updateSetting,
        children: Chunk388032.intl.string(Chunk388032.t.iIaOlZ)
      })
    })]
  })
}

function el() {
  let e = Chunk695346.Wp.useSetting(),
    t = (0, Chunk442837.e7)([Chunk263937.Z], () => Chunk263937.Z.getAppliedOverrideReasonKey("animateStickers")),
    n = Chunk73800.useCallback(e => {
      P.Wp.updateSetting(e.value)
    }, []);
  return (0, Chunk255367.jsxs)(Chunk481060.xJW, {
    className: Chunk20493.marginTop20,
    title: Chunk388032.intl.string(Chunk388032.t["6NtAuL"]),
    children: [(0, Chunk255367.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk20493.marginBottom8,
      children: null != exports ? (0, Chunk440849.Z)(exports) : Chunk388032.intl.string(Chunk388032.t.GRa6U1)
    }), (0, Chunk255367.jsx)(Chunk481060.FXm, {
      options: [{
        name: Chunk388032.intl.string(Chunk388032.t["Xp+X2d"]),
        value: Chunk611480.yr.ALWAYS_ANIMATE
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.IlLT7e),
        desc: Chunk388032.intl.string(Chunk388032.t.bIW9Tk),
        value: Chunk611480.yr.ANIMATE_ON_INTERACTION
      }, {
        name: Chunk388032.intl.string(Chunk388032.t.IGu8x8),
        value: Chunk611480.yr.NEVER_ANIMATE
      }],
      onChange: require,
      value: module
    })]
  })
}

function eo() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isSubmitButtonEnabled),
    t = Chunk695346.dN.useSetting(),
    n = Chunk73800.useRef(null);
  return (0, Chunk996073.Z)(require, Chunk526761.rP.LEGACY_CHAT_INPUT), (0, Chunk255367.jsxs)(Chunk481060.xJW, {
    ref: require,
    className: Chunk20493.marginTop20,
    children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
      className: Chunk20493.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.onqU6u)
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        className: Chunk20493.marginTop20,
        value: module,
        onChange: Chunk857595.eN,
        children: Chunk388032.intl.string(Chunk388032.t["3Fztn5"])
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        className: Chunk20493.marginTop8,
        value: exports,
        note: Chunk388032.intl.string(Chunk388032.t.Q7wgHR),
        onChange: e => {
          y.default.track(k.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
            enabled: e,
            location: {
              section: k.jXE.SETTINGS_ACCESSIBILITY
            }
          }), P.dN.updateSetting(e)
        },
        children: Chunk388032.intl.string(Chunk388032.t.TZ2hZG)
      })
    })]
  })
}

function ec() {
  let e = Chunk695346.OW.useSetting(),
    t = (0, Chunk442837.e7)([Chunk441729.Z], () => Chunk441729.Z.speechRate),
    [n, s] = Chunk73800.useState(false);
  return Chunk419363.Zh ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
      children: (0, Chunk255367.jsxs)(Chunk481060.xJW, {
        className: Chunk20493.marginTop20,
        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
          className: Chunk20493.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t.VpSKeH)
        }), (0, Chunk255367.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
          children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
            className: Chunk20493.marginTop20,
            value: module,
            onChange: Chunk695346.OW.updateSetting,
            children: Chunk388032.intl.string(Chunk388032.t.qvTIwc)
          })
        })]
      })
    }), (0, Chunk255367.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
      children: (0, Chunk255367.jsxs)(Chunk481060.xJW, {
        className: Chunk20493.marginTop20,
        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
          id: K,
          className: Chunk20493.marginBottom20,
          children: Chunk388032.intl.string(Chunk388032.t.lsW5Eh)
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk855112.ttsPreviewWrapper,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
            icon: require ? Chunk481060.fpf : Chunk481060.o1U,
            text: Chunk388032.intl.string(Chunk388032.t.hymc8v),
            onClick: () => {
              if (require) {
                (0, Chunk196051.NB)(), Chunk120356(false);
                return
              }(0, Chunk196051.cP)(Chunk388032.intl.string(Chunk388032.t.PKaNJC), true, true, () => Chunk120356(true), () => Chunk120356(false)), Chunk120356(true)
            },
            "aria-label": "".concat(Chunk388032.intl.string(Chunk388032.t.hymc8v), " ").concat(Chunk388032.intl.string(Chunk388032.t.lsW5Eh))
          })
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          markers: Chunk653477.q,
          initialValue: exports,
          defaultValue: 1,
          stickToMarkers: true,
          onValueChange: X,
          onValueRender: e => "x".concat(e.toFixed(2)),
          onMarkerRender: e => 0 === e ? (0, i.jsx)("span", {
            className: V.ttsSliderMarker,
            children: B.intl.string(B.t["493lwc"])
          }) : 10 === e ? (0, i.jsx)("span", {
            className: V.ttsSliderMarker,
            children: B.intl.string(B.t.ZSZEdX)
          }) : 1 === e ? (0, i.jsx)("span", {
            children: "x1.0"
          }) : e % 1 == 0 ? "" : true,
          "aria-labelledby": K
        })]
      })
    })]
  }) : null
}