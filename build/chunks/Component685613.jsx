/** Chunk was on web.js **/
/** chunk id: 685613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  US: () => m,
  ZP: () => E,
  fF: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk508312 = require("./508312.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk475595 = require("./475595.js"),
  Chunk78826 = require("./78826.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk593710 = require("./593710.js"),
  h = function(e) {
    return e[e.SMALL = 24] = "SMALL", e[e.MEDIUM = 32] = "MEDIUM", e
  }({}),
  m = function(e) {
    return e[e.SMALL = 2] = "SMALL", e[e.MEDIUM = 8] = "MEDIUM", e
  }({});

function g(e) {
  switch (e) {
    case 24:
      return 3;
    case 32:
      return 4
  }
}
let E = function(e) {
  let {
    className: t,
    logotypeClassName: n,
    gameTileSize: i = 24,
    quest: h,
    separatorSpacing: m = 2,
    theme: E = _.BRd.DARK,
    withCosponsor: b = true,
    withGameTile: y = true,
    logotypeStyle: O,
    onLoadComplete: v
  } = e, I = (0, l.wj)(E) ? _.BRd.DARK : _.BRd.LIGHT, T = (0, u.Gd)(h.id, I), S = b && null != h.config.cosponsorMetadata && null != T;
  return (0, r.jsxs)("div", {
    className: a()(p.partnerBranding, t),
    children: [y && (0, r.jsx)(f.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: p.partnerBrandingGameTile,
        alt: "",
        src: (0, d.fh)(h, d.eC.GAME_TILE, I).url,
        style: {
          borderRadius: g(i),
          width: i,
          height: i
        },
        onLoad: v
      })
    }), (0, r.jsx)(f.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, r.jsx)(o.animated.img, {
        ref: e,
        className: a()(p.partnerBrandingLogotype, n, {
          [p.partnerBrandingLogotypeWithCosponsor]: S
        }),
        style: O,
        alt: h.config.messages.gameTitle,
        src: (0, d.fh)(h, d.eC.LOGO_TYPE, I).url,
        onLoad: v
      })
    }), S && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: p.cosponsorBrandSeparatorWrapper,
        style: {
          margin: "0 ".concat(m, "px")
        },
        children: (0, r.jsx)(c.P$X, {
          className: p.cosponsorBrandSeparator,
          color: s.Z.colors.WHITE
        })
      }), (0, r.jsx)(f.Fl, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, i;
          return (0, r.jsx)(o.animated.img, {
            ref: e,
            className: a()(p.partnerBrandingLogotype, p.partnerBrandingLogotypeWithCosponsor, n),
            style: O,
            alt: null != (i = null == (t = h.config.cosponsorMetadata) ? true : t.name) ? i : "",
            src: T.url,
            onLoad: v
          })
        }
      })]
    })]
  })
}