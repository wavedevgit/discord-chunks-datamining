/** Chunk was on 81288 **/
n.d(t, {
  Z: () => g
});
var o = n(200651),
  i = n(192379),
  r = n(120356),
  a = n.n(r),
  l = n(53691),
  c = n(378879),
  s = n(981631),
  d = n(486324),
  u = n(388032),
  _ = n(511895);

function g(e) {
  var {
    uploadType: t,
    className: n
  } = e, r = function(e, t) {
    if (null == e) return {};
    var n, o, i = function(e, t) {
      if (null == e) return {};
      var n, o, i = {},
        r = Object.keys(e);
      for (o = 0; o < r.length; o++) n = r[o], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (o = 0; o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["uploadType", "className"]);
  let g = i.useCallback(() => {
      (0, c.s)(t, void 0)
    }, [t]),
    m = i.useMemo(() => {
      switch (t) {
        case d.pC.AVATAR:
          return u.NW.format(u.t["pvw/HB"], {
            onClick: g
          });
        case d.pC.BANNER:
          return u.NW.format(u.t.aCrz1d, {
            onClick: g
          });
        default:
          return ""
      }
    }, [t, g]);
  return t !== d.pC.AVATAR && t !== d.pC.BANNER ? null : (0, o.jsx)(l.p, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), o.forEach(function(t) {
        var o;
        o = n[t], t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o
      })
    }
    return e
  }({
    text: m,
    button: u.NW.string(u.t.BmJkbW),
    buttonAnalyticsObject: {
      section: s.jXE.USER_PROFILE
    },
    className: a()(_.container, n)
  }, r))
}