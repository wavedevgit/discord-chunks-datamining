/** Chunk was on web.js **/
/** chunk id: 111162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => I
}), require("./938796.js");
var r, Chunk158390 = require("./158390.js"),
  Chunk247775 = require("./247775.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk926919 = require("./926919.js"),
  Chunk927813 = require("./927813.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let m = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new i.A(5 * d.A.Millis.SECOND, +d.A.Millis.MINUTE, true),
      r = () => {
        o.Bo.put({
          url: e,
          headers: {
            Authorization: a.getToken()
          },
          oldFormErrors: true,
          rejectWithError: true
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, u.x)({
            sourceMapsEnabled: false
          })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.A.Millis.SECOND * .75))
        }, () => {
          t = setTimeout(r, n.fail())
        })
      };
    return {
      set: n => {
        n !== (null != t) && (n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, o.Bo.del({
          url: e,
          headers: {
            Authorization: a.getToken()
          },
          oldFormErrors: true,
          rejectWithError: true
        })))
      }
    }
  })(),
  g = "DeveloperOptionsStore",
  E = {
    trace: false,
    canary: false,
    logGatewayEvents: false,
    logOverlayEvents: false,
    logAnalyticsEvents: false,
    sourceMapsEnabled: false,
    axeEnabled: false,
    cssDebuggingEnabled: false,
    layoutDebuggingEnabled: false,
    bugReporterEnabled: true,
    idleStatusIndicatorEnabled: false,
    onlyShowPreviewAppCollections: false,
    disableAppCollectionsCache: false,
    isStreamInfoOverlayEnabled: false,
    preventPopoutClose: false,
    logKeyboardMismatches: false,
    alertStartupMetrics: false,
    personaForceFaeFail: false,
    personaForceIdVerificationFail: false,
    personaDisableModularPilotTestTemplate: false
  },
  b = h({}, E);

function y(e) {
  b = h({}, E, b, e), m.set(b.sourceMapsEnabled), l.w.set(g, b)
}

function O(e) {
  let {
    settings: t
  } = e;
  y(t)
}

function A(e) {
  y(E)
}

function v(e) {
  var t;
  let n = ((null != (t = e.user.flags) ? t : 0) & p.nhx.STAFF) === p.nhx.STAFF,
    r = n || null != e.user.personal_connection_id;
  n && m.set(b.sourceMapsEnabled), f.A.setTags({
    isStaff: r.toString()
  })
}
class S extends(r = Chunk311907.Ay.Store) {
  initialize() {
    let e = l.w.get(g);
    null != e && (b = h({}, E, e))
  }
  get isTracingRequests() {
    return b.trace
  }
  get isForcedCanary() {
    return b.canary
  }
  get isLoggingGatewayEvents() {
    return b.logGatewayEvents
  }
  get isLoggingOverlayEvents() {
    return b.logOverlayEvents
  }
  get isLoggingAnalyticsEvents() {
    return b.logAnalyticsEvents
  }
  get isAxeEnabled() {
    return b.axeEnabled
  }
  get cssDebuggingEnabled() {
    return b.cssDebuggingEnabled
  }
  get layoutDebuggingEnabled() {
    return b.layoutDebuggingEnabled
  }
  get sourceMapsEnabled() {
    return b.sourceMapsEnabled
  }
  get isBugReporterEnabled() {
    return b.bugReporterEnabled
  }
  get isIdleStatusIndicatorEnabled() {
    return b.idleStatusIndicatorEnabled
  }
  get onlyShowPreviewAppCollections() {
    return b.onlyShowPreviewAppCollections
  }
  get disableAppCollectionsCache() {
    return b.disableAppCollectionsCache
  }
  get isStreamInfoOverlayEnabled() {
    return b.isStreamInfoOverlayEnabled
  }
  get preventPopoutClose() {
    return b.preventPopoutClose
  }
  get logKeyboardMismatches() {
    return b.logKeyboardMismatches
  }
  get alertStartupMetrics() {
    return b.alertStartupMetrics
  }
  get personaForceFaeFail() {
    return b.personaForceFaeFail
  }
  get personaForceIdVerificationFail() {
    return b.personaForceIdVerificationFail
  }
  get personaDisableModularPilotTestTemplate() {
    return b.personaDisableModularPilotTestTemplate
  }
  getDebugOptionsHeaderValue() {
    return Object.keys(b).map(e => b[e]), Object.keys(b).filter(e => b[e]).join(",")
  }
}
_(S, "displayName", "DeveloperOptionsStore");
let I = new S(Chunk73153.h, {
  LOGOUT: A,
  CONNECTION_OPEN: v,
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: O
})