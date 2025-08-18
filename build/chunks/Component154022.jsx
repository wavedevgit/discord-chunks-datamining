/** Chunk was on 30202 **/
/** chunk id: 154022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
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
  Chunk263937 = require("./263937.js"),
  Chunk996073 = require("./996073.js"),
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

function K(e) {
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

function q(e, t) {
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
let X = (0, Chunk313201.hQ)(),
  J = (0, Chunk313201.hQ)(),
  Q = (0, Chunk313201.hQ)(),
  $ = o().debounce(e => {
    (0, g.o2)(e)
  }, 250),
  ee = o().debounce(e => {
    (0, P.Ct)(e)
  }, 250);

function et(e) {
  let t = f.U.useExperiment({
      location: "useAccessibilityItems"
    }, {
      autoTrackExposure: true
    }).enabled,
    n = _.Z.useConfig({
      location: "UserSettingsAccessibility"
    }).enableShopTakeOver,
    r = O.f.useExperiment({
      location: "UserSettingsAccessibility"
    }).enabled;
  return (0, i.jsxs)(u.hjN, {
    tag: u.RB0.H1,
    title: F.intl.string(F.t.G0neg4),
    children: [(0, i.jsx)("div", {
      className: W.marginBottom20,
      children: (0, i.jsx)(en, {})
    }), t ? (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_HIGH_CONTRAST,
      children: (0, i.jsx)(ei, {})
    }) : null, (0, i.jsxs)(A.F, {
      setting: M.s6.ACCESSIBILITY_SATURATION,
      children: [(0, i.jsx)(er, {}), (0, i.jsx)(u.$i$, {})]
    }), (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_LINK_DECORATIONS,
      children: (0, i.jsx)(es, {})
    }), n ? (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_CUSTOM_CURSOR,
      children: (0, i.jsx)(ea, {})
    }) : null, (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_ROLE_STYLE,
      children: (0, i.jsx)(el, {})
    }), r && (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
      children: (0, i.jsx)(eo, {})
    }), (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_PROFILE_COLORS,
      children: (0, i.jsx)(ec, {})
    }), (0, b.b)() ? (0, i.jsxs)(A.F, {
      setting: M.s6.ACCESSIBILITY_CONTRAST,
      children: [(0, i.jsx)(ed, {}), " "]
    }) : null, (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_REDUCED_MOTION,
      children: (0, i.jsx)(eu, {})
    }), (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_STICKERS,
      children: (0, i.jsx)(em, {})
    }), (0, i.jsx)(A.F, {
      setting: M.s6.ACCESSIBILITY_MESSAGES,
      children: (0, i.jsx)(ep, {})
    }), (0, i.jsx)(eg, {}), (0, i.jsxs)(A.F, {
      setting: M.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
      children: [(0, i.jsx)(u.$i$, {
        className: W.marginTop20
      }), (0, i.jsx)(u.Text, {
        className: W.marginTop20,
        variant: "text-md/normal",
        children: F.intl.format(F.t.DHpTjY, {
          onAppearanceClick() {
            m.Z.open(U.oAB.APPEARANCE)
          }
        })
      })]
    })]
  })
}

function en() {
  let e = Chunk695346.jU.useSetting(),
    [t] = Chunk647438.useState(() => {
      let e = (0, Chunk786761.e5)(q(K({}, (0, Chunk3148.ZP)({
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
          children: [Chunk981631.Skl.ONLINE, Chunk981631.Skl.DND, Chunk981631.Skl.IDLE].map(e => (0, i.jsx)(u.Xo$, {
            "aria-label": F.intl.string(F.t.lqaIxM),
            src: Y,
            size: u.EFr.SIZE_32,
            status: e
          }, e))
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk953752.previewMessage,
        children: (0, Chunk951288.jsx)(Chunk753206.Z, {
          compact: module,
          author: q(K({}, (0, Chunk739566.ZH)(exports)), {
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
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: function(e) {
        (0, g.vW)(e ? h.X.HIGH : h.X.DEFAULT)
      },
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
            return t === d.z.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE ? (0, i.jsx)(u.IGR, {
              text: F.intl.string(F.t.y2b7CA),
              color: j.Z.BG_BRAND
            }) : null
          }
        })]
      })
    })
  })
}

function er() {
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
      id: X,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.string(Chunk388032.t["5PWWCQ"])
    }), (0, Chunk951288.jsx)(Chunk481060.R94, {
      id: J,
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom20,
      children: Chunk388032.intl.string(Chunk388032.t["0PbE/P"])
    }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
      "aria-labelledby": X,
      "aria-describedby": J,
      markers: Chunk981631.yqN.SATURATION_INCREMENTS,
      equidistant: true,
      stickToMarkers: true,
      maxValue: 1,
      minValue: 0,
      initialValue: module,
      onValueChange: $,
      onMarkerRender: e => 100 * e % 2 == 0 ? "".concat(100 * e, "%") : true
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        className: a()(Chunk197571.marginTop20, Chunk197571.marginBottom20),
        value: exports,
        onChange: Chunk857595.f1,
        note: Chunk388032.intl.string(Chunk388032.t.nlAOER),
        children: Chunk388032.intl.string(Chunk388032.t.bQCodH)
      })
    })]
  })
}

function es() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.alwaysShowLinkDecorations);
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      note: Chunk388032.intl.string(Chunk388032.t["72i5GB"]),
      value: module,
      onChange: function() {
        (0, Chunk857595.gs)(!module)
      },
      children: Chunk388032.intl.string(Chunk388032.t.OLZFBw)
    })
  })
}

function ea() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => {
    var e;
    return null == (e = Chunk607070.Z.enableCustomCursor) || module
  });
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      note: Chunk388032.intl.string(Chunk388032.t.nNZ1T0),
      value: module,
      onChange: () => (0, Chunk857595.HU)(!module),
      children: Chunk388032.intl.string(Chunk388032.t["+IsihY"])
    })
  })
}

function el() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.roleStyle);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.xJW, {
      title: Chunk388032.intl.string(Chunk388032.t.uSOPWl),
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
        type: Chunk481060.R94.Types.DESCRIPTION,
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t["86hjzc"])
      }), (0, Chunk951288.jsx)(Chunk481060.FXm, {
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
          (0, g.u1)(e.value)
        },
        value: module
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
      className: Chunk197571.marginTop20
    })]
  })
}

function eo() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.displayNameStylesEnabled),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
      value: module,
      onChange: function(e) {
        (0, g.X2)(e), D.default.track(U.rMx.DISPLAY_NAME_STYLES_ACCESSIBILITY_TOGGLE, {
          enabled: e
        })
      },
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

function ec() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.syncProfileThemeWithUserTheme),
    t = Chunk647438.useRef(null);
  return (0, Chunk996073.Z)(exports, Chunk526761.rP.SYNC_PROFILE_THEME_WITH_USER_THEME), (0, Chunk951288.jsx)(Chunk481060.xJW, {
    ref: exports,
    title: Chunk388032.intl.string(Chunk388032.t.BT8Bmp),
    className: a()(Chunk197571.marginTop20, Chunk953752.syncProfileThemeWithUserTheme),
    children: (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        note: Chunk388032.intl.format(Chunk388032.t.u6UjrK, {
          onThemeClick() {
            Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE)
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

function ed() {
  let [e] = (0, Chunk442837.Wu)([Chunk607070.Z], () => [Chunk607070.Z.syncForcedColors, Chunk607070.Z.systemForcedColors]), [t, n] = Chunk647438.useState(module);
  Chunk647438.useEffect(() => {
    require(module)
  }, [module]);
  let s = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    null != Chunk120356.current && (clearTimeout(Chunk120356.current), Chunk120356.current = null), exports !== module && (Chunk120356.current = setTimeout(() => (0, Chunk857595.qz)(exports), 150))
  }, [exports, module]);
  let a = Chunk388032.intl.format(Chunk388032.t.GwEVEx, {
    learnMoreLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FORCED_COLORS)
  });
  return (0, Chunk951288.jsx)(Chunk481060.xJW, {
    title: Chunk388032.intl.string(Chunk388032.t.TYyfOz),
    className: Chunk197571.marginTop20,
    children: (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: a,
        onChange: require,
        children: Chunk388032.intl.string(Chunk388032.t.cguieX)
      })
    })
  })
}

function eu() {
  let e = Chunk695346.QK.useSetting(),
    t = Chunk695346.Yk.useSetting(),
    {
      useReducedMotion: n,
      rawPrefersReducedMotion: s,
      systemPrefersReducedMotion: l,
      gifAutoPlayOverrideReason: o,
      animateEmojiOverrideReason: d
    } = (0, Chunk442837.cj)([Chunk607070.Z, Chunk263937.Z], () => ({
      systemPrefersReducedMotion: Chunk607070.Z.systemPrefersReducedMotion,
      rawPrefersReducedMotion: Chunk607070.Z.rawPrefersReducedMotion,
      useReducedMotion: Chunk607070.Z.useReducedMotion,
      gifAutoPlayOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("gifAutoPlay"),
      animateEmojiOverrideReason: Chunk263937.Z.getAppliedOverrideReasonKey("animateEmoji")
    })),
    m = Chunk647438.useRef(null);
  (0, Chunk996073.Z)(Chunk230711, Chunk526761.rP.REDUCED_MOTION);
  let p = Chunk647438.useCallback((e, t) => {
      (0, g.Zt)(t ? "auto" : l)
    }, [Chunk392711]),
    f = Chunk647438.useCallback(e => {
      (0, g.Zt)(e ? "reduce" : "no-preference")
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    ref: Chunk230711,
    title: Chunk388032.intl.string(Chunk388032.t.e3TR1d),
    className: a()(Chunk197571.marginTop20, Chunk953752.reducedMotion),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: Chunk388032.intl.format(Chunk388032.t["2l9U2t"], {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REDUCED_MOTION)
      })
    }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
      className: a()(Chunk197571.marginTop20, Chunk197571.marginBottom20),
      value: "auto" === Chunk120356,
      shape: Chunk481060.XZJ.Shapes.BOX,
      type: Chunk481060.XZJ.Types.INVERTED,
      onChange: Chunk419363,
      children: (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        children: Chunk388032.intl.string(Chunk388032.t["+Dx+HB"])
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk299363,
        children: Chunk388032.intl.string(Chunk388032.t.b3XBzs)
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        className: Chunk197571.marginBottom20,
        value: module,
        note: null != o ? (0, Chunk440849.Z)(o) : true,
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
      w.Wp.updateSetting(e.value)
    }, []);
  return (0, Chunk951288.jsxs)(Chunk481060.xJW, {
    className: Chunk197571.marginTop20,
    title: Chunk388032.intl.string(Chunk388032.t["6NtAuL"]),
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk197571.marginBottom8,
      children: null != exports ? (0, Chunk440849.Z)(exports) : Chunk388032.intl.string(Chunk388032.t.GRa6U1)
    }), (0, Chunk951288.jsx)(Chunk481060.FXm, {
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

function ep() {
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
          D.default.track(U.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
            enabled: e,
            location: {
              section: U.jXE.SETTINGS_ACCESSIBILITY
            }
          }), w.dN.updateSetting(e)
        },
        children: Chunk388032.intl.string(Chunk388032.t.TZ2hZG)
      })
    })]
  })
}

function eg() {
  let e = Chunk695346.OW.useSetting(),
    t = (0, Chunk442837.e7)([Chunk441729.Z], () => Chunk441729.Z.speechRate),
    [n, s] = Chunk647438.useState(false);
  return Chunk419363.Zh ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
      children: (0, Chunk951288.jsxs)(Chunk481060.xJW, {
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
      children: (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        className: Chunk197571.marginTop20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          id: Q,
          className: Chunk197571.marginBottom20,
          children: Chunk388032.intl.string(Chunk388032.t.lsW5Eh)
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk953752.ttsPreviewWrapper,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          markers: Chunk653477.q,
          initialValue: exports,
          defaultValue: 1,
          stickToMarkers: true,
          onValueChange: ee,
          onValueRender: e => "x".concat(e.toFixed(2)),
          onMarkerRender: e => 0 === e ? (0, i.jsx)("span", {
            className: z.ttsSliderMarker,
            children: F.intl.string(F.t["493lwc"])
          }) : 10 === e ? (0, i.jsx)("span", {
            className: z.ttsSliderMarker,
            children: F.intl.string(F.t.ZSZEdX)
          }) : 1 === e ? (0, i.jsx)("span", {
            children: "x1.0"
          }) : e % 1 == 0 ? "" : true,
          "aria-labelledby": Q
        })]
      })
    })]
  }) : null
}