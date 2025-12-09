/** Chunk was on 1272 **/
/** chunk id: 787642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk125631 = require("./125631.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184904 = require("./184904.js");

function h(e, t, n) {
  return (0, r.jsxs)("button", {
    className: g.container,
    onClick: n,
    children: ["function" == typeof e ? (0, r.jsx)("div", {
      className: g.icon,
      children: (0, r.jsx)(e, {
        className: g.__invalid_iconInner,
        color: l.TVs.colors.WHITE.css
      })
    }) : (0, r.jsx)("img", {
      className: g.icon,
      alt: "",
      src: e
    }), (0, r.jsx)(l.Text, {
      className: g.text,
      variant: "text-md/medium",
      children: t
    }), (0, r.jsx)(d.Z, {
      className: g.arrow
    })]
  }, t)
}

function m() {
  let e = Chunk430824.Z.getGuildsArray().filter(e => e.features.has(p.GuildFeatures.HUB));
  return (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
    children: [(0, Chunk54381.jsxs)("header", {
      className: Chunk184904.header,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.IuMx1Y)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.DwevPs)
      })]
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk184904.grid,
      children: [module.map(e => h(u.ZP.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        var t;
        t = e.id, c.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
          guild_id: t
        }), (0, s.X)(t)
      })), h(Chunk481060.Jmo, Chunk388032.intl.string(Chunk388032.t.AhKnz4), () => {
        Chunk626135.default.track(Chunk981631.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, Chunk703656.uL)(Chunk981631.Z5c.GUILD_DISCOVERY)
      })]
    })]
  })
}