/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  O: () => f
});
var r = n(573736),
  i = n(592014),
  o = n(307854),
  a = n(356442);
class s {
  constructor(e, t) {
    let n, r;
    n = e || new o.s, r = t || new o.s, this._stack = [{
      scope: n
    }], this._isolationScope = r
  }
  withScope(e) {
    let t;
    let n = this._pushScope();
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
      scope: e
    }), e
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop()
  }
}

function l() {
  let e = (0, a.c)(),
    t = (0, a.q)(e);
  return t.stack = t.stack || new s((0, i.X)(), (0, i.T)())
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