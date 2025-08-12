/** Chunk was on 47495 **/
/** chunk id: 438759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821795 = require("./821795.js"),
  Chunk892567 = require("./892567.jsx"),
  Chunk203872 = require("./203872.js"),
  Chunk660662 = require("./660662.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179786 = require("./179786.js"),
  Chunk522293 = require("./522293.js");

function h(e) {
  let {
    selectedEffectId: t,
    setSelectedEffectId: n,
    className: o
  } = e;
  return (0, r.jsxs)("div", {
    className: o,
    children: [(0, r.jsxs)(i.X6, {
      variant: "heading-md/semibold",
      className: m.selectorHeading,
      children: [f.intl.string(p.default["1wilMz"]), (0, r.jsx)(a.SrA, {
        size: "xs",
        color: a.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, r.jsx)(i.Kq, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      gap: 8,
      children: u.mH.map(e => (0, r.jsx)(b, {
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
  } = e, i = (0, d.R)(t);
  return (0, r.jsx)(a.P3F, {
    className: l()(g.effectContainer, {
      [g.selected]: n
    }),
    onClick: o,
    children: (0, r.jsx)(c.Z, {
      userName: i.name,
      effectDisplayType: s.F.STATIC,
      displayNameStyles: i.previewStyles,
      textClassName: g.effectText,
      inProfile: true
    })
  }, t)
}