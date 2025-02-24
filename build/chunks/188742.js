/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
let r = new(n(113638)).Z(i);

function i(e) {
  {
    let t = n(160170).B[e];
    return void 0 !== t ? t().then(e => e.default) : Promise.resolve({})
  }
}
let o = {
  setEmojiLocale: function(e) {
    r.setParams(e)
  },
  getTermsForEmoji: function(e) {
    let t = r.get();
    return void 0 !== t ? t[e] : []
  }
}