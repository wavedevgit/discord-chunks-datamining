/** Chunk was on 37082 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js");
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
  return <s.xJW>{<s.vwX tag={s.RB0.H5}>{"Prefill with Quest"}</s.vwX>}{<s.R94><s.PhF aria-label={"Prefill Quest"} options={i} isSelected={e => (null == e ? true : e.id) === (null == n ? true : n.id)} select={t} serialize={String} /></s.R94>}</s.xJW>
}