/** Chunk was on 37709 **/
/** chunk id: 599263, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk393238 = require("./393238.js"),
  Chunk877604 = require("./877604.jsx"),
  Chunk998730 = require("./998730.js"),
  Chunk480608 = require("./480608.js"),
  Chunk160404 = require("./160404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk546247 = require("./546247.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk549817 = require("./549817.js"),
  Chunk45966 = require("./45966.js"),
  Chunk819553 = require("./819553.js"),
  Chunk548473 = require("./548473.jsx"),
  Chunk15320 = require("./15320.jsx"),
  Chunk973051 = require("./973051.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk718215 = require("./718215.js");

function w(e) {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: i,
    height: w
  } = (0, d.ZP)(), T = (0, s.Wu)([O.Z], () => O.Z.getOnboardingPromptsForOnboarding(t)), D = (0, s.e7)([O.Z], () => O.Z.getEnabled(t)), S = l.useCallback((e, n, r) => {
    b.Z.selectOption(t, e, n, r)
  }, [t]), R = l.useCallback(() => {
    b.Z.completeOnboarding(t, T)
  }, [t, T]), A = (0, s.e7)([v.Z], () => v.Z.getGuild(t)), B = l.useMemo(() => null == A ? null : j.ZP.getGuildSplashURL({
    id: A.id,
    splash: A.splash
  }), [A]), k = (0, f.N)(B), M = (0, s.e7)([y.ZP], () => y.ZP.getCurrentOnboardingStep(t)), [F, L] = l.useState(null != B ? null : "cover"), G = l.useCallback(e => {
    L(M), b.Z.setUserOnboardingStep(t, e)
  }, [t, M]), V = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)), H = (0, s.e7)([y.ZP], () => y.ZP.getOnboardingStatus(t)), U = null != T && T.length > 0, W = l.useCallback(() => {
    (0, y.kp)(H) && D && U ? G(0) : R()
  }, [H, D, U, G, R]);
  l.useEffect(() => {
    if (!y.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
    (0, p.E)(t)
  }, [t]);
  let q = (0, c.Yzy)(M, {
      config: o.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      }
    }, "cover" !== F && null !== F ? "animate-never" : "respect-motion-settings"),
    J = y.ZP.shouldShowOnboarding(t),
    z = null == A;
  return (l.useEffect(() => {
    if (!J || z) {
      let e = setTimeout(() => {
        (0, g.uL)(P.Z5c.CHANNEL(t))
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [J, z, t]), y.ZP.shouldShowOnboarding(t) && null != A) ? (0, r.jsxs)("div", {
    className: a()(Z.main, {
      [Z.fullBorderWithGradient]: null == B
    }),
    ref: n,
    children: [null != B ? (0, r.jsx)(m.Z, {
      className: Z.artwork,
      src: B,
      width: i,
      height: w,
      imageClassName: Z.cover
    }) : (0, r.jsx)(x.Z, {}), null != k && (0, r.jsx)("div", {
      className: Z.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, _.aD)(k, .16), " 0%, ").concat((0, _.aD)(k, 1), " 100%)")
      }
    }), null == B ? null : (0, r.jsx)("div", {
      className: Z.gradient
    }), q((e, t, n) => {
      let {
        key: l
      } = n;
      return (0, r.jsx)(o.animated.div, {
        style: e,
        children: (() => {
          switch (M) {
            case "cover":
              return (0, r.jsx)(N.ZP, {
                guild: A,
                onboardingStatus: y.uX.READY,
                onStart: W,
                disableTracking: V
              });
            case "rules":
              return (0, r.jsx)(E.Z, {
                setCurrentStep: G,
                previousPromptIndex: T.length - 1,
                guild: A,
                prompts: T,
                completeOnboarding: R,
                disableTracking: V
              });
            case null:
              return null;
            default:
              return (0, r.jsx)(C.Z, {
                guild: A,
                prompts: T,
                step: M,
                selectOption: S,
                completeOnboarding: R,
                setCurrentStep: G,
                disableTracking: V
              })
          }
        })()
      }, l)
    }), "cover" === M && (0, r.jsx)("div", {
      className: Z.bottomCenterContent,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: I.intl.format(I.t.kI6UoD, {
          privacyLink: P.EYA.PRIVACY
        })
      })
    })]
  }) : null
}