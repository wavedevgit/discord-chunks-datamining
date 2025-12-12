/** Chunk was on web.js **/
/** chunk id: 74551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk575016 = require("./575016.js"),
  Chunk781187 = require("./781187.js");

function s(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: s,
    isOverdue: l
  } = (0, a.AT)({
    dueAt: null == t ? true : t.saveData.dueAt,
    now: n,
    type: a.hQ.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = l ? "text-feedback-critical" : "text-default";
  return (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)("div", {
      className: o.icon,
      children: (0, r.jsx)(i.T39, {
        size: "xxs",
        color: "text-feedback-critical" === c ? i.TVs.colors.TEXT_FEEDBACK_CRITICAL : i.TVs.colors.INTERACTIVE_TEXT_ACTIVE
      })
    }), (0, r.jsx)(i.Heading, {
      variant: "text-md/semibold",
      color: c,
      children: s
    })]
  })
}