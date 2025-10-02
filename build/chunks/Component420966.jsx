/** Chunk was on 64982 **/
/** chunk id: 420966, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => f,
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  let [e, t] = Chunk647438.useState(true);
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
    setSelectedSection: b
  } = e, x = i.useCallback(e => {
    b(e)
  }, [b]), j = (0, l.e7)([d.Z], () => {
    var e;
    return null == (e = d.Z.getRoleMemberCount(t.id)) ? true : e[f.id]
  }, [f.id, t.id]), v = (0, c.fI)(f), _ = (0, u.Z)(t.id, f);
  i.useEffect(() => {
    v && b(m.ZI.PERMISSIONS)
  }, [v, b]);
  let O = (0, o.e)(t, f);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: p.titleContainer,
      children: [(0, r.jsx)(s.Text, {
        className: p.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: g.intl.format(g.t.BUdGkJ, {
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
        "aria-label": g.intl.string(g.t.PdRCRk),
        children: (0, r.jsx)(s.xhG, {
          size: "md",
          color: "currentColor"
        })
      }) : null]
    }), null != _ ? (0, r.jsx)(s.Wn, {
      messageType: s.QYI.WARNING,
      children: _
    }) : null, (0, r.jsxs)(s.njP, {
      className: p.tabBar,
      "aria-label": g.intl.string(g.t["+1H47u"]),
      selectedItem: h,
      type: "top",
      look: "brand",
      onItemSelect: x,
      children: [(0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: m.ZI.DISPLAY,
        disabled: v,
        children: g.intl.string(g.t.hmdom5)
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: m.ZI.PERMISSIONS,
        children: g.intl.string(g.t.WIDE1N)
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: m.ZI.VERIFICATIONS,
        disabled: v,
        children: g.intl.string(g.t["5//Mur"])
      }), (0, r.jsx)(s.njP.Item, {
        className: p.tabBarItem,
        id: m.ZI.MEMBERS,
        disabled: v,
        children: v ? g.intl.string(g.t["kg//+/"]) : g.intl.formatToPlainString(g.t.bHnZWV, {
          numMembers: String(j)
        })
      })]
    })]
  })
}