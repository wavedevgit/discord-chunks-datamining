/** Chunk was on 87668 **/
"use strict";
n.d(t, {
  Z: () => s
}), n(757143), n(301563);
var r = n(192379),
  o = n(442837),
  c = n(131951),
  i = n(65154),
  a = n(388032);

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let d = /^Default/;

function s() {
  let e = (0, o.e7)([c.Z], () => c.Z.getInputDevices());
  return r.useMemo(() => {
    var t, n;
    let r = l({}, e),
      o = r[i.w5];
    return null == o ? r : (r[i.w5] = (t = l({}, o), n = n = {
      name: o.disabled ? a.NW.string(a.t["/QIjDA"]) : o.name.replace(d, a.NW.string(a.t.bBvAEB))
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t), r)
  }, [e])
}