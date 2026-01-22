/** Chunk was on 37836 **/
/** chunk id: 845671, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function s(t) {
  let {
    onClose: r,
    transitionState: n,
    body: s
  } = t;
  return (0, i.jsxs)(e.EOs, {
    transitionState: n,
    parentComponent: "ProblemReported",
    children: [(0, i.jsx)(e.rQ0, {
      separator: false,
      children: (0, i.jsx)(e.Heading, {
        variant: "heading-md/semibold",
        children: a.intl.string(a.t.KTjjrG)
      })
    }), (0, i.jsx)(e.$mQ, {
      children: "string" == typeof s ? (0, i.jsx)(e.Text, {
        variant: "text-md/normal",
        children: s
      }) : s
    }), (0, i.jsx)(e.jlY, {
      children: (0, i.jsx)(e.Button, {
        variant: "primary",
        text: a.intl.string(a.t.i4jeWR),
        onClick: r
      })
    })]
  })
}