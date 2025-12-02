/** Chunk was on web.js **/
/** chunk id: 857192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => T
}), require("./997841.js");
var r, Chunk261470 = require("./261470.js"),
  Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk433517 = require("./433517.js"),
  Chunk570140 = require("./570140.js"),
  Chunk179658 = require("./179658.js"),
  Chunk70956 = require("./70956.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
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
let h = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new Chunk261470.Z(5 * Chunk70956.Z.Millis.SECOND, +Chunk70956.Z.Millis.MINUTE, true),
      r = () => {
        Chunk544891.tn.put({
          url: module,
          headers: {
            Authorization: Chunk213919.getToken()
          },
          oldFormErrors: true,
          rejectWithError: true
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, u.y)({
            sourceMapsEnabled: false
          })) : 200 !== e.status ? t = setTimeout(r, n.fail()) : (n.succeed(), t = setTimeout(r, e.body.sourceMapCookieTTLSeconds * d.Z.Millis.SECOND * .75))
        }, () => {
          t = setTimeout(r, require.fail())
        })
      };
    return {
      set: n => {
        n !== (null != t) && (n ? t = setTimeout(r, 0) : (clearTimeout(t), t = null, s.tn.del({
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
    analyticsDebuggerEnabled: false,
    bugReporterEnabled: true,
    idleStatusIndicatorEnabled: false,
    onlyShowPreviewAppCollections: false,
    disableAppCollectionsCache: false,
    isStreamInfoOverlayEnabled: false,
    preventPopoutClose: false,
    logKeyboardMismatches: false,
    alertStartupMetrics: false,
    personaForceFaeFail: false,
    personaForceIdVerificationFail: false
  },
  b = m({}, E);

function y(e) {
  b = m({}, E, b, e), h.set(b.sourceMapsEnabled), l.K.set(g, b)
}

function O(e) {
  let {
    settings: t
  } = e;
  y(t)
}

function v(e) {
  y(E)
}

function S(e) {
  var t;
  let n = ((null != (t = e.user.flags) ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF,
    r = n || null != e.user.personal_connection_id;
  n && h.set(b.sourceMapsEnabled), f.Z.setTags({
    isStaff: r.toString()
  })
}
class I extends(r = Chunk442837.ZP.Store) {
  initialize() {
    let e = Chunk433517.K.get(g);
    null != module && (b = m({}, E, module))
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
  get isAnalyticsDebuggerEnabled() {
    return b.analyticsDebuggerEnabled
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
  getDebugOptionsHeaderValue() {
    return Object.keys(b).map(e => b[e]), Object.keys(b).filter(e => b[e]).join(",")
  }
}
_(I, "displayName", "DeveloperOptionsStore");
let T = new I(Chunk570140.Z, {
  LOGOUT: v,
  CONNECTION_OPEN: S,
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: O
})