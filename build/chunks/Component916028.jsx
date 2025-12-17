/** Chunk was on 6043 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk968843 = require("./968843.js");
let i = function(e) {
  let {
    onSelect: t,
    quest: n
  } = e, {
    quests: i
  } = (0, l.J2)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), s = [{
    label: "NONE",
    value: null
  }, ...i.map(e => ({
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