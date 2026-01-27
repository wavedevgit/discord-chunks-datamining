/** Chunk was on web.js **/
/** chunk id: 173618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk812729 = require("./812729.js"),
  i = require.n(Chunk812729);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}
class s {
  shouldCommit() {
    returntrue
  }
  setState(e) {
    this.state = o({}, this.state, e)
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
      n = this.getNextState(o({}, this.state, e));
    if (t) this.dirty = !i()(n, this.getInitialState());
    else
      for (let e of Object.keys(n)) this.dirty = this.dirty || !i()(this.state[e], n[e]);
    let r = this.dirty && this.shouldCommit();
    return (r || this.alwaysUpdateState) && (this.state = n), !!r && (this.dirty = false, this.didCommit(this.state), true)
  }
  forceUpdate() {
    this.dirty = false, this.didCommit(this.state)
  }
  constructor(e = true) {
    a(this, "alwaysUpdateState", true), a(this, "dirty", true), a(this, "state", true), this.alwaysUpdateState = e, this.dirty = false, this.state = this.getInitialState()
  }
}