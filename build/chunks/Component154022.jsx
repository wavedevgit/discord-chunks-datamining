/** Chunk was on web.js **/
/** chunk id: 154022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk419363 = require("./419363.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk627845 = require("./627845.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk675997 = require("./675997.js"),
  Chunk377171 = require("./377171.js"),
  Chunk313201 = require("./313201.js"),
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
  Chunk947889 = require("./947889.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk611480 = require("./611480.js"),
  Chunk653477 = require("./653477.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693450 = require("./693450.js"),
  Chunk953752 = require("./953752.js"),
  Chunk197571 = require("./197571.js"),
  Chunk328756 = require("./328756.js");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function $(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : J(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = (0, Chunk313201.hQ)(),
  et = (0, Chunk313201.hQ)(),
  en = (0, Chunk313201.hQ)(),
  er = l().debounce(e => {
    (0, p.o2)(e)
  }, 250),
  ei = l().debounce(e => {
    (0, w.Ct)(e)
  }, 250);

function ea(e) {
  let t = m.U.useExperiment({
      location: "useAccessibilityItems"
    }, {
      autoTrackExposure: true
    }).enabled,
    n = b.Z.useConfig({
      location: "UserSettingsAccessibility"
    }).enableShopTakeOver,
    i = I.f.useExperiment({
      location: "UserSettingsAccessibility"
    }).enabled,
    a = (0, G.Z)();
  return (0, r.jsxs)(f.hjN, {
    tag: f.RB0.H1,
    title: Y.intl.string(Y.t.G0neg4),
    children: [(0, r.jsx)("div", {
      className: z.marginBottom20,
      children: (0, r.jsx)(eo, {})
    }), t ? (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, r.jsx)(es, {})
    }) : null, (0, r.jsxs)(P.F, {
      setting: Z.s6.ACCESSIBILITY_SATURATION,
      children: [(0, r.jsx)(el, {}), (0, r.jsx)(f.$i$, {})]
    }), (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_LINK_DECORATIONS,
      children: (0, r.jsx)(ec, {})
    }), n ? (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_CUSTOM_CURSOR,
      children: (0, r.jsx)(eu, {})
    }) : null, (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_ROLE_STYLE,
      children: (0, r.jsx)(ed, {})
    }), i && (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
      children: (0, r.jsx)(ef, {})
    }), (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_PROFILE_COLORS,
      children: (0, r.jsx)(e_, {})
    }), (0, g.b)() ? (0, r.jsxs)(P.F, {
      setting: Z.s6.ACCESSIBILITY_CONTRAST,
      children: [(0, r.jsx)(ep, {}), " "]
    }) : null, (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_REDUCED_MOTION,
      children: (0, r.jsx)(eh, {})
    }), (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_STICKERS,
      children: (0, r.jsx)(em, {})
    }), (0, r.jsx)(P.F, {
      setting: Z.s6.ACCESSIBILITY_MESSAGES,
      children: (0, r.jsx)(eg, {})
    }), (0, r.jsx)(eE, {}), (0, r.jsxs)(P.F, {
      setting: Z.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
      children: [(0, r.jsx)(f.$i$, {
        className: z.marginTop20
      }), (0, r.jsx)(f.Text, {
        className: z.marginTop20,
        variant: "text-md/normal",
        children: Y.intl.format(Y.t.DHpTjY, {
          onAppearanceClick() {
            a(M.n.APPEARANCE_PANEL, {
              section: F.oAB.APPEARANCE
            })
          }
        })
      })]
    })]
  })
}

function eo() {
  let e = Chunk695346.jU.useSetting(),
    [t] = Chunk647438.useState(() => {
      let e = "1337",
        t = (0, Chunk786761.e5)($(Q({}, (0, Chunk3148.ZP)({
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
  return (0, Chunk951288.jsx)(Chunk481060.Rny, {
    children: (0, Chunk951288.jsxs)(Chunk481060.Zbd, {
      className: Chunk953752.preview,
      "aria-hidden": true,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk953752.previewHeader,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["2RHHg4"])
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk953752.previewAvatars,
          children: [Chunk981631.Skl.ONLINE, Chunk981631.Skl.DND, Chunk981631.Skl.IDLE].map(e => (0, r.jsx)(f.Xo$, {
            "aria-label": Y.intl.string(Y.t.lqaIxM),
            src: q,
            size: f.EFr.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk953752.previewMessage,
        children: (0, Chunk951288.jsx)(Chunk753206.Z, {
          compact: module,
          author: $(Q({}, (0, Chunk739566.ZH)(exports)), {
            colorString: "#DD80F4"
          }),
          message: exports
        })
      })]
    })
  })
}

function es() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isHighContrastModeEnabled);

  function t(e) {
    (0, p.vW)(e ? h.X.HIGH : h.X.DEFAULT)
  }
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: exports,
      note: Chunk388032.intl.string(Chunk388032.t["v2qF8/"]),
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        children: [Chunk388032.intl.string(Chunk388032.t.aZlePj), " ", (0, Chunk951288.jsx)(Chunk243778.ZP, {
          contentTypes: [Chunk704215.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE],
          children: e => {
            let {
              visibleContent: t
            } = e;
            return t === u.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? (0, r.jsx)(f.IGR, {
              text: Y.intl.string(Y.t.y2b7CA),
              color: y.Z.BG_BRAND
            }) : null
          }
        })]
      })
    })
  })
}

function el() {
  let {
    saturation: e,
    desaturateUserColors: t
  } = (0, Chunk442837.cj)([Chunk607070.Z], () => ({
    saturation: Chunk607070.Z.saturation,
    desaturateUserColors: Chunk607070.Z.desaturateUserColors
  }));
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    className: Chunk197571.marginTop20,
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      id: ee,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t["5PWWCQ"])
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      id: et,
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom20,
      children: Chunk388032.intl.string(Chunk388032.t["0PbE/P"])
    }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
      "aria-labelledby": ee,
      "aria-describedby": et,
      markers: Chunk981631.yqN.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: module,
      onValueChange: er,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom20),
        value: exports,
        onChange: Chunk857595.f1,
        note: Chunk388032.intl.string(Chunk388032.t.nlAOER),
        children: Chunk388032.intl.string(Chunk388032.t.bQCodH)
      })
    })]
  })
}

function ec() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.alwaysShowLinkDecorations);

  function t() {
    (0, Chunk857595.gs)(!module)
  }
  return (0, Chunk951288.jsx)("div", {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      note: Chunk388032.intl.string(Chunk388032.t["72i5GB"]),
      value: module,
      onChange: exports,
      children: Chunk388032.intl.string(Chunk388032.t.OLZFBw)
    })
  })
}

function eu() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => {
    var e;
    return null == (e = Chunk607070.Z.enableCustomCursor) || module
  });
  return (0, Chunk951288.jsx)("div", {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      note: Chunk388032.intl.string(Chunk388032.t.nNZ1T0),
      value: module,
      onChange: () => (0, Chunk857595.HU)(!module),
      children: Chunk388032.intl.string(Chunk388032.t["+IsihY"])
    })
  })
}

function ed() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle);

  function t(e) {
    (0, p.u1)(e.value)
  }
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t.uSOPWl),
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["86hjzc"])
      }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
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
        onChange: exports,
        value: module
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
      className: Chunk197571.marginTop20
    })]
  })
}

function ef() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();

  function n(e) {
    (0, p.X2)(e), x.default.track(F.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
      enabled: e
    })
  }
  return (0, Chunk951288.jsx)("div", {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: require,
      note: Chunk388032.intl.format(Chunk693450.default.L8U56u, {
        onClickOpenModal() {
          (0, Chunk829716.I)({
            analyticsLocations: exports
          })
        }
      }),
      children: Chunk388032.intl.string(Chunk693450.default["2gFUEx"])
    })
  })
}

function e_() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncProfileThemeWithUserTheme),
    t = Chunk647438.useRef(null);
  (0, Chunk996073.Z)(exports, Chunk526761.rP.SYNC_PROFILE_THEME_WITH_USER_THEME);
  let n = (0, Chunk947889.Z)();
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    ref: exports,
    title: Chunk388032.intl.string(Chunk388032.t.BT8Bmp),
    className: o()(Chunk197571.marginTop20, Chunk953752.syncProfileThemeWithUserTheme),
    children: (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        note: Chunk388032.intl.format(Chunk388032.t.u6UjrK, {
          onThemeClick() {
            require(Chunk313789.n.APPEARANCE_PANEL, {
              section: Chunk981631.oAB.APPEARANCE
            })
          }
        }),
        className: Chunk197571.marginTop20,
        value: module,
        onChange: Chunk857595.Uv,
        children: Chunk388032.intl.string(Chunk388032.t["sSY+mJ"])
      })
    })
  })
}

function ep() {
  let [e] = (0, Chunk442837.Wu)([Chunk607070.Z], () => [Chunk607070.Z.syncForcedColors, Chunk607070.Z.systemForcedColors]), [t, n] = Chunk647438.useState(module);
  Chunk647438.useEffect(() => {
    require(module)
  }, [module]);
  let a = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    null != Chunk120356.current && (clearTimeout(Chunk120356.current), Chunk120356.current = null), exports !== module && (Chunk120356.current = setTimeout(() => (0, Chunk857595.qz)(exports), 150))
  }, [exports, module]);
  let o = Chunk388032.intl.format(Chunk388032.t.GwEVEx, {
    learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FORCED_COLORS)
  });
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t.TYyfOz),
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: o,
        onChange: require,
        children: Chunk388032.intl.string(Chunk388032.t.cguieX)
      })
    })
  })
}

function eh() {
  let e = Chunk695346.QK.useSetting(),
    t = Chunk695346.Yk.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: a,
      systemPrefersReducedMotion: s,
      gifAutoPlayOverrideReason: l,
      animateEmojiOverrideReason: u
    } = (0, Chunk442837.cj)([Chunk607070.Z, Chunk263937.Z], () => ({
      systemPrefersReducedMotion: Chunk607070.Z.systemPrefersReducedMotion,
      rawPrefersReducedMotion: Chunk607070.Z.rawPrefersReducedMotion,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      gifAutoPlayOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("animateEmoji")
    })),
    _ = "auto" === Chunk120356,
    m = Chunk647438.useRef(null);
  (0, Chunk996073.Z)(Chunk299363, Chunk526761.rP.REDUCED_MOTION);
  let g = Chunk647438.useCallback((e, t) => {
      (0, p.Zt)(t ? "auto" : s)
    }, [Chunk392711]),
    E = Chunk647438.useCallback(e => {
      (0, p.Zt)(e ? "reduce" : "no-preference")
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    ref: Chunk299363,
    title: Chunk388032.intl.string(Chunk388032.t.e3TR1d),
    className: o()(Chunk197571.marginTop20, Chunk953752.reducedMotion),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["2l9U2t"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REDUCED_MOTION)
      })
    }), (0, Chunk951288.jsx)(Chunk755721.$q, {
      className: o()(Chunk197571.marginTop20, Chunk197571.marginBottom20),
      value: Chunk419363,
      shape: Chunk755721.zV.BOX,
      type: Chunk755721.M0.INVERTED,
      onChange: Chunk627845,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["+Dx+HB"])
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk906732,
        children: Chunk388032.intl.string(Chunk388032.t.b3XBzs)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom20,
        value: module,
        note: null != l ? (0, Chunk440849.Z)(l) : true,
        onChange: Chunk695346.QK.updateSetting,
        children: Chunk388032.intl.string(Chunk388032.t.Iayoh4)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom20,
        value: exports,
        note: null != Chunk704215 ? (0, Chunk440849.Z)(Chunk704215) : true,
        onChange: Chunk695346.Yk.updateSetting,
        children: Chunk388032.intl.string(Chunk388032.t.iIaOlZ)
      })
    })]
  })
}

function em() {
  let e = Chunk695346.Wp.useSetting(),
    t = (0, Chunk442837.e7)([Chunk263937.Z], () => Chunk263937.Z.getAppliedOverrideReasonKey("animateStickers")),
    n = Chunk647438.useCallback(e => {
      j.Wp.updateSetting(e.value)
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    className: Chunk197571.marginTop20,
    title: Chunk388032.intl.string(Chunk388032.t["6NtAuL"]),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: null != exports ? (0, Chunk440849.Z)(exports) : Chunk388032.intl.string(Chunk388032.t.GRa6U1)
    }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
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

function eg() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.isSubmitButtonEnabled),
    t = Chunk695346.dN.useSetting(),
    n = Chunk647438.useRef(null);
  return (0, Chunk996073.Z)(require, Chunk526761.rP.LEGACY_CHAT_INPUT), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    ref: require,
    className: Chunk197571.marginTop20,
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t.onqU6u)
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginTop20,
        value: module,
        onChange: Chunk857595.eN,
        children: Chunk388032.intl.string(Chunk388032.t["3Fztn5"])
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginTop8,
        value: exports,
        note: Chunk388032.intl.string(Chunk388032.t.Q7wgHR),
        onChange: e => {
          x.default.track(F.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
            enabled: e,
            location: {
              section: F.jXE.SETTINGS_ACCESSIBILITY
            }
          }), j.dN.updateSetting(e)
        },
        children: Chunk388032.intl.string(Chunk388032.t.TZ2hZG)
      })
    })]
  })
}

function eE() {
  let e = Chunk695346.OW.useSetting(),
    t = (0, Chunk442837.e7)([Chunk441729.Z], () => Chunk441729.Z.speechRate),
    [n, a] = Chunk647438.useState(false);
  if (!Chunk419363.Zh) return null;
  let o = () => {
    if (require) {
      (0, Chunk196051.NB)(), Chunk120356(false);
      return
    }
    let e = () => Chunk120356(true),
      t = () => Chunk120356(false);
    (0, Chunk196051.cP)(Chunk388032.intl.string(Chunk388032.t.PKaNJC), true, true, module, exports), Chunk120356(true)
  };
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          className: Chunk197571.marginBottom8,
          children: Chunk388032.intl.string(Chunk388032.t.VpSKeH)
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
          children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
            className: Chunk197571.marginTop20,
            value: module,
            onChange: Chunk695346.OW.updateSetting,
            children: Chunk388032.intl.string(Chunk388032.t.qvTIwc)
          })
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          id: en,
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.string(Chunk388032.t.lsW5Eh)
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk953752.ttsPreviewWrapper,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            icon: require ? Chunk481060.fpf : Chunk481060.o1U,
            text: Chunk388032.intl.string(Chunk388032.t.hymc8v),
            onClick: o,
            "aria-label": "".concat(Chunk388032.intl.string(Chunk388032.t.hymc8v), " ").concat(Chunk388032.intl.string(Chunk388032.t.lsW5Eh))
          })
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          markers: Chunk653477.q,
          initialValue: exports,
          defaultValue: 1,
          stickToMarkers: true,
          onValueChange: ei,
          onValueRender: e => "x".concat(e.toFixed(2)),
          onMarkerRender: e => 0 === e ? (0, r.jsx)("span", {
            className: K.ttsSliderMarker,
            children: Y.intl.string(Y.t["493lwc"])
          }) : 10 === e ? (0, r.jsx)("span", {
            className: K.ttsSliderMarker,
            children: Y.intl.string(Y.t.ZSZEdX)
          }) : 1 === e ? (0, r.jsx)("span", {
            children: "x1.0"
          }) : e % 1 == 0 ? "" : true,
          "aria-labelledby": en
        })]
      })
    })]
  })
}