/** Chunk was on 96750 **/
/** chunk id: 306609, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk347469 = require("./347469.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk659580 = require("./659580.jsx"),
  Chunk795318 = require("./795318.js"),
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
  Chunk696162 = require("./696162.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk640292 = require("./640292.js");

function B(e) {
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

function W(e, t) {
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

function Y(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: l = false,
    showSearchBar: Y = true
  } = e, [H, G] = i.useState(""), {
    analyticsLocations: z,
    newestAnalyticsLocation: J
  } = (0, m.ZP)(f.Z.VOICE_FILTER_POPOUT), X = i.useRef(null), q = (0, d.Z)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: X,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.y.VERTICAL_TOP
  });
  (0, V.useSyncMessages)(R.messagesLoader);
  let K = (0, s.e7)([O.default], () => (0, S.I5)(O.default.getCurrentUser())),
    Q = (0, s.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
    [$, ee] = i.useState(false),
    [et, en] = i.useState(false),
    {
      activeVoice: er
    } = (0, E.o)(),
    ei = (0, P.HM)({
      location: z[0],
      autoTrackExposure: true
    }),
    el = (0, c.q_F)({
      transform: $ ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ea = (0, c.q_F)({
      y: 50 * !$,
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    eo = (0, c.q_F)({
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
    es = i.useRef(null);
  (0, u.ZP)(() => {
    (0, w.r5)(), ei && (0, I.jG)(), j.default.track(k.rMx.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != er ? er : null
    })
  });
  let ec = i.useCallback(() => G(""), [G]),
    eu = i.useRef(null),
    ed = (0, p.bp)() !== k.IlC.OVERLAY;
  return (0, r.jsx)(m.Gt, {
    value: z,
    children: (0, r.jsxs)("div", {
      ref: X,
      className: a()(F.voiceFiltersPopout, {
        [F.wide]: n,
        [F.notResizable]: !ed
      }),
      style: {
        height: 500
      },
      children: [ed && (0, r.jsx)("div", {
        className: F.resizeHandle,
        onMouseDown: q,
        children: (0, r.jsx)("div", {
          className: F.resizePill
        })
      }), Y && (0, r.jsx)(c.E1j, {
        placeholder: V.intl.string(V.t.hHCZJS),
        className: F.voiceFiltersHeader,
        autoFocus: true,
        onChange: G,
        query: H,
        onClear: ec
      }), (0, r.jsx)(D.w, {
        query: H,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = es.current;
          if (null == t || (ee(e > 0), et)) return;
          let {
            height: n,
            totalHeight: r
          } = t.getListDimensions();
          e < r - n || (en(true), j.default.track(k.rMx.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: es
      }), !K && (0, r.jsxs)(o.animated.div, {
        style: W(B({}, eo), {
          display: eo.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: F.upsellCountdownContainer,
        children: [null != Q && (0, r.jsx)(o.animated.div, {
          style: el,
          children: (0, r.jsx)(A.J, {
            catalogUpdateTime: Q,
            isScrolled: $
          })
        }), (0, r.jsx)("div", {
          className: F.upsellContainer,
          children: (0, r.jsx)(o.animated.div, {
            style: {
              y: ea.y,
              opacity: ea.y.to(e => +(50 !== e))
            },
            children: (0, r.jsx)(b.p, {
              showUpsell: true,
              text: V.intl.format(V.t["XMDm8/"], {
                nitroTierName: (0, x.Px)(M.p9.TIER_2),
                onClick: () => (0, h.i)()
              }),
              button: V.intl.string(V.t.cRCCJy),
              buttonAnalyticsObject: {
                section: k.jXE.VOICE_FILTERS_FLOATING_UPSELL
              },
              showShadow: false,
              position: "inline",
              className: F.upsell,
              buttonSize: "sm",
              useLockIcon: true,
              buttonStyles: F.subscribeButton
            })
          })
        })]
      }), (0, r.jsx)(N.l, {}), (0, r.jsx)(T.R, {}), (0, r.jsx)(Z.y, {}), (0, r.jsxs)("div", {
        className: a()(F.voiceFiltersFooter, {
          [F.hasActiveVoice]: null != er
        }),
        children: [(0, r.jsx)(_.j, {
          deviceType: U.h7.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            j.default.track(k.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), l && (0, r.jsx)(_.j, {
          deviceType: U.h7.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, r.jsx)(c.yRy, {
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
            onInteraction: (0, v.u)("AudioDeviceMenu", J, {
              entrypoint: L.A5.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, r.jsx)(c.hU, W(B({
            variant: "secondary"
          }, e), {
            buttonRef: eu,
            icon: c.Huf,
            onClick: t => {
              var n;
              j.default.track(k.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                active_voice_filter_id: null != er ? er : null
              }), null == (n = e.onClick) || n.call(e, t)
            },
            "aria-label": V.intl.string(V.t["ClGM/P"])
          }))
        })]
      })]
    })
  })
}