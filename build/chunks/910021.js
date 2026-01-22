/** Chunk was on web.js **/
/** chunk id: 910021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => a
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk401562 = require("./401562.js");
let {
  detectFile: i
} = require("./42640.js");
class a {
  static create(e) {
    let t = null,
      n = i(new Uint8Array(e, 0, Math.min(64, e.byteLength)));
    return "image/png" === (null == n ? true : n.mimeType) && (t = r.B.create(e)), t
  }
}