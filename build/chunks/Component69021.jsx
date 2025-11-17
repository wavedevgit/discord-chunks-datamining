/** Chunk was on 2535 **/
/** chunk id: 69021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179658 = require("./179658.js"),
  Chunk482215 = require("./482215.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk857192 = require("./857192.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f() {
  let {
    layoutDebuggingEnabled: e,
    isStaff: t,
    isDeveloper: n,
    isLoggingGatewayEvents: f,
    isLoggingOverlayEvents: S,
    isLoggingAnalyticsEvents: v,
    isAnalyticsDebuggerEnabled: P,
    isTracingRequests: h,
    isForcedCanary: j,
    isSourceMapsEnabled: A,
    isIdleStatusIndicatorEnabled: N,
    isAxeEnabled: w,
    preventPopoutClose: _,
    onlyShowPreviewAppCollections: D,
    disableAppCollectionsCache: x
  } = (0, Chunk442837.cj)([Chunk857192.default, Chunk594174.default, Chunk906467.Z], () => {
    var e;
    return {
      layoutDebuggingEnabled: Chunk857192.default.layoutDebuggingEnabled,
      isStaff: (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) === true,
      isDeveloper: Chunk906467.Z.isDeveloper,
      isLoggingGatewayEvents: Chunk857192.default.isLoggingGatewayEvents,
      isLoggingOverlayEvents: Chunk857192.default.isLoggingOverlayEvents,
      isLoggingAnalyticsEvents: Chunk857192.default.isLoggingAnalyticsEvents,
      isAnalyticsDebuggerEnabled: Chunk857192.default.isAnalyticsDebuggerEnabled,
      isTracingRequests: Chunk857192.default.isTracingRequests,
      isForcedCanary: Chunk857192.default.isForcedCanary,
      isSourceMapsEnabled: Chunk857192.default.sourceMapsEnabled,
      isIdleStatusIndicatorEnabled: Chunk857192.default.isIdleStatusIndicatorEnabled,
      isAxeEnabled: Chunk857192.default.isAxeEnabled,
      preventPopoutClose: Chunk857192.default.preventPopoutClose,
      onlyShowPreviewAppCollections: Chunk857192.default.onlyShowPreviewAppCollections,
      disableAppCollectionsCache: Chunk857192.default.disableAppCollectionsCache
    }
  }), {
    horizontalSpacing: I,
    verticalSpacing: T,
    maxHorizontalSpacing: C,
    maxVerticalSpacing: m
  } = (0, Chunk482215.i)(), {
    setHorizontalSpacing: L,
    setVerticalSpacing: R
  } = Chunk482215.i.getState(), Z = Chunk695346.zY.useSetting(), k = [];
  return exports && require && (k.push((0, Chunk54381.jsx)(Chunk481060.sNh, {
    id: "overrides",
    label: "Overrides",
    action: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
        section: Chunk981631.oAB.DEVELOPER_OPTIONS,
        subsection: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB
      })
    }
  }, "overrides")), k.push((0, Chunk54381.jsx)(Chunk481060.sNh, {
    id: "manual-triggers",
    label: "Manual Triggers",
    action: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
        section: Chunk981631.oAB.DEVELOPER_OPTIONS,
        subsection: Chunk726985.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB
      })
    }
  }, "manual-triggers")), k.push((0, Chunk54381.jsxs)(Chunk481060.sNh, {
    id: "developer-flags",
    label: "Developer Flags",
    action: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
        section: Chunk981631.oAB.DEVELOPER_OPTIONS,
        subsection: Chunk726985.s6.DEVELOPER_OPTIONS_FLAGS_TAB
      })
    },
    children: [(0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "tracing-requests",
      label: "Tracing Requests",
      checked: h,
      action: () => {
        (0, Chunk179658.y)({
          trace: !h
        })
      }
    }, "tracing-requests"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "forced-canary",
      label: "Forced Canary",
      checked: j,
      action: () => {
        (0, Chunk179658.y)({
          canary: !j
        })
      }
    }, "forced-canary"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "always-deliver",
      label: "Ads auto-targeting",
      checked: Z,
      action: () => {
        Chunk695346.zY.updateSetting(!Z)
      }
    }, "always-deliver"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "source-maps",
      label: "Source Maps",
      checked: A,
      action: () => {
        (0, Chunk179658.y)({
          sourceMapsEnabled: !A
        })
      }
    }, "source-maps"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "idle-status",
      label: "Idle Status Indicator",
      checked: N,
      action: () => {
        (0, Chunk179658.y)({
          idleStatusIndicatorEnabled: !N
        })
      }
    }, "idle-status"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "accessibility-auditing",
      label: "Accessibility Auditing",
      checked: w,
      action: () => {
        (0, Chunk179658.y)({
          axeEnabled: !w
        })
      }
    }, "accessibility-auditing"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "prevent-popout-close",
      label: "Prevent Popouts From Closing",
      checked: _,
      action: () => {
        (0, Chunk179658.y)({
          preventPopoutClose: !_
        })
      }
    }, "prevent-popout-close"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "preview-collections",
      label: "Preview Unpublished Collections",
      checked: D,
      action: () => {
        (0, Chunk179658.y)({
          onlyShowPreviewAppCollections: !D
        })
      }
    }, "preview-collections"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "disable-collections-cache",
      label: "Disable Collections Cache",
      checked: x,
      action: () => {
        (0, Chunk179658.y)({
          disableAppCollectionsCache: !x
        })
      }
    }, "disable-collections-cache")]
  }, "developer-flags")), k.push((0, Chunk54381.jsxs)(Chunk481060.sNh, {
    id: "logging",
    label: "Logging",
    action: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
        section: Chunk981631.oAB.DEVELOPER_OPTIONS,
        subsection: Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB
      })
    },
    children: [(0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "gateway-events",
      label: "Gateway Events",
      checked: f,
      action: () => {
        (0, Chunk179658.y)({
          logGatewayEvents: !f
        })
      }
    }, "gateway-events"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "overlay-events",
      label: "Overlay RPC Events",
      checked: S,
      action: () => {
        (0, Chunk179658.y)({
          logOverlayEvents: !S
        })
      }
    }, "overlay-events"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "analytics-events",
      label: "Analytics Events",
      checked: v,
      action: () => {
        (0, Chunk179658.y)({
          logAnalyticsEvents: !v
        })
      }
    }, "analytics-events"), (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "analytics-debugger",
      label: "Analytics Debugger",
      checked: P,
      action: () => {
        (0, Chunk179658.y)({
          analyticsDebuggerEnabled: !P
        })
      }
    }, "analytics-debugger")]
  }, "logging")), k.push((0, Chunk54381.jsx)(Chunk481060.sNh, {
    id: "design-tools",
    label: "Design Tools",
    action: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.DEVELOPER_OPTIONS_PANEL, {
        section: Chunk981631.oAB.DEVELOPER_OPTIONS,
        subsection: Chunk726985.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB
      })
    },
    children: (0, Chunk54381.jsx)(Chunk481060.S89, {
      id: "layout-debugging",
      label: "Enable Layout Debugging",
      checked: module,
      action: () => {
        (0, Chunk179658.y)({
          layoutDebuggingEnabled: !module
        })
      }
    }, "layout-debugging")
  }, "design-tools")), module && (k.push((0, Chunk54381.jsx)(Chunk481060.II_, {
    id: "horizontal-spacing",
    label: "Horizontal Spacing",
    control: (e, t) => (0, l.jsx)(i._wy, y(E({}, e), {
      ref: t,
      value: I,
      minValue: 0,
      maxValue: C,
      onChange: e => L(e),
      renderValue: e => "".concat(Math.round(e), "px"),
      "aria-label": "Horizontal Spacing"
    }))
  }, "horizontal-spacing")), k.push((0, Chunk54381.jsx)(Chunk481060.II_, {
    id: "vertical-spacing",
    label: "Vertical Spacing",
    control: (e, t) => (0, l.jsx)(i._wy, y(E({}, e), {
      ref: t,
      value: T,
      minValue: 0,
      maxValue: m,
      onChange: e => R(e),
      "aria-label": "Horizontal Spacing",
      renderValue: e => "".concat(Math.round(e), "px")
    }))
  }, "vertical-spacing")))), 0 === k.length ? null : k
}