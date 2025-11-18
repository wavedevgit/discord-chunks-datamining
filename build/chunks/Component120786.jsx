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
  Chunk270469 = require("./270469.js"),
  Chunk892260 = require("./892260.js"),
  Chunk477154 = require("./477154.js"),
  Chunk387888 = require("./387888.js");
let y = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk54381.jsx)("div", {
      className: Chunk270469.assetContainer,
      children: module ? (0, Chunk54381.jsx)("img", {
        src: Chunk477154.Z,
        className: Chunk270469.orbAsset,
        alt: "Orb"
      }) : (0, Chunk54381.jsxs)(Chunk70097.Z, {
        autoPlay: true,
        loop: true,
        className: Chunk270469.orbAsset,
        children: [(0, Chunk54381.jsx)("source", {
          src: Chunk387888.Z,
          type: "video/webm"
        }), (0, Chunk54381.jsx)("img", {
          src: Chunk477154.Z,
          className: Chunk270469.orbAsset,
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
      null != a && (0, _.Y)({
        pageType: a,
        sectionType: p.jXE.ORBS_BALANCE_MENU,
        ctaObject: p.qAy.ORBS_LEARN_MORE_LINK
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
        }), (0, r.jsx)(c.Anchor, {
          target: "_blank",
          rel: "author",
          href: f.Z.getArticleURL(p.BhN.ORBS_FAQ),
          className: m.learnMoreLink,
          onClick: d,
          children: u
        })]
      })]
    })
  }