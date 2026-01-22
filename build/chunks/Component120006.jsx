/** Chunk was on 21738 **/
/** chunk id: 120006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk396415 = require("./396415.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk605540 = require("./605540.js");

function A(e, t, n) {
  return (0, r.jsxs)("button", {
    className: h.kL,
    onClick: n,
    children: ["function" == typeof e ? (0, r.jsx)("div", {
      className: h.Kk,
      children: (0, r.jsx)(e, {
        className: h.__invalid_iconInner,
        color: l.LU0.colors.WHITE.css
      })
    }) : (0, r.jsx)("img", {
      className: h.Kk,
      alt: "",
      src: e
    }), (0, r.jsx)(l.Text, {
      className: h.Qq,
      variant: "text-md/medium",
      children: t
    }), (0, r.jsx)(d.A, {
      className: h.UE
    })]
  }, t)
}

function g() {
  let e = o.A.getGuildsArray().filter(e => e.features.has(p.GuildFeatures.HUB));
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("header", {
      className: h.wx,
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
      className: h.Vg,
      children: [e.map(e => A(u.Ay.getGuildIconURL({
        id: e.id,
        icon: e.icon,
        size: 240
      }), e.name, () => {
        var t;
        t = e.id, c.default.track(p.HAw.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, {
          guild_id: t
        }), (0, s.u)(t)
      })), A(l.QGJ, f.intl.string(f.t.AhKnz4), () => {
        c.default.track(p.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, a.pX)(p.BVt.GUILD_DISCOVERY)
      })]
    })]
  })
}