/** Chunk was on 12416 **/
n.d(t, {
  Z: () => M
}), n(47120);
var r = n(200651),
  l = n(192379),
  i = n(120356),
  o = n.n(i),
  a = n(642128),
  s = n(468194),
  c = n(442837),
  u = n(692547),
  d = n(477690),
  f = n(481060),
  m = n(2052),
  p = n(906732),
  h = n(194082),
  v = n(484459),
  b = n(594174),
  g = n(626135),
  y = n(74538),
  E = n(557457),
  O = n(475674),
  S = n(981631),
  x = n(474936),
  j = n(388032),
  Z = n(41997);

function C(e) {
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
let P = (0, s.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
  N = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  I = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  _ = {
    opacity: 0
  },
  R = {
    opacity: 1
  },
  T = {
    borderRadius: "".concat(P, "px ").concat(P, "px ").concat(P, "px ").concat(P, "px")
  },
  A = {
    borderRadius: "0px ".concat(P, "px ").concat(P, "px 0px")
  },
  D = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: !0
  },
  k = e => {
    let t, i, {
        participant: a,
        isUpsellEnabled: s,
        shape: d,
        size: v,
        didTrackUpsellViewed: P,
        setDidTrackUpsellViewed: N,
        className: I,
        premiumIndicator: _
      } = e,
      R = (0, E.Wc)(a),
      {
        analyticsLocations: T
      } = (0, p.ZP)(),
      A = null != (0, O.Z)(a);
    try {
      t = (0, E.nG)(R)
    } catch (e) {
      t = !1
    }
    try {
      i = (0, E.tR)(R)
    } catch (e) {
      i = !1
    }
    let D = t || i,
      {
        location: k
      } = (0, m.O)(),
      M = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
      L = s && !y.ZP.isPremium(M, x.p9.TIER_1) && !y.ZP.canStreamQuality(y.ZP.StreamQuality.MID, M),
      W = l.useCallback(() => {
        L && D && (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, 78865));
          return t => (0, r.jsx)(e, w(C({}, t), {
            analyticsSource: k
          }))
        })
      }, [L, D, k]);
    if (l.useEffect(() => {
        !P && D && (g.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
          type: x.cd.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: i,
          location_stack: T
        }), N(!0))
      }, [t, i, D, P, N, T]), null == R) return null;
    let F = (0, r.jsx)(f.ua7, {
      text: A ? j.NW.string(j.t.q8TiVl) : D ? j.NW.string(j.t.IHgpEh) : j.NW.string(j.t.vLb0VV),
      position: "bottom",
      color: f.ua7.Colors.GREY,
      children: e => (0, r.jsxs)(f.P3F, w(C({}, e), {
        onClick: W,
        className: o()(Z.qualityIndicator, v, h.eE[d], A ? Z.qualityIndicatorLowQuality : Z.qualityIndicatorFullQuality, {
          [Z.clickable]: L && D
        }),
        children: [D ? (0, r.jsx)(f.SrA, {
          size: "md",
          color: "currentColor",
          className: Z.premiumStreamIcon
        }) : null, (0, r.jsx)("span", {
          className: Z.qualityResolution,
          children: (0, E.ml)(R.maxResolution)
        }), (0, r.jsx)("span", {
          children: (0, E.bp)(R.maxFrameRate)
        })]
      }))
    });
    return (0, r.jsx)(f.IGR, {
      text: F,
      className: o()(I, Z.qualityIndicatorBadge, {
        [Z.qualityIndicatorBadgePremium]: D && _
      }),
      color: u.Z.unsafe_rawColors.PRIMARY_500.css,
      shape: d
    })
  },
  M = e => {
    let {
      participant: t,
      showQuality: n,
      isUpsellEnabled: i = !0,
      size: s,
      className: c,
      premiumIndicator: u
    } = e, [d, m] = l.useState(!1), p = (0, E.Wc)(t), {
      reducedMotion: b
    } = l.useContext(f.Sfi), g = n && null != p;
    l.useEffect(() => {
      (0, v.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
        dispatchWait: !0
      })
    }, [t]);
    let y = (0, f.Yzy)(g, {
        enter: {
          from: b.enabled ? _ : N,
          to: b.enabled ? R : I
        },
        leave: b.enabled ? _ : N,
        config: D
      }, "animate-always"),
      O = (0, f.q_F)({
        to: g ? A : T,
        config: D
      }, "animate-always");
    return (e => {
      let {
        className: n,
        popoutProps: l
      } = e;
      return (0, r.jsxs)("div", w(C({
        className: o()(Z.streamQualityIndicator, n)
      }, l), {
        children: [y((e, n) => n ? (0, r.jsx)(a.animated.div, {
          style: e,
          children: (0, r.jsx)(k, {
            className: Z.liveQualityIndicator,
            participant: t,
            size: s,
            shape: f.Dv2.ROUND_LEFT,
            isUpsellEnabled: i,
            didTrackUpsellViewed: d,
            setDidTrackUpsellViewed: m,
            premiumIndicator: u
          })
        }) : null), (0, r.jsx)(a.animated.div, {
          style: O,
          className: Z.liveIndicator,
          children: (0, r.jsx)(h.ZP, {
            look: h.jZ.RED,
            size: s,
            shape: g ? f.Dv2.ROUND_RIGHT : f.Dv2.ROUND
          })
        })]
      }))
    })({
      className: c
    })
  }