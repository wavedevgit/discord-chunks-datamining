/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => a
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
  static fromPath(e) {
    return new o({
      id: e,
      path: e
    })
  }
  constructor(e) {
    super(), i(this, "id", void 0), i(this, "path", void 0), this.id = e.id, this.path = e.path
  }
}
let a = o