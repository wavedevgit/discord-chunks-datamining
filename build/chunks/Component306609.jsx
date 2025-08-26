/** Chunk was on web.js **/
/** chunk id: 306609, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => Q
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
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

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let W = 400,
  K = 500,
  z = 600,
  q = 4,
  X = 5;

function Q(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: o = false,
    showSearchBar: F = true
  } = e, [H, Q] = i.useState(""), {
    analyticsLocations: J,
    newestAnalyticsLocation: $
  } = (0, p.ZP)(_.Z.VOICE_FILTER_POPOUT), ee = i.useRef(null), et = (0, d.Z)({
    minDimension: W,
    maxDimension: z,
    resizableDomNodeRef: ee,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: d.y.VERTICAL_TOP
  });
  (0, B.useSyncMessages)(G.messagesLoader);
  let en = (0, l.e7)([O.default], () => (0, I.I5)(O.default.getCurrentUser())),
    er = (0, l.e7)([C.Z], () => C.Z.getCatalogUpdateTime()),
    [ei, eo] = i.useState(false),
    [ea, es] = i.useState(false),
    {
      activeVoice: el
    } = (0, N.o)(),
    ec = (0, A.HM)({
      location: J[0],
      autoTrackExposure: true
    }),
    eu = (0, c.q_F)({
      transform: ei ? "translateY(-8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ed = (0, c.q_F)({
      y: 50 * !ei,
      config: {
        duration: 150,
        mass: 1,
        stiffness: 711.1,
        damping: 40
      }
    }),
    ef = (0, c.q_F)({
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
    e_ = i.useRef(null),
    ep = e => {
      let t = e_.current;
      if (null == t || (eo(e > 0), ea)) return;
      let {
        height: n,
        totalHeight: r
      } = t.getListDimensions();
      e < r - n || (es(true), v.default.track(j.rMx.VOICE_FILTER_PICKER_SCROLLED))
    };
  (0, u.ZP)(() => {
    (0, R.r5)(), ec && (0, S.jG)(), v.default.track(j.rMx.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != el ? el : null
    })
  });
  let eh = i.useCallback(() => Q(""), [Q]),
    em = i.useRef(null),
    eg = (0, f.bp)() !== j.IlC.OVERLAY;
  return (0, r.jsx)(p.Gt, {
    value: J,
    children: (0, r.jsxs)("div", {
      ref: ee,
      className: a()(Z.voiceFiltersPopout, {
        [Z.wide]: n,
        [Z.notResizable]: !eg
      }),
      style: {
        height: K
      },
      children: [eg && (0, r.jsx)("div", {
        className: Z.resizeHandle,
        onMouseDown: et,
        children: (0, r.jsx)("div", {
          className: Z.resizePill
        })
      }), F && (0, r.jsx)(c.E1j, {
        placeholder: B.intl.string(B.t.hHCZJS),
        className: Z.voiceFiltersHeader,
        autoFocus: true,
        onChange: Q,
        query: H,
        onClear: eh
      }), (0, r.jsx)(L.w, {
        query: H,
        columns: n ? X : q,
        handleScroll: ep,
        voiceListRef: e_
      }), !en && (0, r.jsxs)(s.animated.div, {
        style: Y(V({}, ef), {
          display: ef.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: Z.upsellCountdownContainer,
        children: [null != er && (0, r.jsx)(s.animated.div, {
          style: eu,
          children: (0, r.jsx)(x.J, {
            catalogUpdateTime: er,
            isScrolled: ei
          })
        }), (0, r.jsx)("div", {
          className: Z.upsellContainer,
          children: (0, r.jsx)(s.animated.div, {
            style: {
              y: ed.y,
              opacity: ed.y.to(e => +(50 !== e))
            },
            children: (0, r.jsx)(E.p, {
              showUpsell: true,
              text: B.intl.format(B.t["XMDm8/"], {
                nitroTierName: (0, T.Px)(k.p9.TIER_2),
                onClick: () => (0, b.i)()
              }),
              button: B.intl.string(B.t.cRCCJy),
              buttonAnalyticsObject: {
                section: j.jXE.VOICE_FILTERS_FLOATING_UPSELL
              },
              showShadow: false,
              position: "inline",
              className: Z.upsell,
              buttonSize: "sm",
              useLockIcon: true,
              buttonStyles: Z.subscribeButton
            })
          })
        })]
      }), (0, r.jsx)(w.l, {}), (0, r.jsx)(P.R, {}), (0, r.jsx)(D.y, {}), (0, r.jsxs)("div", {
        className: a()(Z.voiceFiltersFooter, {
          [Z.hasActiveVoice]: null != el
        }),
        children: [(0, r.jsx)(g.j, {
          deviceType: U.h7.AUDIO_INPUT,
          location: "VoiceFiltersPopout",
          onOpen: () => {
            var e;
            v.default.track(j.rMx.VOICE_FILTER_MIC_SELECTOR_OPENED, {
              active_voice_filter_id: null != (e = y.Z.getActiveVoiceFilter()) ? e : null
            })
          },
          popoutPosition: "top"
        }), o && (0, r.jsx)(g.j, {
          deviceType: U.h7.AUDIO_OUTPUT,
          location: "VoiceFiltersPopout",
          popoutPosition: "top"
        }), (0, r.jsx)(c.yRy, {
          targetElementRef: em,
          position: "top",
          align: "right",
          renderPopout: () => (0, r.jsx)(h.default, {
            renderInputModes: true,
            renderInputVolume: true,
            renderInputDevices: true,
            renderOutputDevices: o,
            renderOutputVolume: o,
            onClose: t,
            onInteraction: (0, m.u)("AudioDeviceMenu", $, {
              entrypoint: M.A5.THREE_DOT
            }),
            minimal: true
          }),
          children: e => (0, r.jsx)(c.hU, Y(V({
            variant: "secondary"
          }, e), {
            buttonRef: em,
            icon: c.Huf,
            onClick: t => {
              var n;
              v.default.track(j.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                active_voice_filter_id: null != el ? el : null
              }), null == (n = e.onClick) || n.call(e, t)
            },
            "aria-label": B.intl.string(B.t["ClGM/P"])
          }))
        })]
      })]
    })
  })
}