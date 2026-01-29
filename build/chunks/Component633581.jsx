/** Chunk was on 87557 **/
/** chunk id: 633581, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk890687 = require("./890687.js");
let i = function(e) {
  let {
    onSelect: t,
    quest: n
  } = e, {
    quests: i
  } = (0, r.mL)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), s = [{
    id: "none",
    label: "NONE",
    value: null
  }, ...i.map(e => ({
    id: e.id,
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, a.jsx)(l.l6P, {
    label: "Prefill with Quest",
    options: s,
    value: n,
    onSelectionChange: t,
    selectionMode: "single",
    fullWidth: true
  })
}