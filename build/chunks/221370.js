/** Chunk was on 4493 **/
r.d(t, {
  Z: () => _
}), r(47120), r(653041);
var n = r(200651),
  a = r(192379),
  i = r(120356),
  o = r.n(i),
  l = r(758713),
  s = r(657707),
  c = r(481060),
  u = r(388032),
  d = r(384370);

function p(e) {
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
let m = [l.z.DESKTOP, l.z.XBOX, l.z.PLAYSTATION, l.z.NINTENDO];

function f(e) {
  var {
    platform: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["platform"]);
  switch (t) {
    case l.z.DESKTOP:
      return (0, n.jsx)(s.pzj, p({
        size: "xs"
      }, r));
    case l.z.XBOX:
      return (0, n.jsx)(s.Mko, p({
        size: "xs"
      }, r));
    case l.z.PLAYSTATION:
      return (0, n.jsx)(s.Tsp, p({
        size: "xs"
      }, r));
    case l.z.NINTENDO:
      return (0, n.jsx)(s.aPH, p({
        size: "xs"
      }, r));
    default:
      return null
  }
}

function g(e) {
  let {
    platforms: t
  } = e;
  return (0, n.jsx)("div", {
    className: o()(d.row, d.gapSm),
    style: {
      alignItems: "center"
    },
    children: t.map(e => (0, n.jsx)(c.ua7, {
      text: function(e) {
        switch (e) {
          case l.z.DESKTOP:
            return u.NW.string(u.t.KT6uCA);
          case l.z.XBOX:
            return u.NW.string(u.t.DDWUJi);
          case l.z.PLAYSTATION:
            return u.NW.string(u.t.fzMz2t);
          case l.z.NINTENDO:
            return u.NW.string(u.t.AMW8jY);
          default:
            return null
        }
      }(e),
      children: t => {
        var r, a;
        return (0, n.jsx)(f, (r = p({}, t), a = a = {
          platform: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
        }), r))
      }
    }, e))
  })
}

function _(e) {
  let {
    detectedGame: t,
    className: r
  } = e, i = a.useMemo(() => {
    let e = new Set(t.platforms),
      r = [...e];
    return !e.has(l.z.DESKTOP) && (e.has(l.z.MACOS) || e.has(l.z.LINUX)) && r.push(l.z.DESKTOP), r.filter(e => m.includes(e))
  }, [t.platforms]);
  return 0 === i.length ? null : (0, n.jsx)("div", {
    className: o()(d.column, d.gapLg, r),
    children: i.length > 0 && (0, n.jsx)(g, {
      platforms: i
    })
  })
}