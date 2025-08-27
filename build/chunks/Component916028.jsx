/** Chunk was on web.js **/
/** chunk id: 916028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
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
  }), s = [{
    label: "NONE",
    value: null
  }, ...o.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, r.jsxs)(i.xJW, {
    children: [(0, r.jsx)(i.vwX, {
      tag: i.RB0.H5,
      children: "Prefill with Quest"
    }), (0, r.jsx)(i.R94, {
      children: (0, r.jsx)(i.PhF, {
        "aria-label": "Prefill Quest",
        options: s,
        isSelected: e => (null == e ? true : e.id) === (null == n ? true : n.id),
        select: t,
        serialize: String
      })
    })]
  })
}