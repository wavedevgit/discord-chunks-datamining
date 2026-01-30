/** Chunk was on 39048 **/
/** chunk id: 239741, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk864605 = require("./864605.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk73939 = require("./73939.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk555337 = require("./555337.js"),
  Chunk418448 = require("./418448.js"),
  Chunk527678 = require("./527678.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk287479 = require("./287479.js"),
  Chunk400812 = require("./400812.js"),
  Chunk72533 = require("./72533.js"),
  Chunk246282 = require("./246282.jsx"),
  Chunk729984 = require("./729984.jsx"),
  Chunk692453 = require("./692453.jsx"),
  Chunk360827 = require("./360827.jsx"),
  Chunk133154 = require("./133154.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk484729 = require("./484729.js");

function R(e) {
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

function D(e, t) {
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

function G() {
  let e = (0, s.bG)([f.A], () => f.A.getGuild());
  return null == e ? null : (0, r.jsx)(L, {
    guild: e
  })
}

function L(e) {
  let {
    guild: t
  } = e, f = t.id, G = (0, s.bG)([v.A], () => v.A.getCurrentPage()), L = (0, A.A)(f), {
    hasChanges: k,
    hasConfiguredAnythingForCurrentStep: M,
    hasErrors: U
  } = (0, s.cf)([v.A], () => ({
    hasChanges: v.A.hasChanges(),
    hasConfiguredAnythingForCurrentStep: v.A.hasConfiguredAnythingForCurrentStep(),
    hasErrors: v.A.hasErrors()
  })), B = (0, s.bG)([v.A], () => {
    let e = (0, y.ql)(G);
    return null != e && !v.A.isEducationUpsellDismissed(e)
  }), F = (0, u.Ay)(), H = i.useRef(null), [{
    spring: V
  }, K] = (0, d.zhh)(() => ({
    spring: 0
  }), "animate-always");
  i.useEffect(() => {
    function e() {
      K({
        spring: 1,
        config: l.config.gentle
      }), K({
        spring: 0,
        config: l.config.gentle,
        delay: 1e3
      })
    }
    return p._.subscribe(C.jej.EMPHASIZE_NOTICE, e), () => {
      p._.unsubscribe(C.jej.EMPHASIZE_NOTICE, e)
    }
  }, [K]);
  let z = (0, d.rdh)(a.A.colors.BACKGROUND_SURFACE_HIGH).hex(),
    W = (0, d.rdh)(a.A.unsafe_rawColors.PRIMARY_160).hex(),
    Y = (0, c.Mw)(F) ? z : W,
    X = V.to({
      range: [0, 1],
      output: [Y, (0, d.rdh)(a.A.colors.BACKGROUND_FEEDBACK_CRITICAL).hex()]
    });
  if (L) {
    if (G === y.Hy.DEFAULT_CHANNELS) return (0, r.jsx)(N.G, {});
    else if (G === y.Hy.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(I.fO, {});
    else if (G === y.Hy.HOME_SETTINGS) return (0, r.jsx)(T.A, {});
    else if (G === y.Hy.CONNECTIONS) return (0, r.jsx)(S.R, {});
    else if ((G === y.Hy.LANDING || G === y.Hy.REVIEW) && j.A.hasChanges()) return (0, r.jsx)(T.A, {})
  }
  let J = G === y.kd[y.kd.length - 1],
    Z = async () => {
      let e = O.A.advancedMode;
      if (k) try {
        if (G === y.Hy.DEFAULT_CHANNELS) await (0, h.jr)(t).then(() => e ? (0, _.dm)(t, {
          ignoreDefaultPrompt: true
        }) : Promise.resolve());
        else if (G === y.Hy.CUSTOMIZATION_QUESTIONS) await (0, _.dm)(t, {
          ignoreDefaultPrompt: true
        });
        else if (G === y.Hy.HOME_SETTINGS) {
          let e = j.A.getSettings();
          await (0, x.W5)(t.id, e)
        }
      } catch (e) {
        returnfalse
      }
      returntrue
    }, Q = async () => {
      m.default.track(C.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, D(R({}, (0, g.H$)(f)), {
        step: y.Hy[G],
        back: false,
        skip: !k
      })), (0, b.Ay)((0, y.ql)(G)), await Z() && (0, b._k)(f, G)
    }, q = async () => {
      m.default.track(C.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, D(R({}, (0, g.H$)(f)), {
        step: y.Hy[G],
        back: true,
        skip: false
      })), await Z() && (0, b.kP)(f, G)
    }, $ = null;
  B && (G === y.Hy.SAFETY_CHECK ? $ = (0, r.jsx)(E.Et, {}) : G === y.Hy.DEFAULT_CHANNELS ? $ = (0, r.jsx)(E.hz, {}) : G === y.Hy.CUSTOMIZATION_QUESTIONS ? $ = (0, r.jsx)(E.yP, {}) : G === y.Hy.HOME_SETTINGS && ($ = (0, r.jsx)(E.QS, {})));
  let ee = (0, r.jsx)("div", {
      className: B ? w.R : true,
      children: (0, r.jsx)(d.Button, {
        size: "sm",
        variant: "secondary",
        text: P.intl.string(P.t["13/7kX"]),
        icon: d.rJJ,
        iconPosition: "start",
        onClick: q,
        disabled: B || U
      })
    }),
    et = (0, r.jsx)(d.Button, {
      size: "sm",
      variant: M ? "primary" : "secondary",
      text: M ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["5Wxrcd"]),
      icon: d.EdP,
      iconPosition: "end",
      onClick: Q,
      disabled: B || U
    });
  return (0, r.jsx)(o.F, {
    component: "div",
    children: (0, r.jsx)(d.FQk, {
      className: w.hE,
      children: (0, r.jsx)(l.animated.div, {
        className: w.kL,
        style: {
          backgroundColor: X
        },
        children: (0, r.jsxs)("div", {
          className: w.nP,
          ref: H,
          children: [B ? (0, r.jsxs)("div", {
            className: w.cZ,
            children: [(0, r.jsx)("img", {
              className: w.kX,
              src: n(903702),
              alt: "wumpus"
            }), (0, r.jsxs)("div", {
              className: w.C0,
              children: [$, (0, r.jsx)("div", {
                className: w.JM
              })]
            })]
          }) : null, (0, r.jsx)(d.xpW, {
            containerRef: H,
            children: (0, r.jsxs)("div", {
              className: w.o1,
              children: [ee, (0, r.jsxs)("div", {
                className: w.K2,
                children: [U ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: P.intl.string(P.t.DhYsPL)
                }) : null, J ? null : et]
              })]
            })
          })]
        })
      })
    })
  })
}