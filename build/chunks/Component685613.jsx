/** Chunk was on 37447 **/
/** chunk id: 685613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  US: () => C,
  ZP: () => j,
  fF: () => x
});
var s, o, Chunk951288 = require("./951288.js");
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
  x = ((s = {})[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM", s),
  C = ((o = {})[o.SMALL = 2] = "SMALL", o[o.MEDIUM = 8] = "MEDIUM", o);
let j = function(e) {
  let {
    className: t,
    logotypeClassName: n,
    gameTileSize: s = 24,
    quest: o,
    separatorSpacing: i = 2,
    theme: x = h.BRd.DARK,
    withCosponsor: C = true,
    withGameTile: j = true,
    onLoadComplete: f
  } = e, b = (0, u.wj)(x) ? h.BRd.DARK : h.BRd.LIGHT, y = (0, d.Gd)(o.id, b), v = C && null != o.config.cosponsorMetadata && null != y;
  return (0, r.jsxs)("div", {
    className: a()(g.partnerBranding, t),
    children: [j && (0, r.jsx)(p.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: g.partnerBrandingGameTile,
        alt: "",
        src: (0, m.fh)(o, m.eC.GAME_TILE, b).url,
        style: {
          borderRadius: function(e) {
            switch (e) {
              case 24:
                return 3;
              case 32:
                return 4
            }
          }(s),
          width: s,
          height: s
        },
        onLoad: f
      })
    }), (0, r.jsx)(p.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, r.jsx)("img", {
        ref: e,
        className: a()(g.partnerBrandingLogotype, n, {
          [g.partnerBrandingLogotypeWithCosponsor]: v
        }),
        alt: o.config.messages.gameTitle,
        src: (0, m.fh)(o, m.eC.LOGO_TYPE, b).url,
        onLoad: f
      })
    }), v && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: g.cosponsorBrandSeparatorWrapper,
        style: {
          margin: "0 ".concat(i, "px")
        },
        children: (0, r.jsx)(c.P$X, {
          className: g.cosponsorBrandSeparator,
          color: l.Z.colors.WHITE
        })
      }), (0, r.jsx)(p.Fl, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, s;
          return (0, r.jsx)("img", {
            ref: e,
            className: a()(g.partnerBrandingLogotype, g.partnerBrandingLogotypeWithCosponsor, n),
            alt: null != (s = null == (t = o.config.cosponsorMetadata) ? true : t.name) ? s : "",
            src: y.url,
            onLoad: f
          })
        }
      })]
    })]
  })
}