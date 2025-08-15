/** Chunk was on 37447 **/
/** chunk id: 685613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  US: () => j,
  ZP: () => C,
  fF: () => x
});
var r, s, Chunk255367 = require("./255367.js");
require("./73800.js");
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
  x = ((r = {})[r.SMALL = 24] = "SMALL", r[r.MEDIUM = 32] = "MEDIUM", r),
  j = ((s = {})[s.SMALL = 2] = "SMALL", s[s.MEDIUM = 8] = "MEDIUM", s);
let C = function(e) {
  let {
    className: t,
    logotypeClassName: n,
    gameTileSize: r = 24,
    quest: s,
    separatorSpacing: i = 2,
    theme: x = g.BRd.DARK,
    withCosponsor: j = true,
    withGameTile: C = true,
    onLoadComplete: f
  } = e, b = (0, c.wj)(x) ? g.BRd.DARK : g.BRd.LIGHT, v = (0, d.Gd)(s.id, b), y = j && null != s.config.cosponsorMetadata && null != v;
  return (0, o.jsxs)("div", {
    className: a()(h.partnerBranding, t),
    children: [C && (0, o.jsx)(p.Fl, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, o.jsx)("img", {
        ref: e,
        className: h.partnerBrandingGameTile,
        alt: "",
        src: (0, m.fh)(s, m.eC.GAME_TILE, b).url,
        style: {
          borderRadius: function(e) {
            switch (e) {
              case 24:
                return 3;
              case 32:
                return 4
            }
          }(r),
          width: r,
          height: r
        },
        onLoad: f
      })
    }), (0, o.jsx)(p.Fl, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, o.jsx)("img", {
        ref: e,
        className: a()(h.partnerBrandingLogotype, n, {
          [h.partnerBrandingLogotypeWithCosponsor]: y
        }),
        alt: s.config.messages.gameTitle,
        src: (0, m.fh)(s, m.eC.LOGO_TYPE, b).url,
        onLoad: f
      })
    }), y && (0, o.jsxs)(o.Fragment, {
      children: [(0, o.jsx)("div", {
        className: h.cosponsorBrandSeparatorWrapper,
        style: {
          margin: "0 ".concat(i, "px")
        },
        children: (0, o.jsx)(u.P$X, {
          className: h.cosponsorBrandSeparator,
          color: l.Z.colors.WHITE
        })
      }), (0, o.jsx)(p.Fl, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, r;
          return (0, o.jsx)("img", {
            ref: e,
            className: a()(h.partnerBrandingLogotype, h.partnerBrandingLogotypeWithCosponsor, n),
            alt: null != (r = null == (t = s.config.cosponsorMetadata) ? true : t.name) ? r : "",
            src: v.url,
            onLoad: f
          })
        }
      })]
    })]
  })
}