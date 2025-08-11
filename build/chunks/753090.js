/** Chunk was on web.js **/
/** chunk id: 753090, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => r
}), require("./388685.js");
let r = {
  makeMemoizer: function(e) {
    let t = new Map;
    return n => {
      let r = t.get(n);
      return true === r && (r = e(n), t.set(n, r)), r
    }
  }
}