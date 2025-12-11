/** Chunk was on 9536 **/
/** chunk id: 420966, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => p,
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk741247 = require("./741247.jsx"),
  Chunk345162 = require("./345162.js"),
  Chunk243730 = require("./243730.js"),
  Chunk852898 = require("./852898.jsx"),
  Chunk203377 = require("./203377.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk235778 = require("./235778.js");

function p() {
  let [e, t] = Chunk473749.useState(true);
  return {
    scrolledToTop: module,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function b(e) {
  let {
    guild: t,
    role: p,
    selectedSection: b,
    setSelectedSection: h
  } = e, x = i.useCallback(e => {
    h(e)
  }, [h]), j = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getRoleMemberCount(t.id)) ? true : e[p.id]
  }, [p.id, t.id]), v = (0, c.fI)(p), O = (0, u.Z)(t.id, p);
  i.useEffect(() => {
    v && h(g.ZI.PERMISSIONS)
  }, [v, h]);
  let C = (0, o.e)(t, p);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: f.titleContainer,
      children: [(0, r.jsx)(a.Text, {
        className: f.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: m.intl.format(m.t.BUdGkE, {
          roleName: p.name
        })
      }), C ? (0, r.jsx)(a.P3F, {
        className: f.menu,
        onClick: function(e) {
          (0, s.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 741247));
            return n => {
              var i, l;
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
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = r
                  })
                }
                return e
              }({}, n), l = l = {
                guild: t,
                role: p
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(l)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
              }), i))
            }
          })
        },
        "aria-label": m.intl.string(m.t.PdRCRg),
        children: (0, r.jsx)(a.xhG, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != O ? (0, r.jsx)(a.Wn, {
      messageType: a.QYI.WARNING,
      children: O
    }) : null, (0, r.jsxs)(a.njP, {
      className: f.tabBar,
      "aria-label": m.intl.string(m.t["+1H47t"]),
      selectedItem: b,
      type: "top",
      look: "brand",
      onItemSelect: x,
      children: [(0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: g.ZI.DISPLAY,
        disabled: v,
        children: m.intl.string(m.t.hmdomw)
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: g.ZI.PERMISSIONS,
        children: m.intl.string(m.t.WIDE1L)
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: g.ZI.VERIFICATIONS,
        disabled: v,
        children: m.intl.string(m.t["5//Muu"])
      }), (0, r.jsx)(a.njP.Item, {
        className: f.tabBarItem,
        id: g.ZI.MEMBERS,
        disabled: v,
        children: v ? m.intl.string(m.t["kg//+7"]) : m.intl.formatToPlainString(m.t.bHnZWW, {
          numMembers: String(j)
        })
      })]
    })]
  })
}