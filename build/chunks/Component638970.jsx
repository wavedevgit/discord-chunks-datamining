/** Chunk was on web.js **/
/** chunk id: 638970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
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
  Chunk769140 = require("./769140.jsx"),
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

function k(e) {
  let {
    user: t,
    currentUser: n,
    guildId: a,
    onOpenUserProfileModal: m,
    onClose: N
  } = e, P = (0, _.Dt)(), {
    analyticsLocations: w
  } = (0, f.ZP)(), {
    trackUserProfileAction: k
  } = (0, g.KZ)(), {
    live: M,
    stream: U
  } = (0, E.Z)(t.id), {
    voiceChannel: G,
    voiceActivity: B
  } = (0, b.Z)({
    userId: t.id,
    guildId: a
  }), Z = t.id === n.id, V = (0, s.e7)([h.Z, p.Z], () => {
    let e = Z ? h.Z.getStatus() : p.Z.getStatus(t.id, a);
    return e === S.Sk.OFFLINE || e === S.Sk.INVISIBLE
  }), {
    voiceActivityStatusEnabled: F
  } = (0, d.U)({
    location: "UserProfileStackedActivity"
  }), H = F && null == U && null == B && null != G, Y = (0, y.yi)(), W = (null == Y ? true : Y.interactionSource) === T.n_.ACTIVITY, K = i.useRef(null), z = i.useRef(null), q = i.useRef(null), X = i.useRef(null), [Q, J] = i.useReducer(L, j), {
    height: $,
    animationPhase: ee
  } = Q, et = "awaitingInput" !== ee, en = "animating" === ee || "done" === ee, er = [], ei = {
    user: t,
    currentUser: n,
    className: C.card,
    onClose: N
  };
  null != U && er.push((0, r.jsx)(v.Z, R({
    stream: U
  }, ei), "stream")), M.forEach((e, t) => {
    er.push((0, r.jsx)(O.Z, R({
      activity: e
    }, ei), "live-".concat(t)))
  }), H && er.push((0, r.jsx)(I.Z, R({
    voiceChannel: G
  }, ei), "voice"));
  let [ea, ...eo] = er, es = eo.length > 0, el = null != m && es ? (0, r.jsx)(l.zx, {
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.NONE,
    color: l.zx.Colors.TRANSPARENT,
    className: o()(C.viewAllButton, en && C.isShown),
    onClick: () => {
      k({
        action: "PRESS_VIEW_PROFILE",
        analyticsLocations: w
      }), m({
        section: T.oh.ACTIVITY
      })
    },
    children: (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: A.intl.string(A.t.pD1L1t)
    })
  }) : null, ec = i.useCallback(() => {
    if (null == K.current || null == q.current) return;
    k({
      action: "PRESS_SHOW_MORE_ACTIVITY",
      analyticsLocations: w
    });
    let e = K.current.getBoundingClientRect().height,
      t = q.current.getBoundingClientRect().height;
    J({
      type: "MEASUREMENT_COMPLETE",
      height: e
    }), requestAnimationFrame(() => {
      J({
        type: "START_EXPAND_ANIMATION",
        height: e + t - x
      }), X.current = setTimeout(() => {
        var e;
        J({
          type: "ANIMATION_COMPLETE",
          height: "auto"
        }), null == (e = z.current) || e.focus()
      }, D)
    })
  }, [w, k]);
  return ((0, u.zq)(() => {
    null != X.current && window.clearTimeout(X.current)
  }), V || 0 === er.length) ? null : (0, r.jsxs)("section", {
    "aria-labelledby": P,
    children: [(0, r.jsx)(c.nn4, {
      children: (0, r.jsx)(c.H, {
        id: P,
        children: A.intl.string(A.t.J6STd3)
      })
    }), (0, r.jsxs)("div", {
      ref: K,
      className: C.activityContainer,
      style: {
        height: "auto" !== $ ? "".concat($, "px") : $
      },
      children: [(0, r.jsxs)("ul", {
        ref: z,
        className: C.cardsList,
        "aria-labelledby": P,
        tabIndex: false,
        children: [(0, r.jsxs)("li", {
          className: o()(C.firstCardContainer, !en && eo.length > 0 && C.hasShowMoreButton, W && C.isInteracting),
          children: [ea, es && "done" !== ee && (0, r.jsx)("div", {
            className: C.showMoreButtonContainer,
            children: (0, r.jsx)(l.zx, {
              look: l.zx.Looks.BLANK,
              size: l.zx.Sizes.NONE,
              color: l.zx.Colors.TRANSPARENT,
              className: o()(C.showMoreButton, en && C.isHidden),
              onClick: ec,
              children: (0, r.jsx)(c.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: A.intl.format(A.t.wv8Q7u, {
                  activitiesCount: eo.length
                })
              })
            })
          })]
        }), es && et && eo.map((e, t) => (0, r.jsx)("li", {
          className: o()(C.remainingCardContainer, en && C.isShown),
          children: e
        }, "activity-".concat(t)))]
      }), es && et && el]
    }), es && (0, r.jsxs)("div", {
      ref: q,
      className: o()(C.cardsList, C.remainingCardsCopyToMeasure),
      children: [eo, el]
    })]
  })
}