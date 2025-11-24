/** Chunk was on 46984 **/
/** chunk id: 598612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk836519 = require("./836519.js");

function o(e) {
  let {
    title: t,
    subtitle: n,
    badge: o,
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
      className: i.headerTitle,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != o && o]
    }), null != n && (0, r.jsx)(l.xvT, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: n
    })]
  })
}