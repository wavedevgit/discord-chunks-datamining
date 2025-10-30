/** Chunk was on 13608 **/
/** chunk id: 598612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk146122 = require("./146122.js");

function i(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    type: a = "primary"
  } = e;
  return "secondary" === a ? (0, r.jsx)(l.Kqy, {
    gap: 8,
    padding: {
      left: 12,
      right: 12
    },
    children: (0, r.jsx)(l.X6q, {
      variant: "heading-md/semibold",
      color: "text-secondary",
      children: t
    })
  }) : (0, r.jsxs)(l.Kqy, {
    gap: 8,
    padding: {
      left: 12,
      right: 12
    },
    children: [(0, r.jsxs)("div", {
      className: o.headerTitle,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != i && i]
    }), null != n && (0, r.jsx)(l.xvT, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: n
    })]
  })
}