/** Chunk was on web.js **/
/** chunk id: 791059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
}), require("./896048.js");
let r = {
  makeMemoizer: function(e) {
    let t = new Map;
    return n => {
      let r = t.get(n);
      return true === r && (r = e(n), t.set(n, r)), r
    }
  }
}