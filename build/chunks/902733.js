/** Chunk was on 12769 **/
r.d(t, {
  Z: () => _
});
var n = r(255367),
  i = r(73800),
  s = r(657707),
  a = r(481060),
  c = r(315322),
  l = r(531578),
  o = r(388032),
  u = r(175943);

function d(e) {
  let {
    rating: t,
    onClick: r
  } = e, c = t === l.aZ.BAD ? s.kZ9 : s.lbB, o = i.useCallback(() => {
    r(t)
  }, [r, t]);
  return (0, n.jsx)(a.P3F, {
    onClick: o,
    className: u.iconContainer,
    children: (0, n.jsx)(c, {
      size: "md",
      color: "currentColor",
      className: u.icon
    })
  })
}
let _ = function(e) {
  let {
    searchContext: t,
    dismissFeedbackEntrypoint: s
  } = e;
  i.useEffect(() => {
    (0, c.bo)({
      searchContext: t
    })
  }, [t]);
  let _ = i.useCallback(e => {
    s(), (0, a.ZDy)(async () => {
      let {
        default: i
      } = await r.e("11298").then(r.bind(r, 229612));
      return r => {
        var s, a;
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
        }({}, r), a = a = {
          searchContext: t,
          rating: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e))
        }), s))
      }
    })
  }, [s, t]);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-primary",
      children: o.intl.string(o.t["I+4OJC"])
    }), (0, n.jsxs)("div", {
      className: u.icons,
      children: [(0, n.jsx)(d, {
        rating: l.aZ.GOOD,
        onClick: _
      }), (0, n.jsx)(d, {
        rating: l.aZ.BAD,
        onClick: _
      })]
    })]
  })
}