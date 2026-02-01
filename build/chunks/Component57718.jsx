/** Chunk was on 9753 **/
/** chunk id: 57718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => y,
  C8: () => b,
  LU: () => h
});
var r, i, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk995360 = require("./995360.js"),
  h = ((r = {})[r.SMALL = 24] = "SMALL", r[r.MEDIUM = 32] = "MEDIUM", r),
  b = ((i = {})[i.SMALL = 2] = "SMALL", i[i.MEDIUM = 8] = "MEDIUM", i);
let y = function(e) {
  let {
    className: t,
    logotypeClassName: n,
    gameTileSize: r = 24,
    quest: i,
    separatorSpacing: a = 2,
    theme: h = g.NJ8.DARK,
    withCosponsor: b = true,
    withGameTile: y = true,
    logotypeStyle: A,
    onLoadComplete: v
  } = e, O = (0, u.Mw)(h) ? g.NJ8.DARK : g.NJ8.LIGHT, x = (0, p.a5)(i.id, O), E = b && null != i.config.cosponsorMetadata && null != x;
  return (0, l.jsxs)("div", {
    className: s()(_.Iu, t),
    children: [y && (0, l.jsx)(f.Sn, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, l.jsx)("img", {
        ref: e,
        className: _._Y,
        alt: "",
        src: (0, m.tW)(i, m.fY.GAME_TILE, O).url,
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
        onLoad: v
      })
    }), (0, l.jsx)(f.Sn, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, l.jsx)(o.animated.img, {
        ref: e,
        className: s()(_.lW, n, {
          [_.TO]: E
        }),
        style: A,
        alt: i.config.messages.gameTitle,
        src: (0, m.tW)(i, m.fY.LOGO_TYPE, O).url,
        onLoad: v
      })
    }), E && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: _.ub,
        style: {
          margin: "0 ".concat(a, "px")
        },
        children: (0, l.jsx)(d.aoi, {
          className: _.JB,
          color: c.A.colors.WHITE
        })
      }), (0, l.jsx)(f.Sn, {
        id: "QuestPartnerBranding_cosponsorLogotype",
        children: e => {
          var t, r;
          return (0, l.jsx)(o.animated.img, {
            ref: e,
            className: s()(_.lW, _.TO, n),
            style: A,
            alt: null != (t = null == (r = i.config.cosponsorMetadata) ? true : r.name) ? t : "",
            src: x.url,
            onLoad: v
          })
        }
      })]
    })]
  })
}