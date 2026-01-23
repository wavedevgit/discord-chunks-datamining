/** Chunk was on 21738 **/
/** chunk id: 291274, original params: e,t,n (module,exports,require) **/
require("./321073.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk253932 = require("./253932.js"),
  Chunk461213 = require("./461213.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");

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

function h() {
  return d.length >= 4 && d.some(e => e < Date.now() - 3 * o.A.Millis.DAY)
}
class g extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(s.A), null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND)
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
      x: a.CY.getSetting()
    }
  }
}
u(g, "displayName", "HabitualDNDStore"), u(g, "persistKey", "habitualDND"), new g(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    s.A.getStatus() === c.clD.DND && "0" === a.CY.getSetting() ? (d.push(Date.now()), d = d.filter(e => e > Date.now() - 5 * o.A.Millis.DAY), h() && setTimeout(() => {
      l.h.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * o.A.Millis.SECOND)) : d = []
  },
  HABITUAL_DND_CLEAR: function() {
    p = !!h(), d = []
  }
})