/** Chunk was on 94073 **/
/** chunk id: 515598, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    analyticsSection: t,
    analyticsPage: r,
    isGIF: _,
    banner: p
  } = e, m = (0, n.bG)([u.A], () => u.A.getGuildId()), x = (0, n.bG)([i.A], () => i.A.getGuild(m)), {
    analyticsLocations: y
  } = (0, l.Ay)();
  return null == x || x.features.has(b.GuildFeatures.ANIMATED_BANNER) || !_ && x.features.has(b.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
    className: A.kL,
    children: [(0, a.jsx)(c._Jp, {
      color: c.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: A.qC
    }), (0, a.jsx)(c.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: f.intl.string(f.t["56M7xe"])
    }), (0, a.jsx)("div", {
      className: A.xF,
      children: (0, a.jsx)(c.QWc, {
        text: f.intl.string(f.t.WUHdZV),
        onClick: () => {
          if (null == x) return;
          let e = {
            section: t,
            page: r,
            object: b.ZSU.UPSELL_HEADER
          };
          null != p ? (0, s._)({
            analyticsLocations: y,
            analyticsLocation: e,
            guild: x,
            isGIF: _,
            banner: p
          }) : (0, o.A)({
            analyticsLocations: y,
            analyticsSourceLocation: e,
            guild: x,
            perks: _ ? (0, d.Pf)() : (0, d.QR)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}