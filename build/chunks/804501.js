/** Chunk was on 624 (572fcf0aa11379cf.js) **/
n.d(t, {
  x: () => o
});
var r = n(675478),
  i = n(915486),
  s = n(428967),
  a = n(605236),
  l = n(644916);

function o(e, t) {
  if (-1 !== s.k.indexOf(e)) {
    let t = (0, l.t)(e);
    return function(e, t) {
      let {
        isDismissed: n,
        lastDismissedVersion: i
      } = (0, a.H4)(e);
      return {
        isDismissed: n,
        handleToggleDismissState: function() {
          n ? (0, r.Z1)(e) : (0, r.Bn)(e, t)
        },
        recurringDismissibleContentInfo: {
          lastDismissedVersion: null != i ? i : void 0,
          lastDismissedAtMs: void 0
        }
      }
    }(e, t)
  }
  return -1 !== s.N.indexOf(e) ? function(e) {
    let {
      isDismissed: t,
      lastDismissedAtMs: n
    } = (0, a.Fo)(e);
    return {
      isDismissed: t,
      handleToggleDismissState: function() {
        t ? (0, r.Z1)(e) : (0, r.z2)(e)
      },
      recurringDismissibleContentInfo: {
        lastDismissedVersion: void 0,
        lastDismissedAtMs: null != n ? n : void 0
      }
    }
  }(e) : function(e, t) {
    let n = (0, i.jl)(t, e);
    return {
      isDismissed: n,
      handleToggleDismissState: function() {
        n ? (0, r.w9)(e) : (0, r.nm)(e)
      },
      recurringDismissibleContentInfo: null
    }
  }(e, t)
}