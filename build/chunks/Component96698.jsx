/** Chunk was on 61 **/
/** chunk id: 96698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk713449 = require("./713449.js");

function o(e) {
  let {
    steps: t,
    stepIndex: n,
    onClick: r
  } = e;
  return (0, l.jsx)("div", {
    className: s.container,
    children: t.map((e, t) => {
      let o = n === t;
      return (0, l.jsxs)(a.P3F, {
        onClick: () => r(t),
        className: s.stepContainer,
        children: [(0, l.jsx)("div", {
          className: i()(s.progressBar, {
            [s.selectedProgressBar]: o
          })
        }), (0, l.jsx)(a.Text, {
          color: o ? "text-brand" : "text-muted",
          variant: "text-xs/normal",
          children: e
        })]
      }, e)
    })
  })
}