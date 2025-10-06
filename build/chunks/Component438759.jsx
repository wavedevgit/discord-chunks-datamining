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
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk203872 = require("./203872.js"),
  Chunk660662 = require("./660662.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77426 = require("./77426.js"),
  Chunk6073 = require("./6073.js");

function h(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: n,
    className: l
  } = e;
  return (0, o.jsxs)("div", {
    className: l,
    children: [(0, o.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: f.selectorHeading,
      children: [m.intl.string(p.default["1wilMz"]), (0, o.jsx)(i.SrA, {
        size: "xs",
        color: i.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, o.jsx)(a.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.mH.map(e => (0, o.jsx)(x, {
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
    onClick: l
  } = e, a = (0, d.R)(t);
  return (0, o.jsx)(i.P3F, {
    className: r()(g.effectContainer, {
      [g.selected]: n
    }),
    onClick: l,
    children: (0, o.jsx)(c.Z, {
      userName: a.name,
      effectDisplayType: s.F.STATIC,
      displayNameStyles: a.previewStyles,
      textClassName: g.effectText,
      inProfile: true
    })
  }, t)
}