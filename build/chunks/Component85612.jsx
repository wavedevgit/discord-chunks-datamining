/** Chunk was on 61344 **/
/** chunk id: 85612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => K
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk761929 = require("./761929.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk385318 = require("./385318.jsx"),
  Chunk480890 = require("./480890.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk625841 = require("./625841.jsx"),
  Chunk202639 = require("./202639.jsx"),
  Chunk336060 = require("./336060.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk927578 = require("./927578.js"),
  Chunk504292 = require("./504292.js"),
  Chunk253541 = require("./253541.js"),
  Chunk971778 = require("./971778.js"),
  Chunk494783 = require("./494783.js"),
  Chunk342887 = require("./342887.js"),
  Chunk606451 = require("./606451.jsx"),
  Chunk177392 = require("./177392.jsx"),
  Chunk185494 = require("./185494.jsx"),
  Chunk15910 = require("./15910.jsx"),
  Chunk599813 = require("./599813.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk788868 = require("./788868.js"),
  Chunk731854 = require("./731854.js"),
  Chunk734317 = require("./734317.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk632998 = require("./632998.js");

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: i = false,
    showSearchBar: K = true
  } = e, [W, z] = r.useState(""), {
    analyticsLocations: Y,
    newestAnalyticsLocation: q
  } = (0, p.Ay)(h.A.VOICE_FILTER_POPOUT), J = r.useRef(null), Z = (0, d.A)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: J,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.R.VERTICAL_TOP
  });
  (0, F.useSyncMessages)(G.messagesLoader);
  let X = (0, o.bG)([v.default], () => (0, O.ki)(v.default.getCurrentUser())),
    Q = (0, o.bG)([j.A], () => j.A.getCatalogUpdateTime()),
    [$, ee] = r.useState(false),
    [et, en] = r.useState(false),
    {
      activeVoice: el
    } = (0, I.f)(),
    er = (0, x.dz)({
      location: Y[0],
      autoTrackExposure: true
    }),
    ei = (0, c.zhh)({
      transform: $ ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ea = (0, c.zhh)({
      y: 50 * !$,
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    es = (0, c.zhh)({
      to: {
        bottom: "" !== W ? "translateY(75px)" : "translateY(50px)",
        opacity: +("" === W)
      },
      config: {
        tension: 280,
        friction: 24,
        duration: 200
      }
    }),
    eo = r.useRef(null);
  (0, u.Ay)(() => {
    (0, T.md)(), er && (0, S.tB)(), E.default.track(M.HAw.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != el ? el : null
    })
  });
  let ec = r.useCallback(() => z(""), [z]),
    eu = r.useRef(null),
    ed = (0, g.Us)() !== M.BRT.OVERLAY;
  return (0, l.jsx)(p.f5, {
    value: Y,
    children: (0, l.jsxs)("div", {
      ref: J,
      className: a()(H.ZO, {
        [H.U]: n,
        [H.Fd]: !ed
      }),
      style: {
        height: 500
      },
      children: [ed && (0, l.jsx)("div", {
        className: H.Di,
        onMouseDown: Z,
        children: (0, l.jsx)("div", {
          className: H.YC
        })
      }), K && (0, l.jsx)(c.IWV, {
        placeholder: F.intl.string(F.t.hHCZJQ),
        autoFocus: true,
        onChange: z,
        query: W,
        onClear: ec
      }), (0, l.jsx)(D.c, {
        query: W,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = eo.current;
          if (null == t || (ee(e > 0), et)) return;
          let {
            height: n,
            totalHeight: l
          } = t.getListDimensions();
          e < l - n || (en(true), E.default.track(M.HAw.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: eo
      }), !X && (0, l.jsxs)(s.animated.div, {
        style: V(B({}, es), {
          display: es.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: H.Wv,
        children: [null != Q && (0, l.jsx)(s.animated.div, {
          style: ei,
          children: (0, l.jsx)(R.j, {
            catalogUpdateTime: Q,
            isScrolled: $
          })
        }), (0, l.jsx)("div", {
          className: H.Zj,
          children: (0, l.jsx)(s.animated.div, {
            style: {
              y: ea.y,
              opacity: ea.y.to(e => +(50 !== e))
            },
            children: (0, l.jsx)(b.d, {
              showUpsell: true,
              text: F.intl.format(F.t.XMDm8z, {
                nitroTierName: (0, C.Dd)(L.PremiumTypes.TIER_2),
                onClick: () => (0, _.n)()
              }),
              button: F.intl.string(F.t.cRCCJ3),
              buttonAnalyticsObject: {
                section: M.JJy.VOICE_FILTERS_FLOATING_UPSELL
              },
              position: "inline",
              className: H.UX
            })
          })
        })]
      }), (0, l.jsx)(P.H, {}), (0, l.jsx)(N.m, {}), (0, l.jsx)(w.l, {}), (0, l.jsxs)("div", {
        className: a()(H.N$, {
          [H.rd]: null != el
        }),
        children: [(0, l.jsx)(A.U, {
          deviceType: U.oh.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            E.default.track(M.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = y.A.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), i && (0, l.jsx)(A.U, {
          deviceType: U.oh.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, l.jsx)(c.YNO, {
          targetElementRef: eu,
          position: "top",
          align: "right",
          renderPopout: () => (0, l.jsx)(f.default, {
            renderInputModes: true,
            renderInputVolume: true,
            renderInputDevices: true,
            renderOutputDevices: i,
            renderOutputVolume: i,
            onClose: t,
            onInteraction: (0, m.s)("AudioDeviceMenu", q, {
              entrypoint: k.GK.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, l.jsx)(c.K0, V(B({
            variant: "secondary"
          }, e), {
            buttonRef: eu,
            icon: c.FHP,
            onClick: t => {
              var n;
              E.default.track(M.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                active_voice_filter_id: null != el ? el : null
              }), null == (n = e.onClick) || n.call(e, t)
            },
            "aria-label": F.intl.string(F.t["ClGM/G"])
          }))
        })]
      })]
    })
  })
}