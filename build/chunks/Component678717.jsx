/** Chunk was on 6043 **/
/** chunk id: 678717, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w,
  openDevToolsPopout: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk718728 = require("./718728.js"),
  Chunk663618 = require("./663618.js");

function E(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r
  } = e, i = (0, d.Z)({
    minDimension: b.h,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: i,
    className: _.resizeHandle
  })
}

function T() {
  (0, Chunk788983.open)(Chunk981631.KJ3.DEVTOOLS_POPOUT, () => (0, Chunk54381.jsx)(Chunk238246.Z, {
    windowKey: Chunk981631.KJ3.DEVTOOLS_POPOUT,
    title: "DevTools",
    withTitleBar: true,
    children: (0, Chunk54381.jsx)(w, {
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
  } = e, r = (0, v.F)(), {
    TabBar: i,
    renderSelectedTab: l,
    selectedTabId: o
  } = (0, j.ZP)({
    tabs: r,
    initialSelectedTabId: null != (t = b.Z.lastOpenTabId) ? t : true,
    onChangeTab: e => {
      (0, x.Qh)({
        lastOpenTabId: e
      })
    }
  }, [r]);
  return (0, u.Z)({
    type: s.ImpressionTypes.PANE,
    name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(g.Gk, {
    children: [(0, a.jsxs)(m.ZP, {
      className: S.headerBar,
      toolbar: n ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m.ZP.Icon, {
          icon: c.rgF,
          tooltip: "Pop Out",
          onClick: T
        }), (0, a.jsx)(m.ZP.Icon, {
          icon: c.Dio,
          tooltip: y.intl.string(y.t.cpT0Cq),
          onClick: x.SO
        })]
      }),
      children: [(0, a.jsx)(m.ZP.Icon, {
        icon: c.Ymb,
        tooltip: "DevTools"
      }), (0, a.jsx)(m.ZP.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(i, {}), l(), (0, a.jsx)(g.Br, {
      className: _.layerContainer
    })]
  })
}

function N() {
  let e = Chunk473749.useRef(null),
    t = (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.sidebarWidth),
    [n, i] = Chunk473749.useState(null),
    l = Chunk473749.useCallback(e => (0, x.Qh)({
      sidebarWidth: e
    }), []);
  return (Chunk473749.useEffect(() => {
    null === require && null !== exports && Chunk120356(exports)
  }, [exports, require]), null === require) ? null : (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: Chunk718728.container,
    style: {
      minWidth: Chunk19759.h,
      width: require
    },
    "data-app-right-panel": true,
    children: [(0, Chunk54381.jsx)(E, {
      resizableNode: module,
      onResize: Chunk120356,
      onResizeEnd: l
    }), (0, Chunk54381.jsx)("div", {
      className: Chunk718728.sidebarContent,
      children: (0, Chunk54381.jsx)(O, {})
    })]
  })
}

function P() {
  return (0, Chunk442837.e7)([Chunk19759.Z], () => Chunk19759.Z.displayTools) ? (0, Chunk54381.jsx)("div", {
    className: l()(Chunk718728.container, Chunk718728.mobileContainerExpanded),
    children: (0, Chunk54381.jsx)("div", {
      className: Chunk718728.sidebarContent,
      children: (0, Chunk54381.jsx)(O, {})
    })
  }) : (0, Chunk54381.jsx)("div", {
    className: Chunk718728.container,
    children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: Chunk31336.SO,
      children: (0, Chunk54381.jsxs)(Chunk665149.ZP, {
        className: l()(Chunk663618.headerBar, Chunk718728.mobileHeaderCollapsed),
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

function w(e) {
  let {
    mobile: t,
    isPopout: n = false
  } = e;
  return t ? (0, a.jsx)(P, {}) : n ? (0, a.jsx)("div", {
    className: _.popoutContainer,
    children: (0, a.jsx)(O, {
      isPopout: true
    })
  }) : (0, a.jsx)(N, {})
}