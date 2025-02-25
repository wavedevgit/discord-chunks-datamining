/** Chunk was on 79477 **/
n.d(t, {
  Z: () => A
}), n(47120);
var l = n(200651),
  r = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(512722),
  o = n.n(a),
  c = n(442837),
  u = n(481060),
  d = n(410575),
  m = n(2052),
  g = n(924557),
  h = n(600164),
  x = n(436774),
  p = n(140465),
  v = n(774026),
  f = n(592125),
  j = n(944486),
  S = n(594174),
  N = n(74538),
  Z = n(451467),
  b = n(122186),
  O = n(37113),
  C = n(981631),
  E = n(388032),
  P = n(382840),
  y = n(958472),
  T = n(455812);

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function _(e, t) {
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

function R(e) {
  let {
    analyticsLocation: t,
    onClose: r
  } = e;
  (0, u.ZDy)(async () => {
    let {
      default: e
    } = await n.e("28479").then(n.bind(n, 78865));
    return n => (0, l.jsx)(e, _(I({}, n), {
      onCloseParent: r,
      analyticsSource: t
    }))
  })
}

function w() {
  return (0, l.jsxs)("div", {
    className: y.toolTipTextContainer,
    children: [(0, l.jsx)(u.SrA, {
      size: "md",
      color: x.JX.PREMIUM_TIER_2,
      className: i()(y.premiumIcon)
    }), (0, l.jsx)(u.Text, {
      className: y.upsellText,
      variant: "text-sm/medium",
      children: E.NW.string(E.t.sEAnVF)
    })]
  })
}

function W(e) {
  let t, n, {
      type: r,
      selected: s,
      needsPremium: a,
      needsDemo: o,
      analyticsLocation: c,
      onClick: d,
      onClose: m,
      setIsHovering: g
    } = e,
    {
      value: h,
      label: x
    } = r;
  return a ? (t = (0, l.jsx)(u.DY3, {
    tooltipClassName: y.tooltip,
    spacing: 6,
    "aria-label": E.NW.string(E.t.sEAnVF),
    text: (0, l.jsx)(w, {}),
    children: (0, l.jsx)("div", {
      className: y.textContainer,
      onMouseEnter: () => g(!0),
      onMouseLeave: () => g(!1),
      children: (0, l.jsx)(u.Text, {
        variant: "text-xs/bold",
        className: i()(y.selectorNitroText, y.enhancedSelectorNitroText),
        children: x
      })
    })
  }), n = () => R({
    analyticsLocation: c,
    onClose: m
  })) : (t = (0, l.jsx)("div", {
    className: y.textContainer,
    children: (0, l.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: i()(y.selectorText, {
        [y.enhancedSelectorNitroText]: o
      }),
      children: x
    })
  }), n = () => d(h)), {
    content: t,
    className: i()(y.selectorButton, {
      [y.selectorButtonSelected]: s,
      [y.perksDemo]: o,
      [y.premiumUpsell]: a
    }),
    onClick: n
  }
}

function A(e) {
  let {
    onClose: t,
    selectedPreset: n,
    selectedResolution: s,
    selectedFPS: i,
    onResolutionChange: a,
    onFPSChange: x,
    onPresetChange: w,
    targetGuildPremiumTier: A,
    captureDeviceSelected: k
  } = e, L = (0, c.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return o()(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = (0, c.e7)([j.Z, f.Z], () => f.Z.getChannel(j.Z.getVoiceChannelId())), M = N.ZP.canStreamQuality(N.U2.MID, L), {
    location: z
  } = (0, m.O)(), U = (0, g.Zq)({
    autoTrackExposure: !1
  }), G = (0, p.B4)({
    location: "StreamSettings"
  }), F = S.default.getUser(null == D ? void 0 : D.hdStreamingBuyerId), Y = null != D && null != D.hdStreamingUntil && new Date(D.hdStreamingUntil) > new Date && null != F, V = !M && !U, [B, X] = r.useState(!1), J = k ? O.z8 : O.WC, H = _(I({}, z), {
    section: C.jXE.STREAM_SETTINGS
  }), K = (0, l.jsx)(u.hE2, {
    buttons: J.map(e => W({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, Z.Z)(n, e.value, i, L, A, D),
      needsDemo: G && e.value !== O.LY.RESOLUTION_720,
      analyticsLocation: H,
      onClick: () => a(e.value),
      onClose: t,
      setIsHovering: X
    }))
  }), q = (0, l.jsx)(u.hE2, {
    buttons: O.k0.map(e => W({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, Z.Z)(n, s, e.value, L, A, D),
      needsDemo: G && e.value === O.ws.FPS_60,
      analyticsLocation: H,
      onClick: () => x(e.value),
      onClose: t,
      setIsHovering: X
    }))
  }), Q = [{
    value: O.tI.PRESET_VIDEO,
    label: E.NW.string(E.t.HcwHc3)
  }, ...k ? [] : [{
    value: O.tI.PRESET_DOCUMENTS,
    label: E.NW.string(E.t["/RfohI"])
  }], {
    value: O.tI.PRESET_CUSTOM,
    label: E.NW.string(E.t["+eOtrK"])
  }], $ = n === O.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.Z, {
      children: (0, l.jsx)(u.xJW, {
        title: E.NW.string(E.t.rHyPXl),
        titleClassName: P.formItemTitleSlim,
        className: y.documentModeGroup,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: E.NW.format(E.t["U+hmam"], {
            fps: i
          })
        })
      })
    }), V ? (0, l.jsx)(b.Z, {
      message: E.NW.string(E.t.deDogI),
      onClose: t,
      openStreamUpsellModal: R
    }) : null, G && (0, l.jsx)(b.c, {}), Y && null != D.hdStreamingUntil && (0, l.jsx)(v.Z, {
      streamingUntil: D.hdStreamingUntil,
      user: F,
      channel: D
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(h.Z, {
      children: [(0, l.jsx)(u.xJW, {
        title: E.NW.string(E.t.rHyPXl),
        className: y.settingsGroup,
        titleClassName: P.formItemTitleSlim,
        children: K
      }), (0, l.jsx)(u.xJW, {
        title: E.NW.string(E.t.SkkeIi),
        className: y.settingsGroup,
        titleClassName: P.formItemTitleSlim,
        children: q
      })]
    }), V ? (0, l.jsx)(b.Z, {
      onClose: t,
      openStreamUpsellModal: R,
      glow: B
    }) : null, G && (0, l.jsx)(b.c, {}), Y && null != D.hdStreamingUntil && (0, l.jsx)(v.Z, {
      streamingUntil: null == D ? void 0 : D.hdStreamingUntil,
      user: F,
      channel: D
    })]
  });
  return (0, l.jsx)(d.Z, _(I({}, H), {
    children: (0, l.jsx)(u.xJW, {
      title: E.NW.string(E.t.ax4FnZ),
      titleClassName: P.formItemTitle,
      className: P.modalContent,
      children: (0, l.jsxs)("div", {
        className: y.qualitySettingsContainer,
        children: [(0, l.jsx)(u.q4e, {
          value: n,
          className: T.marginTop8,
          options: Q,
          onChange: e => w(e)
        }), $]
      })
    })
  }))
}