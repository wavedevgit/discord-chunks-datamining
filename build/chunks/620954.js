/** Chunk was on 50751 **/
n.d(t, {
  P: () => d,
  R: () => c
}), n(301563);
var i = n(13245),
  r = n(556296),
  l = n(237997),
  o = n(13140),
  a = n(145597),
  s = n(987650),
  u = n(981631);

function c(e, t) {
  return {
    trackView() {
      i.Z.track(u.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed)
    },
    trackClick(n) {
      var r, o;
      let c = l.default.isLocked((0, a.getPID)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
      i.Z.track(u.rMx.NOTIFICATION_CLICKED, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, t), o = o = {
        location: c,
        action_type: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
      }), r)), i.Z.notificationEvent(e, s.bv.Clicked)
    }
  }
}

function d() {
  let e = r.ZP.getOverlayKeybind();
  return null != e ? (0, o.BB)(e.shortcut, !0).split(" + ") : ["???"]
}