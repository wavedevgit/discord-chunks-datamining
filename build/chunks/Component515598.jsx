/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk503566 = require("./503566.jsx"),
  Chunk631305 = require("./631305.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234518 = require("./234518.js");

function A(e) {
  let {
    analyticsSection: t,
    analyticsPage: a,
    isGIF: A,
    banner: f
  } = e, g = (0, i.bG)([d.A], () => d.A.getGuildId()), h = (0, i.bG)([l.A], () => l.A.getGuild(g)), {
    analyticsLocations: x
  } = (0, o.Ay)();
  return null == h || h.features.has(u.GuildFeatures.ANIMATED_BANNER) || !A && h.features.has(u.GuildFeatures.BANNER) ? null : (0, n.jsxs)("div", {
    className: m.kL,
    children: [(0, n.jsx)(c._Jp, {
      color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: m.qC
    }), (0, n.jsx)(c.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: _.intl.string(_.t["56M7xe"])
    }), (0, n.jsx)("div", {
      className: m.xF,
      children: (0, n.jsx)(c.QWc, {
        text: _.intl.string(_.t.WUHdZV),
        onClick: () => {
          if (null == h) return;
          let e = {
            section: t,
            page: a,
            object: u.ZSU.UPSELL_HEADER
          };
          null != f ? (0, r._)({
            analyticsLocations: x,
            analyticsLocation: e,
            guild: h,
            isGIF: A,
            banner: f
          }) : (0, s.A)({
            analyticsLocations: x,
            analyticsSourceLocation: e,
            guild: h,
            perks: A ? (0, p.Pf)() : (0, p.QR)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}