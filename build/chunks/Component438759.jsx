/** Chunk was on 47495 **/
/** chunk id: 438759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489511 = require("./489511.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk660662 = require("./660662.js"),
  Chunk143525 = require("./143525.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238267 = require("./238267.js"),
  Chunk423763 = require("./423763.js");

function h(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: n,
    className: o
  } = e;
  return (0, l.jsxs)("div", {
    className: o,
    children: [(0, l.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: m.selectorHeading,
      children: [p.intl.string(f.default["1wilM1"]), (0, l.jsx)(i.SrA, {
        size: "xs",
        color: i.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(a.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.mH.map(e => (0, l.jsx)(b, {
        effectId: e,
        selected: e === t,
        onClick: () => n(e)
      }, e))
    })]
  })
}

function b(e) {
  let {
    effectId: t,
    selected: n,
    onClick: o
  } = e, a = (0, s.R)(t);
  return (0, l.jsx)(i.P3F, {
    className: r()(g.effectContainer, {
      [g.selected]: n
    }),
    onClick: o,
    children: (0, l.jsx)(d.Z, {
      userName: a.name,
      effectDisplayType: c.F.STATIC,
      displayNameStyles: a.previewStyles,
      textClassName: g.effectText,
      inProfile: true
    })
  }, t)
}