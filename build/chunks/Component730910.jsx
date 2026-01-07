/** Chunk was on 9536 **/
/** chunk id: 730910, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk554916 = require("./554916.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk215569 = require("./215569.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk999382 = require("./999382.js"),
  Chunk743475 = require("./743475.js"),
  Chunk983135 = require("./983135.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk232764 = require("./232764.jsx"),
  Chunk729311 = require("./729311.jsx"),
  Chunk478777 = require("./478777.jsx"),
  Chunk966301 = require("./966301.jsx"),
  Chunk976269 = require("./976269.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602886 = require("./602886.js");

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

function A() {
  let e = (0, a.e7)([b.Z], () => b.Z.getGuild());
  return null == e ? null : (0, r.jsx)(L, {
    guild: e
  })
}

function L(e) {
  let {
    guild: t
  } = e, b = t.id, A = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()), L = (0, N.Z)(b), {
    hasChanges: k,
    hasConfiguredAnythingForCurrentStep: G,
    hasErrors: M
  } = (0, a.cj)([C.Z], () => ({
    hasChanges: C.Z.hasChanges(),
    hasConfiguredAnythingForCurrentStep: C.Z.hasConfiguredAnythingForCurrentStep(),
    hasErrors: C.Z.hasErrors()
  })), U = (0, a.e7)([C.Z], () => {
    let e = (0, y.lg)(A);
    return null != e && !C.Z.isEducationUpsellDismissed(e)
  }), B = (0, u.ZP)(), F = i.useRef(null), [{
    spring: H
  }, W] = (0, d.q_F)(() => ({
    spring: 0
  }), "animate-always");
  i.useEffect(() => {
    function e() {
      W({
        spring: 1,
        config: l.config.gentle
      }), W({
        spring: 0,
        config: l.config.gentle,
        delay: 1e3
      })
    }
    return m.S.subscribe(P.CkL.EMPHASIZE_NOTICE, e), () => {
      m.S.unsubscribe(P.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [W]);
  let z = (0, d.dQu)(s.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
    V = (0, d.dQu)(s.Z.unsafe_rawColors.PRIMARY_160).hex(),
    K = (0, c.wj)(B) ? z : V,
    Y = H.to({
      range: [0, 1],
      output: [K, (0, d.dQu)(s.Z.colors.STATUS_DANGER).hex()]
    });
  if (L) {
    if (A === y.PG.DEFAULT_CHANNELS) return (0, r.jsx)(I.j, {});
    else if (A === y.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(_.Zm, {});
    else if (A === y.PG.HOME_SETTINGS) return (0, r.jsx)(T.Z, {});
    else if (A === y.PG.CONNECTIONS) return (0, r.jsx)(S.u, {});
    else if ((A === y.PG.LANDING || A === y.PG.REVIEW) && j.Z.hasChanges()) return (0, r.jsx)(T.Z, {})
  }
  let q = A === y.xh[y.xh.length - 1],
    X = async () => {
      let e = O.Z.advancedMode;
      if (k) try {
        if (A === y.PG.DEFAULT_CHANNELS) await (0, p.DO)(t).then(() => e ? (0, v.rS)(t, {
          ignoreDefaultPrompt: true
        }) : Promise.resolve());
        else if (A === y.PG.CUSTOMIZATION_QUESTIONS) await (0, v.rS)(t, {
          ignoreDefaultPrompt: true
        });
        else if (A === y.PG.HOME_SETTINGS) {
          let e = j.Z.getSettings();
          await (0, x.oo)(t.id, e)
        }
      } catch (e) {
        returnfalse
      }
      returntrue
    }, J = async () => {
      f.default.track(P.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, D(R({}, (0, g.hH)(b)), {
        step: y.PG[A],
        back: false,
        skip: !k
      })), (0, h.Nb)((0, y.lg)(A)), await X() && (0, h.IG)(b, A)
    }, Q = async () => {
      f.default.track(P.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, D(R({}, (0, g.hH)(b)), {
        step: y.PG[A],
        back: true,
        skip: false
      })), await X() && (0, h.Wy)(b, A)
    }, $ = null;
  U && (A === y.PG.SAFETY_CHECK ? $ = (0, r.jsx)(E.j7, {}) : A === y.PG.DEFAULT_CHANNELS ? $ = (0, r.jsx)(E.Io, {}) : A === y.PG.CUSTOMIZATION_QUESTIONS ? $ = (0, r.jsx)(E.cZ, {}) : A === y.PG.HOME_SETTINGS && ($ = (0, r.jsx)(E.g6, {})));
  let ee = (0, r.jsx)("div", {
      className: U ? Z.hidden : true,
      children: (0, r.jsx)(d.Button, {
        size: "sm",
        variant: "secondary",
        text: w.intl.string(w.t["13/7kX"]),
        icon: d.whL,
        iconPosition: "start",
        onClick: Q,
        disabled: U || M
      })
    }),
    et = (0, r.jsx)(d.Button, {
      size: "sm",
      variant: G ? "primary" : "secondary",
      text: G ? w.intl.string(w.t.PDTjLN) : w.intl.string(w.t["5Wxrcd"]),
      icon: d.ZSh,
      iconPosition: "end",
      onClick: J,
      disabled: U || M
    });
  return (0, r.jsx)(o.W, {
    component: "div",
    children: (0, r.jsx)(d.oXn, {
      className: Z.noticeRegion,
      children: (0, r.jsx)(l.animated.div, {
        className: Z.container,
        style: {
          backgroundColor: Y
        },
        children: (0, r.jsxs)("div", {
          className: Z.flexContainer,
          ref: F,
          children: [U ? (0, r.jsxs)("div", {
            className: Z.educationUpsellRoot,
            children: [(0, r.jsx)("img", {
              className: Z.wumpus,
              src: n(33631),
              alt: "wumpus"
            }), (0, r.jsxs)("div", {
              className: Z.educationUpsell,
              children: [$, (0, r.jsx)("div", {
                className: Z.educationUpsellArrow
              })]
            })]
          }) : null, (0, r.jsx)(d.JcV, {
            containerRef: F,
            children: (0, r.jsxs)("div", {
              className: Z.actions,
              children: [ee, (0, r.jsxs)("div", {
                className: Z.next,
                children: [M ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: w.intl.string(w.t.DhYsPL)
                }) : null, q ? null : et]
              })]
            })
          })]
        })
      })
    })
  })
}