/** Chunk was on 1272 **/
/** chunk id: 109497, original params: e,t,n (module,exports,require) **/
require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = [],
  p = false;

function f() {
  return d.length >= 4 && d.some(e => e < Date.now() - 3 * s.Z.Millis.DAY)
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(o.Z), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND)
  }
  showNagBar() {
    return p
  }
  getState() {
    return {
      sessionStartsWithDND: d
    }
  }
  getTemp() {
    return {
      x: Chunk695346.Cr.getSetting()
    }
  }
}
u(h, "displayName", "HabitualDNDStore"), u(h, "persistKey", "habitualDND"), new h(Chunk570140.Z, {
  POST_CONNECTION_OPEN: function() {
    Chunk885110.Z.getStatus() === Chunk981631.Skl.DND && "0" === Chunk695346.Cr.getSetting() ? (d.push(Date.now()), d = d.filter(e => e > Date.now() - 5 * s.Z.Millis.DAY), f() && setTimeout(() => {
      Chunk570140.Z.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * Chunk70956.Z.Millis.SECOND)) : d = []
  },
  HABITUAL_DND_CLEAR: function() {
    p = !!f(), d = []
  }
})