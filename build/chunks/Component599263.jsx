/** Chunk was on 37709 **/
/** chunk id: 599263, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk393238 = require("./393238.js"),
  Chunk877604 = require("./877604.jsx"),
  Chunk998730 = require("./998730.js"),
  Chunk944163 = require("./944163.js"),
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
  Chunk637853 = require("./637853.js"),
  Chunk71259 = require("./71259.jsx"),
  Chunk548473 = require("./548473.jsx"),
  Chunk15320 = require("./15320.jsx"),
  Chunk973051 = require("./973051.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321347 = require("./321347.js");

function w(e) {
  let {
    guildId: t
  } = e, {
    ref: n,
    width: o,
    height: w
  } = (0, u.ZP)(), k = (0, s.Wu)([y.Z], () => y.Z.getOnboardingPromptsForOnboarding(t)), A = (0, s.e7)([y.Z], () => y.Z.getEnabled(t)), B = (0, s.e7)([y.Z], () => y.Z.getConnections(t)), R = (0, s.e7)([m.Z], () => m.Z.getRulesPrompt(t)), L = i.useCallback((e, n, r) => {
    _.Z.selectOption(t, e, n, r)
  }, [t]), F = i.useCallback(() => {
    _.Z.completeOnboarding(t, k)
  }, [t, k]), M = (0, s.e7)([v.Z], () => v.Z.getGuild(t)), G = i.useMemo(() => null == M ? null : O.ZP.getGuildSplashURL({
    id: M.id,
    splash: M.splash
  }), [M]), V = (0, f.N)(G), H = (0, s.e7)([N.ZP], () => N.ZP.getCurrentOnboardingStep(t)), [U, q] = i.useState(null != G ? null : "cover"), [W, z] = i.useState(false), J = i.useCallback(e => {
    q(H), _.Z.setUserOnboardingStep(t, e)
  }, [t, H]), X = (0, s.e7)([g.Z], () => g.Z.isFullServerPreview(t)), Y = (0, s.e7)([N.ZP], () => N.ZP.getOnboardingStatus(t)), Q = null != k && k.length > 0, $ = i.useCallback(() => {
    (0, N.kp)(Y) && A && (Q || 0 !== B.length) ? B.length > 0 ? J("connections") : J(0) : F()
  }, [Y, A, Q, B.length, J, F]);
  i.useEffect(() => {
    if (!N.ZP.shouldShowOnboarding(t)) return d.Z.escapeToDefaultChannel(t);
    (0, b.E)(t)
  }, [t]);
  let K = (0, c.Yzy)(H, {
      config: l.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      }
    }, "cover" !== U && null !== U ? "animate-never" : "respect-motion-settings"),
    ee = N.ZP.shouldShowOnboarding(t),
    et = null == M;
  return (i.useEffect(() => {
    if (!ee || et) {
      let e = setTimeout(() => {
        (0, h.uL)(S.Z5c.CHANNEL(t))
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [ee, et, t]), N.ZP.shouldShowOnboarding(t) && null != M) ? (0, r.jsxs)("div", {
    className: a()(T.main, {
      [T.fullBorderWithGradient]: null == G
    }),
    ref: n,
    children: [null != G ? (0, r.jsx)(p.Z, {
      className: T.artwork,
      src: G,
      width: o,
      height: w,
      imageClassName: T.cover
    }) : (0, r.jsx)(x.Z, {}), null != V && (0, r.jsx)("div", {
      className: T.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, j.aD)(V, .16), " 0%, ").concat((0, j.aD)(V, 1), " 100%)")
      }
    }), null == G ? null : (0, r.jsx)("div", {
      className: T.gradient
    }), K((e, n, i) => {
      let {
        key: o
      } = i;
      return (0, r.jsx)(l.animated.div, {
        style: e,
        children: (() => {
          switch (H) {
            case "cover":
              return (0, r.jsx)(E.ZP, {
                guild: M,
                onboardingStatus: N.uX.READY,
                onStart: $,
                disableTracking: X
              });
            case "connections":
              return (0, r.jsx)(C.Z, {
                guildId: t,
                isLastStep: 0 === k.length && !(0, P.O5)(M, R),
                isSubmitting: W,
                disableTracking: X,
                onComplete: () => {
                  k.length > 0 ? J(0) : (0, P.O5)(M, R) ? J("rules") : (z(true), F())
                }
              });
            case "rules":
              return (0, r.jsx)(I.Z, {
                setCurrentStep: J,
                previousPromptIndex: k.length > 0 ? k.length - 1 : B.length > 0 ? "connections" : "cover",
                guild: M,
                prompts: k,
                completeOnboarding: F,
                disableTracking: X
              });
            case null:
              return null;
            default:
              return (0, r.jsx)(D.Z, {
                guild: M,
                prompts: k,
                step: H,
                selectOption: L,
                completeOnboarding: F,
                setCurrentStep: J,
                disableTracking: X
              })
          }
        })()
      }, o)
    }), "cover" === H && (0, r.jsx)("div", {
      className: T.bottomCenterContent,
      children: (0, r.jsx)(c.Heading, {
        variant: "heading-sm/normal",
        color: "text-default",
        children: Z.intl.format(Z.t.kI6UoD, {
          privacyLink: S.EYA.PRIVACY
        })
      })
    })]
  }) : null
}