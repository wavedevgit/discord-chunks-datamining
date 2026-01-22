/** Chunk was on web.js **/
/** chunk id: 152501, original params: e,t,n (module,exports,re quire) **/
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
  R: () => i
}), require("./321073.js");
class i {
  getElement() {
    return 0 === this._elements.length ? this._createElement() : this._elements.pop()
  }
  poolElement(e) {
    this._cleanElement(e), this._elements.push(e)
  }
  clearPool() {
    this._elements.length = 0
  }
  constructor(e, t) {
    r(this, "_elements", true), r(this, "_createElement", true), r(this, "_cleanElement", true), this._elements = [], this._createElement = e, this._cleanElement = t
  }
}