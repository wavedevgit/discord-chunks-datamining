/** Chunk was on 29679 **/
/** chunk id: 730910, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk13941 = require("./13941.js"),
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
  Chunk966301 = require("./966301.jsx"),
  Chunk976269 = require("./976269.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk360635 = require("./360635.js");

function Z(e) {
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

function R(e, t) {
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

function D() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild());
  return null == module ? null : (0, Chunk951288.jsx)(A, {
    guild: module
  })
}

function A(e) {
  let {
    guild: t
  } = e, f = t.id, D = (0, a.e7)([C.Z], () => C.Z.getCurrentPage()), A = (0, y.Z)(f), {
    hasChanges: L,
    hasConfiguredAnythingForCurrentStep: k,
    hasErrors: G
  } = (0, a.cj)([C.Z], () => ({
    hasChanges: C.Z.hasChanges(),
    hasConfiguredAnythingForCurrentStep: C.Z.hasConfiguredAnythingForCurrentStep(),
    hasErrors: C.Z.hasErrors()
  })), M = (0, a.e7)([C.Z], () => {
    let e = (0, O.lg)(D);
    return null != e && !C.Z.isEducationUpsellDismissed(e)
  }), U = (0, u.ZP)(), B = i.useRef(null), [{
    spring: F
  }, H] = (0, d.q_F)(() => ({
    spring: 0
  }), "animate-always");
  i.useEffect(() => {
    function e() {
      H({
        spring: 1,
        config: l.config.gentle
      }), H({
        spring: 0,
        config: l.config.gentle,
        delay: 1e3
      })
    }
    return p.S.subscribe(T.CkL.EMPHASIZE_NOTICE, e), () => {
      p.S.unsubscribe(T.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [H]);
  let W = (0, d.dQu)(s.Z.colors.BACKGROUND_SURFACE_HIGH).hex(),
    z = (0, d.dQu)(s.Z.unsafe_rawColors.PRIMARY_160).hex(),
    V = (0, c.wj)(U) ? W : z,
    K = F.to({
      range: [0, 1],
      output: [V, (0, d.dQu)(s.Z.colors.STATUS_DANGER).hex()]
    });
  if (A) {
    if (D === O.PG.DEFAULT_CHANNELS) return (0, r.jsx)(N.j, {});
    else if (D === O.PG.CUSTOMIZATION_QUESTIONS) return (0, r.jsx)(I.Zm, {});
    else if (D === O.PG.HOME_SETTINGS) return (0, r.jsx)(S.Z, {});
    else if ((D === O.PG.LANDING || D === O.PG.REVIEW) && j.Z.hasChanges()) return (0, r.jsx)(S.Z, {})
  }
  let Y = D === O.xh[O.xh.length - 1],
    q = async () => {
      let e = _.Z.advancedMode;
      if (L) try {
        if (D === O.PG.DEFAULT_CHANNELS) await (0, h.DO)(t).then(() => e ? (0, v.rS)(t, {
          ignoreDefaultPrompt: true
        }) : Promise.resolve());
        else if (D === O.PG.CUSTOMIZATION_QUESTIONS) await (0, v.rS)(t, {
          ignoreDefaultPrompt: true
        });
        else if (D === O.PG.HOME_SETTINGS) {
          let e = j.Z.getSettings();
          await (0, x.oo)(t.id, e)
        }
      } catch (e) {
        returnfalse
      }
      returntrue
    }, X = async () => {
      m.default.track(T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, R(Z({}, (0, g.hH)(f)), {
        step: O.PG[D],
        back: false,
        skip: !L
      })), (0, b.Nb)((0, O.lg)(D)), await q() && (0, b.IG)(f, D)
    }, J = async () => {
      m.default.track(T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, R(Z({}, (0, g.hH)(f)), {
        step: O.PG[D],
        back: true,
        skip: false
      })), await q() && (0, b.Wy)(f, D)
    }, Q = null;
  M && (D === O.PG.SAFETY_CHECK ? Q = (0, r.jsx)(E.j7, {}) : D === O.PG.DEFAULT_CHANNELS ? Q = (0, r.jsx)(E.Io, {}) : D === O.PG.CUSTOMIZATION_QUESTIONS ? Q = (0, r.jsx)(E.cZ, {}) : D === O.PG.HOME_SETTINGS && (Q = (0, r.jsx)(E.g6, {})));
  let $ = (0, r.jsx)("div", {
      className: M ? w.hidden : true,
      children: (0, r.jsx)(d.Button, {
        size: "sm",
        variant: "secondary",
        text: P.intl.string(P.t["13/7kX"]),
        icon: d.whL,
        iconPosition: "start",
        onClick: J,
        disabled: M || G
      })
    }),
    ee = (0, r.jsx)(d.Button, {
      size: "sm",
      variant: k ? "primary" : "secondary",
      text: k ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["5Wxrcd"]),
      icon: d.ZSh,
      iconPosition: "end",
      onClick: X,
      disabled: M || G
    });
  return (0, r.jsx)(o.W, {
    component: "div",
    children: (0, r.jsx)(d.oXn, {
      className: w.noticeRegion,
      children: (0, r.jsx)(l.animated.div, {
        className: w.container,
        style: {
          backgroundColor: K
        },
        children: (0, r.jsxs)("div", {
          className: w.flexContainer,
          ref: B,
          children: [M ? (0, r.jsxs)("div", {
            className: w.educationUpsellRoot,
            children: [(0, r.jsx)("img", {
              className: w.wumpus,
              src: n(33631),
              alt: "wumpus"
            }), (0, r.jsxs)("div", {
              className: w.educationUpsell,
              children: [Q, (0, r.jsx)("div", {
                className: w.educationUpsellArrow
              })]
            })]
          }) : null, (0, r.jsx)(d.JcV, {
            containerRef: B,
            children: (0, r.jsxs)("div", {
              className: w.actions,
              children: [$, (0, r.jsxs)("div", {
                className: w.next,
                children: [G ? (0, r.jsx)(d.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: P.intl.string(P.t.DhYsPL)
                }) : null, Y ? null : ee]
              })]
            })
          })]
        })
      })
    })
  })
}