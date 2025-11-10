/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk594928 = require("./594928.js"),
  Chunk131016 = require("./131016.js"),
  Chunk7284 = require("./7284.js"),
  Chunk660662 = require("./660662.js"),
  Chunk352609 = require("./352609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959389 = require("./959389.js"),
  Chunk204469 = require("./204469.js");

function b(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    displayName: o,
    className: b
  } = e, _ = t !== i.C.DEFAULT, S = (0, u.mR)(o), {
    enabled: j
  } = d.wL.useConfig({
    location: "DisplayNameStylesFontSelection"
  });
  return (0, l.jsxs)("div", {
    className: b,
    children: [(0, l.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: h.selectorHeading,
      children: [g.intl.string(f.default.nP0ngb), (0, l.jsx)(c.SrA, {
        size: "xs",
        color: c.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(a.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: m.P$.map(e => {
        let o = (0, p.U)(e),
          i = e === t;
        return (0, l.jsx)(s.u, {
          text: g.intl.string(o.name),
          asContainer: true,
          children: (0, l.jsx)(c.P3F, {
            className: r()(x.fontButton, {
              [x.selected]: i
            }),
            onClick: () => n(e),
            "aria-label": g.intl.string(o.name),
            children: (0, l.jsx)(a.xvT, {
              variant: "text-lg/semibold",
              color: i ? "text-primary" : "text-default",
              className: r()(x.fontText, o.className),
              children: "Gg"
            })
          })
        }, e)
      })
    }), _ && S && j && (0, l.jsxs)("div", {
      className: x.nonLatinDisclaimer,
      children: [(0, l.jsx)(a.d3s, {
        size: "lg"
      }), (0, l.jsx)(a.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: g.intl.string(f.default["+O1xL2"])
      })]
    })]
  })
}