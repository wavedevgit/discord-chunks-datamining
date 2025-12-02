/** Chunk was on web.js **/
/** chunk id: 685613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  US: () => h,
  ZP: () => E,
  fF: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk593710 = require("./593710.js"),
  m = function(e) {
    return e[e.SMALL = 24] = "SMALL", e[e.MEDIUM = 32] = "MEDIUM", e
  }({}),
  h = function(e) {
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
    quest: m,
    separatorSpacing: h = 2,
    theme: E = p.BRd.DARK,
    withCosponsor: b = true,
    withGameTile: y = true,
    logotypeStyle: O,
    onLoadComplete: v
  } = e, S = (0, l.wj)(E) ? p.BRd.DARK : p.BRd.LIGHT, I = (0, u.Gd)(m.id, S), T = b && null != m.config.cosponsorMetadata && null != I;
  return (0, r.jsxs)("div", {
    className: a()(_.partnerBranding, t),
    children: [y && (0, r.jsx)(f.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: _.partnerBrandingGameTile,
        alt: "",
        src: (0, d.fh)(m, d.eC.GAME_TILE, S).url,
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
        className: a()(_.partnerBrandingLogotype, n, {
          [_.partnerBrandingLogotypeWithCosponsor]: T
        }),
        style: O,
        alt: m.config.messages.gameTitle,
        src: (0, d.fh)(m, d.eC.LOGO_TYPE, S).url,
        onLoad: v
      })
    }), T && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: _.cosponsorBrandSeparatorWrapper,
        style: {
          margin: "0 ".concat(h, "px")
        },
        children: (0, r.jsx)(c.P$X, {
          className: _.cosponsorBrandSeparator,
          color: s.Z.colors.WHITE
        })
      }), (0, r.jsx)(f.Fl, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, i;
          return (0, r.jsx)(o.animated.img, {
            ref: e,
            className: a()(_.partnerBrandingLogotype, _.partnerBrandingLogotypeWithCosponsor, n),
            style: O,
            alt: null != (i = null == (t = m.config.cosponsorMetadata) ? true : t.name) ? i : "",
            src: I.url,
            onLoad: v
          })
        }
      })]
    })]
  })
}