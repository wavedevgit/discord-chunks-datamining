/** Chunk was on 86736 **/
/** chunk id: 289465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk349843 = require("./349843.js");

function s(e) {
  let {
    bar: t,
    children: n,
    className: r,
    inModal: s,
    title: c
  } = e;
  return (0, i.jsxs)(a.Zbd, {
    editable: true,
    className: l()(o.card, r, {
      [o.inModal]: s
    }),
    children: [(0, i.jsxs)("div", {
      className: l()(o.cardHeader, {
        [o.inModal]: s
      }),
      children: [(0, i.jsx)(a.Text, {
        variant: "text-sm/semibold",
        children: c
      }), (0, i.jsx)("div", {
        children: t
      })]
    }), s ? (0, i.jsx)(a.izJ, {}) : null, n]
  })
}