/** Chunk was on 53950 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk968843 = require("./968843.js");
let l = function(e) {
  let {
    onSelect: t,
    quest: n
  } = e, {
    quests: l
  } = (0, i.J2)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), s = [{
    label: "NONE",
    value: null
  }, ...l.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, a.jsx)(r.B6, {
    label: "Prefill with Quest",
    options: s,
    isSelected: e => (null == e ? true : e.id) === (null == n ? true : n.id),
    select: t,
    serialize: String
  })
}