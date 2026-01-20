/** Chunk was on 22979 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
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
    id: "none",
    label: "NONE",
    value: null
  }, ...l.map(e => ({
    id: e.id,
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, a.jsx)(r.PhF, {
    label: "Prefill with Quest",
    options: s,
    value: n,
    onSelectionChange: t,
    selectionMode: "single",
    fullWidth: true
  })
}