/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: m,
    banner: f
  } = e, g = (0, i.bG)([d.A], () => d.A.getGuildId()), h = (0, i.bG)([c.A], () => c.A.getGuild(g)), {
    analyticsLocations: x
  } = (0, r.Ay)();
  return null == h || h.features.has(u.GuildFeatures.ANIMATED_BANNER) || !m && h.features.has(u.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
    className: A.kL,
    children: [(0, a.jsx)(s._Jp, {
      color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: A.qC
    }), (0, a.jsx)(s.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: _.intl.string(_.t["56M7xe"])
    }), (0, a.jsx)("div", {
      className: A.xF,
      children: (0, a.jsx)(s.QWc, {
        text: _.intl.string(_.t.WUHdZV),
        onClick: () => {
          if (null == h) return;
          let e = {
            section: t,
            page: n,
            object: u.ZSU.UPSELL_HEADER
          };
          null != f ? (0, l._)({
            analyticsLocations: x,
            analyticsLocation: e,
            guild: h,
            isGIF: m,
            banner: f
          }) : (0, o.A)({
            analyticsLocations: x,
            analyticsSourceLocation: e,
            guild: h,
            perks: m ? (0, p.Pf)() : (0, p.QR)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}