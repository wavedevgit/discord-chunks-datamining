/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => r
}), n(47120);
let r = {
  makeMemoizer: function(e) {
    let t = new Map;
    return n => {
      let r = t.get(n);
      return void 0 === r && (r = e(n), t.set(n, r)), r
    }
  }
}