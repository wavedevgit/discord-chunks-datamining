/** Chunk was on 10150 **/
/** chunk id: 916028, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js");
let i = function(e) {
  let {
    onSelect: t,
    quest: s
  } = e, {
    quests: i
  } = (0, a.J2)({
    fetchPolicy: "cache-and-network",
    callerSource: "prefill_selector"
  }), l = [{
    label: "NONE",
    value: null
  }, ...i.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, n.jsxs)(r.xJW, {
    children: [(0, n.jsx)(r.vwX, {
      children: "Prefill with Quest"
    }), (0, n.jsx)(r.R94, {
      children: (0, n.jsx)(r.PhF, {
        "aria-label": "Prefill Quest",
        options: l,
        isSelected: e => (null == e ? true : e.id) === (null == s ? true : s.id),
        select: t,
        serialize: String
      })
    })]
  })
}