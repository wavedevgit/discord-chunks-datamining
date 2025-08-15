/** Chunk was on 54157 **/
/** chunk id: 74551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk575016 = require("./575016.js"),
  Chunk793714 = require("./793714.js");

function i(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: i,
    isOverdue: o
  } = (0, l.AT)({
    dueAt: null == t ? true : t.saveData.dueAt,
    now: n,
    type: l.hQ.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = o ? "text-danger" : "text-default";
  return (0, r.jsxs)("div", {
    className: a.container,
    children: [(0, r.jsx)("div", {
      className: a.icon,
      children: (0, r.jsx)(s.T39, {
        size: "xxs",
        color: "text-danger" === c ? s.TVs.colors.TEXT_DANGER : s.TVs.colors.INTERACTIVE_ACTIVE
      })
    }), (0, r.jsx)(s.X6q, {
      variant: "text-md/semibold",
      color: c,
      children: i
    })]
  })
}