/** Chunk was on 37709 **/
n.r(t), n.d(t, {
  default: () => P
}), n(47120);
var r = n(200651),
  l = n(192379),
  o = n(120356),
  i = n.n(o),
  s = n(642128),
  a = n(442837),
  c = n(481060),
  d = n(749210),
  u = n(830064),
  m = n(393238),
  h = n(877604),
  p = n(998730),
  x = n(480608),
  f = n(160404),
  g = n(703656),
  j = n(430824),
  N = n(768581),
  v = n(302221),
  b = n(549817),
  _ = n(45966),
  C = n(819553),
  O = n(548473),
  E = n(15320),
  k = n(973051),
  I = n(981631),
  Z = n(388032),
  y = n(163213);

function P(e) {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: o,
    height: P
  } = (0, m.Z)(), w = (0, a.Wu)([_.Z], () => _.Z.getOnboardingPromptsForOnboarding(t)), D = (0, a.e7)([_.Z], () => _.Z.getEnabled(t)), T = l.useCallback((e, n, r) => {
    b.Z.selectOption(t, e, n, r)
  }, [t]), R = l.useCallback(() => {
    b.Z.completeOnboarding(t, w)
  }, [t, w]), M = (0, a.e7)([j.Z], () => j.Z.getGuild(t)), A = l.useMemo(() => null == M ? null : N.ZP.getGuildSplashURL({
    id: M.id,
    splash: M.splash
  }), [M]), B = (0, p.N)(A), S = (0, a.e7)([C.ZP], () => C.ZP.getCurrentOnboardingStep(t)), [W, L] = l.useState(null != A ? null : "cover"), z = l.useCallback(e => {
    L(S), b.Z.setUserOnboardingStep(t, e)
  }, [t, S]), F = (0, a.e7)([f.Z], () => f.Z.isFullServerPreview(t)), U = (0, a.e7)([C.ZP], () => C.ZP.getOnboardingStatus(t)), G = null != w && w.length > 0, q = l.useCallback(() => {
    (0, C.kp)(U) && D && G ? z(0) : R()
  }, [U, D, G, z, R]);
  l.useEffect(() => {
    if (!C.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
    (0, x.E)(t)
  }, [t]);
  let V = (0, c.Yzy)(S, {
      config: s.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      }
    }, "cover" !== W && null !== W ? "animate-never" : "respect-motion-settings"),
    H = C.ZP.shouldShowOnboarding(t),
    X = null == M;
  if (l.useEffect(() => {
      if (!H || X) {
        let e = setTimeout(() => {
          (0, g.uL)(I.Z5c.CHANNEL(t))
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [H, X, t]), !C.ZP.shouldShowOnboarding(t) || null == M) return null;
  let Y = () => {
    switch (S) {
      case "cover":
        return (0, r.jsx)(O.ZP, {
          guild: M,
          onboardingStatus: C.uX.READY,
          onStart: q,
          disableTracking: F
        });
      case "rules":
        return (0, r.jsx)(k.Z, {
          setCurrentStep: z,
          previousPromptIndex: w.length - 1,
          guild: M,
          prompts: w,
          completeOnboarding: R,
          disableTracking: F
        });
      case null:
        return null;
      default:
        return (0, r.jsx)(E.Z, {
          guild: M,
          prompts: w,
          step: S,
          selectOption: T,
          completeOnboarding: R,
          setCurrentStep: z,
          disableTracking: F
        })
    }
  };
  return (0, r.jsxs)("div", {
    className: y.main,
    ref: n,
    children: [null != A ? (0, r.jsx)(h.Z, {
      className: i()(y.artwork),
      src: A,
      width: o,
      height: P,
      imageClassName: y.cover
    }) : (0, r.jsx)(u.Z, {
      className: y.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), null != B && (0, r.jsx)("div", {
      className: y.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, v.aD)(B, .16), " 0%, ").concat((0, v.aD)(B, 1), " 100%)")
      }
    }), (0, r.jsx)("div", {
      className: y.gradient
    }), V((e, t, n) => {
      let {
        key: l
      } = n;
      return (0, r.jsx)(s.animated.div, {
        style: e,
        children: Y()
      }, l)
    }), "cover" === S && (0, r.jsx)("div", {
      className: y.bottomCenterContent,
      children: (0, r.jsx)(c.X6q, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: Z.NW.format(Z.t.kI6UoK, {
          privacyLink: I.EYA.PRIVACY
        })
      })
    })]
  })
}