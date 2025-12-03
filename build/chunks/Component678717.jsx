/** Chunk was on 88282 **/
/** chunk id: 678717, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I,
  openDevToolsPopout: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk347469 = require("./347469.js"),
  Chunk213609 = require("./213609.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk238246 = require("./238246.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk31336 = require("./31336.js"),
  Chunk19759 = require("./19759.js"),
  Chunk246992 = require("./246992.js"),
  Chunk682475 = require("./682475.jsx"),
  Chunk621060 = require("./621060.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552883 = require("./552883.js"),
  Chunk451429 = require("./451429.js");

function E(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: l
  } = e, r = (0, d.Z)({
    minDimension: g.h,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: l,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: r,
    className: C.resizeHandle
  })
}

function N() {
  (0, Chunk788983.open)(Chunk981631.KJ3.DEVTOOLS_POPOUT, () => (0, Chunk54381.jsx)(Chunk238246.Z, {
    windowKey: Chunk981631.KJ3.DEVTOOLS_POPOUT,
    title: "DevTools",
    withTitleBar: true,
    children: (0, Chunk54381.jsx)(I, {
      mobile: false,
      isPopout: true
    })
  }), {
    width: 800,
    height: 600
  })
}

function O(e) {
  var t;
  let {
    isPopout: n = false
  } = e, l = (0, v.F)(), {
    TabBar: r,
    renderSelectedTab: i,
    selectedTabId: o
  } = (0, j.ZP)({
    tabs: l,
    initialSelectedTabId: null != (t = g.Z.lastOpenTabId) ? t : true,
    onChangeTab: e => {
      (0, f.Qh)({
        lastOpenTabId: e
      })
    }
  }, [l]);
  return (0, u.Z)({
    type: s.ImpressionTypes.PANE,
    name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(b.Gk, {
    children: [(0, a.jsxs)(m.ZP, {
      className: S.headerBar,
      toolbar: n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.ZP.Icon, {
          icon: c.rgF,
          tooltip: "Pop Out",
          onClick: N
        }), (0, a.jsx)(m.ZP.Icon, {
          icon: c.Dio,
          tooltip: y.intl.string(y.t.cpT0Cq),
          onClick: f.SO
        })]
      }),
      children: [(0, a.jsx)(m.ZP.Icon, {
        icon: c.Ymb,
        tooltip: "DevTools"
      }), (0, a.jsx)(m.ZP.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(b.Br, {
      className: C.layerContainer
    })]
  })
}

function T() {
  let e = Chunk473749.useRef(null),
    t = (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.sidebarWidth),
    [n, r] = Chunk473749.useState(null),
    i = Chunk473749.useCallback(e => (0, f.Qh)({
      sidebarWidth: e
    }), []);
  return (Chunk473749.useEffect(() => {
    null === require && null !== exports && Chunk120356(exports)
  }, [exports, require]), null === require) ? null : (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: Chunk552883.container,
    style: {
      minWidth: Chunk19759.h,
      width: require
    },
    "data-app-right-panel": true,
    children: [(0, Chunk54381.jsx)(E, {
      resizableNode: module,
      onResize: Chunk120356,
      onResizeEnd: i
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk552883.sidebarContent,
      children: (0, Chunk54381.jsx)(O, {})
    })]
  })
}

function P() {
  return (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.displayTools) ? (0, Chunk54381.jsx)("div", {
    className: i()(Chunk552883.container, Chunk552883.mobileContainerExpanded),
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk552883.sidebarContent,
      children: (0, Chunk54381.jsx)(O, {})
    })
  }) : (0, Chunk54381.jsx)("div", {
    className: Chunk552883.container,
    children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: Chunk31336.SO,
      children: (0, Chunk54381.jsxs)(Chunk665149.ZP, {
        className: i()(Chunk451429.headerBar, Chunk552883.mobileHeaderCollapsed),
        toolbar: (0, Chunk54381.jsx)(Chunk259580.Z, {
          direction: Chunk259580.Z.Directions.UP
        }),
        children: [(0, Chunk54381.jsx)(Chunk665149.ZP.Icon, {
          icon: Chunk481060.Ymb,
          tooltip: "DevTools"
        }), (0, Chunk54381.jsx)(Chunk665149.ZP.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function I(e) {
  let {
    mobile: t,
    isPopout: n = false
  } = e;
  return t ? (0, a.jsx)(P, {}) : n ? (0, a.jsx)("div", {
    className: C.popoutContainer,
    children: (0, a.jsx)(O, {
      isPopout: true
    })
  }) : (0, a.jsx)(T, {})
}