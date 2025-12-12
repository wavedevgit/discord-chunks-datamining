/** Chunk was on web.js **/
/** chunk id: 194625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk887490 = require("./887490.js");
let i = "applicationCommand";

function a(e, t) {
  if (r.bN.areStylesDisabled(e)) return [];
  let [n, a] = t, o = [];
  if (!r.LC.isText(n)) return o;
  let [s] = r.bN.node(e, r.C0.parent(a));
  return r.aj.isType(s, i) && n === s.children[0] && o.push({
    anchor: {
      path: a,
      offset: 0
    },
    focus: {
      path: a,
      offset: 0 + s.command.displayName.length + 1
    },
    commandName: true
  }), o
}