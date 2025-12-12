/** Chunk was on web.js **/
/** chunk id: 459273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I3: () => f,
  d9: () => _,
  oo: () => d,
  yp: () => p
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk836560 = require("./836560.js"),
  Chunk211266 = require("./211266.js"),
  Chunk585483 = require("./585483.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c {
  subscribe(e, t) {
    s.S.subscribe(e, t), this.emitter.on(e, t)
  }
  unsubscribe(e, t) {
    s.S.unsubscribe(e, t), this.emitter.off(e, t)
  }
  bumpDispatchPriority() {
    for (let e of this.emitter.eventNames())
      for (let t of this.emitter.listeners(module)) Chunk585483.S.resubscribe(module, exports)
  }
  constructor() {
    l(this, "emitter", new Chunk836560.EventEmitter)
  }
}
class u {
  subscribe(e, t) {
    s.S.subscribe(e, t)
  }
  unsubscribe(e, t) {
    s.S.unsubscribe(e, t)
  }
  bumpDispatchPriority() {}
}
let d = Chunk473749.createContext(new u),
  f = Chunk473749.forwardRef(function(e, t) {
    let {
      children: n
    } = e, o = (0, a.Z)(() => new c);
    return i.useImperativeHandle(t, () => o, [o]), (0, r.jsx)(d.Provider, {
      value: o,
      children: n
    })
  });

function p(e) {
  let {
    event: t,
    handler: n
  } = e, r = i.useContext(d), o = i.useRef(n);
  i.useEffect(() => {
    o.current = n
  }, [n]);
  let a = null == n;
  return i.useEffect(() => {
    if (a) return;
    let e = function() {
      for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      null == (e = o.current) || e.call(o, ...n)
    };
    return r.subscribe(t, e), () => {
      r.unsubscribe(t, e)
    }
  }, [r, t, a]), null
}

function _(e) {
  return p(e), null
}