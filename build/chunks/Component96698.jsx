/** Chunk was on 58023 **/
/** chunk id: 96698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk523222 = require("./523222.js");

function o(e) {
  let {
    steps: t,
    stepIndex: n,
    onClick: l
  } = e;
  return (0, r.jsx)("div", {
    className: s.container,
    children: t.map((e, t) => {
      let o = n === t;
      return (0, r.jsxs)(a.P3F, {
        onClick: () => l(t),
        className: s.stepContainer,
        children: [(0, r.jsx)("div", {
          className: i()(s.progressBar, {
            [s.selectedProgressBar]: o
          })
        }), (0, r.jsx)(a.Text, {
          color: o ? "text-brand" : "text-muted",
          variant: "text-xs/normal",
          children: e
        })]
      }, e)
    })
  })
}