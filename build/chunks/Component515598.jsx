/** Chunk was on 87916 **/
/** chunk id: 515598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: g,
    banner: m
  } = e, p = (0, i.bG)([d.A], () => d.A.getGuildId()), x = (0, i.bG)([c.A], () => c.A.getGuild(p)), {
    analyticsLocations: N
  } = (0, r.Ay)();
  return null == x || x.features.has(u.GuildFeatures.ANIMATED_BANNER) || !g && x.features.has(u.GuildFeatures.BANNER) ? null : (0, a.jsxs)("div", {
    className: f.kL,
    children: [(0, a.jsx)(l._Jp, {
      color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: f.qC
    }), (0, a.jsx)(l.Text, {
      color: "text-strong",
      variant: "text-sm/semibold",
      children: A.intl.string(A.t["56M7xe"])
    }), (0, a.jsx)("div", {
      className: f.xF,
      children: (0, a.jsx)(l.QWc, {
        text: A.intl.string(A.t.WUHdZV),
        onClick: () => {
          if (null == x) return;
          let e = {
            section: t,
            page: n,
            object: u.ZSU.UPSELL_HEADER
          };
          null != m ? (0, s._)({
            analyticsLocations: N,
            analyticsLocation: e,
            guild: x,
            isGIF: g,
            banner: m
          }) : (0, o.A)({
            analyticsLocations: N,
            analyticsSourceLocation: e,
            guild: x,
            perks: g ? (0, _.Pf)() : (0, _.QR)()
          })
        },
        textVariant: "text-sm/semibold"
      })
    })]
  })
}