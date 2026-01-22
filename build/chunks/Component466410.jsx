/** Chunk was on 95153 **/
/** chunk id: 466410, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk926919 = require("./926919.js"),
  Chunk172272 = require("./172272.jsx"),
  Chunk540999 = require("./540999.js"),
  Chunk111162 = require("./111162.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O() {
  let {
    layoutDebuggingEnabled: e,
    isDeveloper: t,
    isLoggingGatewayEvents: n,
    isLoggingOverlayEvents: O,
    isLoggingAnalyticsEvents: v,
    isTracingRequests: f,
    isForcedCanary: h,
    isAxeEnabled: E,
    preventPopoutClose: A,
    onlyShowPreviewAppCollections: j,
    disableAppCollectionsCache: S
  } = (0, i.cf)([s.default, c.A], () => ({
    layoutDebuggingEnabled: s.default.layoutDebuggingEnabled,
    isDeveloper: c.A.isDeveloper,
    isLoggingGatewayEvents: s.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: s.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: s.default.isLoggingAnalyticsEvents,
    isTracingRequests: s.default.isTracingRequests,
    isForcedCanary: s.default.isForcedCanary,
    isSourceMapsEnabled: s.default.sourceMapsEnabled,
    isAxeEnabled: s.default.isAxeEnabled,
    preventPopoutClose: s.default.preventPopoutClose,
    onlyShowPreviewAppCollections: s.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: s.default.disableAppCollectionsCache
  })), {
    horizontalSpacing: P,
    verticalSpacing: x
  } = (0, o.Or)(), {
    setHorizontalSpacing: w,
    setVerticalSpacing: C
  } = o.Or.getState(), D = u.HZ.useSetting();
  return t ? [(0, r.jsxs)(l.Drp, {
    id: "overrides",
    label: "Overrides",
    action: () => {
      (0, g.openUserSettings)(d.X.DEV_OVERRIDES, {
        section: p.nc_.DEVELOPER_OPTIONS
      })
    },
    children: [(0, r.jsx)(l.sLh, {
      id: "always-deliver",
      label: "Always Deliver Ads",
      checked: D,
      action: () => {
        u.HZ.updateSetting(!D)
      }
    }, "always-deliver"), (0, r.jsx)(l.sLh, {
      id: "forced-canary",
      label: "Forced Canary",
      checked: h,
      action: () => {
        (0, a.x)({
          canary: !h
        })
      }
    }, "forced-canary"), (0, r.jsx)(l.sLh, {
      id: "preview-collections",
      label: "Preview Unpublished Collections",
      checked: j,
      action: () => {
        (0, a.x)({
          onlyShowPreviewAppCollections: !j
        })
      }
    }, "preview-collections"), (0, r.jsx)(l.sLh, {
      id: "disable-collections-cache",
      label: "Disable Collections Cache",
      checked: S,
      action: () => {
        (0, a.x)({
          disableAppCollectionsCache: !S
        })
      }
    }, "disable-collections-cache")]
  }, "overrides"), (0, r.jsxs)(l.Drp, {
    id: "logging",
    label: "Logging",
    action: () => {
      (0, g.openUserSettings)(d.X.LOGGING, {
        section: p.nc_.DEVELOPER_OPTIONS
      })
    },
    children: [(0, r.jsx)(l.sLh, {
      id: "gateway-events",
      label: "Gateway Events",
      checked: n,
      action: () => {
        (0, a.x)({
          logGatewayEvents: !n
        })
      }
    }, "gateway-events"), (0, r.jsx)(l.sLh, {
      id: "overlay-events",
      label: "Overlay RPC Events",
      checked: O,
      action: () => {
        (0, a.x)({
          logOverlayEvents: !O
        })
      }
    }, "overlay-events"), (0, r.jsx)(l.sLh, {
      id: "analytics-events",
      label: "Analytics Events",
      checked: v,
      action: () => {
        (0, a.x)({
          logAnalyticsEvents: !v
        })
      }
    }, "analytics-events"), (0, r.jsx)(l.sLh, {
      id: "tracing-requests",
      label: "Tracing Requests",
      checked: f,
      action: () => {
        (0, a.x)({
          trace: !f
        })
      }
    }, "tracing-requests"), (0, r.jsx)(l.sLh, {
      id: "prevent-popout-close",
      label: "Prevent Popouts From Closing",
      checked: A,
      action: () => {
        (0, a.x)({
          preventPopoutClose: !A
        })
      }
    }, "prevent-popout-close")]
  }, "logging"), (0, r.jsxs)(l.Drp, {
    id: "design-tools",
    label: "Design/A11y Tools",
    action: () => {
      (0, g.openUserSettings)(d.X.DESIGN_TOOLS, {
        section: p.nc_.DEVELOPER_OPTIONS
      })
    },
    children: [(0, r.jsx)(l.sLh, {
      id: "accessibility-auditing",
      label: "Accessibility Auditing",
      checked: E,
      action: () => {
        (0, a.x)({
          axeEnabled: !E
        })
      }
    }, "accessibility-auditing"), (0, r.jsx)(l.sLh, {
      id: "layout-debugging",
      label: "Enable Layout Debugging",
      checked: e,
      action: () => {
        (0, a.x)({
          layoutDebuggingEnabled: !e
        })
      }
    }, "layout-debugging"), e && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.aK1, {
        id: "horizontal-spacing",
        label: "Horizontal Spacing",
        control: (e, t) => (0, r.jsx)(l.i42, y(b({}, e), {
          ref: t,
          value: P,
          minValue: 0,
          maxValue: o.YR,
          onChange: e => w(e),
          renderValue: e => "".concat(Math.round(e), "px"),
          "aria-label": "Horizontal Spacing"
        }))
      }, "horizontal-spacing"), (0, r.jsx)(l.aK1, {
        id: "vertical-spacing",
        label: "Vertical Spacing",
        control: (e, t) => (0, r.jsx)(l.i42, y(b({}, e), {
          ref: t,
          value: x,
          minValue: 0,
          maxValue: o.YR,
          onChange: e => C(e),
          "aria-label": "Vertical Spacing",
          renderValue: e => "".concat(Math.round(e), "px")
        }))
      }, "vertical-spacing")]
    })]
  }, "design-tools")] : null
}