/** Chunk was on 83615 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk968843 = require("./968843.js");
let a = function(e) {
  let {
    onSelect: t,
    quest: n
  } = e, {
    quests: a
  } = (0, o.J2)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), i = [{
    label: "NONE",
    value: null
  }, ...a.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, r.jsx)(s.B6, {
    label: "Prefill with Quest",
    options: i,
    isSelected: e => (null == e ? true : e.id) === (null == n ? true : n.id),
    select: t,
    serialize: String
  })
}