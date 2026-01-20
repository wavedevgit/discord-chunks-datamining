/** Chunk was on 11010 **/
/** chunk id: 306609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function W(e) {
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

function B(e, t) {
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
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: l = false,
    showSearchBar: G = true
  } = e, [H, z] = i.useState(""), {
    analyticsLocations: Y,
    newestAnalyticsLocation: K
  } = (0, p.ZP)(f.Z.VOICE_FILTER_POPOUT), q = i.useRef(null), Q = (0, d.Z)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: q,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.y.VERTICAL_TOP
  });
  (0, F.useSyncMessages)(U.messagesLoader);
  let X = (0, c.e7)([_.default], () => (0, C.I5)(_.default.getCurrentUser())),
    J = (0, c.e7)([N.Z], () => N.Z.getCatalogUpdateTime()),
    [$, ee] = i.useState(false),
    [et, en] = i.useState(false),
    {
      activeVoice: er
    } = (0, T.o)(),
    ei = (0, I.HM)({
      location: Y[0],
      autoTrackExposure: true
    }),
    el = (0, s.q_F)({
      transform: $ ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ea = (0, s.q_F)({
      y: 50 * !$,
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    eo = (0, s.q_F)({
      to: {
        bottom: "" !== H ? "translateY(75px)" : "translateY(50px)",
        opacity: +("" === H)
      },
      config: {
        tension: 280,
        friction: 24,
        duration: 200
      }
    }),
    ec = i.useRef(null);
  (0, u.ZP)(() => {
    (0, j.r5)(), ei && (0, x.jG)(), O.default.track(D.rMx.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != er ? er : null
    })
  });
  let es = i.useCallback(() => z(""), [z]),
    eu = i.useRef(null),
    ed = (0, b.bp)() !== D.IlC.OVERLAY;
  return (0, r.jsx)(p.Gt, {
    value: Y,
    children: (0, r.jsxs)("div", {
      ref: q,
      className: a()(V.voiceFiltersPopout, {
        [V.wide]: n,
        [V.notResizable]: !ed
      }),
      style: {
        height: 500
      },
      children: [ed && (0, r.jsx)("div", {
        className: V.resizeHandle,
        onMouseDown: Q,
        children: (0, r.jsx)("div", {
          className: V.resizePill
        })
      }), G && (0, r.jsx)(s.E1j, {
        placeholder: F.intl.string(F.t.hHCZJQ),
        autoFocus: true,
        onChange: z,
        query: H,
        onClear: es
      }), (0, r.jsx)(R.w, {
        query: H,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = ec.current;
          if (null == t || (ee(e > 0), et)) return;
          let {
            height: n,
            totalHeight: r
          } = t.getListDimensions();
          e < r - n || (en(true), O.default.track(D.rMx.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: ec
      }), !X && (0, r.jsxs)(o.animated.div, {
        style: B(W({}, eo), {
          display: eo.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: V.upsellCountdownContainer,
        children: [null != J && (0, r.jsx)(o.animated.div, {
          style: el,
          children: (0, r.jsx)(A.J, {
            catalogUpdateTime: J,
            isScrolled: $
          })
        }), (0, r.jsx)("div", {
          className: V.upsellContainer,
          children: (0, r.jsx)(o.animated.div, {
            style: {
              y: ea.y,
              opacity: ea.y.to(e => +(50 !== e))
            },
            children: (0, r.jsx)(v.p, {
              showUpsell: true,
              text: F.intl.format(F.t.XMDm8z, {
                nitroTierName: (0, S.Px)(k.PremiumTypes.TIER_2),
                onClick: () => (0, E.i)()
              }),
              button: F.intl.string(F.t.cRCCJ3),
              buttonAnalyticsObject: {
                section: D.jXE.VOICE_FILTERS_FLOATING_UPSELL
              },
              position: "inline",
              className: V.upsell
            })
          })
        })]
      }), (0, r.jsx)(w.l, {}), (0, r.jsx)(P.R, {}), (0, r.jsx)(Z.y, {}), (0, r.jsxs)("div", {
        className: a()(V.voiceFiltersFooter, {
          [V.hasActiveVoice]: null != er
        }),
        children: [(0, r.jsx)(h.j, {
          deviceType: L.h7.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            O.default.track(D.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), l && (0, r.jsx)(h.j, {
          deviceType: L.h7.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, r.jsx)(s.yRy, {
          targetElementRef: eu,
          position: "top",
          align: "right",
          renderPopout: () => (0, r.jsx)(g.default, {
            renderInputModes: true,
            renderInputVolume: true,
            renderInputDevices: true,
            renderOutputDevices: l,
            renderOutputVolume: l,
            onClose: t,
            onInteraction: (0, m.u)("AudioDeviceMenu", K, {
              entrypoint: M.A5.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, r.jsx)(s.hU, B(W({
            variant: "secondary"
          }, e), {
            buttonRef: eu,
            icon: s.Huf,
            onClick: t => {
              var n;
              O.default.track(D.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
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