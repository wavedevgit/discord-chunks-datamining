/** Chunk was on 47841 **/
/** chunk id: 593100, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var r, i, Chunk615300 = require("./615300.js");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}
class o {
  start() {
    return new Promise(e => {
      this.animation.start(() => {
        e()
      })
    })
  }
  stop() {
    this.animation.stop()
  }
  constructor(e) {
    s(this, "animation", true), this.animation = e
  }
}
class c {
  _map(e) {
    return this.animations.map(e)
  }
  start() {
    return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()))
  }
  stop() {
    this._map(e => e.stop())
  }
  constructor(e) {
    s(this, "animations", true), this.animations = e
  }
}
class d {
  async start() {
    for (let e of (this.stopped = false, this.animations)) {
      if (this.stopped) return;
      await e.start()
    }
  }
  stop() {
    this.stopped = true, this.animations.map(e => e.stop())
  }
  constructor(e) {
    s(this, "animations", true), s(this, "stopped", false), this.animations = e
  }
}

function u(e, t, n) {
  return new o(n(e, a({}, t)))
}
let g = (r = a({}, Chunk615300.A), i = i = {
  timing: function(e, t) {
    return u(e, t, l.A.timing)
  },
  spring: function(e, t) {
    return u(e, t, l.A.spring)
  },
  parallel: function(e) {
    return new c(e)
  },
  sequence: function(e) {
    return new d(e)
  }
}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n.push.apply(n, r)
  }
  return n
})(Object(i)).forEach(function(e) {
  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
}), r)