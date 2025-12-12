/** Chunk was on web.js **/
/** chunk id: 547545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk388032 = require("./388032.jsx");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  announce(e, t, n) {
    this.announcer.announce(e, t, n)
  }
  announceDrag(e, t) {
    if (null == e) return;
    let n = this.getName(e, t);
    this.announce(r.intl.formatToPlainString(r.t["vHD/Je"], {
      itemName: n
    }))
  }
  announceHover(e, t) {
    null != e && this.announce(this.getName(e, t))
  }
  announceDrop() {
    this.announce(Chunk388032.intl.string(Chunk388032.t.lMkmz7))
  }
  announceCancel() {
    this.announce(Chunk388032.intl.string(Chunk388032.t["u4d/eC"]))
  }
  clear() {
    this.announcer.clearAnnouncements()
  }
  getName(e, t) {
    var n, r;
    return null != (r = null != (n = e.getAttribute("data-dnd-name")) ? n : e.getAttribute("aria-label")) ? r : t
  }
  constructor(e) {
    if (i(this, "announcer", true), null != e) this.announcer = e;
    else {
      let e = n(408160);
      this.announcer = {
        announce: e.announce,
        clearAnnouncements: e.clearAnnouncer
      }
    }
  }
}