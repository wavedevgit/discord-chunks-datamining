/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n(653041);
var r, i = n(442837),
  l = n(570140),
  o = n(695346),
  a = n(885110),
  s = n(70956),
  c = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = [],
  p = !1;

function h() {
  return d.length >= 4 && d.some(e => e < Date.now() - 3 * s.Z.Millis.DAY)
}
class f extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (d = e.sessionStartsWithDND)
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
      x: o.Cr.getSetting()
    }
  }
}
u(f, "displayName", "HabitualDNDStore"), u(f, "persistKey", "habitualDND"), new f(l.Z, {
  POST_CONNECTION_OPEN: function() {
    a.Z.getStatus() === c.Skl.DND && "0" === o.Cr.getSetting() ? (d.push(Date.now()), d = d.filter(e => e > Date.now() - 5 * s.Z.Millis.DAY), h() && setTimeout(() => {
      l.Z.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * s.Z.Millis.SECOND)) : d = []
  },
  HABITUAL_DND_CLEAR: function() {
    p = !!h(), d = []
  }
})