/** Chunk was on 32945 **/
/** chunk id: 120786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  _ = e => {
    let {
      ctaText: t,
      ctaOnClick: n,
      analyticsPage: l,
      linkPreText: o = x.intl.string(x.t["5qZv9E"]),
      linkText: d = x.intl.string(x.t.XRdyjz)
    } = e, u = r.useCallback(() => {
      null != l && (0, p.Y)({
        pageType: l,
        sectionType: h.jXE.ORBS_BALANCE_MENU,
        ctaObject: h.qAy.ORBS_LEARN_MORE_LINK
      })
    }, [l]);
    return (0, a.jsxs)("div", {
      className: i()(f.container, b.baseCardOutline),
      children: [(0, a.jsx)(j, {}), (0, a.jsx)(s.zxk, {
        text: t,
        variant: "primary",
        size: "sm",
        onClick: n,
        fullWidth: true
      }), (0, a.jsxs)("div", {
        className: f.linkContainer,
        children: [true !== o && (0, a.jsxs)(c.Text, {
          variant: "text-xs/normal",
          className: f.linkPreText,
          children: [o, "\xa0"]
        }), (0, a.jsx)(c.Anchor, {
          target: "_blank",
          rel: "author",
          href: m.Z.getArticleURL(h.BhN.ORBS_FAQ),
          className: f.learnMoreLink,
          onClick: u,
          children: d
        })]
      })]
    })
  }