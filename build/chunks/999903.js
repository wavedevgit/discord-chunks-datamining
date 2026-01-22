/** Chunk was on web.js **/
/** chunk id: 999903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438);

function a(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : () => true;
  return i()(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
}