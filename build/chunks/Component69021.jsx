/** Chunk was on 2535 **/
/** chunk id: 69021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179658 = require("./179658.js"),
  Chunk230711 = require("./230711.js"),
  Chunk482215 = require("./482215.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk857192 = require("./857192.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E() {
  let {
    layoutDebuggingEnabled: e,
    isStaff: t,
    isDeveloper: n,
    isLoggingGatewayEvents: E,
    isLoggingOverlayEvents: f,
    isLoggingAnalyticsEvents: v,
    isAnalyticsDebuggerEnabled: S,
    isTracingRequests: h,
    isForcedCanary: j,
    isSourceMapsEnabled: P,
    isIdleStatusIndicatorEnabled: w,
    isAxeEnabled: A,
    preventPopoutClose: x,
    onlyShowPreviewAppCollections: D,
    disableAppCollectionsCache: I
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
    horizontalSpacing: _,
    verticalSpacing: T,
    maxHorizontalSpacing: Z,
    maxVerticalSpacing: N
  } = (0, Chunk482215.i)(), {
    setHorizontalSpacing: m,
    setVerticalSpacing: k
  } = Chunk482215.i.getState(), C = Chunk695346.zY.useSetting(), R = [];
  return exports && require && (R.push((0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "overrides",
    label: "Overrides",
    action: () => {
      Chunk230711.Z.open(Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB)
    }
  }, "overrides")), R.push((0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "manual-triggers",
    label: "Manual Triggers",
    action: () => {
      Chunk230711.Z.open(Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk726985.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB)
    }
  }, "manual-triggers")), R.push((0, Chunk951288.jsxs)(Chunk481060.sNh, {
    id: "developer-flags",
    label: "Developer Flags",
    action: () => {
      Chunk230711.Z.open(Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk726985.s6.DEVELOPER_OPTIONS_FLAGS_TAB)
    },
    children: [(0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "tracing-requests",
      label: "Tracing Requests",
      checked: h,
      action: () => {
        (0, Chunk179658.y)({
          trace: !h
        })
      }
    }, "tracing-requests"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "forced-canary",
      label: "Forced Canary",
      checked: j,
      action: () => {
        (0, Chunk179658.y)({
          canary: !j
        })
      }
    }, "forced-canary"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "always-deliver",
      label: "Ads auto-targeting",
      checked: C,
      action: () => {
        Chunk695346.zY.updateSetting(!C)
      }
    }, "always-deliver"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "source-maps",
      label: "Source Maps",
      checked: P,
      action: () => {
        (0, Chunk179658.y)({
          sourceMapsEnabled: !P
        })
      }
    }, "source-maps"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "idle-status",
      label: "Idle Status Indicator",
      checked: w,
      action: () => {
        (0, Chunk179658.y)({
          idleStatusIndicatorEnabled: !w
        })
      }
    }, "idle-status"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "accessibility-auditing",
      label: "Accessibility Auditing",
      checked: A,
      action: () => {
        (0, Chunk179658.y)({
          axeEnabled: !A
        })
      }
    }, "accessibility-auditing"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "prevent-popout-close",
      label: "Prevent Popouts From Closing",
      checked: x,
      action: () => {
        (0, Chunk179658.y)({
          preventPopoutClose: !x
        })
      }
    }, "prevent-popout-close"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "preview-collections",
      label: "Preview Unpublished Collections",
      checked: D,
      action: () => {
        (0, Chunk179658.y)({
          onlyShowPreviewAppCollections: !D
        })
      }
    }, "preview-collections"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "disable-collections-cache",
      label: "Disable Collections Cache",
      checked: I,
      action: () => {
        (0, Chunk179658.y)({
          disableAppCollectionsCache: !I
        })
      }
    }, "disable-collections-cache")]
  }, "developer-flags")), R.push((0, Chunk951288.jsxs)(Chunk481060.sNh, {
    id: "logging",
    label: "Logging",
    action: () => {
      Chunk230711.Z.open(Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB)
    },
    children: [(0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "gateway-events",
      label: "Gateway Events",
      checked: E,
      action: () => {
        (0, Chunk179658.y)({
          logGatewayEvents: !E
        })
      }
    }, "gateway-events"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "overlay-events",
      label: "Overlay RPC Events",
      checked: f,
      action: () => {
        (0, Chunk179658.y)({
          logOverlayEvents: !f
        })
      }
    }, "overlay-events"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "analytics-events",
      label: "Analytics Events",
      checked: v,
      action: () => {
        (0, Chunk179658.y)({
          logAnalyticsEvents: !v
        })
      }
    }, "analytics-events"), (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "analytics-debugger",
      label: "Analytics Debugger",
      checked: S,
      action: () => {
        (0, Chunk179658.y)({
          analyticsDebuggerEnabled: !S
        })
      }
    }, "analytics-debugger")]
  }, "logging")), R.push((0, Chunk951288.jsx)(Chunk481060.sNh, {
    id: "design-tools",
    label: "Design Tools",
    action: () => {
      Chunk230711.Z.open(Chunk981631.oAB.DEVELOPER_OPTIONS, Chunk726985.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB)
    },
    children: (0, Chunk951288.jsx)(Chunk481060.S89, {
      id: "layout-debugging",
      label: "Enable Layout Debugging",
      checked: module,
      action: () => {
        (0, Chunk179658.y)({
          layoutDebuggingEnabled: !module
        })
      }
    }, "layout-debugging")
  }, "design-tools")), module && (R.push((0, Chunk951288.jsx)(Chunk481060.II_, {
    id: "horizontal-spacing",
    label: "Horizontal Spacing",
    control: (e, t) => (0, a.jsx)(i._wy, O(y({}, e), {
      ref: t,
      value: _,
      minValue: 0,
      maxValue: Z,
      onChange: e => m(e),
      renderValue: e => "".concat(Math.round(e), "px"),
      "aria-label": "Horizontal Spacing"
    }))
  }, "horizontal-spacing")), R.push((0, Chunk951288.jsx)(Chunk481060.II_, {
    id: "vertical-spacing",
    label: "Vertical Spacing",
    control: (e, t) => (0, a.jsx)(i._wy, O(y({}, e), {
      ref: t,
      value: T,
      minValue: 0,
      maxValue: N,
      onChange: e => k(e),
      "aria-label": "Horizontal Spacing",
      renderValue: e => "".concat(Math.round(e), "px")
    }))
  }, "vertical-spacing")))), 0 === R.length ? null : R
}