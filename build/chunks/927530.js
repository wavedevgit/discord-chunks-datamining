/** Chunk was on web.js **/
/** chunk id: 927530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => f
});
var Chunk661822 = require("./661822.js"),
  Chunk898491 = require("./898491.js"),
  Chunk910316 = require("./910316.js"),
  Chunk732418 = require("./732418.js");
class s {
  constructor(e, t) {
    let n, r;
    n = e || new o.s, r = t || new o.s, this._stack = [{
      scope: n
    }], this._isolationScope = r
  }
  withScope(e) {
    let t, n = this._pushScope();
    try {
      t = e(n)
    } catch (e) {
      throw this._popScope(), e
    }
    return (0, r.J8)(t) ? t.then(e => (this._popScope(), e), e => {
      throw this._popScope(), e
    }) : (this._popScope(), t)
  }
  getClient() {
    return this.getStackTop().client
  }
  getScope() {
    return this.getStackTop().scope
  }
  getIsolationScope() {
    return this._isolationScope
  }
  getStackTop() {
    return this._stack[this._stack.length - 1]
  }
  _pushScope() {
    let e = this.getScope().clone();
    return this._stack.push({
      client: this.getClient(),
      scope: module
    }), module
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop()
  }
}

function l() {
  let e = (0, Chunk732418.c)(),
    t = (0, Chunk732418.q)(module);
  return exports.stack = exports.stack || new s((0, Chunk898491.X)(), (0, Chunk898491.T)())
}

function c(e) {
  return l().withScope(e)
}

function u(e, t) {
  let n = l();
  return n.withScope(() => (n.getStackTop().scope = e, t(e)))
}

function d(e) {
  return l().withScope(() => e(l().getIsolationScope()))
}

function f() {
  return {
    withIsolationScope: d,
    withScope: c,
    withSetScope: u,
    withSetIsolationScope: (e, t) => d(t),
    getCurrentScope: () => l().getScope(),
    getIsolationScope: () => l().getIsolationScope()
  }
}