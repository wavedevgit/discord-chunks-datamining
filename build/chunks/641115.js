/** Chunk was on 79477 **/
n.d(t, {
  Z: () => A
}), n(47120);
var r = n(200651),
  l = n(192379),
  s = n(120356),
  i = n.n(s),
  a = n(512722),
  o = n.n(a),
  c = n(442837),
  u = n(481060),
  d = n(410575),
  m = n(2052),
  p = n(924557),
  h = n(600164),
  g = n(436774),
  x = n(140465),
  v = n(774026),
  f = n(592125),
  j = n(944486),
  S = n(594174),
  N = n(74538),
  Z = n(451467),
  O = n(122186),
  b = n(37113),
  y = n(981631),
  P = n(388032),
  C = n(711597),
  E = n(64479),
  I = n(802138);

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function w(e, t) {
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

function _(e) {
  let {
    analyticsLocation: t,
    onClose: l
  } = e;
  (0, u.ZDy)(async () => {
    let {
      default: e
    } = await n.e("28479").then(n.bind(n, 78865));
    return n => (0, r.jsx)(e, w(T({}, n), {
      onCloseParent: l,
      analyticsSource: t
    }))
  })
}

function R() {
  return (0, r.jsxs)("div", {
    className: E.toolTipTextContainer,
    children: [(0, r.jsx)(u.SrA, {
      size: "md",
      color: g.JX.PREMIUM_TIER_2,
      className: i()(E.premiumIcon)
    }), (0, r.jsx)(u.Text, {
      className: E.upsellText,
      variant: "text-sm/medium",
      children: P.NW.string(P.t.sEAnVF)
    })]
  })
}

function W(e) {
  let t, n, {
      type: l,
      selected: s,
      needsPremium: a,
      needsDemo: o,
      analyticsLocation: c,
      onClick: d,
      onClose: m,
      setIsHovering: p
    } = e,
    {
      value: h,
      label: g
    } = l;
  return a ? (t = (0, r.jsx)(u.DY3, {
    tooltipClassName: E.tooltip,
    spacing: 6,
    "aria-label": P.NW.string(P.t.sEAnVF),
    text: (0, r.jsx)(R, {}),
    children: (0, r.jsx)("div", {
      className: E.textContainer,
      onMouseEnter: () => p(!0),
      onMouseLeave: () => p(!1),
      children: (0, r.jsx)(u.Text, {
        variant: "text-xs/bold",
        className: i()(E.selectorNitroText, E.enhancedSelectorNitroText),
        children: g
      })
    })
  }), n = () => _({
    analyticsLocation: c,
    onClose: m
  })) : (t = (0, r.jsx)("div", {
    className: E.textContainer,
    children: (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      className: i()(E.selectorText, {
        [E.enhancedSelectorNitroText]: o
      }),
      children: g
    })
  }), n = () => d(h)), {
    content: t,
    className: i()(E.selectorButton, {
      [E.selectorButtonSelected]: s,
      [E.perksDemo]: o,
      [E.premiumUpsell]: a
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
    onFPSChange: g,
    onPresetChange: R,
    targetGuildPremiumTier: A,
    captureDeviceSelected: k
  } = e, L = (0, c.e7)([S.default], () => {
    let e = S.default.getCurrentUser();
    return o()(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = (0, c.e7)([j.Z, f.Z], () => f.Z.getChannel(j.Z.getVoiceChannelId())), M = N.ZP.canStreamQuality(N.U2.MID, L), {
    location: z
  } = (0, m.O)(), U = (0, p.Zq)({
    autoTrackExposure: !1
  }), G = (0, x.B4)({
    location: "StreamSettings"
  }), F = S.default.getUser(null == D ? void 0 : D.hdStreamingBuyerId), V = null != D && null != D.hdStreamingUntil && new Date(D.hdStreamingUntil) > new Date && null != F, Y = !M && !U, [B, J] = l.useState(!1), X = k ? b.z8 : b.WC, H = w(T({}, z), {
    section: y.jXE.STREAM_SETTINGS
  }), K = (0, r.jsx)(u.hE2, {
    buttons: X.map(e => W({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, Z.Z)(n, e.value, i, L, A, D),
      needsDemo: G && e.value !== b.LY.RESOLUTION_720,
      analyticsLocation: H,
      onClick: () => a(e.value),
      onClose: t,
      setIsHovering: J
    }))
  }), q = (0, r.jsx)(u.hE2, {
    buttons: b.k0.map(e => W({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, Z.Z)(n, s, e.value, L, A, D),
      needsDemo: G && e.value === b.ws.FPS_60,
      analyticsLocation: H,
      onClick: () => g(e.value),
      onClose: t,
      setIsHovering: J
    }))
  }), Q = [{
    value: b.tI.PRESET_VIDEO,
    label: P.NW.string(P.t.HcwHc3)
  }, ...k ? [] : [{
    value: b.tI.PRESET_DOCUMENTS,
    label: P.NW.string(P.t["/RfohI"])
  }], {
    value: b.tI.PRESET_CUSTOM,
    label: P.NW.string(P.t["+eOtrK"])
  }], $ = n === b.tI.PRESET_DOCUMENTS ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      children: (0, r.jsx)(u.xJW, {
        title: P.NW.string(P.t.rHyPXl),
        titleClassName: C.formItemTitleSlim,
        className: E.documentModeGroup,
        children: (0, r.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: P.NW.format(P.t["U+hmam"], {
            fps: i
          })
        })
      })
    }), Y ? (0, r.jsx)(O.Z, {
      message: P.NW.string(P.t.deDogI),
      onClose: t,
      openStreamUpsellModal: _
    }) : null, G && (0, r.jsx)(O.c, {}), V && null != D.hdStreamingUntil && (0, r.jsx)(v.Z, {
      streamingUntil: D.hdStreamingUntil,
      user: F,
      channel: D
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(h.Z, {
      children: [(0, r.jsx)(u.xJW, {
        title: P.NW.string(P.t.rHyPXl),
        className: E.settingsGroup,
        titleClassName: C.formItemTitleSlim,
        children: K
      }), (0, r.jsx)(u.xJW, {
        title: P.NW.string(P.t.SkkeIi),
        className: E.settingsGroup,
        titleClassName: C.formItemTitleSlim,
        children: q
      })]
    }), Y ? (0, r.jsx)(O.Z, {
      onClose: t,
      openStreamUpsellModal: _,
      glow: B
    }) : null, G && (0, r.jsx)(O.c, {}), V && null != D.hdStreamingUntil && (0, r.jsx)(v.Z, {
      streamingUntil: null == D ? void 0 : D.hdStreamingUntil,
      user: F,
      channel: D
    })]
  });
  return (0, r.jsx)(d.Z, w(T({}, H), {
    children: (0, r.jsx)(u.xJW, {
      title: P.NW.string(P.t.ax4FnZ),
      titleClassName: C.formItemTitle,
      className: C.modalContent,
      children: (0, r.jsxs)("div", {
        className: E.qualitySettingsContainer,
        children: [(0, r.jsx)(u.q4e, {
          value: n,
          className: I.marginTop8,
          options: Q,
          onChange: e => R(e)
        }), $]
      })
    })
  }))
}