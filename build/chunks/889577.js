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
    let e = {};
    return null != this.desktopMaxHeight && (module.maxHeight = this.desktopMaxHeight), null != this.backgroundStyle && (module.background = this.backgroundStyle), Object.keys(module).length > 0 ? module : true
  }
  toMobileStyles() {
    let e = {};
    return null != this.mobileMaxHeight && (module.maxHeight = this.mobileMaxHeight), null != this.backgroundStyle && (module.background = this.backgroundStyle), Object.keys(module).length > 0 ? module : true
  }
  constructor(e) {
    r(this, "desktopMaxHeight", true), r(this, "mobileMaxHeight", true), r(this, "responsive", true), r(this, "backgroundStyle", true), this.desktopMaxHeight = e.desktop_max_height, this.mobileMaxHeight = e.mobile_max_height, this.responsive = e.responsive, this.backgroundStyle = e.background_style
  }
}