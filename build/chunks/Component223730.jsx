/** Chunk was on 69003 **/
/** chunk id: 223730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => O,
  y: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk695346 = require("./695346.js"),
  Chunk771845 = require("./771845.js"),
  Chunk88658 = require("./88658.js"),
  Chunk782896 = require("./782896.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk95049 = require("./95049.js");
let g = () => {
  Chunk230711.Z.open(Chunk981631.oAB.ACTIVITY_PRIVACY)
};

function m(e) {
  let {
    children: t,
    onClick: n
  } = e;
  return (0, r.jsxs)(l.P3F, {
    className: h.chevronButton,
    onClick: n,
    children: [(0, r.jsx)("div", {
      className: h.chevronButtonContent,
      children: t
    }), (0, r.jsx)(l.Fbu, {
      color: l.TVs.colors.TEXT_SECONDARY,
      size: "xs"
    })]
  })
}

function b(e) {
  let {
    onClosePopout: t
  } = e, n = a.G6.useSetting(), o = (0, i.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()), d = (0, c._o)(), h = o.filter(e => !d.has(e));
  return 0 === o.length ? null : (0, r.jsxs)(m, {
    onClick: () => {
      t(), g()
    },
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/semibold",
      children: f.intl.string(n ? p.default["3GrhnJ"] : p.default["54ycKC"])
    }), (0, r.jsx)(u.c, {
      guildIds: h
    })]
  })
}

function O(e) {
  let {
    onClosePopout: t
  } = e;
  return (0, r.jsx)(l.P3F, {
    className: h.customizeLink,
    onClick: () => {
      t(), g()
    },
    children: (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "text-link",
      children: f.intl.string(f.t["ZrN+DQ"])
    })
  })
}