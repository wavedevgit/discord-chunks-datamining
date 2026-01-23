/** Chunk was on 31748 **/
/** chunk id: 85612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
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

function W(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: i = false,
    showSearchBar: W = true
  } = e, [z, Y] = l.useState(""), {
    analyticsLocations: K,
    newestAnalyticsLocation: Z
  } = (0, p.Ay)(f.A.VOICE_FILTER_POPOUT), q = l.useRef(null), X = (0, d.A)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: q,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.R.VERTICAL_TOP
  });
  (0, F.useSyncMessages)(V.messagesLoader);
  let J = (0, s.bG)([E.default], () => (0, O.ki)(E.default.getCurrentUser())),
    Q = (0, s.bG)([N.A], () => N.A.getCatalogUpdateTime()),
    [$, ee] = l.useState(false),
    [et, en] = l.useState(false),
    {
      activeVoice: er
    } = (0, I.f)(),
    el = (0, C.dz)({
      location: K[0],
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
    eo = (0, c.zhh)({
      to: {
        bottom: "" !== z ? "translateY(75px)" : "translateY(50px)",
        opacity: +("" === z)
      },
      config: {
        tension: 280,
        friction: 24,
        duration: 200
      }
    }),
    es = l.useRef(null);
  (0, u.Ay)(() => {
    (0, j.md)(), el && (0, S.tB)(), v.default.track(k.HAw.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != er ? er : null
    })
  });
  let ec = l.useCallback(() => Y(""), [Y]),
    eu = l.useRef(null),
    ed = (0, _.Us)() !== k.BRT.OVERLAY;
  return (0, r.jsx)(p.f5, {
    value: K,
    children: (0, r.jsxs)("div", {
      ref: q,
      className: a()(G.ZO, {
        [G.U]: n,
        [G.Fd]: !ed
      }),
      style: {
        height: 500
      },
      children: [ed && (0, r.jsx)("div", {
        className: G.Di,
        onMouseDown: X,
        children: (0, r.jsx)("div", {
          className: G.YC
        })
      }), W && (0, r.jsx)(c.IWV, {
        placeholder: F.intl.string(F.t.hHCZJQ),
        autoFocus: true,
        onChange: Y,
        query: z,
        onClear: ec
      }), (0, r.jsx)(D.c, {
        query: z,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = es.current;
          if (null == t || (ee(e > 0), et)) return;
          let {
            height: n,
            totalHeight: r
          } = t.getListDimensions();
          e < r - n || (en(true), v.default.track(k.HAw.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: es
      }), !J && (0, r.jsxs)(o.animated.div, {
        style: H(B({}, eo), {
          display: eo.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: G.Wv,
        children: [null != Q && (0, r.jsx)(o.animated.div, {
          style: ei,
          children: (0, r.jsx)(R.j, {
            catalogUpdateTime: Q,
            isScrolled: $
          })
        }), (0, r.jsx)("div", {
          className: G.Zj,
          children: (0, r.jsx)(o.animated.div, {
            style: {
              y: ea.y,
              opacity: ea.y.to(e => +(50 !== e))
            },
            children: (0, r.jsx)(y.d, {
              showUpsell: true,
              text: F.intl.format(F.t.XMDm8z, {
                nitroTierName: (0, x.Dd)(M.PremiumTypes.TIER_2),
                onClick: () => (0, A.n)()
              }),
              button: F.intl.string(F.t.cRCCJ3),
              buttonAnalyticsObject: {
                section: k.JJy.VOICE_FILTERS_FLOATING_UPSELL
              },
              position: "inline",
              className: G.UX
            })
          })
        })]
      }), (0, r.jsx)(w.H, {}), (0, r.jsx)(T.m, {}), (0, r.jsx)(P.l, {}), (0, r.jsxs)("div", {
        className: a()(G.N$, {
          [G.rd]: null != er
        }),
        children: [(0, r.jsx)(h.U, {
          deviceType: U.oh.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            v.default.track(k.HAw.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = b.A.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), i && (0, r.jsx)(h.U, {
          deviceType: U.oh.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, r.jsx)(c.YNO, {
          targetElementRef: eu,
          position: "top",
          align: "right",
          renderPopout: () => (0, r.jsx)(g.default, {
            renderInputModes: true,
            renderInputVolume: true,
            renderInputDevices: true,
            renderOutputDevices: i,
            renderOutputVolume: i,
            onClose: t,
            onInteraction: (0, m.s)("AudioDeviceMenu", Z, {
              entrypoint: L.GK.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, r.jsx)(c.K0, H(B({
            variant: "secondary"
          }, e), {
            buttonRef: eu,
            icon: c.FHP,
            onClick: t => {
              var n;
              v.default.track(k.HAw.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
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