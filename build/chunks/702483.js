/** Chunk was on web.js **/
/** chunk id: 702483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./321073.js");
var Chunk22098 = require("./22098.js"),
  Chunk711371 = require("./711371.js");
let a = "line";

function s(e, t) {
  if (i.VW.areStylesDisabled(e)) return [];
  let [n, s] = t, o = [];
  if (!i.AS.isType(n, a) || null == n.codeBlockState) return o;
  let {
    hljsTypes: l,
    isStyledCodeBlockLine: c
  } = n.codeBlockState;
  if (null == l || 0 === l.length || !c) return [];
  for (let t of l) {
    let a = n.children.map(e => i.l5.isText(e) ? e.text : null);
    o.push({
      hljsTypes: t.types,
      anchor: (0, r.Q)(e, s, a, t.start),
      focus: (0, r.Q)(e, s, a, t.end)
    })
  }
  return o
}