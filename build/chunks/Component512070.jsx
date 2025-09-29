/** Chunk was on 47495 **/
/** chunk id: 512070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk342905 = require("./342905.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594928 = require("./594928.js"),
  Chunk131016 = require("./131016.js"),
  Chunk7284 = require("./7284.js"),
  Chunk660662 = require("./660662.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk77426 = require("./77426.js"),
  Chunk355654 = require("./355654.js");

function b(e) {
  let {
    selectedFontId: t,
    setSelectedFontId: n,
    displayName: o,
    className: b
  } = e, x = t !== a.C.DEFAULT, j = (0, d.mR)(o), {
    enabled: _
  } = c.wL.useConfig({
    location: "DisplayNameStylesFontSelection"
  });
  return (0, r.jsxs)("div", {
    className: b,
    children: [(0, r.jsxs)(i.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [f.intl.string(m.default.nP0ngY), (0, r.jsx)(s.SrA, {
        size: "xs",
        color: s.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, r.jsx)(i.Kqy, {
      direction: "horizontal",
      align: "center",
      wrap: true,
      children: p.P$.map(e => {
        let o = (0, u.U)(e),
          a = e === t;
        return (0, r.jsx)(s.ua7, {
          text: f.intl.string(o.name),
          children: t => {
            let {
              onMouseEnter: c,
              onMouseLeave: d
            } = t;
            return (0, r.jsx)(s.P3F, {
              className: l()(h.fontButton, {
                [h.selected]: a
              }),
              onClick: () => n(e),
              "aria-label": f.intl.string(o.name),
              onMouseEnter: c,
              onMouseLeave: d,
              children: (0, r.jsx)(i.xvT, {
                variant: "text-lg/semibold",
                color: a ? "text-primary" : "text-default",
                className: l()(h.fontText, o.className),
                children: "Gg"
              })
            })
          }
        }, e)
      })
    }), x && j && _ && (0, r.jsxs)("div", {
      className: h.nonLatinDisclaimer,
      children: [(0, r.jsx)(i.d3s, {
        size: "lg"
      }), (0, r.jsx)(i.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: f.intl.string(m.default["+O1xLy"])
      })]
    })]
  })
}