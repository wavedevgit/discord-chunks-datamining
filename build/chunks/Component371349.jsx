/** Chunk was on web.js **/
/** chunk id: 371349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk704456 = require("./704456.js"),
  Chunk252645 = require("./252645.js");

function o(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: o,
    isOverdue: l
  } = (0, a.Ce)({
    dueAt: null == t ? true : t.saveData.dueAt,
    now: n,
    type: a.kh.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = l ? "text-feedback-critical" : "text-default";
  return (0, r.jsxs)("div", {
    className: s.k,
    children: [(0, r.jsx)("div", {
      className: s.K,
      children: (0, r.jsx)(i.O4, {
        size: "xxs",
        color: "text-feedback-critical" === c ? i.LU0.colors.TEXT_FEEDBACK_CRITICAL : i.LU0.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "text-md/semibold",
      color: c,
      children: o
    })]
  })
}