/** Chunk was on 39579 **/
/** chunk id: 57858, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk765671 = require("./765671.js"),
  Chunk4616 = require("./4616.jsx"),
  Chunk743674 = require("./743674.js"),
  Chunk60175 = require("./60175.js"),
  Chunk545868 = require("./545868.js"),
  Chunk164956 = require("./164956.js"),
  Chunk976860 = require("./976860.js"),
  Chunk426660 = require("./426660.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk998304 = require("./998304.js"),
  Chunk669953 = require("./669953.js"),
  Chunk591552 = require("./591552.js"),
  Chunk713125 = require("./713125.js"),
  Chunk961973 = require("./961973.js"),
  Chunk783153 = require("./783153.jsx"),
  Chunk133266 = require("./133266.jsx"),
  Chunk912417 = require("./912417.jsx"),
  Chunk710434 = require("./710434.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22004 = require("./22004.js");

function k(e) {
  let {
    guildId: t
  } = e, {
    ref: l,
    width: k,
    height: R
  } = (0, p.Ay)(), L = (0, a.yK)([A.A], () => A.A.getOnboardingPromptsForOnboarding(t)), G = (0, a.bG)([A.A], () => A.A.getEnabled(t)), H = (0, a.bG)([A.A], () => A.A.getConnections(t)), B = (0, a.bG)([g.A], () => g.A.getRulesPrompt(t)), V = i.useCallback((e, n, r) => {
    y.A.selectOption(t, e, n, r)
  }, [t]), F = i.useCallback(() => {
    y.A.completeOnboarding(t, L)
  }, [t, L]), M = (0, a.bG)([O.A], () => O.A.getGuild(t)), q = i.useMemo(() => null == M ? null : v.Ay.getGuildSplashURL({
    id: M.id,
    splash: M.splash
  }), [M]), U = (0, m.S)(q), K = i.useRef(null), $ = i.useCallback(e => {
    null == q || null != K.current && K.current.contains(e.target) || (0, d.L3)(e, async () => {
      let {
        default: e
      } = await n.e("95813").then(n.bind(n, 755319));
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
          splashUrl: q
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
    })
  }, [q]), J = (0, a.bG)([N.Ay], () => N.Ay.getCurrentOnboardingStep(t)), [W, X] = i.useState(null != q ? null : "cover"), [z, Q] = i.useState(false), Z = i.useCallback(e => {
    X(J), y.A.setUserOnboardingStep(t, e)
  }, [t, J]), Y = (0, a.bG)([_.A], () => _.A.isFullServerPreview(t)), ee = (0, a.bG)([N.Ay], () => N.Ay.getOnboardingStatus(t)), et = null != L && L.length > 0, en = i.useCallback(() => {
    (0, N.eg)(ee) && G && (et || 0 !== H.length) ? H.length > 0 ? Z("connections") : Z(0) : F()
  }, [ee, G, et, H.length, Z, F]);
  i.useEffect(() => {
    if (!N.Ay.shouldShowOnboarding(t)) return u.A.escapeToDefaultChannel(t);
    (0, b.L)(t)
  }, [t]);
  let er = (0, c.pnh)(J, {
      config: o.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      }
    }, "cover" !== W && null !== W ? "animate-never" : "respect-motion-settings"),
    ei = N.Ay.shouldShowOnboarding(t),
    el = null == M;
  return (i.useEffect(() => {
    if (!ei || el) {
      let e = setTimeout(() => {
        (0, h.pX)(S.BVt.CHANNEL(t))
      }, 1e3);
      return () => clearTimeout(e)
    }
  }, [ei, el, t]), N.Ay.shouldShowOnboarding(t) && null != M) ? (0, r.jsxs)("div", {
    className: s()(T.iW, {
      [T.Me]: null == q
    }),
    ref: l,
    onContextMenu: $,
    children: [null != q ? (0, r.jsx)(f.A, {
      className: T.xX,
      src: q,
      width: k,
      height: R,
      imageClassName: T.Iv
    }) : (0, r.jsx)(x.A, {}), null != U && (0, r.jsx)("div", {
      className: T.D7,
      style: {
        background: "linear-gradient(180deg, ".concat((0, j.cb)(U, .16), " 0%, ").concat((0, j.cb)(U, 1), " 100%)")
      }
    }), null == q ? null : (0, r.jsx)("div", {
      className: T.D7
    }), (0, r.jsxs)("div", {
      ref: K,
      children: [er((e, n, i) => {
        let {
          key: l
        } = i;
        return (0, r.jsx)(o.animated.div, {
          style: e,
          children: (() => {
            switch (J) {
              case "cover":
                return (0, r.jsx)(w.Ay, {
                  guild: M,
                  onboardingStatus: N.$o.READY,
                  onStart: en,
                  disableTracking: Y
                });
              case "connections":
                return (0, r.jsx)(E.A, {
                  guildId: t,
                  isLastStep: 0 === L.length && !(0, P.L1)(M, B),
                  isSubmitting: z,
                  disableTracking: Y,
                  onComplete: () => {
                    L.length > 0 ? Z(0) : (0, P.L1)(M, B) ? Z("rules") : (Q(true), F())
                  }
                });
              case "rules":
                return (0, r.jsx)(C.A, {
                  setCurrentStep: Z,
                  previousPromptIndex: L.length > 0 ? L.length - 1 : H.length > 0 ? "connections" : "cover",
                  guild: M,
                  prompts: L,
                  completeOnboarding: F,
                  disableTracking: Y
                });
              case null:
                return null;
              default:
                return (0, r.jsx)(D.A, {
                  guild: M,
                  prompts: L,
                  step: J,
                  selectOption: V,
                  completeOnboarding: F,
                  setCurrentStep: Z,
                  disableTracking: Y
                })
            }
          })()
        }, l)
      }), "cover" === J && (0, r.jsx)("div", {
        className: T.m6,
        children: (0, r.jsx)(c.Heading, {
          variant: "heading-sm/normal",
          color: "text-default",
          children: I.intl.format(I.t.kI6UoD, {
            privacyLink: S.X7G.PRIVACY
          })
        })
      })]
    })]
  }) : null
}