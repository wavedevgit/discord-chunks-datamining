/** Chunk was on 37709 **/
/** chunk id: 599263, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
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

function k(e) {
  let {
    guildId: t
  } = e, {
    ref: o,
    width: k,
    height: A
  } = (0, p.ZP)(), B = (0, s.Wu)([P.Z], () => P.Z.getOnboardingPromptsForOnboarding(t)), R = (0, s.e7)([P.Z], () => P.Z.getEnabled(t)), L = (0, s.e7)([P.Z], () => P.Z.getConnections(t)), F = (0, s.e7)([b.Z], () => b.Z.getRulesPrompt(t)), M = i.useCallback((e, n, r) => {
    _.Z.selectOption(t, e, n, r)
  }, [t]), G = i.useCallback(() => {
    _.Z.completeOnboarding(t, B)
  }, [t, B]), V = (0, s.e7)([j.Z], () => j.Z.getGuild(t)), H = i.useMemo(() => null == V ? null : v.ZP.getGuildSplashURL({
    id: V.id,
    splash: V.splash
  }), [V]), U = (0, m.N)(H), q = i.useRef(null), W = i.useCallback(e => {
    null != H && (null != q.current && q.current.contains(e.target) || (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("89372").then(n.bind(n, 231477));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), i = i = {
          splashUrl: H
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }))
  }, [H]), z = (0, s.e7)([N.ZP], () => N.ZP.getCurrentOnboardingStep(t)), [J, X] = i.useState(null != H ? null : "cover"), [Y, Q] = i.useState(false), $ = i.useCallback(e => {
    X(z), _.Z.setUserOnboardingStep(t, e)
  }, [t, z]), K = (0, s.e7)([h.Z], () => h.Z.isFullServerPreview(t)), ee = (0, s.e7)([N.ZP], () => N.ZP.getOnboardingStatus(t)), et = null != B && B.length > 0, en = i.useCallback(() => {
    (0, N.kp)(ee) && R && (et || 0 !== L.length) ? L.length > 0 ? $("connections") : $(0) : G()
  }, [ee, R, et, L.length, $, G]);
  i.useEffect(() => {
    if (!N.ZP.shouldShowOnboarding(t)) return u.Z.escapeToDefaultChannel(t);
    (0, g.E)(t)
  }, [t]);
  let er = (0, c.Yzy)(z, {
      config: l.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      }
    }, "cover" !== J && null !== J ? "animate-never" : "respect-motion-settings"),
    ei = N.ZP.shouldShowOnboarding(t),
    eo = null == V;
  return (i.useEffect(() => {
    if (!ei || eo) {
      let e = setTimeout(() => {
        (0, x.uL)(S.Z5c.CHANNEL(t))
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [ei, eo, t]), N.ZP.shouldShowOnboarding(t) && null != V) ? (0, r.jsxs)("div", {
    className: a()(T.main, {
      [T.fullBorderWithGradient]: null == H
    }),
    ref: o,
    onContextMenu: W,
    children: [null != H ? (0, r.jsx)(f.Z, {
      className: T.artwork,
      src: H,
      width: k,
      height: A,
      imageClassName: T.cover
    }) : (0, r.jsx)(O.Z, {}), null != U && (0, r.jsx)("div", {
      className: T.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, y.aD)(U, .16), " 0%, ").concat((0, y.aD)(U, 1), " 100%)")
      }
    }), null == H ? null : (0, r.jsx)("div", {
      className: T.gradient
    }), (0, r.jsxs)("div", {
      ref: q,
      children: [er((e, n, i) => {
        let {
          key: o
        } = i;
        return (0, r.jsx)(l.animated.div, {
          style: e,
          children: (() => {
            switch (z) {
              case "cover":
                return (0, r.jsx)(D.ZP, {
                  guild: V,
                  onboardingStatus: N.uX.READY,
                  onStart: en,
                  disableTracking: K
                });
              case "connections":
                return (0, r.jsx)(E.Z, {
                  guildId: t,
                  isLastStep: 0 === B.length && !(0, C.O5)(V, F),
                  isSubmitting: Y,
                  disableTracking: K,
                  onComplete: () => {
                    B.length > 0 ? $(0) : (0, C.O5)(V, F) ? $("rules") : (Q(true), G())
                  }
                });
              case "rules":
                return (0, r.jsx)(w.Z, {
                  setCurrentStep: $,
                  previousPromptIndex: B.length > 0 ? B.length - 1 : L.length > 0 ? "connections" : "cover",
                  guild: V,
                  prompts: B,
                  completeOnboarding: G,
                  disableTracking: K
                });
              case null:
                return null;
              default:
                return (0, r.jsx)(I.Z, {
                  guild: V,
                  prompts: B,
                  step: z,
                  selectOption: M,
                  completeOnboarding: G,
                  setCurrentStep: $,
                  disableTracking: K
                })
            }
          })()
        }, o)
      }), "cover" === z && (0, r.jsx)("div", {
        className: T.bottomCenterContent,
        children: (0, r.jsx)(c.Heading, {
          variant: "heading-sm/normal",
          color: "text-default",
          children: Z.intl.format(Z.t.kI6UoD, {
            privacyLink: S.EYA.PRIVACY
          })
        })
      })]
    })]
  }) : null
}