/** Chunk was on web.js **/
/** chunk id: 194625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk887490 = require("./887490.js");
let i = "applicationCommand";

function o(e, t) {
  if (r.bN.areStylesDisabled(e)) return [];
  let [n, o] = t, a = [];
  if (!r.LC.isText(n)) return a;
  let [s] = r.bN.node(e, r.C0.parent(o));
  return r.aj.isType(s, i) && n === s.children[0] && a.push({
    anchor: {
      path: o,
      offset: 0
    },
    focus: {
      path: o,
      offset: 0 + s.command.displayName.length + 1
    },
    commandName: true
  }), a
}