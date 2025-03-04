/** Chunk was on 53494 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(481060),
  l = n(460562),
  a = n(768581),
  s = n(682662),
  c = n(662146),
  u = n(745809);

function d(e) {
  let [t, d] = i.useState(!1);
  return (0, r.jsx)(s.H, {
    children: (0, r.jsx)(c.Z, {
      text: e.name,
      children: (0, r.jsx)(o.aRk, {
        className: u.circleIconButton,
        selected: t,
        lowerBadge: (0, r.jsx)(o.G2e, {
          icon: (0, o.GSL)(l.Z),
          disableColor: !0,
          className: u.geoRestrictedBadge
        }),
        children: (0, r.jsx)(o.LYs, {
          name: e.name,
          onMouseEnter: () => {
            d(!0)
          },
          onMouseLeave: () => {
            d(!1)
          },
          onClick: () => {
            (0, o.ZDy)(async () => {
              let {
                default: t
              } = await n.e("42358").then(n.bind(n, 210995));
              return n => (0, r.jsx)(t, function(e) {
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
              }({
                name: e.name,
                guildId: e.id
              }, n))
            })
          },
          icon: null != e.icon ? a.ZP.getGuildIconURL({
            id: e.id,
            icon: e.icon,
            canAnimate: !1,
            size: 42
          }) : null
        })
      })
    })
  })
}