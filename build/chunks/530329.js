/** Chunk was on 81288 **/
n.d(t, {
  Z: () => g
});
var i = n(200651),
  o = n(192379),
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
    var n, i, o = function(e, t) {
      if (null == e) return {};
      var n, i, o = {},
        r = Object.keys(e);
      for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["uploadType", "className"]);
  let g = o.useCallback(() => {
      (0, c.s)(t, void 0)
    }, [t]),
    m = o.useMemo(() => {
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
  return t !== d.pC.AVATAR && t !== d.pC.BANNER ? null : (0, i.jsx)(l.p, function(e) {
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
  }({
    text: m,
    button: u.NW.string(u.t.BmJkbW),
    buttonAnalyticsObject: {
      section: s.jXE.USER_PROFILE
    },
    className: a()(_.container, n)
  }, r))
}