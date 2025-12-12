/** Chunk was on web.js **/
/** chunk id: 635042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk625137 = require("./625137.js");

function i(e, t) {
  var n, i;
  let a = (null == (n = e.tags) ? true : n.guild_connections) !== true,
    o = (null == (i = t.tags) ? true : i.guild_connections) !== true;
  return a && !o ? 1 : !a && o ? false : (0, r.y2)(e, t)
}