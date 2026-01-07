/** Chunk was on web.js **/
/** chunk id: 113638, original params: e,t,n (module,exports,re quire) **/
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
  Z: () => i
});
class i {
  setParams(e) {
    this.param !== e && (this.param = e, this.loading = false, this.loaded = false)
  }
  get() {
    return this.ensureLoaded(), this.val
  }
  ensureLoaded() {
    if (this.loaded || this.loading || true === this.param) return;
    let e = this.param;
    this.loading = true, this.loader(e).then(t => {
      e === this.param && (this.val = t, this.loading = false, this.loaded = true)
    })
  }
  constructor(e) {
    r(this, "val", true), r(this, "loading", false), r(this, "loaded", false), r(this, "param", true), r(this, "loader", true), this.loader = e
  }
}