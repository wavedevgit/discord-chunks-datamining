/** Chunk was on 9924 **/
/** chunk id: 995596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk350013 = require("./350013.js");
let C = e => {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: r,
    onClose: a
  } = e;
  return (0, l.jsx)(d.v2r, {
    navId: "members-tabs-overflow-menu",
    "aria-label": g.intl.string(g.t.riPnr6),
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

function _(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: a
  } = e, s = r.useRef(null), o = (0, x.ZP)(), u = (0, c.wj)(o), m = r.useMemo(() => null != n.find(e => {
    let {
      id: t
    } = e;
    return t === a
  }), [a, n]), j = m ? "header-primary" : u ? "text-muted" : "header-primary", h = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
  return (0, l.jsx)(d.yRy, {
    targetElementRef: s,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, l.jsx)(C, {
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
        className: i()(p.more, {
          [p.selected]: m
        }),
        "aria-label": g.intl.string(g.t.UKOtz8),
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: j,
          children: g.intl.string(g.t.UKOtz8)
        }), a ? (0, l.jsx)(d.u04, {
          size: "sm",
          color: h
        }) : (0, l.jsx)(d.CJ0, {
          size: "sm",
          color: h
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

function T(e) {
  let t, {
      guildId: n,
      currentTab: a,
      onTabSelect: i
    } = e,
    [c, x] = r.useState(0),
    C = r.useRef(null),
    T = r.useRef(c),
    E = (0, h.A)({
      guildId: n
    }),
    N = (t = null != E ? E : 0, [{
      id: v.e.ALL_MEMBERS,
      label: g.intl.string(g.t.NOOm1d)
    }, {
      id: v.e.PENDING,
      label: t > 0 ? g.intl.formatToPlainString(g.t["Wo+zLy"], {
        count: t
      }) : g.intl.string(g.t["4eQVBA"])
    }, {
      id: v.e.REJECTED,
      label: g.intl.string(g.t.bSZklZ)
    }, {
      id: v.e.APPROVED,
      label: g.intl.string(g.t.aURgY2)
    }]),
    {
      lastVisibleIndex: S,
      onItemLayout: P,
      overflowItemsRef: R
    } = (0, o.zP)({
      items: N,
      itemGapPx: 16,
      maxLines: 1,
      containerWidth: c - 200
    }),
    I = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [n]),
    Z = (0, j.L)({
      guildId: n
    }),
    w = r.useMemo(() => a === v.e.ALL_MEMBERS ? I : null != Z && null != Z.user, [a, I, Z]),
    M = r.useMemo(() => N.slice(0, S + 1), [S, N]),
    O = r.useMemo(() => N.slice(S + 1), [S, N]),
    y = (0, m.Z)(e => {
      let t = e.contentRect.width;
      null != t && T.current !== t && (x(t), T.current = t)
    });
  return (0, u.s)(C, y, [w]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(b.Z.Divider, {
      className: p.divider
    }), (0, l.jsxs)("div", {
      className: p.tabsContainer,
      ref: C,
      children: [(0, l.jsxs)("div", {
        className: p.measurements,
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
          children: (0, l.jsx)(_, {
            tabs: O,
            onTabSelect: i,
            selectedTab: a
          })
        })]
      }), (0, l.jsxs)(d.njP, {
        "aria-label": g.intl.string(g.t.tcvVXF),
        selectedItem: a,
        type: "top-pill",
        onItemSelect: i,
        children: [M.map(e => (0, l.jsx)(d.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          children: e.label
        }, e.id)), 0 !== O.length ? (0, l.jsx)(_, {
          tabs: O,
          onTabSelect: i,
          selectedTab: a
        }) : null]
      })]
    })]
  })
}