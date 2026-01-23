/** Chunk was on web.js **/
/** chunk id: 162097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk318346 = require("./318346.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk186541 = require("./186541.js"),
  Chunk266770 = require("./266770.js"),
  Chunk268920 = require("./268920.js"),
  Chunk633217 = require("./633217.js");
let b = () => {
    let e = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, r.jsx)("div", {
      className: m.s,
      children: e ? (0, r.jsx)("img", {
        src: E.A,
        className: m.Cb,
        alt: "Orb"
      }) : (0, r.jsxs)(d.A, {
        autoPlay: true,
        loop: true,
        className: m.Cb,
        children: [(0, r.jsx)("source", {
          src: y.A,
          type: "video/webm"
        }), (0, r.jsx)("img", {
          src: E.A,
          className: m.Cb,
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
      linkPreText: o = h.intl.string(h.t["5qZv9E"]),
      linkText: u = h.intl.string(h.t.XRdyjz)
    } = e, d = i.useCallback(() => {
      null != a && (0, p.Y)({
        pageType: a,
        sectionType: _.JJy.ORBS_BALANCE_MENU,
        ctaObject: _.ZSU.ORBS_LEARN_MORE_LINK
      })
    }, [a]);
    return (0, r.jsxs)("div", {
      className: s()(m.kL, g.O),
      children: [(0, r.jsx)(b, {}), (0, r.jsx)(l.$nd, {
        text: t,
        variant: "primary",
        size: "sm",
        onClick: n,
        fullWidth: true
      }), (0, r.jsxs)("div", {
        className: m.kx,
        children: [true !== o && (0, r.jsxs)(c.Text, {
          variant: "text-xs/normal",
          className: m.D5,
          children: [o, "\xa0"]
        }), (0, r.jsx)(c.MzZ, {
          target: "_blank",
          rel: "author",
          href: f.A.getArticleURL(_.MVz.ORBS_FAQ),
          className: m.CU,
          onClick: d,
          children: u
        })]
      })]
    })
  }