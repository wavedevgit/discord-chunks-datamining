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
  Chunk462408 = require("./462408.js");

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
  let e = s.Z.getGuildsArray().filter(e => e.features.has(p.GuildFeatures.HUB));
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("header", {
      className: g.header,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: f.intl.string(f.t.IuMx1Y)
      }), (0, r.jsx)(l.Text, {
        tag: "div",
        variant: "heading-md/normal",
        children: f.intl.string(f.t.DwevPs)
      })]
    }), (0, r.jsxs)("div", {
      className: g.grid,
      children: [e.map(e => h(u.ZP.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        var t;
        t = e.id, c.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
          guild_id: t
        }), (0, o.X)(t)
      })), h(l.Jmo, f.intl.string(f.t.AhKnz4), () => {
        c.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, a.uL)(p.Z5c.GUILD_DISCOVERY)
      })]
    })]
  })
}