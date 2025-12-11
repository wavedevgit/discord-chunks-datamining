/** Chunk was on 92504 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk194594 = require("./194594.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk424472 = require("./424472.jsx"),
  Chunk682807 = require("./682807.jsx"),
  Chunk691703 = require("./691703.jsx"),
  Chunk953989 = require("./953989.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758701 = require("./758701.js");

function f(e) {
  let {
    className: t,
    view: n,
    application: r
  } = e, f = "embedded" === n, b = (0, o.Z)({
    application: r
  });
  return (0, a.jsxs)("div", {
    className: i()(t, {
      [h.sideContainer]: !f,
      [h.gridContainer]: f
    }),
    children: [(0, a.jsxs)("div", {
      className: i()(h.sectionContainer, {
        [h.reducedGap]: f
      }),
      children: [(0, a.jsx)("div", {
        className: h.infoSection,
        children: (0, a.jsx)(s.Z, {
          application: r,
          mutualGuilds: b,
          mutualGuildShownMax: 3,
          className: h.guildCountContainer,
          guildIconSize: s.x.SMALL,
          guildsClassName: h.guildsIconContainer,
          compact: true,
          children: (0, a.jsx)(l.X6q, {
            variant: "heading-sm/semibold",
            color: "header-primary",
            children: m.intl.string(m.t["3NxHC4"])
          })
        })
      }), (0, a.jsx)(c.Z, {
        application: r,
        className: h.infoSection
      }), (0, a.jsx)(p.Z, {
        application: r,
        className: h.infoSection
      })]
    }), (0, a.jsxs)("div", {
      className: i()(h.sectionContainer, {
        [h.reducedGap]: f
      }),
      children: [(0, a.jsx)(d.Z, {
        application: r,
        className: h.infoSection,
        innerClassName: f ? h.linkGrid : true
      }), (0, a.jsx)(u.Z, {
        application: r,
        className: h.infoSection
      })]
    })]
  })
}