/** Chunk was on web.js **/
/** chunk id: 635042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk625137 = require("./625137.js");

function i(e, t) {
  var n, i;
  let o = (null == (n = e.tags) ? true : n.guild_connections) !== true,
    a = (null == (i = t.tags) ? true : i.guild_connections) !== true;
  return o && !a ? 1 : !o && a ? false : (0, r.y2)(e, t)
}