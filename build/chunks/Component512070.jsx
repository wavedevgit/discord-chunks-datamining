/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk131016 = require("./131016.js"),
  Chunk7284 = require("./7284.js"),
  Chunk660662 = require("./660662.js"),
  Chunk143525 = require("./143525.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238267 = require("./238267.js"),
  Chunk296625 = require("./296625.js");

function b(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    displayName: o,
    className: b
  } = e, x = t !== a.C.DEFAULT, S = (0, d.mR)(o);
  return (0, l.jsxs)("div", {
    className: b,
    children: [(0, l.jsxs)(i.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [m.intl.string(p.default.nP0ngb), (0, l.jsx)(c.SrA, {
        size: "xs",
        color: c.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(i.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: f.P$.map(e => {
        let o = (0, u.U)(e),
          a = e === t;
        return (0, l.jsx)(s.u, {
          text: m.intl.string(o.name),
          asContainer: true,
          children: (0, l.jsx)(c.P3F, {
            className: r()(h.fontButton, {
              [h.selected]: a
            }),
            onClick: () => n(e),
            "aria-label": m.intl.string(o.name),
            children: (0, l.jsx)(i.xvT, {
              variant: "text-lg/semibold",
              color: a ? "text-strong" : "text-default",
              className: r()(h.fontText, o.className),
              children: "Gg"
            })
          })
        }, e)
      })
    }), x && S && (0, l.jsxs)("div", {
      className: h.nonLatinDisclaimer,
      children: [(0, l.jsx)(i.d3s, {
        size: "lg"
      }), (0, l.jsx)(i.xvT, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: m.intl.string(p.default["+O1xL2"])
      })]
    })]
  })
}