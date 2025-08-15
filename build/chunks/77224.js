/** Chunk was on web.js **/
/** chunk id: 77224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk341702 = require("./341702.js"),
  Chunk887490 = require("./887490.js");
let a = "line";

function o(e, t) {
  if (i.bN.areStylesDisabled(e)) return [];
  let [n, o] = t, s = [];
  if (!i.aj.isType(n, a) || null == n.codeBlockState) return s;
  let {
    hljsTypes: l,
    isStyledCodeBlockLine: c
  } = n.codeBlockState;
  if (null == l || 0 === l.length || !c) return [];
  for (let t of l) {
    let a = n.children.map(e => i.LC.isText(e) ? e.text : null);
    s.push({
      hljsTypes: t.types,
      anchor: (0, r.t)(e, o, a, t.start),
      focus: (0, r.t)(e, o, a, t.end)
    })
  }
  return s
}