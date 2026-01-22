/** Chunk was on 342 **/
/** chunk id: 520467, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk751679 = require("./751679.js");

function o(e) {
  let {
    steps: t,
    stepIndex: n,
    onClick: r
  } = e;
  return (0, l.jsx)("div", {
    className: a.kL,
    children: t.map((e, t) => {
      let o = n === t;
      return (0, l.jsxs)(s.DUT, {
        onClick: () => r(t),
        className: a._h,
        children: [(0, l.jsx)("div", {
          className: i()(a.hr, {
            [a.YD]: o
          })
        }), (0, l.jsx)(s.Text, {
          color: o ? "text-brand" : "text-muted",
          variant: "text-xs/normal",
          children: e
        })]
      }, e)
    })
  })
}