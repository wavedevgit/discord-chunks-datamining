/** Chunk was on 50874 **/
r.d(t, {
  Z: () => _
});
var n = r(255367),
  i = r(73800),
  a = r(657707),
  s = r(481060),
  l = r(315322),
  c = r(531578),
  o = r(388032),
  u = r(175943);

function d(e) {
  let {
    rating: t,
    onClick: r
  } = e, l = t === c.aZ.BAD ? a.kZ9 : a.lbB, o = i.useCallback(() => {
    r(t)
  }, [r, t]);
  return (0, n.jsx)(s.P3F, {
    onClick: o,
    className: u.iconContainer,
    children: (0, n.jsx)(l, {
      size: "md",
      color: "currentColor",
      className: u.icon
    })
  })
}
let _ = function(e) {
  let {
    searchId: t,
    searchType: a,
    dismissFeedbackEntrypoint: _
  } = e;
  i.useEffect(() => {
    (0, l.bo)({
      searchId: t,
      searchType: a
    })
  }, [t, a]);
  let h = i.useCallback(e => {
    _(), (0, s.ZDy)(async () => {
      let {
        default: i
      } = await r.e("11298").then(r.bind(r, 229612));
      return r => {
        var s, l;
        return (0, n.jsx)(i, (s = function(e) {
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
        }({}, r), l = l = {
          searchId: t,
          searchType: a,
          rating: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
        }), s))
      }
    })
  }, [_, t, a]);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-primary",
      children: o.intl.string(o.t["I+4OJC"])
    }), (0, n.jsxs)("div", {
      className: u.icons,
      children: [(0, n.jsx)(d, {
        rating: c.aZ.GOOD,
        onClick: h
      }), (0, n.jsx)(d, {
        rating: c.aZ.BAD,
        onClick: h
      })]
    })]
  })
}