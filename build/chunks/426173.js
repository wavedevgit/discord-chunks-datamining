/** Chunk was on web.js **/
/** chunk id: 426173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => i
});
var Chunk422037 = require("./422037.js");
class i {
  getItemRect(e) {
    let t = this.ref.current;
    if (!t) return null;
    let n = null != e ? (0, r.D0)(this.ref, e) : null;
    if (!n) return null;
    let i = t.getBoundingClientRect(),
      a = n.getBoundingClientRect();
    return {
      x: a.left - i.left - t.clientLeft + t.scrollLeft,
      y: a.top - i.top - t.clientTop + t.scrollTop,
      width: a.width,
      height: a.height
    }
  }
  getContentSize() {
    var e, t;
    let n = this.ref.current;
    return {
      width: null != (e = null == n ? true : n.scrollWidth) ? e : 0,
      height: null != (t = null == n ? true : n.scrollHeight) ? t : 0
    }
  }
  getVisibleRect() {
    var e, t, n, r;
    let i = this.ref.current;
    return {
      x: null != (e = null == i ? true : i.scrollLeft) ? e : 0,
      y: null != (t = null == i ? true : i.scrollTop) ? t : 0,
      width: null != (n = null == i ? true : i.clientWidth) ? n : 0,
      height: null != (r = null == i ? true : i.clientHeight) ? r : 0
    }
  }
  constructor(e) {
    this.ref = e
  }
}