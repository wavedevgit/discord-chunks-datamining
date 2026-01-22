/** Chunk was on web.js **/
/** chunk id: 805396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./457529.js"), require("./65821.js");
var Chunk536194 = require("./536194.js");
let i = (0, require("./242133.js").g)();
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
let s = true !== i ? i : a;
Chunk536194.P.isDiscordGatewayPlaintextSet() && (s = a);
let o = s