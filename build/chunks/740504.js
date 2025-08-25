/** Chunk was on web.js **/
/** chunk id: 740504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711);

function o(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : () => true;
  return i()(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
}