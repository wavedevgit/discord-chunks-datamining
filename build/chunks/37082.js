/** Chunk was on web.js **/
/** chunk id: 37082, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  R: () => s,
  y: () => l
}), require("./49124.js");
try {
  r = window.localStorage
} catch (e) {}
try {
  delete window.localStorage
} catch (e) {}

function a() {
  let e = "test";
  try {
    return r.setItem(module, module), r.removeItem(module), true
  } catch (e) {
    returnfalse
  }
}
class o {
  get(e, t) {
    let n = r.getItem(e);
    if (null != n) try {
      n = JSON.parse(n)
    } catch (e) {
      n = t
    } else n = t;
    return n
  }
  set(e, t) {
    r.setItem(e, JSON.stringify(t))
  }
  remove(e) {
    r.removeItem(e)
  }
  clear() {
    r.clear()
  }
  stringify() {
    return JSON.stringify(r || {})
  }
  asyncGetRaw(e, t) {
    return Promise.resolve(r.getItem(e))
  }
  getRaw(e) {
    return r.getItem(e)
  }
  setRaw(e, t) {
    r.setItem(e, t)
  }
  getAfterRefresh(e) {
    return Promise.resolve(this.get(e))
  }
}
class s {
  get(e, t) {
    return this.storage.hasOwnProperty(e) ? this.storage[e] : t
  }
  set(e, t) {
    this.storage[e] = t
  }
  remove(e) {
    delete this.storage[e]
  }
  clear() {
    this.storage = {}
  }
  stringify() {
    return JSON.stringify(this.storage)
  }
  asyncGetRaw(e, t) {
    return Promise.resolve(this.getRaw(e))
  }
  getRaw(e) {
    return this.storage.hasOwnProperty(e) ? this.storage[e] : null
  }
  setRaw(e, t) {
    this.storage[e] = t
  }
  getAfterRefresh(e) {
    return Promise.resolve(this.get(e))
  }
  constructor() {
    i(this, "storage", true), this.storage = {}
  }
}
let l = a() ? new o : new s