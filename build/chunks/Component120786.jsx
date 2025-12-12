/** Chunk was on web.js **/
/** chunk id: 120786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk507808 = require("./507808.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk97127 = require("./97127.js"),
  Chunk665923 = require("./665923.js"),
  Chunk477154 = require("./477154.js"),
  Chunk387888 = require("./387888.js");
let y = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk54381.jsx)("div", {
      className: Chunk97127.assetContainer,
      children: module ? (0, Chunk54381.jsx)("img", {
        src: Chunk477154.Z,
        className: Chunk97127.orbAsset,
        alt: "Orb"
      }) : (0, Chunk54381.jsxs)(Chunk70097.Z, {
        autoPlay: true,
        loop: true,
        className: Chunk97127.orbAsset,
        children: [(0, Chunk54381.jsx)("source", {
          src: Chunk387888.Z,
          type: "video/webm"
        }), (0, Chunk54381.jsx)("img", {
          src: Chunk477154.Z,
          className: Chunk97127.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  O = e => {
    let {
      ctaText: t,
      ctaOnClick: n,
      analyticsPage: o,
      linkPreText: s = m.intl.string(m.t["5qZv9E"]),
      linkText: u = m.intl.string(m.t.XRdyjz)
    } = e, d = i.useCallback(() => {
      null != o && (0, p.Y)({
        pageType: o,
        sectionType: _.jXE.ORBS_BALANCE_MENU,
        ctaObject: _.qAy.ORBS_LEARN_MORE_LINK
      })
    }, [o]);
    return (0, r.jsxs)("div", {
      className: a()(h.container, g.baseCardOutline),
      children: [(0, r.jsx)(y, {}), (0, r.jsx)(l.zxk, {
        text: t,
        variant: "primary",
        size: "sm",
        onClick: n,
        fullWidth: true
      }), (0, r.jsxs)("div", {
        className: h.linkContainer,
        children: [true !== s && (0, r.jsxs)(c.Text, {
          variant: "text-xs/normal",
          className: h.linkPreText,
          children: [s, "\xa0"]
        }), (0, r.jsx)(c.Anchor, {
          target: "_blank",
          rel: "author",
          href: f.Z.getArticleURL(_.BhN.ORBS_FAQ),
          className: h.learnMoreLink,
          onClick: d,
          children: u
        })]
      })]
    })
  }