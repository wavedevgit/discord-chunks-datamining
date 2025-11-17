/** Chunk was on 4093 **/
/** chunk id: 641115, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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

function k(e) {
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

function R(e) {
  let {
    analyticsLocation: n
  } = e;
  (0, m.ZDy)(async () => {
    let {
      default: e
    } = await t.e("28479").then(t.bind(t, 78865));
    return t => (0, l.jsx)(e, A(k({}, t), {
      analyticsSource: n
    }))
  })
}

function D(e) {
  let n, t, {
      type: r,
      selected: i,
      needsPremium: a,
      needsDemo: c,
      analyticsLocation: o,
      onClick: d,
      onClose: x,
      setIsHovering: g
    } = e,
    {
      value: h,
      label: j
    } = r;
  return a ? (n = (0, l.jsx)(u.i_, {
    asContainer: true,
    spacing: 6,
    body: y.intl.string(y.t.sEAnVH),
    asset: (0, l.jsx)(m.SrA, {
      size: "lg",
      color: v.JX.PREMIUM_TIER_2
    }),
    children: (0, l.jsx)("div", {
      className: E.textContainer,
      onMouseEnter: () => g(true),
      onMouseLeave: () => g(false),
      children: (0, l.jsx)(m.Text, {
        variant: "text-xs/bold",
        className: s()(E.selectorNitroText, E.enhancedSelectorNitroText),
        children: j
      })
    })
  }), t = () => R({
    analyticsLocation: o,
    onClose: x
  })) : (n = (0, l.jsx)("div", {
    className: E.textContainer,
    children: (0, l.jsx)(m.Text, {
      variant: "text-xs/normal",
      className: s()(E.selectorText, {
        [E.enhancedSelectorNitroText]: c
      }),
      children: j
    })
  }), t = () => d(h)), {
    content: n,
    className: s()(E.selectorButton, {
      [E.selectorButtonSelected]: i,
      [E.perksDemo]: c,
      [E.premiumUpsell]: a
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
    onFPSChange: u,
    onPresetChange: v,
    targetGuildPremiumTier: U,
    captureDeviceSelected: _
  } = e, w = (0, o.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return c()(null != e, "StreamSettings: user cannot be undefined"), e
  }), M = (0, o.e7)([Z.Z, f.Z], () => f.Z.getChannel(Z.Z.getVoiceChannelId())), L = N.ZP.canStreamQuality(N.U2.MID, w), {
    location: B
  } = (0, g.O)(), G = (0, h.Zq)({
    autoTrackExposure: false
  }), z = (0, p.B4)(), F = !L && !G, [W, V] = r.useState(false), H = _ ? P.z8 : P.WC, X = A(k({}, B), {
    section: T.jXE.STREAM_SETTINGS
  }), Y = (0, l.jsx)(d.hE, {
    buttons: H.map(e => D({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, b.Z)(t, e.value, s, w, U, M),
      needsDemo: z && e.value !== P.ApplicationStreamResolutions.RESOLUTION_720,
      analyticsLocation: X,
      onClick: () => a(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), q = (0, l.jsx)(d.hE, {
    buttons: P.k0.map(e => D({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, b.Z)(t, i, e.value, w, U, M),
      needsDemo: z && e.value === P.ApplicationStreamFPS.FPS_60,
      analyticsLocation: X,
      onClick: () => u(e.value),
      onClose: n,
      setIsHovering: V
    }))
  }), K = [{
    value: P.ApplicationStreamPresets.PRESET_VIDEO,
    label: y.intl.string(y.t.HcwHcx)
  }, ..._ ? [] : [{
    value: P.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: y.intl.string(y.t["/RfohG"])
  }], {
    value: P.ApplicationStreamPresets.PRESET_CUSTOM,
    label: y.intl.string(y.t["+eOtrD"])
  }], J = t === P.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(j.Z, {
      children: (0, l.jsx)(m.gNt, {
        label: y.intl.string(y.t.rHyPXg),
        children: (0, l.jsx)(m.Text, {
          variant: "text-xs/normal",
          children: y.intl.format(y.t["U+hmag"], {
            fps: s
          })
        })
      })
    }), F ? (0, l.jsx)(C.Z, {
      message: y.intl.string(y.t.deDogB),
      onClose: n,
      openStreamUpsellModal: R
    }) : null, z && (0, l.jsx)(C.c, {})]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(m.NIo, {
      children: [(0, l.jsx)(m.gNt, {
        label: y.intl.string(y.t.rHyPXg),
        children: Y
      }), (0, l.jsx)(m.gNt, {
        label: y.intl.string(y.t.SkkeIt),
        children: q
      })]
    }), F ? (0, l.jsx)(C.Z, {
      onClose: n,
      openStreamUpsellModal: R,
      glow: W
    }) : null, z && (0, l.jsx)(C.c, {})]
  });
  return (0, l.jsx)(x.Z, A(k({}, X), {
    children: (0, l.jsx)("div", {
      className: O.modalContent,
      children: (0, l.jsxs)("div", {
        className: E.qualitySettingsContainer,
        children: [(0, l.jsx)(m.q4e, {
          label: y.intl.string(y.t.ax4Fnc),
          value: t,
          className: I.marginTop8,
          options: K,
          onChange: e => v(e)
        }), J]
      })
    })
  }))
}