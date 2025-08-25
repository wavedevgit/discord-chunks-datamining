/** Chunk was on web.js **/
/** chunk id: 928801, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk348327 = require("./348327.js"),
  i = require.n(Chunk348327);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
class s {
  shouldCommit() {
    returntrue
  }
  setState(e) {
    this.state = a({}, this.state, e)
  }
  getState() {
    return this.state
  }
  reset() {
    this.dirty = false, this.state = this.getInitialState()
  }
  update() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = this.getNextState(a({}, this.state, module));
    if (exports) this.dirty = !i()(require, this.getInitialState());
    else
      for (let e of Object.keys(require)) this.dirty = this.dirty || !i()(this.state[module], require[module]);
    let r = this.dirty && this.shouldCommit();
    return (Chunk348327 || this.alwaysUpdateState) && (this.state = require), !!Chunk348327 && (this.dirty = false, this.didCommit(this.state), true)
  }
  forceUpdate() {
    this.dirty = false, this.didCommit(this.state)
  }
  constructor(e = true) {
    o(this, "alwaysUpdateState", true), o(this, "dirty", true), o(this, "state", true), this.alwaysUpdateState = e, this.dirty = false, this.state = this.getInitialState()
  }
}