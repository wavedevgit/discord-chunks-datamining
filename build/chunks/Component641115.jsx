/** Chunk was on 4093 **/
/** chunk id: 641115, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk542257 = require("./542257.js"),
  Chunk381994 = require("./381994.js"),
  Chunk197571 = require("./197571.js");

function y(e) {
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

function A(e, n) {
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

function k(e) {
  let {
    analyticsLocation: n
  } = e;
  (0, d.ZDy)(async () => {
    let {
      default: e
    } = await t.e("28479").then(t.bind(t, 78865));
    return t => (0, l.jsx)(e, A(y({}, t), {
      analyticsSource: n
    }))
  })
}

function R() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk381994.toolTipTextContainer,
    children: [(0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      color: Chunk436774.JX.PREMIUM_TIER_2,
      className: Chunk381994.premiumIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk381994.upsellText,
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk388032.t.sEAnVF)
    })]
  })
}

function w(e) {
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
    tooltipClassName: E.tooltip,
    spacing: 6,
    "aria-label": T.intl.string(T.t.sEAnVF),
    text: (0, l.jsx)(R, {}),
    children: (0, l.jsx)("div", {
      className: E.textContainer,
      onMouseEnter: () => x(true),
      onMouseLeave: () => x(false),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: s()(E.selectorNitroText, E.enhancedSelectorNitroText),
        children: h
      })
    })
  }), t = () => k({
    analyticsLocation: o,
    onClose: m
  })) : (n = (0, l.jsx)("div", {
    className: E.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: s()(E.selectorText, {
        [E.enhancedSelectorNitroText]: c
      }),
      children: h
    })
  }), t = () => u(g)), {
    content: n,
    className: s()(E.selectorButton, {
      [E.selectorButtonSelected]: i,
      [E.perksDemo]: c,
      [E.premiumUpsell]: a
    }),
    onClick: t
  }
}

function _(e) {
  let {
    onClose: n,
    selectedPreset: t,
    selectedResolution: i,
    selectedFPS: s,
    onResolutionChange: a,
    onFPSChange: j,
    onPresetChange: R,
    targetGuildPremiumTier: _,
    captureDeviceSelected: D
  } = e, M = (0, o.e7)([Z.default], () => {
    let e = Z.default.getCurrentUser();
    return c()(null != e, "StreamSettings: user cannot be undefined"), e
  }), U = (0, o.e7)([f.Z, v.Z], () => v.Z.getChannel(f.Z.getVoiceChannelId())), L = N.ZP.canStreamQuality(N.U2.MID, M), {
    location: z
  } = (0, x.O)(), G = (0, g.Zq)({
    autoTrackExposure: false
  }), W = (0, p.B4)(), V = !L && !G, [B, F] = r.useState(false), H = D ? b.z8 : b.WC, X = A(y({}, z), {
    section: P.jXE.STREAM_SETTINGS
  }), Y = (0, l.jsx)(u.hE, {
    buttons: H.map(e => w({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, S.Z)(t, e.value, s, M, _, U),
      needsDemo: W && e.value !== b.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: X,
      onClick: () => a(e.value),
      onClose: n,
      setIsHovering: F
    }))
  }), q = (0, l.jsx)(u.hE, {
    buttons: b.k0.map(e => w({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, S.Z)(t, i, e.value, M, _, U),
      needsDemo: W && e.value === b.ApplicationStreamFPS.FPS_60,
      analyticsLocation: X,
      onClick: () => j(e.value),
      onClose: n,
      setIsHovering: F
    }))
  }), K = [{
    value: b.ApplicationStreamPresets.PRESET_VIDEO,
    label: T.intl.string(T.t.HcwHc3)
  }, ...D ? [] : [{
    value: b.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: T.intl.string(T.t["/RfohI"])
  }], {
    value: b.ApplicationStreamPresets.PRESET_CUSTOM,
    label: T.intl.string(T.t["+eOtrK"])
  }], J = t === b.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.Z, {
      children: (0, l.jsx)(d.gNt, {
        label: T.intl.string(T.t.rHyPXl),
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: T.intl.format(T.t["U+hmam"], {
            fps: s
          })
        })
      })
    }), V ? (0, l.jsx)(C.Z, {
      message: T.intl.string(T.t.deDogI),
      onClose: n,
      openStreamUpsellModal: k
    }) : null, W && (0, l.jsx)(C.c, {})]
  }) : (0, l.jsxs)(d.Kqy, {
    gap: 16,
    children: [(0, l.jsxs)(d.NIo, {
      children: [(0, l.jsx)(d.gNt, {
        label: T.intl.string(T.t.rHyPXl),
        children: Y
      }), (0, l.jsx)(d.gNt, {
        label: T.intl.string(T.t.SkkeIi),
        children: q
      })]
    }), V ? (0, l.jsx)(C.Z, {
      onClose: n,
      openStreamUpsellModal: k,
      glow: B
    }) : null, W && (0, l.jsx)(C.c, {})]
  });
  return (0, l.jsx)(m.Z, A(y({}, X), {
    children: (0, l.jsx)("div", {
      className: I.modalContent,
      children: (0, l.jsxs)("div", {
        className: E.qualitySettingsContainer,
        children: [(0, l.jsx)(d.q4e, {
          label: T.intl.string(T.t.ax4FnZ),
          value: t,
          className: O.marginTop8,
          options: K,
          onChange: e => R(e)
        }), J]
      })
    })
  }))
}