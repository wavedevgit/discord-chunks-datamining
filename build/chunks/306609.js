/** Chunk was on 76030 **/
n.d(t, {
  l: () => M
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(642128),
  s = n(442837),
  c = n(481060),
  d = n(493773),
  u = n(347469),
  p = n(100527),
  m = n(906732),
  f = n(659580),
  h = n(795318),
  g = n(53691),
  _ = n(166335),
  b = n(221241),
  v = n(594174),
  y = n(626135),
  x = n(111361),
  E = n(74538),
  O = n(709706),
  j = n(378441),
  N = n(799143),
  C = n(358820),
  I = n(448697),
  S = n(365831),
  T = n(639539),
  P = n(627325),
  A = n(981631),
  w = n(354459),
  Z = n(474936),
  k = n(388032),
  R = n(422111);

function D(e) {
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

function L(e, t) {
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

function M(e) {
  let {
    onSettingsButtonClick: t,
    wide: n,
    showOutputDevices: a = !1
  } = e, [M, W] = i.useState(""), {
    analyticsLocations: F,
    newestAnalyticsLocation: U
  } = (0, m.ZP)(p.Z.VOICE_FILTER_POPOUT), B = i.useRef(null), G = (0, u.Z)({
    minDimension: 400,
    maxDimension: 600,
    resizableDomNodeRef: B,
    onElementResize: (e, t) => {},
    onElementResizeEnd: e => {},
    orientation: u.y.VERTICAL_TOP
  }), H = (0, s.e7)([v.default], () => (0, x.I5)(v.default.getCurrentUser())), V = (0, s.e7)([O.Z], () => O.Z.getCatalogUpdateTime()), [z, K] = i.useState(!1), [Y, X] = i.useState(!1), {
    activeVoice: q
  } = (0, j.o)(), Q = (0, c.q_F)({
    transform: z ? "translateY(-$8px) scale(".concat(.96, ")") : "translateY(0px) scale(1)",
    config: {
      duration: 150,
      mass: 1,
      stiffness: 711.1,
      damping: 40
    }
  }), J = (0, c.q_F)({
    transform: z ? "translateY(0px)" : "translateY(50px)",
    config: {
      duration: 150,
      mass: 1,
      stiffness: 711.1,
      damping: 40
    }
  }), $ = (0, c.q_F)({
    to: {
      bottom: "" !== M ? "translateY(75px)" : "translateY(50px)",
      opacity: +("" === M)
    },
    config: {
      tension: 280,
      friction: 24,
      duration: 200
    }
  }), ee = i.useRef(null);
  (0, d.ZP)(() => {
    (0, C.r5)(), y.default.track(A.rMx.VOICE_FILTER_PICKER_OPENED, {
      active_voice_filter_id: null != q ? q : null
    })
  });
  let {
    simplifiedSettingsEnabled: et
  } = (0, b.Z)({
    location: "VoiceFiltersPopout"
  }), en = i.useCallback(() => W(""), [W]);
  return (0, r.jsx)(m.Gt, {
    value: F,
    children: (0, r.jsxs)("div", {
      ref: B,
      className: o()(R.voiceFiltersPopout, {
        [R.wide]: n
      }),
      style: {
        height: 500
      },
      children: [(0, r.jsx)("div", {
        className: R.resizeHandle,
        onMouseDown: G,
        children: (0, r.jsx)("div", {
          className: R.resizePill
        })
      }), (0, r.jsx)(c.E1j, {
        size: c.E1j.Sizes.MEDIUM,
        placeholder: k.NW.string(k.t.hHCZJS),
        className: R.voiceFiltersHeader,
        autoFocus: !0,
        onChange: W,
        query: M,
        onClear: en
      }), (0, r.jsx)(P.w, {
        query: M,
        columns: n ? 5 : 4,
        handleScroll: e => {
          let t = ee.current;
          if (null == t || (K(e > 0), Y)) return;
          let {
            height: n,
            totalHeight: r
          } = t.getListDimensions();
          e < r - n || (X(!0), y.default.track(A.rMx.VOICE_FILTER_PICKER_SCROLLED))
        },
        voiceListRef: ee
      }), !H && (0, r.jsxs)(l.animated.div, {
        style: L(D({}, $), {
          display: $.opacity.to(e => 0 === e ? "none" : "block")
        }),
        className: R.upsellCountdownContainer,
        children: [null != V && (0, r.jsx)(l.animated.div, {
          style: Q,
          children: (0, r.jsx)(T.J, {
            catalogUpdateTime: V,
            isScrolled: z
          })
        }), (0, r.jsx)("div", {
          className: R.upsellContainer,
          children: (0, r.jsx)(l.animated.div, {
            style: J,
            children: (0, r.jsx)(g.p, {
              showUpsell: !0,
              text: k.NW.format(k.t["XMDm8/"], {
                nitroTierName: (0, E.Px)(Z.p9.TIER_2),
                onClick: () => (0, _.i)()
              }),
              button: k.NW.string(k.t.cRCCJy),
              buttonAnalyticsObject: {
                section: A.jXE.VOICE_FILTERS_FLOATING_UPSELL
              },
              showShadow: !1,
              position: "inline",
              className: R.upsell,
              buttonSize: "sm",
              useLockIcon: !0,
              buttonStyles: R.subscribeButton
            })
          })
        })]
      }), (0, r.jsx)(S.y, {}), (0, r.jsx)(I.R, {}), (0, r.jsxs)("div", {
        className: o()(R.voiceFiltersFooter, {
          [R.hasActiveVoice]: null != q
        }),
        children: [(0, r.jsx)(N.Y, {}), a && (0, r.jsx)(N.a, {}), (0, r.jsx)(c.yRy, {
          position: "top",
          renderPopout: () => (0, r.jsx)(f.default, {
            renderInputModes: !0,
            renderInputVolume: !0,
            renderInputDevices: !0,
            renderOutputDevices: a,
            renderOutputVolume: a,
            onClose: t,
            onInteraction: (0, h.u)("AudioDeviceMenu", U, {
              entrypoint: w.A5.THREE_DOT
            }),
            simplified: et
          }),
          children: e => (0, r.jsx)(c.zxk, L(D({}, e), {
            size: c.zxk.Sizes.MIN,
            look: c.zxk.Looks.BLANK,
            grow: !1,
            className: R.voiceFiltersFooterButton,
            innerClassName: R.voiceFiltersFooterButtonInner,
            onClick: t => {
              var n;
              y.default.track(A.rMx.VOICE_FILTER_VOICE_SETTINGS_CLICKED, {
                active_voice_filter_id: null != q ? q : null
              }), null === (n = e.onClick) || void 0 === n || n.call(e, t)
            },
            children: (0, r.jsx)(c.Huf, {
              size: "custom",
              width: 20,
              height: 20
            })
          }))
        })]
      })]
    })
  })
}