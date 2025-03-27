/** Chunk was on 24184 **/
"use strict";
r.d(t, {
  Z: () => s
}), r(757143), r(301563);
var n = r(192379),
  o = r(442837),
  i = r(131951),
  l = r(65154),
  u = r(388032);

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let c = /^Default/;

function s() {
  let e = (0, o.e7)([i.Z], () => i.Z.getInputDevices());
  return n.useMemo(() => {
    var t, r;
    let n = a({}, e),
      o = n[l.w5];
    return null == o ? n : (n[l.w5] = (t = a({}, o), r = r = {
      name: o.disabled ? u.NW.string(u.t["/QIjDA"]) : o.name.replace(c, u.NW.string(u.t.bBvAEB))
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t), n)
  }, [e])
}