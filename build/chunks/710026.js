/** Chunk was on web.js **/
/** chunk id: 710026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
let r = new(require("./762490.js")).A(i);

function i(e) {
  {
    let t = n(14206).S[e];
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