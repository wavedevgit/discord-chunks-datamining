/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  V: () => m,
  Z: () => p
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(239091),
  o = n(605436),
  c = n(741247),
  A = n(243730),
  d = n(852898),
  u = n(203377),
  g = n(388032),
  f = n(816912);

function m() {
  let [e, t] = i.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function p(e) {
  let {
    guild: t,
    role: m,
    selectedSection: p,
    setSelectedSection: h
  } = e, C = i.useCallback(e => {
    h(e)
  }, [h]), b = (0, s.e7)([A.Z], () => {
    var e;
    return null === (e = A.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[m.id]
  }, [m.id, t.id]), v = (0, o.pM)(t.id, m.id), x = (0, d.Z)(m);
  i.useEffect(() => {
    v && h(u.ZI.PERMISSIONS)
  }, [v, h]);
  let N = (0, c.e)(t, m);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, r.jsx)(a.Text, {
        className: f.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: g.NW.format(g.t.BUdGkJ, {
          roleName: m.name
        })
      }), N ? (0, r.jsx)(a.P3F, {
        className: f.menu,
        onClick: function(e) {
          (0, l.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 741247));
            return n => {
              var i, s;
              return (0, r.jsx)(e, (i = function(e) {
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
              }({}, n), s = s = {
                guild: t,
                role: m
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
              }), i))
            }
          })
        },
        "aria-label": g.NW.string(g.t.PdRCRk),
        children: (0, r.jsx)(a.xhG, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != x ? (0, r.jsx)(a.Wn, {
      messageType: a.QYI.WARNING,
      children: x
    }) : null, (0, r.jsxs)(a.njP, {
      className: f.tabBar,
      "aria-label": g.NW.string(g.t["+1H47u"]),
      selectedItem: p,
      type: "top",
      look: "brand",
      onItemSelect: C,
      children: [(0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: u.ZI.DISPLAY,
        disabled: v,
        children: g.NW.string(g.t.hmdom5)
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: u.ZI.PERMISSIONS,
        children: g.NW.string(g.t.WIDE1N)
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: u.ZI.VERIFICATIONS,
        disabled: v,
        children: g.NW.string(g.t["5//Mur"])
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: u.ZI.MEMBERS,
        disabled: v,
        children: v ? g.NW.string(g.t["kg//+/"]) : g.NW.formatToPlainString(g.t.bHnZWV, {
          numMembers: String(b)
        })
      })]
    })]
  })
}