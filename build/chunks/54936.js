/** Chunk was on 11814 (8608d0474a894e52.js) **/
n.d(t, {
  n: () => h
}), n(411104);
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  l = n(910111),
  s = n(732559),
  c = n(723851),
  d = n(981631),
  u = n(388032),
  p = n(881449);
let m = {
  [d.TaA.WINDOWS]: {
    icon: c.Z,
    getLabel: () => u.NW.string(u.t["0/xHFB"])
  },
  [d.TaA.MACOS]: {
    icon: s.Z,
    getLabel: () => u.NW.string(u.t.E4u4n5)
  },
  [d.TaA.LINUX]: {
    icon: l.Z,
    getLabel: () => u.NW.string(u.t.tcawo6)
  }
};

function f(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = m[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let a = i.icon;
  return (0, r.jsx)(o.ua7, {
    text: i.getLabel(),
    children: e => {
      var t, i;
      return (0, r.jsx)(a, (t = function(e) {
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
      }({}, e), i = i = {
        className: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}
let h = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(p.OSSection, n),
    children: t.map(e => (0, r.jsx)(f, {
      operatingSystem: e,
      className: a()(p.purchaseUnitOperatingSystem, i)
    }, e))
  })
}