/** Chunk was on web.js **/
/** chunk id: 1659, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => i
});
var Chunk7864 = require("./7864.js");

function i(e, t) {
  var n, i;
  let a = (null == (n = e.tags) ? true : n.guild_connections) !== true,
    o = (null == (i = t.tags) ? true : i.guild_connections) !== true;
  return a && !o ? 1 : !a && o ? false : (0, r.AT)(e, t)
}