/** Chunk was on 94073 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: b,
    banner: m
  } = e, p = (0, a.bG)([u.A], () => u.A.getGuildId()), y = (0, a.bG)([c.A], () => c.A.getGuild(p)), {
    analyticsLocations: g
  } = (0, i.Ay)();
  return null == y || y.features.has(_.GuildFeatures.ANIMATED_BANNER) || !b && y.features.has(_.GuildFeatures.BANNER) ? null : (0, r.jsxs)("div", {
    className: A.kL,
    children: [(0, r.jsx)(o._Jp, {
      color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: A.qC
    }), (0, r.jsx)(o.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: f.intl.string(f.t["56M7xe"])
    }), (0, r.jsx)("div", {
      className: A.xF,
      children: (0, r.jsx)(o.QWc, {
        text: f.intl.string(f.t.WUHdZV),
        onClick: () => {
          if (null == y) return;
          let e = {
            section: t,
            page: n,
            object: _.ZSU.UPSELL_HEADER
          };
          null != m ? (0, l._)({
            analyticsLocations: g,
            analyticsLocation: e,
            guild: y,
            isGIF: b,
            banner: m
          }) : (0, s.A)({
            analyticsLocations: g,
            analyticsSourceLocation: e,
            guild: y,
            perks: b ? (0, d.Pf)() : (0, d.QR)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}