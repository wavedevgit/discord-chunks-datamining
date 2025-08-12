/** Chunk was on 26628 **/
/** chunk id: 553984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v,
  p: () => S
}), require("./539854.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk377171 = require("./377171.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk725739 = require("./725739.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk982183 = require("./982183.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk603706 = require("./603706.js");

function b(e) {
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
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let y = () => {
    let e = (0, Chunk370774.ux)();
    return (0, Chunk73800.useMemo)(() => {
      let t = [Chunk982183.V5.ALL, Chunk982183.V5.MENTIONS];
      return module && exports.push(Chunk982183.V5.BOOKMARKS), exports.push(Chunk982183.V5.ANNOUNCEMENTS), exports
    }, [module])
  },
  C = {
    [Chunk982183.V5.ALL]: false,
    [Chunk982183.V5.BOOKMARKS]: false,
    [Chunk982183.V5.MENTIONS]: false,
    [Chunk982183.V5.ANNOUNCEMENTS]: false
  };

function v() {
  let e = (0, Chunk982183.NV)(),
    t = y(),
    [n, l] = (0, Chunk73800.useState)(C),
    a = exports.filter(e => !n[e]),
    {
      selectedFilter: c,
      setSelectedFilter: u
    } = (0, Chunk725739.Z)();
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk603706.filters,
    children: [(0, Chunk255367.jsx)(Chunk481060.njP, {
      look: "grey",
      orientation: "horizontal",
      onItemSelect: Chunk804932,
      selectedItem: Chunk377171,
      className: Chunk603706.tabBar,
      children: exports.flatMap(t => (0, r.jsx)(s.njP.Item, {
        id: t,
        "aria-label": t,
        className: o()(m.filterButton, {
          [m.selected]: c === t
        }),
        disableItemStyles: true,
        children: (0, r.jsx)(j, {
          setIsVisible: e => {
            l(n => O(b({}, n), {
              [t]: e
            }))
          },
          children: e[t]
        })
      }, t))
    }), (0, Chunk255367.jsx)(E, {
      hiddenFilters: Chunk434650
    })]
  })
}

function j(e) {
  let {
    children: t,
    setIsVisible: n
  } = e, i = (0, a.O)(n);
  return (0, r.jsx)("span", {
    ref: i,
    children: t
  })
}

function E(e) {
  let {
    hiddenFilters: t
  } = e, n = (0, u.fJ)(), l = (0, i.useRef)(null), [o, a] = (0, i.useState)(false), [h, p] = (0, i.useState)(false), g = (0, f.NV)(), {
    selectedFilter: y,
    setSelectedFilter: C
  } = (0, d.Z)();
  return 0 === t.length ? null : (0, r.jsx)(s.yRy, {
    position: "bottom",
    align: "left",
    shouldShow: o,
    targetElementRef: l,
    onRequestClose: () => a(false),
    onRequestOpen: () => a(true),
    renderPopout: e => {
      var {
        closePopout: i
      } = e, l = _(e, ["closePopout"]);
      return (0, r.jsx)(s.v2r, O(b({
        onSelect: () => {},
        navId: "notifications-sidebar-filters",
        "aria-label": "Notifications Sidebar Filters"
      }, l), {
        onClose: () => i(),
        children: t.map(e => (0, r.jsx)(s.sNh, {
          id: e,
          action: () => {
            C(y === e ? f.V5.ALL : e), (0, u.RZ)({
              section: e,
              enabled: true,
              viewId: n
            })
          },
          label: g[e],
          dontCloseOnAction: true,
          className: m.filterMenuItem,
          icon: e === y ? (0, r.jsx)(x, {}) : true
        }, e))
      }))
    },
    children: e => (0, r.jsx)(s.P3F, O(b({}, e), {
      className: m.filterButton,
      innerRef: l,
      onMouseEnter: () => p(true),
      onMouseLeave: () => p(false),
      children: (0, r.jsx)(s.xhG, {
        className: m.moreButtonIcon,
        size: "xxs",
        color: h || o ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL
      })
    }))
  })
}

function S(e) {
  let {
    className: t
  } = e, n = (0, u.fJ)(), l = y(), a = (0, i.useRef)(null), [h, C] = (0, i.useState)(false), [v, j] = (0, i.useState)(false), E = (0, f.NV)(), {
    selectedFilter: S,
    setSelectedFilter: I
  } = (0, d.Z)(), P = (0, p.d)(e => e.setInboxReadState);
  return 0 === l.length ? null : (0, r.jsx)(s.yRy, {
    position: "bottom",
    align: "left",
    shouldShow: h,
    targetElementRef: a,
    onRequestClose: () => C(false),
    onRequestOpen: () => C(true),
    autoInvert: false,
    renderPopout: e => {
      var {
        closePopout: t
      } = e, i = _(e, ["closePopout"]);
      return (0, r.jsx)(s.v2r, O(b({
        onSelect: () => {},
        navId: "notifications-sidebar-filters",
        "aria-label": g.intl.string(g.t.UdhTtr)
      }, i), {
        onClose: () => t(),
        children: l.map(e => (0, r.jsx)(s.sNh, {
          id: e,
          action: () => {
            (e === S || e === f.V5.ALL) && S !== f.V5.ALL ? (I(f.V5.ALL), P(false)) : I(e), (0, u.RZ)({
              section: e,
              enabled: S !== e,
              viewId: n
            })
          },
          label: E[e],
          dontCloseOnAction: true,
          className: m.filterMenuItem,
          icon: e === S ? (0, r.jsx)(x, {}) : true
        }, e))
      }))
    },
    children: e => (0, r.jsx)(s.ua7, {
      position: "bottom",
      forceOpen: v,
      shouldShow: v && !h,
      text: g.intl.string(g.t.UdhTtr),
      children: () => (0, r.jsx)(s.P3F, O(b({}, e), {
        className: o()(t, m.headerButton),
        innerRef: a,
        "aria-label": g.intl.string(g.t.UdhTtr),
        onClick: t => {
          e.onClick(t)
        },
        onMouseEnter: () => {
          var t;
          j(true), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          j(false)
        },
        children: (0, r.jsx)(s.gXV, {
          size: "xs",
          color: v || h ? c.Z.INTERACTIVE_HOVER : c.Z.INTERACTIVE_NORMAL
        })
      }))
    })
  })
}
let x = () => (0, Chunk255367.jsx)(Chunk481060.owK, {
  size: "refresh_sm",
  color: "".concat(Chunk377171.Z.BG_BRAND, " !important"),
  secondaryColor: Chunk377171.Z.WHITE
})