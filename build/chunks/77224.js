/** Chunk was on web.js **/
/** chunk id: 77224, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk341702 = require("./341702.js"),
  Chunk887490 = require("./887490.js");
let o = "line";

function a(e, t) {
  if (i.bN.areStylesDisabled(e)) return [];
  let [n, a] = t, s = [];
  if (!i.aj.isType(n, o) || null == n.codeBlockState) return s;
  let {
    hljsTypes: l,
    isStyledCodeBlockLine: c
  } = n.codeBlockState;
  if (null == l || 0 === l.length || !c) return [];
  for (let t of l) {
    let o = n.children.map(e => i.LC.isText(e) ? e.text : null);
    s.push({
      hljsTypes: t.types,
      anchor: (0, r.t)(e, a, o, t.start),
      focus: (0, r.t)(e, a, o, t.end)
    })
  }
  return s
}