/** Chunk was on 13616 **/
/** chunk id: 289465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk272997 = require("./272997.js");

function s(e) {
  let {
    bar: t,
    children: n,
    className: r,
    inModal: s,
    title: c
  } = e;
  return (0, i.jsxs)(o.Zbd, {
    editable: true,
    className: l()(a.card, r, {
      [a.inModal]: s
    }),
    children: [(0, i.jsxs)("div", {
      className: l()(a.cardHeader, {
        [a.inModal]: s
      }),
      children: [(0, i.jsx)(o.Text, {
        variant: "text-sm/semibold",
        children: c
      }), (0, i.jsx)("div", {
        children: t
      })]
    }), s ? (0, i.jsx)(o.$i$, {}) : null, n]
  })
}