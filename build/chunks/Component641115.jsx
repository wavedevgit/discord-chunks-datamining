/** Chunk was on 46746 **/
/** chunk id: 641115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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

function N(e) {
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

function T(e, t) {
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

function E(e) {
  let {
    analyticsLocation: t
  } = e;
  (0, u.ZDy)(async () => {
    let {
      default: e
    } = await n.e("28479").then(n.bind(n, 78865));
    return n => (0, r.jsx)(e, T(N({}, n), {
      analyticsSource: t
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

function A(e) {
  let t, n, {
      type: i,
      selected: l,
      needsPremium: o,
      needsDemo: a,
      analyticsLocation: c,
      onClick: d,
      onClose: f,
      setIsHovering: h
    } = e,
    {
      value: m,
      label: p
    } = i;
  return o ? (t = (0, r.jsx)(u.DY3, {
    tooltipClassName: I.tooltip,
    spacing: 6,
    "aria-label": w.intl.string(w.t.sEAnVF),
    text: (0, r.jsx)(R, {}),
    children: (0, r.jsx)("div", {
      className: I.textContainer,
      onMouseEnter: () => h(true),
      onMouseLeave: () => h(false),
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/bold",
        className: s()(I.selectorNitroText, I.enhancedSelectorNitroText),
        children: p
      })
    })
  }), n = () => E({
    analyticsLocation: c,
    onClose: f
  })) : (t = (0, r.jsx)("div", {
    className: I.textContainer,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: s()(I.selectorText, {
        [I.enhancedSelectorNitroText]: a
      }),
      children: p
    })
  }), n = () => d(m)), {
    content: t,
    className: s()(I.selectorButton, {
      [I.selectorButtonSelected]: l,
      [I.perksDemo]: a,
      [I.premiumUpsell]: o
    }),
    onClick: n
  }
}

function k(e) {
  let {
    onClose: t,
    selectedPreset: n,
    selectedResolution: l,
    selectedFPS: s,
    onResolutionChange: o,
    onFPSChange: g,
    onPresetChange: R,
    targetGuildPremiumTier: k,
    captureDeviceSelected: M
  } = e, D = (0, c.e7)([j.default], () => {
    let e = j.default.getCurrentUser();
    return a()(null != e, "StreamSettings: user cannot be undefined"), e
  }), L = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())), B = b.ZP.canStreamQuality(b.U2.MID, D), {
    location: U
  } = (0, h.O)(), G = (0, m.Zq)({
    autoTrackExposure: false
  }), W = (0, x.B4)(), z = !B && !G, [F, H] = i.useState(false), V = M ? C.z8 : C.WC, Y = T(N({}, U), {
    section: O.jXE.STREAM_SETTINGS
  }), X = (0, r.jsx)(d.hE, {
    buttons: V.map(e => A({
      type: e,
      selected: e.value === l,
      needsPremium: !(0, S.Z)(n, e.value, s, D, k, L),
      needsDemo: W && e.value !== C.LY.RESOLUTION_720,
      analyticsLocation: Y,
      onClick: () => o(e.value),
      onClose: t,
      setIsHovering: H
    }))
  }), J = (0, r.jsx)(d.hE, {
    buttons: C.k0.map(e => A({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, S.Z)(n, l, e.value, D, k, L),
      needsDemo: W && e.value === C.ws.FPS_60,
      analyticsLocation: Y,
      onClick: () => g(e.value),
      onClose: t,
      setIsHovering: H
    }))
  }), K = [{
    value: C.tI.PRESET_VIDEO,
    label: w.intl.string(w.t.HcwHc3)
  }, ...M ? [] : [{
    value: C.tI.PRESET_DOCUMENTS,
    label: w.intl.string(w.t["/RfohI"])
  }], {
    value: C.tI.PRESET_CUSTOM,
    label: w.intl.string(w.t["+eOtrK"])
  }], q = n === C.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.Z, {
      children: (0, r.jsx)(u.gNt, {
        label: w.intl.string(w.t.rHyPXl),
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: w.intl.format(w.t["U+hmam"], {
            fps: s
          })
        })
      })
    }), z ? (0, r.jsx)(y.Z, {
      message: w.intl.string(w.t.deDogI),
      onClose: t,
      openStreamUpsellModal: E
    }) : null, W && (0, r.jsx)(y.c, {})]
  }) : (0, r.jsxs)(u.Kqy, {
    gap: 16,
    children: [(0, r.jsxs)(u.NIo, {
      children: [(0, r.jsx)(u.gNt, {
        label: w.intl.string(w.t.rHyPXl),
        children: X
      }), (0, r.jsx)(u.gNt, {
        label: w.intl.string(w.t.SkkeIi),
        children: J
      })]
    }), z ? (0, r.jsx)(y.Z, {
      onClose: t,
      openStreamUpsellModal: E,
      glow: F
    }) : null, W && (0, r.jsx)(y.c, {})]
  });
  return (0, r.jsx)(f.Z, T(N({}, Y), {
    children: (0, r.jsx)("div", {
      className: Z.modalContent,
      children: (0, r.jsxs)("div", {
        className: I.qualitySettingsContainer,
        children: [(0, r.jsx)(u.q4e, {
          label: w.intl.string(w.t.ax4FnZ),
          value: n,
          className: P.marginTop8,
          options: K,
          onChange: e => R(e)
        }), q]
      })
    })
  }))
}