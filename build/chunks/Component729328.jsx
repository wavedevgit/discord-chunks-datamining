/** Chunk was on 14466 **/
/** chunk id: 729328, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    onClose: n,
    transitionState: i,
    body: s
  } = t;
  return (0, r.jsxs)(e.Y0X, {
    transitionState: i,
    parentComponent: "ProblemReported",
    children: [(0, r.jsx)(e.xBx, {
      separator: false,
      children: (0, r.jsx)(e.Heading, {
        variant: "heading-md/semibold",
        children: a.intl.string(a.t.KTjjrK)
      })
    }), (0, r.jsx)(e.hzk, {
      children: "string" == typeof s ? (0, r.jsx)(e.Text, {
        variant: "text-md/normal",
        children: s
      }) : s
    }), (0, r.jsx)(e.mzw, {
      children: (0, r.jsx)(e.Button, {
        variant: "primary",
        text: a.intl.string(a.t.i4jeWV),
        onClick: n
      })
    })]
  })
}