/** Chunk was on 42521 **/
/** chunk id: 916028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  return (0, r.jsxs)(s.xJW, {
    children: [(0, r.jsx)(s.vwX, {
      tag: s.RB0.H5,
      children: "Prefill with Quest"
    }), (0, r.jsx)(s.R94, {
      children: (0, r.jsx)(s.PhF, {
        "aria-label": "Prefill Quest",
        options: i,
        isSelected: e => (null == e ? true : e.id) === (null == n ? true : n.id),
        select: t,
        serialize: String
      })
    })]
  })
}