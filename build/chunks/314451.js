/** Chunk was on 52272 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  l = n(782568),
  s = n(31336),
  c = n(906467),
  u = n(63063),
  d = n(665149),
  p = n(388032);

function m(e) {
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

function f(e) {
  let {
    className: t
  } = e, f = (0, o.e7)([c.Z], () => c.Z.isDeveloper), [h, g] = i.useState(!1), [_, b] = i.useState(0), v = e => {
    clearTimeout(_), b(setTimeout(() => {
      g(e)
    }, 100))
  };
  return (0, r.jsx)("div", {
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    children: (0, r.jsx)(a.yRy, {
      shouldShow: h,
      animation: a.yRy.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      onRequestOpen: () => g(!0),
      onRequestClose: () => g(!1),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          isDiscordDeveloper: i
        } = e;
        return (0, r.jsx)(a.v2r, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": p.NW.string(p.t.HpQykZ),
          children: (0, r.jsxs)(a.kSQ, {
            children: [(0, r.jsx)(a.sNh, {
              id: "staff-help-bug-reporter",
              label: p.NW.string(p.t["5Lqopa"]),
              icon: a.nnZ,
              action: () => (0, a.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("83051").then(n.bind(n, 115072));
                return t => (0, r.jsx)(e, m({}, t))
              })
            }), i && (0, r.jsx)(a.sNh, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: a.Ymb,
              action: () => (0, s.SO)()
            }), (0, r.jsx)(a.sNh, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: a.rgF,
              action: () => (0, l.Z)(u.w)
            })]
          })
        })
      })({
        onClose: () => g(!1),
        isDiscordDeveloper: f
      }),
      children: (e, n) => {
        var i, o;
        let {
          isShown: l
        } = n;
        return (0, r.jsx)(d.JO, (i = m({}, e), o = o = {
          icon: a.nnZ,
          "aria-label": p.NW.string(p.t.cqEoj4),
          selected: l,
          className: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    })
  })
}