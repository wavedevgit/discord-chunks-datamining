/** Chunk was on web.js **/
/** chunk id: 889577, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  X: () => i
});
class i {
  static fromServer(e) {
    return new i(e)
  }
  toDesktopStyles() {
    if (null != this.desktopMaxHeight) return {
      maxHeight: this.desktopMaxHeight
    }
  }
  constructor(e) {
    r(this, "desktopMaxHeight", true), this.desktopMaxHeight = e.desktop_max_height
  }
}