/** Chunk was on web.js **/
/** chunk id: 938396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk892227 = require("./892227.js"),
  Chunk311907 = require("./311907.js"),
  Chunk964892 = require("./964892.jsx"),
  Chunk916845 = require("./916845.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk895944 = require("./895944.js"),
  Chunk649032 = require("./649032.js"),
  Chunk976860 = require("./976860.js"),
  Chunk309954 = require("./309954.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk385243 = require("./385243.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk901123 = require("./901123.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125634 = require("./125634.js"),
  Chunk268920 = require("./268920.js"),
  Chunk633217 = require("./633217.js"),
  Chunk909340 = require("./909340.js");
let w = () => {
    let e = (0, s.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)("div", {
      className: S.s,
      children: e ? (0, r.jsx)("img", {
        src: T.A,
        className: S.Cb,
        alt: "Orb"
      }) : (0, r.jsxs)(d.A, {
        autoPlay: true,
        loop: true,
        className: S.Cb,
        children: [(0, r.jsx)("source", {
          src: C.A,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: T.A,
          className: S.Cb,
          alt: "Orb"
        })]
      })
    })
  },
  R = 4100;

function P() {
  (0, _.pX)("".concat(v.BV.NITRO_HOME, "?section=orbs"))
}

function D(e) {
  let {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: _,
    ctaText: v,
    ctaOnClick: T
  } = e, C = (0, s.bG)([u.A], () => u.A.useReducedMotion), D = (0, s.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)), x = (0, s.bG)([m.default], () => m.default.getCurrentUser()), {
    balance: L
  } = (0, h.W)(), j = i.useMemo(() => {
    let e = (0, E.YE)(x, b.PremiumTypes.TIER_2),
      t = !(0, E.ki)(x);
    if (!f.A.passesGeneralUIInvariant(p.W.NITRO)) return null;
    if (t) return (0, r.jsx)(c.EYj, {
      variant: "text-xs/normal",
      color: "text-default",
      children: I.intl.format(A.default.cjEl8a, {
        deepLinkToNitroOrbs: P
      })
    });
    if (e && null != D) {
      let e = (0, a.default)(new Date(D.next_reward_date), new Date);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.EYj, {
          variant: "text-xs/normal",
          color: "text-default",
          children: I.intl.format(A.default["AvL/At"], {
            days: Math.max(1, e),
            deepLinkToNitroOrbs: P
          })
        }), (0, r.jsx)(y.A, {})]
      })
    }
    return null
  }, [x, D]);
  return (0, r.jsxs)(o.x, {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: _,
    position: "bottom",
    gradientColor: "blue",
    modal: true,
    closeOnClickOutside: true,
    children: [(null != L ? L : 0) >= R && (0, r.jsx)(d.A, {
      autoPlay: !C,
      loop: !C,
      muted: true,
      playsInline: true,
      tabIndex: false,
      className: S.yG,
      src: N.A
    }), (0, r.jsxs)("div", {
      className: S.Qs,
      children: [(0, r.jsx)(l.q, {
        onClick: _
      }), (0, r.jsxs)("div", {
        className: S.hQ,
        children: [(0, r.jsx)(w, {}), (0, r.jsxs)("div", {
          className: S.y$,
          children: [(0, r.jsxs)("div", {
            className: S.E2,
            children: [(0, r.jsx)(c.EYj, {
              variant: "display-lg",
              className: S.K,
              children: null != L ? L : 0
            }), (null != L ? L : 0) > 0 && (0, r.jsx)(c.EYj, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: I.intl.string(A.default.KclK9z)
            })]
          }), j]
        }), (0, r.jsx)(c.$nd, {
          text: v,
          variant: "primary",
          size: "sm",
          onClick: T,
          fullWidth: true
        }), (0, r.jsx)(c.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: S.CU,
          children: I.intl.format(A.default.fhAVek, {
            helpdeskArticle: g.A.getArticleURL(O.MVz.ORBS_FAQ)
          })
        })]
      })]
    })]
  })
}