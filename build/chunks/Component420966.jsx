/** Chunk was on 9536 **/
/** chunk id: 420966, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => b,
  Z: () => p
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

function b() {
  let [e, t] = i.useState(true);
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
    role: b,
    selectedSection: p,
    setSelectedSection: h
  } = e, x = i.useCallback(e => {
    h(e)
  }, [h]), j = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getRoleMemberCount(t.id)) ? true : e[b.id]
  }, [b.id, t.id]), v = (0, c.fI)(b), O = (0, u.Z)(t.id, b);
  i.useEffect(() => {
    v && h(g.ZI.PERMISSIONS)
  }, [v, h]);
  let y = (0, o.e)(t, b);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: m.titleContainer,
      children: [(0, r.jsx)(a.Text, {
        className: m.titleText,
        color: "text-strong",
        variant: "text-md/semibold",
        children: f.intl.format(f.t.BUdGkE, {
          roleName: b.name
        })
      }), y ? (0, r.jsx)(a.P3F, {
        className: m.menu,
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
                role: b
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
        "aria-label": f.intl.string(f.t.PdRCRg),
        children: (0, r.jsx)(a.xhG, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != O ? (0, r.jsx)(a.Wn, {
      messageType: a.QYI.WARNING,
      children: O
    }) : null, (0, r.jsxs)(a.njP, {
      className: m.tabBar,
      "aria-label": f.intl.string(f.t["+1H47t"]),
      selectedItem: p,
      type: "top",
      look: "brand",
      onItemSelect: x,
      children: [(0, r.jsx)(a.njP.Item, {
        className: m.tabBarItem,
        id: g.ZI.DISPLAY,
        disabled: v,
        children: f.intl.string(f.t.hmdomw)
      }), (0, r.jsx)(a.njP.Item, {
        className: m.tabBarItem,
        id: g.ZI.PERMISSIONS,
        children: f.intl.string(f.t.WIDE1L)
      }), (0, r.jsx)(a.njP.Item, {
        className: m.tabBarItem,
        id: g.ZI.VERIFICATIONS,
        disabled: v,
        children: f.intl.string(f.t["5//Muu"])
      }), (0, r.jsx)(a.njP.Item, {
        className: m.tabBarItem,
        id: g.ZI.MEMBERS,
        disabled: v,
        children: v ? f.intl.string(f.t["kg//+7"]) : f.intl.formatToPlainString(f.t.bHnZWW, {
          numMembers: String(j)
        })
      })]
    })]
  })
}