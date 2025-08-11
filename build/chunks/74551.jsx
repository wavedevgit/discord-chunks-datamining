/** Chunk was on web.js **/
/** chunk id: 74551, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk575016 = require("./575016.js"),
  Chunk294117 = require("./294117.js");

function s(e) {
  let {
    reminder: t,
    throttledNow: n
  } = e, {
    dueInText: s,
    isOverdue: l
  } = (0, o.AT)({
    dueAt: null == t ? true : t.saveData.dueAt,
    now: n,
    type: o.hQ.SHORT
  });
  if (null == t.saveData.dueAt) return null;
  let c = l ? "text-danger" : "text-default";
  return <div className={a.container}>{<div className={a.icon}><i.T39 size={"xxs"} color={"text-danger" === c ? i.TVs.colors.TEXT_DANGER : i.TVs.colors.INTERACTIVE_ACTIVE} /></div>}{<i.X6q variant={"text-md/semibold"} color={c}>{s}</i.X6q>}</div>
}