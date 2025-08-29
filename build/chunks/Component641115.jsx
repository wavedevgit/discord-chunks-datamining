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

function P(e) {
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
    return n => (0, r.jsx)(e, T(P({}, n), {
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
      setIsHovering: m
    } = e,
    {
      value: h,
      label: p
    } = i;
  return o ? (t = (0, r.jsx)(u.DY3, {
    tooltipClassName: I.tooltip,
    spacing: 6,
    "aria-label": w.intl.string(w.t.sEAnVF),
    text: (0, r.jsx)(R, {}),
    children: (0, r.jsx)("div", {
      className: I.textContainer,
      onMouseEnter: () => m(true),
      onMouseLeave: () => m(false),
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
  }), n = () => d(h)), {
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
    onFPSChange: x,
    onPresetChange: R,
    targetGuildPremiumTier: k,
    captureDeviceSelected: M
  } = e, D = (0, c.e7)([j.default], () => {
    let e = j.default.getCurrentUser();
    return a()(null != e, "StreamSettings: user cannot be undefined"), e
  }), L = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())), B = b.ZP.canStreamQuality(b.U2.MID, D), {
    location: G
  } = (0, m.O)(), U = (0, h.Zq)({
    autoTrackExposure: false
  }), W = (0, g.B4)(), F = !B && !U, [H, z] = i.useState(false), V = M ? y.z8 : y.WC, J = T(P({}, G), {
    section: O.jXE.STREAM_SETTINGS
  }), Y = (0, r.jsx)(d.hE, {
    buttons: V.map(e => A({
      type: e,
      selected: e.value === l,
      needsPremium: !(0, C.Z)(n, e.value, s, D, k, L),
      needsDemo: W && e.value !== y.LY.RESOLUTION_720,
      analyticsLocation: J,
      onClick: () => o(e.value),
      onClose: t,
      setIsHovering: z
    }))
  }), X = (0, r.jsx)(d.hE, {
    buttons: y.k0.map(e => A({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, C.Z)(n, l, e.value, D, k, L),
      needsDemo: W && e.value === y.ws.FPS_60,
      analyticsLocation: J,
      onClick: () => x(e.value),
      onClose: t,
      setIsHovering: z
    }))
  }), K = [{
    value: y.tI.PRESET_VIDEO,
    label: w.intl.string(w.t.HcwHc3)
  }, ...M ? [] : [{
    value: y.tI.PRESET_DOCUMENTS,
    label: w.intl.string(w.t["/RfohI"])
  }], {
    value: y.tI.PRESET_CUSTOM,
    label: w.intl.string(w.t["+eOtrK"])
  }], q = n === y.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.Z, {
      children: (0, r.jsx)(u.xJW, {
        title: w.intl.string(w.t.rHyPXl),
        titleClassName: Z.formItemTitleSlim,
        className: I.documentModeGroup,
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: w.intl.format(w.t["U+hmam"], {
            fps: s
          })
        })
      })
    }), F ? (0, r.jsx)(S.Z, {
      message: w.intl.string(w.t.deDogI),
      onClose: t,
      openStreamUpsellModal: E
    }) : null, W && (0, r.jsx)(S.c, {})]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(p.Z, {
      children: [(0, r.jsx)(u.xJW, {
        title: w.intl.string(w.t.rHyPXl),
        className: I.settingsGroup,
        titleClassName: Z.formItemTitleSlim,
        children: Y
      }), (0, r.jsx)(u.xJW, {
        title: w.intl.string(w.t.SkkeIi),
        className: I.settingsGroup,
        titleClassName: Z.formItemTitleSlim,
        children: X
      })]
    }), F ? (0, r.jsx)(S.Z, {
      onClose: t,
      openStreamUpsellModal: E,
      glow: H
    }) : null, W && (0, r.jsx)(S.c, {})]
  });
  return (0, r.jsx)(f.Z, T(P({}, J), {
    children: (0, r.jsx)(u.xJW, {
      title: w.intl.string(w.t.ax4FnZ),
      titleClassName: Z.formItemTitle,
      className: Z.modalContent,
      children: (0, r.jsxs)("div", {
        className: I.qualitySettingsContainer,
        children: [(0, r.jsx)(u.q4e, {
          value: n,
          className: N.marginTop8,
          options: K,
          onChange: e => R(e)
        }), q]
      })
    })
  }))
}