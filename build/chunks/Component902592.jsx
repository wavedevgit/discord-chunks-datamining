/** Chunk was on 65298 **/
/** chunk id: 902592, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w,
  openDevToolsPopout: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk761929 = require("./761929.js"),
  Chunk139286 = require("./139286.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk923917 = require("./923917.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk538064 = require("./538064.js"),
  Chunk265059 = require("./265059.js"),
  Chunk867041 = require("./867041.js"),
  Chunk641616 = require("./641616.jsx"),
  Chunk231643 = require("./231643.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk346858 = require("./346858.js"),
  Chunk661251 = require("./661251.js");

function S(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: l
  } = e, r = (0, d.A)({
    minDimension: f.q,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: l,
    orientation: d.R.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: r,
    className: A.Di
  })
}

function O() {
  (0, h.open)(_.MLl.DEVTOOLS_POPOUT, () => (0, a.jsx)(p.A, {
    windowKey: _.MLl.DEVTOOLS_POPOUT,
    title: "DevTools",
    withTitleBar: true,
    children: (0, a.jsx)(w, {
      mobile: false,
      isPopout: true
    })
  }), {
    width: 800,
    height: 600
  })
}

function T(e) {
  var t;
  let {
    isPopout: n = false
  } = e, l = (0, v.x)(), {
    TabBar: r,
    renderSelectedTab: i,
    selectedTabId: o
  } = (0, j.Ay)({
    tabs: l,
    initialSelectedTabId: null != (t = f.A.lastOpenTabId) ? t : true,
    onChangeTab: e => {
      (0, g.Jt)({
        lastOpenTabId: e
      })
    }
  }, [l]);
  return (0, u.A)({
    type: s.ImpressionTypes.PANE,
    name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(b.xG, {
    children: [(0, a.jsxs)(m.Ay, {
      className: C.jr,
      toolbar: n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.Ay.Icon, {
          icon: c.tfB,
          tooltip: "Pop Out",
          onClick: O
        }), (0, a.jsx)(m.Ay.Icon, {
          icon: c.PGe,
          tooltip: y.intl.string(y.t.cpT0Cq),
          onClick: g.pf
        })]
      }),
      children: [(0, a.jsx)(m.Ay.Icon, {
        icon: c.VaJ,
        tooltip: "DevTools"
      }), (0, a.jsx)(m.Ay.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(b.jY, {
      className: A.n7
    })]
  })
}

function E() {
  let e = l.useRef(null),
    t = (0, o.bG)([f.A], () => f.A.sidebarWidth),
    [n, r] = l.useState(null),
    i = l.useCallback(e => (0, g.Jt)({
      sidebarWidth: e
    }), []);
  return (l.useEffect(() => {
    null === n && null !== t && r(t)
  }, [t, n]), null === n) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: A.kL,
    style: {
      minWidth: f.q,
      width: n
    },
    "data-app-right-panel": true,
    children: [(0, a.jsx)(S, {
      resizableNode: e,
      onResize: r,
      onResizeEnd: i
    }), (0, a.jsx)("div", {
      className: A.wp,
      children: (0, a.jsx)(T, {})
    })]
  })
}

function N() {
  return (0, o.bG)([f.A], () => f.A.displayTools) ? (0, a.jsx)("div", {
    className: i()(A.kL, A.PQ),
    children: (0, a.jsx)("div", {
      className: A.wp,
      children: (0, a.jsx)(T, {})
    })
  }) : (0, a.jsx)("div", {
    className: A.kL,
    children: (0, a.jsx)(c.DUT, {
      onClick: g.pf,
      children: (0, a.jsxs)(m.Ay, {
        className: i()(C.jr, A.J$),
        toolbar: (0, a.jsx)(x.A, {
          direction: x.A.Directions.UP
        }),
        children: [(0, a.jsx)(m.Ay.Icon, {
          icon: c.VaJ,
          tooltip: "DevTools"
        }), (0, a.jsx)(m.Ay.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function w(e) {
  let {
    mobile: t,
    isPopout: n = false
  } = e;
  return t ? (0, a.jsx)(N, {}) : n ? (0, a.jsx)("div", {
    className: A.jC,
    children: (0, a.jsx)(T, {
      isPopout: true
    })
  }) : (0, a.jsx)(E, {})
}