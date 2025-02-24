/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(81825);

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends r.Z {
  constructor(e) {
    var t;
    super(), i(this, "id", void 0), i(this, "widgets", void 0), i(this, "version", void 0), this.version = null !== (t = Number(e.version)) && void 0 !== t ? t : 0, this.id = e.id || "", this.widgets = e.widgets || []
  }
}