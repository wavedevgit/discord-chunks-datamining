/** Chunk was on web.js **/
/** chunk id: 638970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk468363 = require("./468363.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk220410 = require("./220410.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk168463 = require("./168463.jsx"),
  Chunk151545 = require("./151545.jsx"),
  Chunk769140 = require("./769140.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31948 = require("./31948.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = 250,
  k = 24;

function M(e, t) {
  switch (t.type) {
    case "MEASUREMENT_COMPLETE":
      return L(D({}, e), {
        animationPhase: "ready",
        height: t.height
      });
    case "START_EXPAND_ANIMATION":
      return L(D({}, e), {
        animationPhase: "animating",
        height: t.height
      });
    case "ANIMATION_COMPLETE":
      return L(D({}, e), {
        animationPhase: "done",
        height: "auto"
      });
    default:
      return (0, g.vE)(t)
  }
}
let U = {
  animationPhase: "awaitingInput",
  height: "auto"
};

function G(e) {
  let {
    user: t,
    currentUser: n,
    guildId: a,
    onOpenUserProfileModal: g,
    onClose: w
  } = e, x = (0, _.Dt)(), {
    analyticsLocations: L
  } = (0, f.ZP)(), {
    trackUserProfileAction: G
  } = (0, E.KZ)(), {
    live: B,
    stream: Z
  } = (0, b.Z)(t.id), {
    voiceChannel: F,
    voiceActivity: V
  } = (0, y.Z)({
    userId: t.id,
    guildId: a
  }), H = t.id === n.id, Y = (0, s.e7)([m.Z, h.Z], () => {
    let e = H ? m.Z.getStatus() : h.Z.getStatus(t.id, a);
    return e === N.Sk.OFFLINE || e === N.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: W
  } = (0, d.U)({
    location: "UserProfileStackedActivity"
  }), K = W && null == Z && null == V && null != F, z = (0, O.yi)(), q = (null == z ? true : z.interactionSource) === A.n_.ACTIVITY, X = i.useRef(null), Q = i.useRef(null), J = i.useRef(null), $ = i.useRef(null), [ee, et] = i.useReducer(M, U), {
    height: en,
    animationPhase: er
  } = ee, ei = "awaitingInput" !== er, ea = "animating" === er || "done" === er, eo = (0, p.P6)("UserProfileStackedActivity"), es = [], el = {
    user: t,
    currentUser: n,
    className: P.card,
    onClose: w
  };
  null != Z && es.push((0, r.jsx)(T.Z, D({
    stream: Z
  }, el), "stream")), B.forEach((e, t) => {
    es.push((0, r.jsx)(I.Z, D({
      activity: e
    }, el), "live-".concat(t)))
  }), K && es.push((0, r.jsx)(S.Z, D({
    voiceChannel: F
  }, el), "voice"));
  let [ec, ...eu] = es, ed = eu.length > 0, ef = null != g && ed ? (0, r.jsx)(l.zx, {
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.NONE,
    color: l.zx.Colors.TRANSPARENT,
    className: o()(P.viewAllButton, ea && P.isShown),
    onClick: () => {
      G({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: L
      }), g({
        section: A.oh.ACTIVITY
      })
    },
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: R.intl.string(R.t.pD1L1t)
    })
  }) : null, e_ = i.useCallback(() => {
    if (null == X.current || null == J.current) return;
    G({
      action: "PRESS_SHOW_MORE_ACTIVITY",
      analyticsLocations: L
    });
    let e = X.current.getBoundingClientRect().height,
      t = J.current.getBoundingClientRect().height;
    et({
      type: "MEASUREMENT_COMPLETE",
      height: e
    }), requestAnimationFrame(() => {
      et({
        type: "START_EXPAND_ANIMATION",
        height: e + t - k
      }), $.current = setTimeout(() => {
        var e;
        et({
          type: "ANIMATION_COMPLETE",
          height: "auto"
        }), null == (e = Q.current) || e.focus()
      }, j)
    })
  }, [L, G]);
  if ((0, u.zq)(() => {
      null != $.current && window.clearTimeout($.current)
    }), Y) return null;
  let ep = B.some(e => e.type === C.IIU.PLAYING),
    eh = H && eo && !ep;
  return 0 === es.length ? eh ? (0, r.jsx)(v.Z, {}) : null : (0, r.jsxs)(r.Fragment, {
    children: [eh && (0, r.jsx)(v.Z, {}), (0, r.jsxs)("section", {
      "aria-labelledby": x,
      children: [(0, r.jsx)(c.nn4, {
        children: (0, r.jsx)(c.H, {
          id: x,
          children: R.intl.string(R.t.J6STd3)
        })
      }), (0, r.jsxs)("div", {
        ref: X,
        className: P.activityContainer,
        style: {
          height: "auto" !== en ? "".concat(en, "px") : en
        },
        children: [(0, r.jsxs)("ul", {
          ref: Q,
          className: P.cardsList,
          "aria-labelledby": x,
          tabIndex: false,
          children: [(0, r.jsxs)("li", {
            className: o()(P.firstCardContainer, !ea && eu.length > 0 && P.hasShowMoreButton, q && P.isInteracting),
            children: [ec, ed && "done" !== er && (0, r.jsx)("div", {
              className: P.showMoreButtonContainer,
              children: (0, r.jsx)(l.zx, {
                look: l.zx.Looks.BLANK,
                size: l.zx.Sizes.NONE,
                color: l.zx.Colors.TRANSPARENT,
                className: o()(P.showMoreButton, ea && P.isHidden),
                onClick: e_,
                children: (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  color: "none",
                  children: R.intl.format(R.t.wv8Q7u, {
                    activitiesCount: eu.length
                  })
                })
              })
            })]
          }), ed && ei && eu.map((e, t) => (0, r.jsx)("li", {
            className: o()(P.remainingCardContainer, ea && P.isShown),
            children: e
          }, "activity-".concat(t)))]
        }), ed && ei && ef]
      }), ed && (0, r.jsxs)("div", {
        ref: J,
        className: o()(P.cardsList, P.remainingCardsCopyToMeasure),
        children: [eu, ef]
      })]
    })]
  })
}