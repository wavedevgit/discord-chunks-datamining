/** Chunk was on 9924 **/
/** chunk id: 995596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk976621 = require("./976621.js");
let C = e => {
  let {
    tabs: t,
    selectedTab: n,
    onTabSelect: r,
    onClose: a
  } = e;
  return (0, l.jsx)(d.v2r, {
    navId: "members-tabs-overflow-menu",
    "aria-label": p.intl.string(p.t.riPnr0),
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
  }), [a, n]), b = m ? "header-primary" : u ? "text-muted" : "header-primary", j = m ? d.TVs.colors.HEADER_PRIMARY : u ? d.TVs.colors.TEXT_MUTED : d.TVs.colors.HEADER_PRIMARY;
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
        className: i()(v.more, {
          [v.selected]: m
        }),
        "aria-label": p.intl.string(p.t["UKOtz+"]),
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: b,
          children: p.intl.string(p.t["UKOtz+"])
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

function S(e) {
  let t, {
      guildId: n,
      currentTab: a,
      onTabSelect: i
    } = e,
    [c, x] = r.useState(0),
    C = r.useRef(null),
    S = r.useRef(c),
    E = (0, j.A)({
      guildId: n
    }),
    N = (t = null != E ? E : 0, [{
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
      lastVisibleIndex: O,
      onItemLayout: P,
      overflowItemsRef: _
    } = (0, o.zP)({
      items: N,
      itemGapPx: 16,
      maxLines: 1,
      containerWidth: c - 200
    }),
    y = (0, s.e7)([h.ZP], () => null != h.ZP.getGuildSidebarState(n), [n]),
    I = (0, b.L)({
      guildId: n
    }),
    R = r.useMemo(() => a === g.e.ALL_MEMBERS ? y : null != I && null != I.user, [a, y, I]),
    w = r.useMemo(() => N.slice(0, O + 1), [O, N]),
    A = r.useMemo(() => N.slice(O + 1), [O, N]),
    M = (0, m.Z)(e => {
      let t = e.contentRect.width;
      null != t && S.current !== t && (x(t), S.current = t)
    });
  return (0, u.s)(C, M, [R]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(f.Z.Divider, {
      className: v.divider
    }), (0, l.jsxs)("div", {
      className: v.tabsContainer,
      ref: C,
      children: [(0, l.jsxs)("div", {
        className: v.measurements,
        children: [N.map((e, t) => (0, l.jsx)(o.AJ, {
          index: t,
          onItemLayout: P,
          children: (0, l.jsx)(d.njP.Item, {
            id: e.id,
            "aria-label": e.label,
            children: e.label
          })
        }, e.id)), (0, l.jsx)("div", {
          ref: _,
          children: (0, l.jsx)(T, {
            tabs: A,
            onTabSelect: i,
            selectedTab: a
          })
        })]
      }), (0, l.jsxs)(d.njP, {
        "aria-label": p.intl.string(p.t.tcvVXM),
        selectedItem: a,
        type: "top-pill",
        onItemSelect: i,
        children: [w.map(e => (0, l.jsx)(d.njP.Item, {
          id: e.id,
          "aria-label": e.label,
          children: e.label
        }, e.id)), 0 !== A.length ? (0, l.jsx)(T, {
          tabs: A,
          onTabSelect: i,
          selectedTab: a
        }) : null]
      })]
    })]
  })
}