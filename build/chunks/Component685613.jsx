/** Chunk was on web.js **/
/** chunk id: 685613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  US: () => h,
  ZP: () => g,
  fF: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk475595 = require("./475595.js"),
  Chunk78826 = require("./78826.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk593710 = require("./593710.js"),
  p = function(e) {
    return e[e.SMALL = 24] = "SMALL", e[e.MEDIUM = 32] = "MEDIUM", e
  }({}),
  h = function(e) {
    return e[e.SMALL = 2] = "SMALL", e[e.MEDIUM = 8] = "MEDIUM", e
  }({});

function m(e) {
  switch (e) {
    case 24:
      return 3;
    case 32:
      return 4
  }
}
let g = function(e) {
  let {
    className: t,
    logotypeClassName: n,
    gameTileSize: i = 24,
    quest: p,
    separatorSpacing: h = 2,
    theme: g = f.BRd.DARK,
    withCosponsor: E = true,
    withGameTile: b = true,
    onLoadComplete: y
  } = e, O = (0, s.wj)(g) ? f.BRd.DARK : f.BRd.LIGHT, v = (0, c.Gd)(p.id, O), I = E && null != p.config.cosponsorMetadata && null != v;
  return (0, r.jsxs)("div", {
    className: a()(_.partnerBranding, t),
    children: [b && (0, r.jsx)(d.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: _.partnerBrandingGameTile,
        alt: "",
        src: (0, u.fh)(p, u.eC.GAME_TILE, O).url,
        style: {
          borderRadius: m(i),
          width: i,
          height: i
        },
        onLoad: y
      })
    }), (0, r.jsx)(d.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: a()(_.partnerBrandingLogotype, n, {
          [_.partnerBrandingLogotypeWithCosponsor]: I
        }),
        alt: p.config.messages.gameTitle,
        src: (0, u.fh)(p, u.eC.LOGO_TYPE, O).url,
        onLoad: y
      })
    }), I && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: _.cosponsorBrandSeparatorWrapper,
        style: {
          margin: "0 ".concat(h, "px")
        },
        children: (0, r.jsx)(l.P$X, {
          className: _.cosponsorBrandSeparator,
          color: o.Z.colors.WHITE
        })
      }), (0, r.jsx)(d.Fl, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, i;
          return (0, r.jsx)("img", {
            ref: e,
            className: a()(_.partnerBrandingLogotype, _.partnerBrandingLogotypeWithCosponsor, n),
            alt: null != (i = null == (t = p.config.cosponsorMetadata) ? true : t.name) ? i : "",
            src: v.url,
            onLoad: y
          })
        }
      })]
    })]
  })
}