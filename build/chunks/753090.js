/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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