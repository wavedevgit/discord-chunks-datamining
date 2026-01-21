/** Chunk was on web.js **/
/** chunk id: 627725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk995638 = require("./995638.js"),
  Chunk442837 = require("./442837.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk468208 = require("./468208.js"),
  Chunk165299 = require("./165299.js"),
  Chunk790542 = require("./790542.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk111361 = require("./111361.js"),
  Chunk713422 = require("./713422.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk618435 = require("./618435.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk900221 = require("./900221.js"),
  Chunk73909 = require("./73909.js"),
  Chunk479656 = require("./479656.js"),
  Chunk900303 = require("./900303.js");
let A = () => {
    let e = (0, o.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)("div", {
      className: S.assetContainer,
      children: e ? (0, r.jsx)("img", {
        src: I.Z,
        className: S.orbAsset,
        alt: "Orb"
      }) : (0, r.jsxs)(d.Z, {
        autoPlay: true,
        loop: true,
        className: S.orbAsset,
        children: [(0, r.jsx)("source", {
          src: T.Z,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: I.Z,
          className: S.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  N = 4100;

function P(e) {
  let {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: I,
    ctaText: T,
    ctaOnClick: P
  } = e, w = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), R = (0, o.e7)([f.Z], () => f.Z.getRewardForProgram(p.f.NITRO)), D = (0, o.e7)([h.default], () => h.default.getCurrentUser()), {
    balance: x
  } = (0, _.A)(), L = i.useMemo(() => {
    let e = (0, g.M5)(D, b.PremiumTypes.TIER_2),
      t = !(0, g.I5)(D);
    if (!f.Z.passesGeneralUIInvariant(p.f.NITRO)) return null;
    if (t) return (0, r.jsx)(c.xvT, {
      variant: "text-xs/normal",
      color: "text-default",
      children: v.intl.format(O.default.cjEl8a, {
        deepLinkToNitroOrbs: () => {}
      })
    });
    if (e && null != R) {
      let e = (0, a.default)(new Date(R.next_reward_date), new Date);
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.xvT, {
          variant: "text-xs/normal",
          color: "text-default",
          children: v.intl.format(O.default["AvL/At"], {
            days: Math.max(1, e),
            deepLinkToNitroOrbs: () => {}
          })
        }), (0, r.jsx)(E.Z, {})]
      })
    }
    return null
  }, [D, R]);
  return (0, r.jsxs)(s.m, {
    targetElementRef: t,
    shouldShow: n,
    onRequestClose: I,
    position: "bottom",
    gradientColor: "blue",
    modal: true,
    closeOnClickOutside: true,
    children: [(null != x ? x : 0) >= N && (0, r.jsx)(d.Z, {
      autoPlay: !w,
      loop: !w,
      muted: true,
      playsInline: true,
      tabIndex: false,
      className: S.videoBackground,
      src: C.Z
    }), (0, r.jsxs)("div", {
      className: S.content,
      children: [(0, r.jsx)(l.u, {
        onClick: I
      }), (0, r.jsxs)("div", {
        className: S.contentContainer,
        children: [(0, r.jsx)(A, {}), (0, r.jsxs)("div", {
          className: S.rewardsContainer,
          children: [(0, r.jsxs)("div", {
            className: S.balanceContainer,
            children: [(0, r.jsx)(c.xvT, {
              variant: "display-lg",
              className: S.balanceText,
              children: null != x ? x : 0
            }), (null != x ? x : 0) > 0 && (0, r.jsx)(c.xvT, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: v.intl.string(O.default.KclK9z)
            })]
          }), L]
        }), (0, r.jsx)(c.zxk, {
          text: T,
          variant: "primary",
          size: "sm",
          onClick: P,
          fullWidth: true
        }), (0, r.jsx)(c.xvT, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: S.learnMoreLink,
          children: v.intl.format(O.default.fhAVek, {
            helpdeskArticle: m.Z.getArticleURL(y.BhN.ORBS_FAQ)
          })
        })]
      })]
    })]
  })
}