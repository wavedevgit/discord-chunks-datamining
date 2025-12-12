/** Chunk was on web.js **/
/** chunk id: 188742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
let r = new(require("./113638.js")).Z(i);

function i(e) {
  {
    let t = n(160170).B[e];
    return true !== t ? t().then(e => e.default) : Promise.resolve({})
  }
}
let a = {
  setEmojiLocale: function(e) {
    r.setParams(e)
  },
  getTermsForEmoji: function(e) {
    let t = r.get();
    return true !== t ? t[e] : []
  }
}