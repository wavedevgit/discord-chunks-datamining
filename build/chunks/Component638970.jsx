/** Chunk was on web.js **/
/** chunk id: 638970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
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
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk823379 = require("./823379.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk369566 = require("./369566.js"),
  Chunk29899 = require("./29899.js"),
  Chunk510659 = require("./510659.jsx"),
  Chunk151545 = require("./151545.jsx"),
  Chunk493043 = require("./493043.jsx"),
  Chunk864141 = require("./864141.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk31948 = require("./31948.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = 250,
  x = 24;

function L(e, t) {
  switch (t.type) {
    case "MEASUREMENT_COMPLETE":
      return w(R({}, e), {
        animationPhase: "ready",
        height: t.height
      });
    case "START_EXPAND_ANIMATION":
      return w(R({}, e), {
        animationPhase: "animating",
        height: t.height
      });
    case "ANIMATION_COMPLETE":
      return w(R({}, e), {
        animationPhase: "done",
        height: "auto"
      });
    default:
      return (0, m.vE)(t)
  }
}
let j = {
  animationPhase: "awaitingInput",
  height: "auto"
};

function M(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: a,
    guildId: m,
    onOpenUserProfileModal: N,
    onClose: P
  } = e, w = (0, _.Dt)(), {
    analyticsLocations: M
  } = (0, f.ZP)(), {
    trackUserProfileAction: k
  } = (0, g.KZ)(), {
    live: U,
    stream: G
  } = (0, E.Z)(t.id), {
    voiceChannel: B,
    voiceActivity: Z
  } = (0, b.Z)({
    userId: t.id,
    guildId: m
  }), V = t.id === n.id, F = (0, s.e7)([h.Z, p.Z], () => {
    let e = V ? h.Z.getStatus() : p.Z.getStatus(t.id, m);
    return e === S.Sk.OFFLINE || e === S.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: H
  } = (0, d.U)({
    location: "UserProfileStackedActivity"
  }), Y = H && null == G && null == Z && null != B, W = (0, y.yi)(), K = (null == W ? true : W.interactionSource) === T.n_.ACTIVITY, z = i.useRef(null), q = i.useRef(null), X = i.useRef(null), Q = i.useRef(null), [J, $] = i.useReducer(L, j), {
    height: ee,
    animationPhase: et
  } = J, en = "awaitingInput" !== et, er = "animating" === et || "done" === et, ei = [], ea = {
    user: t,
    currentUser: n,
    className: C.card,
    onClose: P
  };
  null != G && ei.push((0, r.jsx)(v.Z, R({
    location: "UserProfileStackedActivity",
    stream: G,
    profileGuildId: null == a ? true : a.guildId
  }, ea), "stream")), U.forEach((e, t) => {
    ei.push((0, r.jsx)(O.Z, R({
      activity: e,
      profileGuildId: null == a ? true : a.guildId
    }, ea), "live-".concat(t)))
  }), Y && ei.push((0, r.jsx)(I.Z, R({
    voiceChannel: B
  }, ea), "voice"));
  let [eo, ...es] = ei, el = es.length > 0, ec = null != N && el ? (0, r.jsx)(l.zx, {
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.NONE,
    color: l.zx.Colors.TRANSPARENT,
    className: o()(C.viewAllButton, er && C.isShown),
    onClick: () => {
      k({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: M
      }), N({
        section: T.oh.ACTIVITY
      })
    },
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: A.intl.string(A.t.pD1L1t)
    })
  }) : null, eu = i.useCallback(() => {
    if (null == z.current || null == X.current) return;
    k({
      action: "PRESS_SHOW_MORE_ACTIVITY",
      analyticsLocations: M
    });
    let e = z.current.getBoundingClientRect().height,
      t = X.current.getBoundingClientRect().height;
    $({
      type: "MEASUREMENT_COMPLETE",
      height: e
    }), requestAnimationFrame(() => {
      $({
        type: "START_EXPAND_ANIMATION",
        height: e + t - x
      }), Q.current = setTimeout(() => {
        var e;
        $({
          type: "ANIMATION_COMPLETE",
          height: "auto"
        }), null == (e = q.current) || e.focus()
      }, D)
    })
  }, [M, k]);
  return ((0, u.zq)(() => {
    null != Q.current && window.clearTimeout(Q.current)
  }), F || 0 === ei.length) ? null : (0, r.jsxs)("section", {
    "aria-labelledby": w,
    children: [(0, r.jsx)(c.nn4, {
      children: (0, r.jsx)(c.H, {
        id: w,
        children: A.intl.string(A.t.J6STd3)
      })
    }), (0, r.jsxs)("div", {
      ref: z,
      className: C.activityContainer,
      style: {
        height: "auto" !== ee ? "".concat(ee, "px") : ee
      },
      children: [(0, r.jsxs)("ul", {
        ref: q,
        className: C.cardsList,
        "aria-labelledby": w,
        tabIndex: false,
        children: [(0, r.jsxs)("li", {
          className: o()(C.firstCardContainer, !er && es.length > 0 && C.hasShowMoreButton, K && C.isInteracting),
          children: [eo, el && "done" !== et && (0, r.jsx)("div", {
            className: C.showMoreButtonContainer,
            children: (0, r.jsx)(l.zx, {
              look: l.zx.Looks.BLANK,
              size: l.zx.Sizes.NONE,
              color: l.zx.Colors.TRANSPARENT,
              className: o()(C.showMoreButton, er && C.isHidden),
              onClick: eu,
              children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: A.intl.format(A.t.wv8Q7u, {
                  activitiesCount: es.length
                })
              })
            })
          })]
        }), el && en && es.map((e, t) => (0, r.jsx)("li", {
          className: o()(C.remainingCardContainer, er && C.isShown),
          children: e
        }, "activity-".concat(t)))]
      }), el && en && ec]
    }), el && (0, r.jsxs)("div", {
      ref: X,
      className: o()(C.cardsList, C.remainingCardsCopyToMeasure),
      children: [es, ec]
    })]
  })
}