/** Chunk was on 52199 **/
/** chunk id: 371349, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk704456 = require("./704456.js"),
  Chunk252645 = require("./252645.js");

function i(e) {
  let {
    reminder: t,
    throttledNow: r
  } = e, {
    dueInText: i,
    isOverdue: o
  } = (0, s.Ce)({
    dueAt: null == t ? true : t.saveData.dueAt,
    now: r,
    type: s.kh.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = o ? "text-feedback-critical" : "text-default";
  return (0, n.jsxs)("div", {
    className: a.k,
    children: [(0, n.jsx)("div", {
      className: a.K,
      children: (0, n.jsx)(l.O4, {
        size: "xxs",
        color: "text-feedback-critical" === c ? l.LU0.colors.TEXT_FEEDBACK_CRITICAL : l.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, n.jsx)(l.Heading, {
      variant: "text-md/semibold",
      color: c,
      children: i
    })]
  })
}