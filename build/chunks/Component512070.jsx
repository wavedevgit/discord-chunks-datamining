/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7284 = require("./7284.js"),
  Chunk660662 = require("./660662.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77426 = require("./77426.js"),
  Chunk355654 = require("./355654.js");

function m(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    className: o
  } = e;
  return (0, r.jsxs)("div", {
    className: o,
    children: [(0, r.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: p.selectorHeading,
      children: [u.intl.string(d.default.nP0ngY), (0, r.jsx)(i.SrA, {
        size: "xs",
        color: i.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, r.jsx)(a.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: c.P$.map(e => {
        let o = (0, s.U)(e),
          c = e === t;
        return (0, r.jsx)(i.ua7, {
          text: u.intl.string(o.name),
          children: t => {
            let {
              onMouseEnter: s,
              onMouseLeave: d
            } = t;
            return (0, r.jsx)(i.P3F, {
              className: l()(f.fontButton, {
                [f.selected]: c
              }),
              onClick: () => n(e),
              "aria-label": u.intl.string(o.name),
              onMouseEnter: s,
              onMouseLeave: d,
              children: (0, r.jsx)(a.xvT, {
                variant: "text-lg/semibold",
                color: c ? "text-primary" : "text-default",
                className: l()(f.fontText, o.className),
                children: "Gg"
              })
            })
          }
        }, e)
      })
    })]
  })
}