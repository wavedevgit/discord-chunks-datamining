/** Chunk was on 99583 **/
/** chunk id: 823712, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk3666 = require("./3666.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk736653 = require("./736653.js"),
  Chunk716416 = require("./716416.js"),
  Chunk786180 = require("./786180.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk761640 = require("./761640.js"),
  Chunk836872 = require("./836872.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk947256 = require("./947256.js");
let A = e => {
  let {
    tabs: t,
    selectedTab: l,
    onTabSelect: r,
    onClose: i
  } = e;
  return (0, n.jsx)(d.W1t, {
    navId: "members-tabs-overflow-menu",
    "aria-label": v.intl.string(v.t.riPnr0),
    hideScroller: true,
    onClose: i,
    onSelect: i,
    children: (0, n.jsx)(d.rXV, {
      children: t.map(e => {
        let {
          id: t,
          label: i
        } = e;
        return (0, n.jsx)(d.Drp, {
          id: t,
          label: i,
          icon: t === l ? d.yr3 : true,
          action: () => r(t)
        }, t)
      })
    }, "applications-overflow-tabs")
  })
};

function p(e) {
  let {
    onTabSelect: t,
    tabs: l,
    selectedTab: i
  } = e, a = r.useRef(null), o = (0, m.Ay)(), u = (0, c.Mw)(o), x = r.useMemo(() => null != l.find(e => {
    let {
      id: t
    } = e;
    return t === i
  }), [i, l]), j = x ? "text-strong" : u ? "text-muted" : "text-strong", b = x ? d.LU0.colors.TEXT_STRONG : u ? d.LU0.colors.TEXT_MUTED : d.LU0.colors.TEXT_STRONG;
  return (0, n.jsx)(d.YNO, {
    targetElementRef: a,
    renderPopout: e => {
      let {
        closePopout: r
      } = e;
      return (0, n.jsx)(A, {
        selectedTab: i,
        onClose: r,
        tabs: l,
        onTabSelect: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, t) => {
      var l, r;
      let {
        isShown: i
      } = t;
      return (0, n.jsxs)(d.VQ0.Item, (l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = l[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), r = r = {
        id: "more",
        clickableInnerRef: a,
        color: "text-muted",
        className: s()(_.OS, {
          [_.wH]: x
        }),
        "aria-label": v.intl.string(v.t["UKOtz+"]),
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/medium",
          color: j,
          children: v.intl.string(v.t["UKOtz+"])
        }), i ? (0, n.jsx)(d.tN5, {
          size: "sm",
          color: b
        }) : (0, n.jsx)(d.abt, {
          size: "sm",
          color: b
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          l.push.apply(l, n)
        }
        return l
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
      }), l))
    }
  })
}

function S(e) {
  let t, {
      guildId: l,
      currentTab: i,
      onTabSelect: s
    } = e,
    [c, m] = r.useState(0),
    A = r.useRef(null),
    S = r.useRef(c),
    T = (0, b.H)({
      guildId: l
    }),
    E = (t = null != T ? T : 0, [{
      id: g.D.ALL_MEMBERS,
      label: v.intl.string(v.t.NOOm1Z)
    }, {
      id: g.D.PENDING,
      label: t > 0 ? v.intl.formatToPlainString(v.t["Wo+zL0"], {
        count: t
      }) : v.intl.string(v.t["4eQVBO"])
    }, {
      id: g.D.REJECTED,
      label: v.intl.string(v.t.bSZkla)
    }, {
      id: g.D.APPROVED,
      label: v.intl.string(v.t.aURgY2)
    }]),
    {
      lastVisibleIndex: y,
      onItemLayout: O,
      overflowItemsRef: N
    } = (0, o.Wv)({
      items: E,
      itemGapPx: 16,
      maxLines: 1,
      containerWidth: c - 200
    }),
    I = (0, a.bG)([f.Ay], () => null != f.Ay.getGuildSidebarState(l), [l]),
    R = (0, j.R)({
      guildId: l
    }),
    C = r.useMemo(() => i === g.D.ALL_MEMBERS ? I : null != R && null != R.user, [i, I, R]),
    D = r.useMemo(() => E.slice(0, y + 1), [y, E]),
    P = r.useMemo(() => E.slice(y + 1), [y, E]),
    M = (0, x.A)(e => {
      let t = e.contentRect.width;
      null != t && S.current !== t && (m(t), S.current = t)
    });
  return (0, u.g)(A, M, [C]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(h.A.Divider, {
      className: _.yF
    }), (0, n.jsxs)("div", {
      className: _.oB,
      ref: A,
      children: [(0, n.jsxs)("div", {
        className: _.Kk,
        children: [E.map((e, t) => (0, n.jsx)(o.Ae, {
          index: t,
          onItemLayout: O,
          children: (0, n.jsx)(d.VQ0.Item, {
            id: e.id,
            "aria-label": e.label,
            children: e.label
          })
        }, e.id)), (0, n.jsx)("div", {
          ref: N,
          children: (0, n.jsx)(p, {
            tabs: P,
            onTabSelect: s,
            selectedTab: i
          })
        })]
      }), (0, n.jsxs)(d.VQ0, {
        "aria-label": v.intl.string(v.t.tcvVXM),
        selectedItem: i,
        type: "top-pill",
        onItemSelect: s,
        children: [D.map(e => (0, n.jsx)(d.VQ0.Item, {
          id: e.id,
          "aria-label": e.label,
          children: e.label
        }, e.id)), 0 !== P.length ? (0, n.jsx)(p, {
          tabs: P,
          onTabSelect: s,
          selectedTab: i
        }) : null]
      })]
    })]
  })
}