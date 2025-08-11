/** Chunk was on 1272 **/
/** chunk id: 787642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk125631 = require("./125631.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk507750 = require("./507750.js");
let m = (0, Chunk313201.hQ)(),
  b = "".concat(m, "-decription");

function _(e, t, n) {
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
    }), (0, r.jsx)(p.Z, {
      className: g.arrow
    })]
  }, t)
}

function O() {
  let e = Chunk430824.Z.getGuildsArray().filter(e => e.features.has(f.oNc.HUB)),
    t = e => {
      u.default.track(f.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
        guild_id: e
      }), (0, s.X)(e)
    };
  return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
    children: [(0, Chunk255367.jsxs)("header", {
      className: Chunk507750.header,
      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
        tag: "h1",
        className: Chunk507750.title,
        children: Chunk388032.intl.string(Chunk388032.t.IuMx1d)
      }), (0, Chunk255367.jsx)(Chunk481060.R94, {
        id: b,
        type: Chunk481060.R94.Types.DESCRIPTION,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          tag: "div",
          variant: "heading-md/normal",
          children: Chunk388032.intl.string(Chunk388032.t.DwevPj)
        })
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk507750.grid,
      children: [module.map(e => _(d.ZP.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        t(e.id)
      })), _(Chunk481060.Jmo, Chunk388032.intl.string(Chunk388032.t.AhKnz8), () => {
        Chunk626135.default.track(Chunk981631.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, Chunk703656.uL)(Chunk981631.Z5c.GUILD_DISCOVERY)
      })]
    })]
  })
}