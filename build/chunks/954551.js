/** Chunk was on 52272 **/
n.d(t, {
  Z: () => c
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(665149),
  a = n(388035),
  l = n(453473),
  s = n(388032);

function c(e) {
  let {
    onOpen: t,
    onClose: n,
    className: c
  } = e;
  return (0, r.jsx)(l.P, {
    onOpen: t,
    onClose: n,
    popoutPosition: "bottom",
    popoutAlign: "right",
    children: (e, t, n, l) => {
      var u, d;
      return (0, r.jsx)(a.U, {
        location: "bookmarks-button",
        children: (0, r.jsx)(o.JO, (u = function(e) {
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
        }({}, n), d = d = {
          className: c,
          onClick: e,
          icon: i.plf,
          "aria-label": s.NW.string(s.t["2pAkDA"]),
          tooltip: t ? null : s.NW.string(s.t["2pAkDA"]),
          selected: t,
          showBadge: l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(d)).forEach(function(e) {
          Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(d, e))
        }), u))
      })
    }
  })
}