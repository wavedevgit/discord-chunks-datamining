/** Chunk was on 12218 **/
n.d(t, {
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(388032),
  c = n(498971);

function d(e) {
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

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = [!1, !0];

function m(e) {
  let {
    isDisabled: t,
    currentValue: n,
    onChange: o
  } = e, s = (0, a.arW)({
    orientation: "horizontal",
    isDisabled: t
  }), m = i.useCallback(e => {
    t || e === n || o(e)
  }, [t, n, o]);
  return (0, r.jsx)("div", u(d({
    className: l()(c.group, {
      [c.disabled]: t
    })
  }, s), {
    children: p.map(e => (0, r.jsx)(b, {
      isSelected: n === e,
      itemValue: e,
      onClick: () => m(e)
    }, e.toString()))
  }))
}

function b(e) {
  let {
    isSelected: t,
    itemValue: n,
    onClick: i
  } = e, o = n ? c.allow : c.deny, p = n ? a.dz2 : a.Dio, m = n ? s.NW.string(s.t.RzDfSk) : s.NW.string(s.t["6639Oz"]), b = (0, a.xUy)({
    isSelected: t,
    label: m
  });
  return (0, r.jsx)(a.P3F, u(d({
    className: l()(c.item, o, {
      [c.selected]: t
    }),
    onClick: i
  }, b), {
    children: (0, r.jsx)(p, {
      size: "xs",
      color: "currentColor"
    })
  }))
}