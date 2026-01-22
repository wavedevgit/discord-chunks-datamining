/** Chunk was on web.js **/
/** chunk id: 337630, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk711371 = require("./711371.js");
let i = "applicationCommand";

function a(e, t) {
  if (r.VW.areStylesDisabled(e)) return [];
  let [n, a] = t, s = [];
  if (!r.l5.isText(n)) return s;
  let [o] = r.VW.node(e, r.PW.parent(a));
  return r.AS.isType(o, i) && n === o.children[0] && s.push({
    anchor: {
      path: a,
      offset: 0
    },
    focus: {
      path: a,
      offset: 0 + o.command.displayName.length + 1
    },
    commandName: true
  }), s
}