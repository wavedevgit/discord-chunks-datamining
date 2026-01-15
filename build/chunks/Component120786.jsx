/** Chunk was on web.js **/
/** chunk id: 120786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk507808 = require("./507808.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226880 = require("./226880.js"),
  Chunk36764 = require("./36764.js"),
  Chunk73909 = require("./73909.js"),
  Chunk479656 = require("./479656.js");
let y = () => {
    let e = (0, s.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, r.jsx)("div", {
      className: m.assetContainer,
      children: e ? (0, r.jsx)("img", {
        src: E.Z,
        className: m.orbAsset,
        alt: "Orb"
      }) : (0, r.jsxs)(d.Z, {
        autoPlay: true,
        loop: true,
        className: m.orbAsset,
        children: [(0, r.jsx)("source", {
          src: b.Z,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: E.Z,
          className: m.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  O = e => {
    let {
      ctaText: t,
      ctaOnClick: n,
      analyticsPage: a,
      linkPreText: s = h.intl.string(h.t["5qZv9E"]),
      linkText: u = h.intl.string(h.t.XRdyjz)
    } = e, d = i.useCallback(() => {
      null != a && (0, p.Y)({
        pageType: a,
        sectionType: _.jXE.ORBS_BALANCE_MENU,
        ctaObject: _.qAy.ORBS_LEARN_MORE_LINK
      })
    }, [a]);
    return (0, r.jsxs)("div", {
      className: o()(m.container, g.baseCardOutline),
      children: [(0, r.jsx)(y, {}), (0, r.jsx)(l.zxk, {
        text: t,
        variant: "primary",
        size: "sm",
        onClick: n,
        fullWidth: true
      }), (0, r.jsxs)("div", {
        className: m.linkContainer,
        children: [true !== s && (0, r.jsxs)(c.Text, {
          variant: "text-xs/normal",
          className: m.linkPreText,
          children: [s, "\xa0"]
        }), (0, r.jsx)(c.eee, {
          target: "_blank",
          rel: "author",
          href: f.Z.getArticleURL(_.BhN.ORBS_FAQ),
          className: m.learnMoreLink,
          onClick: d,
          children: u
        })]
      })]
    })
  }