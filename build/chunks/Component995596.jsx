/** Chunk was on 9924 **/
/** chunk id: 995596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk21260 = require("./21260.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk410030 = require("./410030.js"),
  Chunk328977 = require("./328977.js"),
  Chunk571728 = require("./571728.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk433355 = require("./433355.js"),
  Chunk384433 = require("./384433.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk13348 = require("./13348.js");
let C = e => [{
    id: p.e.ALL_MEMBERS,
    label: v.intl.string(v.t.NOOm1d)
  }, {
    id: p.e.PENDING,
    label: e > 0 ? v.intl.formatToPlainString(v.t["Wo+zLy"], {
      count: e
    }) : v.intl.string(v.t["4eQVBA"])
  }, {
    id: p.e.REJECTED,
    label: v.intl.string(v.t.bSZklZ)
  }, {
    id: p.e.APPROVED,
    label: v.intl.string(v.t.aURgY2)
  }],
  _ = e => {
    let {
      tabs: t,
      selectedTab: n,
      onTabSelect: r,
      onClose: a
    } = e;
    return (0, l.jsx)(d.v2r, {
      navId: "members-tabs-overflow-menu",
      "aria-label": v.intl.string(v.t.riPnr6),
      hideScroller: true,
      onClose: a,
      onSelect: a,
      children: (0, l.jsx)(d.kSQ, {
        children: t.map(e => {
          let {
            id: t,
            label: a
          } = e;
          return (0, l.jsx)(d.sNh, {
            id: t,
            label: a,
            icon: t === n ? d.owK : true,
            action: () => r(t)
          }, t)
        })
      }, "applications-overflow-tabs")
    })
  };

function T(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: a
  } = e, s = r.useRef(null), o = (0, x.ZP)(), u = (0, c.wj)(o), m = r.useMemo(() => null != n.find(e => {
    let {
      id: t
    } = e;
    return t === a
  }), [a, n]), h = m ? "header-primary" : u ? "text-muted" : "header-primary", j = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
  return (0, l.jsx)(d.yRy, {
    targetElementRef: s,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, l.jsx)(_, {
        selectedTab: a,
        onClose: r,
        tabs: n,
        onTabSelect: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      var n, r;
      let {
        isShown: a
      } = t;
      return (0, l.jsxs)(d.njP.Item, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), r = r = {
        id: "more",
        clickableInnerRef: s,
        color: "text-muted",
        className: i()(g.more, {
          [g.selected]: m
        }),
        "aria-label": v.intl.string(v.t.UKOtz8),
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: h,
          children: v.intl.string(v.t.UKOtz8)
        }), a ? (0, l.jsx)(d.u04, {
          size: "sm",
          color: j
        }) : (0, l.jsx)(d.CJ0, {
          size: "sm",
          color: j
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}

function E(e) {
  let {
    guildId: t,
    currentTab: n,
    onTabSelect: a
  } = e, [i, c] = r.useState(0), x = r.useRef(null), _ = r.useRef(i), E = (0, j.A)({
    guildId: t
  }), N = C(null != E ? E : 0), {
    lastVisibleIndex: S,
    onItemLayout: P,
    overflowItemsRef: R
  } = (0, o.zP)({
    items: N,
    itemGapPx: 16,
    maxLines: 1,
    containerWidth: i - 200
  }), I = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(t), [t]), Z = (0, h.L)({
    guildId: t
  }), w = r.useMemo(() => n === p.e.ALL_MEMBERS ? I : null != Z && null != Z.user, [n, I, Z]), y = r.useMemo(() => N.slice(0, S + 1), [S, N]), M = r.useMemo(() => N.slice(S + 1), [S, N]), O = (0, m.Z)(e => {
    let t = e.contentRect.width;
    null != t && _.current !== t && (c(t), _.current = t)
  });
  return (0, u.s)(x, O, [w]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(b.Z.Divider, {
      className: g.divider
    }), (0, l.jsxs)("div", {
      className: g.tabsContainer,
      ref: x,
      children: [(0, l.jsxs)("div", {
        className: g.measurements,
        children: [N.map((e, t) => (0, l.jsx)(o.AJ, {
          index: t,
          onItemLayout: P,
          children: (0, l.jsx)(d.njP.Item, {
            id: e.id,
            "aria-label": e.label,
            children: e.label
          })
        }, e.id)), (0, l.jsx)("div", {
          ref: R,
          children: (0, l.jsx)(T, {
            tabs: M,
            onTabSelect: a,
            selectedTab: n
          })
        })]
      }), (0, l.jsxs)(d.njP, {
        "aria-label": v.intl.string(v.t.tcvVXF),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: a,
        children: [y.map(e => (0, l.jsx)(d.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          children: e.label
        }, e.id)), 0 !== M.length ? (0, l.jsx)(T, {
          tabs: M,
          onTabSelect: a,
          selectedTab: n
        }) : null]
      })]
    })]
  })
}