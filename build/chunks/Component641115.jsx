/** Chunk was on 4093 **/
/** chunk id: 641115, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => U
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

function I(e) {
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
    return t => (0, l.jsx)(e, k(I({}, t), {
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
      children: Chunk388032.intl.string(Chunk388032.t.sEAnVH)
    })]
  })
}

function D(e) {
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
    tooltipClassName: O.tooltip,
    spacing: 6,
    "aria-label": P.intl.string(P.t.sEAnVH),
    text: (0, l.jsx)(R, {}),
    children: (0, l.jsx)("div", {
      className: O.textContainer,
      onMouseEnter: () => x(true),
      onMouseLeave: () => x(false),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: s()(O.selectorNitroText, O.enhancedSelectorNitroText),
        children: h
      })
    })
  }), t = () => A({
    analyticsLocation: o,
    onClose: m
  })) : (n = (0, l.jsx)("div", {
    className: O.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: s()(O.selectorText, {
        [O.enhancedSelectorNitroText]: c
      }),
      children: h
    })
  }), t = () => u(g)), {
    content: n,
    className: s()(O.selectorButton, {
      [O.selectorButtonSelected]: i,
      [O.perksDemo]: c,
      [O.premiumUpsell]: a
    }),
    onClick: t
  }
}

function U(e) {
  let {
    onClose: n,
    selectedPreset: t,
    selectedResolution: i,
    selectedFPS: s,
    onResolutionChange: a,
    onFPSChange: j,
    onPresetChange: R,
    targetGuildPremiumTier: U,
    captureDeviceSelected: _
  } = e, w = (0, o.e7)([Z.default], () => {
    let e = Z.default.getCurrentUser();
    return c()(null != e, "StreamSettings: user cannot be undefined"), e
  }), M = (0, o.e7)([f.Z, p.Z], () => p.Z.getChannel(f.Z.getVoiceChannelId())), L = N.ZP.canStreamQuality(N.U2.MID, w), {
    location: B
  } = (0, x.O)(), G = (0, g.Zq)({
    autoTrackExposure: false
  }), z = (0, v.B4)(), F = !L && !G, [W, V] = r.useState(false), H = _ ? C.z8 : C.WC, X = k(I({}, B), {
    section: T.jXE.STREAM_SETTINGS
  }), Y = (0, l.jsx)(u.hE, {
    buttons: H.map(e => D({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, S.Z)(t, e.value, s, w, U, M),
      needsDemo: z && e.value !== C.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: X,
      onClick: () => a(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), q = (0, l.jsx)(u.hE, {
    buttons: C.k0.map(e => D({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, S.Z)(t, i, e.value, w, U, M),
      needsDemo: z && e.value === C.ApplicationStreamFPS.FPS_60,
      analyticsLocation: X,
      onClick: () => j(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), K = [{
    value: C.ApplicationStreamPresets.PRESET_VIDEO,
    label: P.intl.string(P.t.HcwHcx)
  }, ..._ ? [] : [{
    value: C.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: P.intl.string(P.t["/RfohG"])
  }], {
    value: C.ApplicationStreamPresets.PRESET_CUSTOM,
    label: P.intl.string(P.t["+eOtrD"])
  }], J = t === C.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
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
    }), F ? (0, l.jsx)(b.Z, {
      message: P.intl.string(P.t.deDogB),
      onClose: n,
      openStreamUpsellModal: A
    }) : null, z && (0, l.jsx)(b.c, {})]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.NIo, {
      children: [(0, l.jsx)(d.gNt, {
        label: P.intl.string(P.t.rHyPXg),
        children: Y
      }), (0, l.jsx)(d.gNt, {
        label: P.intl.string(P.t.SkkeIt),
        children: q
      })]
    }), F ? (0, l.jsx)(b.Z, {
      onClose: n,
      openStreamUpsellModal: A,
      glow: W
    }) : null, z && (0, l.jsx)(b.c, {})]
  });
  return (0, l.jsx)(m.Z, k(I({}, X), {
    children: (0, l.jsx)("div", {
      className: y.modalContent,
      children: (0, l.jsxs)("div", {
        className: O.qualitySettingsContainer,
        children: [(0, l.jsx)(d.q4e, {
          label: P.intl.string(P.t.ax4Fnc),
          value: t,
          className: E.marginTop8,
          options: K,
          onChange: e => R(e)
        }), J]
      })
    })
  }))
}