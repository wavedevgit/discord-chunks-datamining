/** Chunk was on web.js **/
/** chunk id: 610308, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./49124.js"), require("./415506.js");
var Chunk374023 = require("./374023.js");
let i = (0, require("./733393.js").V)();
class a {
  pack(e) {
    return JSON.stringify(e)
  }
  unpack(e) {
    if ("string" != typeof e) throw Error("Expected a string to be passed to JSONEncoding.unpack, got ".concat(null == e ? null : typeof e));
    return JSON.parse(e)
  }
  getName() {
    return "json"
  }
  wantsString() {
    returntrue
  }
}
let o = true !== i ? i : a;
Chunk374023.s.isDiscordGatewayPlaintextSet() && (o = a);
let s = o