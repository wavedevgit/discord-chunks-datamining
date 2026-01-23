/** Chunk was on web.js **/
/** chunk id: 938396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
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
  Chunk309954 = require("./309954.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk474090 = require("./474090.js"),
  Chunk385243 = require("./385243.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125634 = require("./125634.js"),
  Chunk268920 = require("./268920.js"),
  Chunk633217 = require("./633217.js"),
  Chunk909340 = require("./909340.js");
let C = () => {
    let e = (0, s.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)("div", {
      className: A.s,
      children: e ? (0, r.jsx)("img", {
        src: I.A,
        className: A.Cb,
        alt: "Orb"
      }) : (0, r.jsxs)(d.A, {
        autoPlay: true,
        loop: true,
        className: A.Cb,
        children: [(0, r.jsx)("source", {
          src: S.A,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: I.A,
          className: A.Cb,
          alt: "Orb"
        })]
      })
    })
  },
  N = 4100;

function w(e) {
  let {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: I,
    ctaText: S,
    ctaOnClick: w
  } = e, R = (0, s.bG)([u.A], () => u.A.useReducedMotion), P = (0, s.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)), D = (0, s.bG)([h.default], () => h.default.getCurrentUser()), {
    balance: x
  } = (0, _.W)(), L = i.useMemo(() => {
    let e = (0, g.YE)(D, y.PremiumTypes.TIER_2),
      t = !(0, g.ki)(D);
    if (!f.A.passesGeneralUIInvariant(p.W.NITRO)) return null;
    if (t) return (0, r.jsx)(c.EYj, {
      variant: "text-xs/normal",
      color: "text-default",
      children: v.intl.format(O.default.cjEl8a, {
        deepLinkToNitroOrbs: () => {}
      })
    });
    if (e && null != P) {
      let e = (0, a.default)(new Date(P.next_reward_date), new Date);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.EYj, {
          variant: "text-xs/normal",
          color: "text-default",
          children: v.intl.format(O.default["AvL/At"], {
            days: Math.max(1, e),
            deepLinkToNitroOrbs: () => {}
          })
        }), (0, r.jsx)(E.A, {})]
      })
    }
    return null
  }, [D, P]);
  return (0, r.jsxs)(o.x, {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: I,
    position: "bottom",
    gradientColor: "blue",
    modal: true,
    closeOnClickOutside: true,
    children: [(null != x ? x : 0) >= N && (0, r.jsx)(d.A, {
      autoPlay: !R,
      loop: !R,
      muted: true,
      playsInline: true,
      tabIndex: false,
      className: A.yG,
      src: T.A
    }), (0, r.jsxs)("div", {
      className: A.Qs,
      children: [(0, r.jsx)(l.q, {
        onClick: I
      }), (0, r.jsxs)("div", {
        className: A.hQ,
        children: [(0, r.jsx)(C, {}), (0, r.jsxs)("div", {
          className: A.y$,
          children: [(0, r.jsxs)("div", {
            className: A.E2,
            children: [(0, r.jsx)(c.EYj, {
              variant: "display-lg",
              className: A.K,
              children: null != x ? x : 0
            }), (null != x ? x : 0) > 0 && (0, r.jsx)(c.EYj, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: v.intl.string(O.default.KclK9z)
            })]
          }), L]
        }), (0, r.jsx)(c.$nd, {
          text: S,
          variant: "primary",
          size: "sm",
          onClick: w,
          fullWidth: true
        }), (0, r.jsx)(c.EYj, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: A.CU,
          children: v.intl.format(O.default.fhAVek, {
            helpdeskArticle: m.A.getArticleURL(b.MVz.ORBS_FAQ)
          })
        })]
      })]
    })]
  })
}