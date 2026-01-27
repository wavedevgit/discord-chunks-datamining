/** Chunk was on web.js **/
/** chunk id: 234320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ah: () => f,
  EG: () => _,
  EH: () => d,
  Vo: () => p
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk143236 = require("./143236.js"),
  Chunk444927 = require("./444927.js"),
  Chunk203982 = require("./203982.js");

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
    s._.subscribe(e, t), this.emitter.on(e, t)
  }
  unsubscribe(e, t) {
    s._.unsubscribe(e, t), this.emitter.off(e, t)
  }
  bumpDispatchPriority() {
    for (let e of this.emitter.eventNames())
      for (let t of this.emitter.listeners(e)) s._.resubscribe(e, t)
  }
  constructor() {
    l(this, "emitter", new a.EventEmitter)
  }
}
class u {
  subscribe(e, t) {
    s._.subscribe(e, t)
  }
  unsubscribe(e, t) {
    s._.unsubscribe(e, t)
  }
  bumpDispatchPriority() {}
}
let d = Chunk64700.createContext(new u),
  f = Chunk64700.forwardRef(function(e, t) {
    let {
      children: n
    } = e, a = (0, o.A)(() => new c);
    return i.useImperativeHandle(t, () => a, [a]), (0, r.jsx)(d.Provider, {
      value: a,
      children: n
    })
  });

function p(e) {
  let {
    event: t,
    handler: n
  } = e, r = i.useContext(d), a = i.useRef(n);
  i.useEffect(() => {
    a.current = n
  }, [n]);
  let o = null == n;
  return i.useEffect(() => {
    if (o) return;
    let e = function() {
      for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      null == (e = a.current) || e.call(a, ...n)
    };
    return r.subscribe(t, e), () => {
      r.unsubscribe(t, e)
    }
  }, [r, t, o]), null
}

function _(e) {
  return p(e), null
}