/** Chunk was on 69844 **/
/** chunk id: 796150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk194594 = require("./194594.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk424472 = require("./424472.jsx"),
  Chunk682807 = require("./682807.jsx"),
  Chunk691703 = require("./691703.jsx"),
  Chunk953989 = require("./953989.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk28552 = require("./28552.js");

function g(e) {
  let {
    className: t,
    view: n,
    application: i
  } = e, g = "embedded" === n, f = (0, o.Z)({
    application: i
  });
  return (0, r.jsxs)("div", {
    className: a()(t, {
      [h.sideContainer]: !g,
      [h.gridContainer]: g
    }),
    children: [(0, r.jsxs)("div", {
      className: a()(h.sectionContainer, {
        [h.reducedGap]: g
      }),
      children: [(0, r.jsx)("div", {
        className: h.infoSection,
        children: (0, r.jsx)(s.Z, {
          application: i,
          mutualGuilds: f,
          mutualGuildShownMax: 3,
          className: h.guildCountContainer,
          guildIconSize: s.x.SMALL,
          guildsClassName: h.guildsIconContainer,
          compact: true,
          children: (0, r.jsx)(l.X6q, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            children: m.intl.string(m.t["3NxHC4"])
          })
        })
      }), (0, r.jsx)(c.Z, {
        application: i,
        className: h.infoSection
      }), (0, r.jsx)(p.Z, {
        application: i,
        className: h.infoSection
      })]
    }), (0, r.jsxs)("div", {
      className: a()(h.sectionContainer, {
        [h.reducedGap]: g
      }),
      children: [(0, r.jsx)(d.Z, {
        application: i,
        className: h.infoSection,
        innerClassName: g ? h.linkGrid : true
      }), (0, r.jsx)(u.Z, {
        application: i,
        className: h.infoSection
      })]
    })]
  })
}