/** Chunk was on 1272 **/
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  l = n(481060),
  o = n(984370),
  a = n(703656),
  s = n(626135),
  c = n(804739),
  u = n(981631),
  d = n(388032),
  p = n(206755);
let h = (0, c.Q)() || !1,
  g = i.memo(function(e) {
    let {
      currentRoute: t,
      renderToolbar: n
    } = e, c = i.useContext(s.AnalyticsContext), g = h || t === u.Z5c.APPLICATION_LIBRARY_SETTINGS;
    return (0, r.jsxs)(o.Z, {
      className: p.libraryHeader,
      toolbar: null == n ? void 0 : n(),
      children: [(0, r.jsx)(o.Z.Icon, {
        icon: l.vqy,
        "aria-hidden": !0
      }), (0, r.jsx)(o.Z.Title, {
        children: d.NW.string(d.t.cw57am)
      }), (0, r.jsx)(o.Z.Divider, {}), (0, r.jsxs)(l.njP, {
        type: "top-pill",
        selectedItem: t,
        onItemSelect: function(e) {
          if (e !== t) {
            var n, r;
            (0, a.uL)(e, {
              state: {
                analyticsSource: (n = function(e) {
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
                }({}, c.location), r = r = {
                  section: u.jXE.TABS,
                  object: u.qAy.NAVIGATION_LINK
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(r)).forEach(function(e) {
                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }), n)
              }
            })
          }
        },
        children: [(0, r.jsx)(l.njP.Item, {
          id: u.Z5c.APPLICATION_LIBRARY,
          children: d.NW.string(d.t.p7ARTE)
        }), g ? (0, r.jsx)(l.njP.Item, {
          id: u.Z5c.APPLICATION_LIBRARY_SETTINGS,
          children: d.NW.string(d.t["3D5yo6"])
        }) : null]
      })]
    })
  })