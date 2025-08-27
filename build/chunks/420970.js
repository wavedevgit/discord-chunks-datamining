/** Chunk was on web.js **/
/** chunk id: 420970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./539854.js"), require("./388685.js"), require("./642613.js"), require("./415506.js");
var Chunk836560 = require("./836560.js"),
  Chunk579092 = require("./579092.js"),
  Chunk643191 = require("./643191.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Chunk579092.Yd("Flux");
class l extends Chunk836560.EventEmitter {
  log(e, t) {
    let n = new u(e),
      r = (t, r) => {
        let i, o = {
            name: t,
            time: false
          },
          s = a.Sv.now();
        try {
          i = r()
        } finally {
          o.time = a.Sv.now() - s, this.persist && n.traces.push(o), this.emit("trace", e.type, t, o.time)
        }
        return i
      };
    n.startTime = a.Sv.now();
    try {
      t(r)
    } catch (e) {
      throw n.error = e, e
    } finally {
      n.totalTime = a.Sv.now() - n.startTime, this.persist && n.totalTime > 0 && this.logs.push(n), this.logs.length > 1e3 && this.logs.shift(), this.emit("log", e)
    }
    return n
  }
  getSlowestActions(e) {
    var t;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
      i = [];
    for (let t of this.logs)
      if (null == e || t.name === e)
        for (let e of t.traces) i.push([e.name, t.name, e.time]);
    i.sort((e, t) => t[2] - e[2]), i.length > r && (i.length = r);
    let a = 0,
      o = 0,
      l = i.map(t => {
        let [n, r, i] = t, o = "".concat(n);
        return null == e && (o += "<".concat(r, ">")), a = Math.max(o.length, a), [o, i]
      }).map(e => {
        let [t, n] = e;
        return o += n, "".concat(t.padEnd(a + 1, " "), " - ").concat(n, "ms")
      }).join("\n");
    return 0 === i.length || i[0][2] < 10 || o < 20 || (s.log("Using Hermes:", true !== (null == (t = n.g) ? true : t.HermesInternal)), s.log("".concat(null != e ? "\n\n=== ".concat(e, " ===") : "", "\n").concat(l, "\n")), s.log("Total Time: ".concat(o, "ms"))), i
  }
  getLastActionMetrics(e) {
    var t;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
      i = {};
    for (let e of this.logs)
      for (let t of e.traces) i[t.name] = [t.name, e.name, t.time];
    let a = Object.values(i);
    a.sort((e, t) => t[2] - e[2]), a.length > r && (a.length = r);
    let o = 0,
      l = 0,
      c = a.map(e => {
        let [t, n, r] = e;
        return o = Math.max(t.length, o), [t, r]
      }).map(e => {
        let [t, n] = e;
        return l += n, "".concat(t.padEnd(o + 1, " "), " - ").concat(n, "ms")
      }).join("\n");
    return 0 === a.length || l < 8 || s.log("\nUsing Hermes: ".concat(true !== (null == (t = n.g) ? true : t.HermesInternal)), "\n\n=== ".concat(e, " ===\n").concat(c), "\nTotal Time: ".concat(l, "ms\n\n")), a
  }
  constructor({
    persist: e = false
  } = {}) {
    super(), o(this, "logs", []), o(this, "persist", true), this.persist = e
  }
}
let c = 0;
class u {
  get name() {
    return this.action.type
  }
  toJSON() {
    if (null == this.createdAt) throw Error("ActionLog.toJSON: You must complete your logging before calling toJSON");
    return {
      actionType: this.action.type,
      created_at: this.createdAt,
      totalTime: this.totalTime,
      traces: this.traces
    }
  }
  constructor(e) {
    o(this, "id", true), o(this, "action", true), o(this, "createdAt", true), o(this, "startTime", 0), o(this, "totalTime", 0), o(this, "traces", []), o(this, "error", true), this.id = c++, this.action = e, this.createdAt = new Date
  }
}