/** Chunk was on 384 **/
/** chunk id: 420966, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => f,
  Z: () => h
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
  Chunk345987 = require("./345987.js");

function f() {
  let [e, t] = Chunk473749.useState(true);
  return {
    scrolledToTop: module,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function h(e) {
  let {
    guild: t,
    role: f,
    selectedSection: h,
    setSelectedSection: x
  } = e, b = i.useCallback(e => {
    x(e)
  }, [x]), j = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getRoleMemberCount(t.id)) ? true : e[f.id]
  }, [f.id, t.id]), _ = (0, c.fI)(f), v = (0, d.Z)(t.id, f);
  i.useEffect(() => {
    _ && x(g.ZI.PERMISSIONS)
  }, [_, x]);
  let O = (0, o.e)(t, f);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.titleContainer,
      children: [(0, r.jsx)(s.Text, {
        className: p.titleText,
        color: "text-strong",
        variant: "text-md/semibold",
        children: m.intl.format(m.t.BUdGkE, {
          roleName: f.name
        })
      }), O ? (0, r.jsx)(s.P3F, {
        className: p.menu,
        onClick: function(e) {
          (0, a.jW)(e, async () => {
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
                role: f
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
        children: (0, r.jsx)(s.xhG, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != v ? (0, r.jsx)(s.Wn, {
      messageType: s.QYI.WARNING,
      children: v
    }) : null, (0, r.jsxs)(s.njP, {
      className: p.tabBar,
      "aria-label": m.intl.string(m.t["+1H47t"]),
      selectedItem: h,
      type: "top",
      look: "brand",
      onItemSelect: b,
      children: [(0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: g.ZI.DISPLAY,
        disabled: _,
        children: m.intl.string(m.t.hmdomw)
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: g.ZI.PERMISSIONS,
        children: m.intl.string(m.t.WIDE1L)
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: g.ZI.VERIFICATIONS,
        disabled: _,
        children: m.intl.string(m.t["5//Muu"])
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: g.ZI.MEMBERS,
        disabled: _,
        children: _ ? m.intl.string(m.t["kg//+7"]) : m.intl.formatToPlainString(m.t.bHnZWW, {
          numMembers: String(j)
        })
      })]
    })]
  })
}