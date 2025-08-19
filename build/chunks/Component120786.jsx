/** Chunk was on 66181 **/
/** chunk id: 120786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let j = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk951288.jsx)("div", {
      className: Chunk97127.assetContainer,
      children: module ? (0, Chunk951288.jsx)("img", {
        src: Chunk477154.Z,
        className: Chunk97127.orbAsset,
        alt: "Orb"
      }) : (0, Chunk951288.jsxs)(Chunk70097.Z, {
        autoPlay: true,
        loop: true,
        className: Chunk97127.orbAsset,
        children: [(0, Chunk951288.jsx)("source", {
          src: Chunk387888.Z,
          type: "video/webm"
        }), (0, Chunk951288.jsx)("img", {
          src: Chunk477154.Z,
          className: Chunk97127.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  E = e => {
    let {
      ctaText: t,
      ctaOnClick: n,
      analyticsPage: s,
      linkPreText: l = h.intl.string(h.t["5qZv9P"]),
      linkText: d = h.intl.string(h.t.XRdyj4)
    } = e, u = r.useCallback(() => {
      null != s && (0, p.Y)({
        pageType: s,
        sectionType: g.jXE.ORBS_BALANCE_MENU,
        ctaObject: g.qAy.ORBS_LEARN_MORE_LINK
      })
    }, [s]);
    return (0, i.jsxs)("div", {
      className: a()(f.container, b.baseCardOutline),
      children: [(0, i.jsx)(j, {}), (0, i.jsx)(o.zx, {
        text: t,
        variant: "primary",
        size: "sm",
        onClick: n,
        fullWidth: true
      }), (0, i.jsxs)("div", {
        className: f.linkContainer,
        children: [true !== l && (0, i.jsxs)(c.Text, {
          variant: "text-xs/normal",
          className: f.linkPreText,
          children: [l, "\xa0"]
        }), (0, i.jsx)(c.eee, {
          target: "_blank",
          rel: "author",
          href: m.Z.getArticleURL(g.BhN.ORBS_FAQ),
          className: f.learnMoreLink,
          onClick: u,
          children: d
        })]
      })]
    })
  }