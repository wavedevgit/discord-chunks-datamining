/** Chunk was on 47495 **/
/** chunk id: 438759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489511 = require("./489511.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk660662 = require("./660662.js"),
  Chunk593082 = require("./593082.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77426 = require("./77426.js"),
  Chunk6073 = require("./6073.js");

function h(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: n,
    className: o
  } = e;
  return (0, l.jsxs)("div", {
    className: o,
    children: [(0, l.jsxs)(i.X6q, {
      variant: "heading-md/semibold",
      className: f.selectorHeading,
      children: [m.intl.string(p.default["1wilM1"]), (0, l.jsx)(a.SrA, {
        size: "xs",
        color: a.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(i.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.mH.map(e => (0, l.jsx)(x, {
        effectId: e,
        selected: e === t,
        onClick: () => n(e)
      }, e))
    })]
  })
}

function x(e) {
  let {
    effectId: t,
    selected: n,
    onClick: o
  } = e, i = (0, s.R)(t);
  return (0, l.jsx)(a.P3F, {
    className: r()(g.effectContainer, {
      [g.selected]: n
    }),
    onClick: o,
    children: (0, l.jsx)(d.Z, {
      userName: i.name,
      effectDisplayType: c.F.STATIC,
      displayNameStyles: i.previewStyles,
      textClassName: g.effectText,
      inProfile: true
    })
  }, t)
}