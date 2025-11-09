/** Chunk was on 9924 **/
/** chunk id: 995596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk401853 = require("./401853.js");
let _ = e => {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: r,
    onClose: i
  } = e;
  return (0, l.jsx)(d.v2r, {
    navId: "members-tabs-overflow-menu",
    "aria-label": p.intl.string(p.t.riPnr0),
    hideScroller: true,
    onClose: i,
    onSelect: i,
    children: (0, l.jsx)(d.kSQ, {
      children: t.map(e => {
        let {
          id: t,
          label: i
        } = e;
        return (0, l.jsx)(d.sNh, {
          id: t,
          label: i,
          icon: t === n ? d.owK : true,
          action: () => r(t)
        }, t)
      })
    }, "applications-overflow-tabs")
  })
};

function C(e) {
  let {
    onTabSelect: t,
    tabs: n,
    selectedTab: i
  } = e, s = r.useRef(null), o = (0, x.ZP)(), u = (0, c.wj)(o), m = r.useMemo(() => null != n.find(e => {
    let {
      id: t
    } = e;
    return t === i
  }), [i, n]), j = m ? "header-primary" : u ? "text-muted" : "header-primary", b = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
  return (0, l.jsx)(d.yRy, {
    targetElementRef: s,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, l.jsx)(_, {
        selectedTab: i,
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
        isShown: i
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
        className: a()(v.more, {
          [v.selected]: m
        }),
        "aria-label": p.intl.string(p.t["UKOtz+"]),
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: j,
          children: p.intl.string(p.t["UKOtz+"])
        }), i ? (0, l.jsx)(d.u04, {
          size: "sm",
          color: b
        }) : (0, l.jsx)(d.CJ0, {
          size: "sm",
          color: b
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
  let t, {
      guildId: n,
      currentTab: i,
      onTabSelect: a
    } = e,
    [c, x] = r.useState(0),
    _ = r.useRef(null),
    E = r.useRef(c),
    S = (0, b.A)({
      guildId: n
    }),
    T = (t = null != S ? S : 0, [{
      id: g.e.ALL_MEMBERS,
      label: p.intl.string(p.t.NOOm1Z)
    }, {
      id: g.e.PENDING,
      label: t > 0 ? p.intl.formatToPlainString(p.t["Wo+zL0"], {
        count: t
      }) : p.intl.string(p.t["4eQVBO"])
    }, {
      id: g.e.REJECTED,
      label: p.intl.string(p.t.bSZkla)
    }, {
      id: g.e.APPROVED,
      label: p.intl.string(p.t.aURgY2)
    }]),
    {
      lastVisibleIndex: N,
      onItemLayout: P,
      overflowItemsRef: O
    } = (0, o.zP)({
      items: T,
      itemGapPx: 16,
      maxLines: 1,
      containerWidth: c - 200
    }),
    I = (0, s.e7)([f.ZP], () => null != f.ZP.getGuildSidebarState(n), [n]),
    y = (0, j.L)({
      guildId: n
    }),
    R = r.useMemo(() => i === g.e.ALL_MEMBERS ? I : null != y && null != y.user, [i, I, y]),
    w = r.useMemo(() => T.slice(0, N + 1), [N, T]),
    A = r.useMemo(() => T.slice(N + 1), [N, T]),
    M = (0, m.Z)(e => {
      let t = e.contentRect.width;
      null != t && E.current !== t && (x(t), E.current = t)
    });
  return (0, u.s)(_, M, [R]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.Z.Divider, {
      className: v.divider
    }), (0, l.jsxs)("div", {
      className: v.tabsContainer,
      ref: _,
      children: [(0, l.jsxs)("div", {
        className: v.measurements,
        children: [T.map((e, t) => (0, l.jsx)(o.AJ, {
          index: t,
          onItemLayout: P,
          children: (0, l.jsx)(d.njP.Item, {
            id: e.id,
            "aria-label": e.label,
            children: e.label
          })
        }, e.id)), (0, l.jsx)("div", {
          ref: O,
          children: (0, l.jsx)(C, {
            tabs: A,
            onTabSelect: a,
            selectedTab: i
          })
        })]
      }), (0, l.jsxs)(d.njP, {
        "aria-label": p.intl.string(p.t.tcvVXM),
        selectedItem: i,
        type: "top-pill",
        onItemSelect: a,
        children: [w.map(e => (0, l.jsx)(d.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          children: e.label
        }, e.id)), 0 !== A.length ? (0, l.jsx)(C, {
          tabs: A,
          onTabSelect: a,
          selectedTab: i
        }) : null]
      })]
    })]
  })
}