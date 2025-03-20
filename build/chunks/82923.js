/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r, i, s = n(748780);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
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
    a(this, "animation", void 0), this.animation = e
  }
}
class A {
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
    a(this, "animations", void 0), this.animations = e
  }
}
class c {
  async start() {
    for (let e of (this.stopped = !1, this.animations)) {
      if (this.stopped) return;
      await e.start()
    }
  }
  stop() {
    this.stopped = !0, this.animations.map(e => e.stop())
  }
  constructor(e) {
    a(this, "animations", void 0), a(this, "stopped", !1), this.animations = e
  }
}

function d(e, t, n) {
  return new o(n(e, l({}, t)))
}
let u = (r = l({}, s.Z), i = i = {
  timing: function(e, t) {
    return d(e, t, s.Z.timing)
  },
  spring: function(e, t) {
    return d(e, t, s.Z.spring)
  },
  parallel: function(e) {
    return new A(e)
  },
  sequence: function(e) {
    return new c(e)
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