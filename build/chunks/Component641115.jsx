/** Chunk was on 4093 **/
/** chunk id: 641115, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk924557 = require("./924557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk140465 = require("./140465.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk451467 = require("./451467.js"),
  Chunk122186 = require("./122186.jsx"),
  Chunk37113 = require("./37113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk79985 = require("./79985.js"),
  Chunk763021 = require("./763021.js"),
  Chunk10198 = require("./10198.js");

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function k(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function A(e) {
  let {
    analyticsLocation: n
  } = e;
  (0, d.ZDy)(async () => {
    let {
      default: e
    } = await t.e("28479").then(t.bind(t, 78865));
    return t => (0, l.jsx)(e, k(E({}, t), {
      analyticsSource: n
    }))
  })
}

function R() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk763021.toolTipTextContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      color: Chunk436774.JX.PREMIUM_TIER_2,
      className: Chunk763021.premiumIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk763021.upsellText,
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk388032.t.sEAnVH)
    })]
  })
}

function M(e) {
  let n, t, {
      type: r,
      selected: i,
      needsPremium: a,
      needsDemo: c,
      analyticsLocation: o,
      onClick: u,
      onClose: m,
      setIsHovering: x
    } = e,
    {
      value: g,
      label: h
    } = r;
  return a ? (n = (0, l.jsx)(d.jSM, {
    tooltipClassName: I.tooltip,
    spacing: 6,
    "aria-label": P.intl.string(P.t.sEAnVH),
    text: (0, l.jsx)(R, {}),
    children: (0, l.jsx)("div", {
      className: I.textContainer,
      onMouseEnter: () => x(true),
      onMouseLeave: () => x(false),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: s()(I.selectorNitroText, I.enhancedSelectorNitroText),
        children: h
      })
    })
  }), t = () => A({
    analyticsLocation: o,
    onClose: m
  })) : (n = (0, l.jsx)("div", {
    className: I.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: s()(I.selectorText, {
        [I.enhancedSelectorNitroText]: c
      }),
      children: h
    })
  }), t = () => u(g)), {
    content: n,
    className: s()(I.selectorButton, {
      [I.selectorButtonSelected]: i,
      [I.perksDemo]: c,
      [I.premiumUpsell]: a
    }),
    onClick: t
  }
}

function D(e) {
  let {
    onClose: n,
    selectedPreset: t,
    selectedResolution: i,
    selectedFPS: s,
    onResolutionChange: a,
    onFPSChange: j,
    onPresetChange: R,
    targetGuildPremiumTier: D,
    captureDeviceSelected: U
  } = e, _ = (0, o.e7)([Z.default], () => {
    let e = Z.default.getCurrentUser();
    return c()(null != e, "StreamSettings: user cannot be undefined"), e
  }), w = (0, o.e7)([f.Z, v.Z], () => v.Z.getChannel(f.Z.getVoiceChannelId())), z = S.ZP.canStreamQuality(S.U2.MID, _), {
    location: L
  } = (0, x.O)(), G = (0, g.Zq)({
    autoTrackExposure: false
  }), B = (0, p.B4)(), W = !z && !G, [F, V] = r.useState(false), H = U ? b.z8 : b.WC, Y = k(E({}, L), {
    section: T.jXE.STREAM_SETTINGS
  }), X = (0, l.jsx)(u.hE, {
    buttons: H.map(e => M({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, N.Z)(t, e.value, s, _, D, w),
      needsDemo: B && e.value !== b.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: Y,
      onClick: () => a(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), q = (0, l.jsx)(u.hE, {
    buttons: b.k0.map(e => M({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, N.Z)(t, i, e.value, _, D, w),
      needsDemo: B && e.value === b.ApplicationStreamFPS.FPS_60,
      analyticsLocation: Y,
      onClick: () => j(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), K = [{
    value: b.ApplicationStreamPresets.PRESET_VIDEO,
    label: P.intl.string(P.t.HcwHcx)
  }, ...U ? [] : [{
    value: b.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: P.intl.string(P.t["/RfohG"])
  }], {
    value: b.ApplicationStreamPresets.PRESET_CUSTOM,
    label: P.intl.string(P.t["+eOtrD"])
  }], J = t === b.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.Z, {
      children: (0, l.jsx)(d.gNt, {
        label: P.intl.string(P.t.rHyPXg),
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: P.intl.format(P.t["U+hmag"], {
            fps: s
          })
        })
      })
    }), W ? (0, l.jsx)(C.Z, {
      message: P.intl.string(P.t.deDogB),
      onClose: n,
      openStreamUpsellModal: A
    }) : null, B && (0, l.jsx)(C.c, {})]
  }) : (0, l.jsxs)(d.Kqy, {
    gap: 16,
    children: [(0, l.jsxs)(d.NIo, {
      children: [(0, l.jsx)(d.gNt, {
        label: P.intl.string(P.t.rHyPXg),
        children: X
      }), (0, l.jsx)(d.gNt, {
        label: P.intl.string(P.t.SkkeIt),
        children: q
      })]
    }), W ? (0, l.jsx)(C.Z, {
      onClose: n,
      openStreamUpsellModal: A,
      glow: F
    }) : null, B && (0, l.jsx)(C.c, {})]
  });
  return (0, l.jsx)(m.Z, k(E({}, Y), {
    children: (0, l.jsx)("div", {
      className: y.modalContent,
      children: (0, l.jsxs)("div", {
        className: I.qualitySettingsContainer,
        children: [(0, l.jsx)(d.q4e, {
          label: P.intl.string(P.t.ax4Fnc),
          value: t,
          className: O.marginTop8,
          options: K,
          onChange: e => R(e)
        }), J]
      })
    })
  }))
}