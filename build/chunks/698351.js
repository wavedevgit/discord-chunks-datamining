/** Chunk was on web.js **/
/** chunk id: 698351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk985018 = require("./985018.jsx");

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
    this.announce(r.intl.string(r.t.lMkmz7))
  }
  announceCancel() {
    this.announce(r.intl.string(r.t["u4d/eC"]))
  }
  clear() {
    this.announcer.clearAnnouncements()
  }
  getName(e, t) {
    var n, r;
    return null != (n = null != (r = e.getAttribute("data-dnd-name")) ? r : e.getAttribute("aria-label")) ? n : t
  }
  constructor(e) {
    if (i(this, "announcer", true), null != e) this.announcer = e;
    else {
      const e = n(620557);
      this.announcer = {
        announce: e.announce,
        clearAnnouncements: e.clearAnnouncer
      }
    }
  }
}