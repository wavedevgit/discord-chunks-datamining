/** Chunk was on 43057 **/
/** chunk id: 968650, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./49124.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");
let s = e => {
  let {
    entry: n,
    transitionState: t,
    requestId: s
  } = e;
  return (0, i.jsxs)(r.Y0X, {
    size: r.CgR.DYNAMIC,
    transitionState: t,
    parentComponent: "StaffOnlyEntryDebugModal",
    children: [(0, i.jsx)(r.xBx, {
      children: (0, i.jsx)(r.X6q, {
        variant: "heading-md/semibold",
        children: "Debugging entry: ".concat(n.id)
      })
    }), (0, i.jsx)(r.hzk, {
      children: (0, i.jsx)("div", {
        style: {
          userSelect: "text",
          padding: "16px"
        },
        children: (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: (0, i.jsx)("pre", {
            children: JSON.stringify({
              entry: n,
              requestId: s
            }, null, 2)
          })
        })
      })
    })]
  })
}