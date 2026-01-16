/** Chunk was on 13478 **/
/** chunk id: 306609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk347469 = require("./347469.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk659580 = require("./659580.jsx"),
  Chunk795318 = require("./795318.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk670863 = require("./670863.jsx"),
  Chunk53691 = require("./53691.jsx"),
  Chunk457165 = require("./457165.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk111361 = require("./111361.js"),
  Chunk74538 = require("./74538.js"),
  Chunk743498 = require("./743498.js"),
  Chunk967021 = require("./967021.js"),
  Chunk709706 = require("./709706.js"),
  Chunk378441 = require("./378441.js"),
  Chunk358820 = require("./358820.js"),
  Chunk448697 = require("./448697.jsx"),
  Chunk946196 = require("./946196.jsx"),
  Chunk365831 = require("./365831.jsx"),
  Chunk639539 = require("./639539.jsx"),
  Chunk627325 = require("./627325.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk65154 = require("./65154.js"),
  Chunk713314 = require("./713314.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk650749 = require("./650749.js");

function Y(e) {
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

function H(e, t) {
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

function z(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: o = false,
    showSearchBar: z = true
  } = e, [B, q] = i.useState(""), {
    analyticsLocations: W,
    newestAnalyticsLocation: X
  } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT), G = i.useRef(null), K = (0, d.Z)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: G,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.y.VERTICAL_TOP
  });
  (0, F.useSyncMessages)(V.messagesLoader);
  let Q = (0, s.e7)([h.default], () => (0, _.I5)(h.default.getCurrentUser())),
    J = (0, s.e7)([w.Z], () => w.Z.getCatalogUpdateTime()),
    [$, ee] = i.useState(false),
    [et, en] = i.useState(false),
    {
      activeVoice: er
    } = (0, I.o)(),
    ei = (0, E.HM)({
      location: W[0],
      autoTrackExposure: true
    }),
    eo = (0, c.q_F)({
      transform: $ ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    el = (0, c.q_F)({
      y: 50 * !$,
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ea = (0, c.q_F)({
      to: {
        bottom: "" !== B ? "translateY(75px)" : "translateY(50px)",
        opacity: +("" === B)
      },
      config: {
        tension: 280,
        friction: 24,
        duration: 200
      }
    }),
    es = i.useRef(null);
  (0, u.ZP)(() => {
    (0, T.r5)(), ei && (0, C.jG)(), x.default.track(M.rMx.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != er ? er : null
    })
  });
  let ec = i.useCallback(() => q(""), [q]),
    eu = i.useRef(null),
    ed = (0, g.bp)() !== M.IlC.OVERLAY;
  return (0, r.jsx)(m.Gt, {
    value: W,
    children: (0, r.jsxs)("div", {
      ref: G,
      className: l()(U.voiceFiltersPopout, {
        [U.wide]: n,
        [U.notResizable]: !ed
      }),
      style: {
        height: 500
      },
      children: [ed && (0, r.jsx)("div", {
        className: U.resizeHandle,
        onMouseDown: K,
        children: (0, r.jsx)("div", {
          className: U.resizePill
        })
      }), z && (0, r.jsx)(c.E1j, {
        placeholder: F.intl.string(F.t.hHCZJQ),
        autoFocus: true,
        onChange: q,
        query: B,
        onClear: ec
      }), (0, r.jsx)(D.w, {
        query: B,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = es.current;
          if (null == t || (ee(e > 0), et)) return;
          let {
            height: n,
            totalHeight: r
          } = t.getListDimensions();
          e < r - n || (en(true), x.default.track(M.rMx.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: es
      }), !Q && (0, r.jsxs)(a.animated.div, {
        style: H(Y({}, ea), {
          display: ea.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: U.upsellCountdownContainer,
        children: [null != J && (0, r.jsx)(a.animated.div, {
          style: eo,
          children: (0, r.jsx)(k.J, {
            catalogUpdateTime: J,
            isScrolled: $
          })
        }), (0, r.jsx)("div", {
          className: U.upsellContainer,
          children: (0, r.jsx)(a.animated.div, {
            style: {
              y: el.y,
              opacity: el.y.to(e => +(50 !== e))
            },
            children: (0, r.jsx)(y.p, {
              showUpsell: true,
              text: F.intl.format(F.t.XMDm8z, {
                nitroTierName: (0, P.Px)(R.PremiumTypes.TIER_2),
                onClick: () => (0, O.i)()
              }),
              button: F.intl.string(F.t.cRCCJ3),
              buttonAnalyticsObject: {
                section: M.jXE.VOICE_FILTERS_FLOATING_UPSELL
              },
              position: "inline",
              className: U.upsell
            })
          })
        })]
      }), (0, r.jsx)(N.l, {}), (0, r.jsx)(S.R, {}), (0, r.jsx)(Z.y, {}), (0, r.jsxs)("div", {
        className: l()(U.voiceFiltersFooter, {
          [U.hasActiveVoice]: null != er
        }),
        children: [(0, r.jsx)(v.j, {
          deviceType: L.h7.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            x.default.track(M.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = j.Z.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), o && (0, r.jsx)(v.j, {
          deviceType: L.h7.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, r.jsx)(c.yRy, {
          targetElementRef: eu,
          position: "top",
          align: "right",
          renderPopout: () => (0, r.jsx)(f.default, {
            renderInputModes: true,
            renderInputVolume: true,
            renderInputDevices: true,
            renderOutputDevices: o,
            renderOutputVolume: o,
            onClose: t,
            onInteraction: (0, b.u)("AudioDeviceMenu", X, {
              entrypoint: A.A5.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, r.jsx)(c.hU, H(Y({
            variant: "secondary"
          }, e), {
            buttonRef: eu,
            icon: c.Huf,
            onClick: t => {
              var n;
              x.default.track(M.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                active_voice_filter_id: null != er ? er : null
              }), null == (n = e.onClick) || n.call(e, t)
            },
            "aria-label": F.intl.string(F.t["ClGM/G"])
          }))
        })]
      })]
    })
  })
}