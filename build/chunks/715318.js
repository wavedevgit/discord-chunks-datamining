/** Chunk was on 4493 **/
r.d(t, {
  Z: () => c
});
var n = r(200651);
r(192379);
var a = r(481060),
  i = r(239091),
  o = r(299206),
  l = r(858042),
  s = r(388032);

function c(e) {
  let {
    applicationId: t,
    className: r,
    viewId: c
  } = e, u = (0, o.Z)({
    id: t,
    label: s.NW.string(s.t["FfCL+/"])
  }), d = (0, l.M)({
    applicationId: t,
    viewId: c
  });
  return null == u && null == d ? null : (0, n.jsx)(a.yRy, {
    align: "top",
    position: "right",
    disablePointerEvents: !1,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, n.jsx)(a.v2r, {
        navId: "game-profile-context",
        onClose: () => {
          (0, i.Zy)(), t()
        },
        "aria-label": s.NW.string(s.t.PNeFgY),
        onSelect: () => {},
        children: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(a.kSQ, {
            children: u
          }), (0, n.jsx)(a.kSQ, {
            children: d
          })]
        })
      })
    },
    children: e => (0, n.jsx)(a.ua7, {
      text: s.NW.string(s.t.UKOtz8),
      children: t => {
        var i, o;
        return (0, n.jsx)(a.P3F, (i = function(e) {
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
        }({
          className: r
        }, t, e), o = o = {
          children: (0, n.jsx)(a.xhG, {
            size: "xs",
            color: a.TVs.colors.WHITE
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    })
  })
}