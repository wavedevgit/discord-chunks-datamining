/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk308274 = require("./308274.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77426 = require("./77426.js"),
  Chunk355654 = require("./355654.js");

function x(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    displayName: o,
    className: x
  } = e, b = t !== i.C.DEFAULT, _ = (0, d.mR)(o);
  return (0, l.jsxs)("div", {
    className: x,
    children: [(0, l.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [f.intl.string(m.default.nP0ngb), (0, l.jsx)(c.SrA, {
        size: "xs",
        color: c.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(a.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: p.P$.map(e => {
        let o = (0, u.U)(e),
          i = e === t;
        return (0, l.jsx)(s.u, {
          text: f.intl.string(o.name),
          asContainer: true,
          children: (0, l.jsx)(c.P3F, {
            className: r()(h.fontButton, {
              [h.selected]: i
            }),
            onClick: () => n(e),
            "aria-label": f.intl.string(o.name),
            children: (0, l.jsx)(a.xvT, {
              variant: "text-lg/semibold",
              color: i ? "text-primary" : "text-default",
              className: r()(h.fontText, o.className),
              children: "Gg"
            })
          })
        }, e)
      })
    }), b && _ && (0, l.jsxs)("div", {
      className: h.nonLatinDisclaimer,
      children: [(0, l.jsx)(a.d3s, {
        size: "lg"
      }), (0, l.jsx)(a.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: f.intl.string(m.default["+O1xL2"])
      })]
    })]
  })
}