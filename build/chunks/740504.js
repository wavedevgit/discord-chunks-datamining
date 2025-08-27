/** Chunk was on web.js **/
/** chunk id: 740504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711);

function a(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : () => true;
  return i()(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
}