/** Chunk was on 88615 **/
/** chunk id: 864450, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk721923 = require("./721923.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk975571 = require("./975571.js"),
  Chunk864310 = require("./864310.js"),
  Chunk931936 = require("./931936.jsx"),
  Chunk289588 = require("./289588.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk958920 = require("./958920.js");

function b(e) {
  let {
    guildId: t
  } = e, l = (0, i.bG)([u.A], () => u.A.getGuild(t)), {
    available: b,
    spent: h,
    total: j
  } = (0, c.A)(t);
  if (null != l) return (0, r.jsxs)("div", {
    className: x.kL,
    children: [(0, r.jsxs)("div", {
      className: x.N1,
      children: [(0, r.jsx)(n.EYj, {
        variant: "eyebrow",
        color: "text-subtle",
        children: g.intl.string(A.default.hjvcLO)
      }), (0, r.jsx)(n.EYj, {
        className: x.C2,
        variant: "text-xs/semibold",
        children: g.intl.format(A.default.fXE30d, {
          helpDeskArticle: d.A.getArticleURL(v.MVz.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: x.hQ,
      children: [(0, r.jsx)(p.A, {
        count: b,
        type: m.yG.AVAILABLE
      }), (0, r.jsx)(p.A, {
        count: h,
        type: m.yG.SPENT
      }), (0, r.jsx)(p.A, {
        count: j,
        type: m.yG.TOTAL
      })]
    }), (0, r.jsx)(a.A, {
      className: x.S6,
      guild: l,
      analyticsLocation: {
        page: v.liQ.GUILD_POWERUPS_OVERVIEW,
        section: v.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.XD.CUSTOM,
      size: s.lO.LARGE,
      icon: (0, r.jsx)(o._Jp, {
        className: x.Ng,
        size: "sm",
        color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    }), (0, r.jsx)(f.A, {
      guildId: t
    })]
  })
}