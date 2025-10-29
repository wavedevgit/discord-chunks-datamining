/** Chunk was on 34297 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js");
let o = function(e) {
  let {
    onSelect: t,
    quest: n
  } = e, {
    quests: o
  } = (0, a.J2)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), i = [{
    label: "NONE",
    value: null
  }, ...o.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, r.jsx)(s.PhF, {
    label: "Prefill with Quest",
    options: i,
    isSelected: e => (null == e ? true : e.id) === (null == n ? true : n.id),
    select: t,
    serialize: String
  })
}