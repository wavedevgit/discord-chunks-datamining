/** Chunk was on web.js **/
/** chunk id: 912865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./65821.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk15285 = require("./15285.js"),
  Chunk954571 = require("./954571.js"),
  Chunk9302 = require("./9302.js"),
  Chunk777334 = require("./777334.js"),
  Chunk41984 = require("./41984.js"),
  Chunk833551 = require("./833551.js"),
  Chunk515183 = require("./515183.js"),
  Chunk680243 = require("./680243.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = {};

function O(e) {
  var t, n;
  return null != (t = null == (n = d.default.getTrackedGameByPid(e)) ? true : n.overlayMethod) ? t : null
}

function v(e) {
  let t = O(e);
  b[e] = y(g({}, b[e]), {
    overlay_method: null != t ? u.Ue[t] : u.Ue[u.Ue.OutOfProcess]
  })
}

function A(e) {
  var t, n;
  if (null != b[e]) return;
  let r = s.Ay.getGameOrTransformedSubgameForPID(e),
    i = O(e);
  b[e] = {
    overlay_method: null != i ? u.Ue[i] : u.Ue[u.Ue.OutOfProcess],
    success: false,
    game_name: null != (t = null == r ? true : r.name) ? t : null,
    game_id: null != (n = null == r ? true : r.id) ? n : null,
    error: null,
    error_description: null,
    renderer_started: false,
    renderer_started_after: null,
    renderer_ready_after: null,
    renderer_load_succeeded_after: null,
    renderer_crash_count: 0,
    renderer_load_failures: 0,
    renderer_ignored_paints: 0,
    host_crash_count: 0
  }
}

function I(e) {
  var t;
  return null != (t = b[e]) ? t : {}
}

function S(e, t) {
  var n, r;
  let i = null == (n = b[e]) ? true : n.error,
    a = null == (r = b[e]) ? true : r.error_description;
  b[e] = g({}, b[e], t), null != i && (b[e].error = i), null != a && (b[e].error_description = a)
}

function T(e) {
  o.default.track(h.HAw.OVERLAY_HOOK_RESULT, I(e))
}

function C(e, t) {
  e !== l.UNSET_PID && S(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  })
}

function N(e, t) {
  e !== l.UNSET_PID && S(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  })
}

function R() {
  b = {}
}

function w(e, t) {
  let n = s.Ay.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function P(e) {
  let {
    pid: t,
    error: n,
    crashType: r
  } = e, i = n instanceof Error ? n : Error(null != n ? n : "Unknown error");
  return "native" === r ? (C(t, i), (0, c.St)(i, u.Ue.OutOfProcess, {
    extra: w(t, "host")
  })) : (N(t, i), (0, c.St)(i, u.Ue.OutOfProcess, {
    extra: w(t, "renderer")
  })), true
}

function D(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  return S(t, {
    mounting_started_at: new Date().getTime()
  }), true
}

function x(e) {
  var t, n;
  let {
    createWindowTriggeringPID: r
  } = e, i = null != (t = null == (n = I(r)) ? true : n.mounting_started_at) ? t : new Date().getTime(), a = {
    renderer_started: true,
    fullscreen_type: (0, f.ph)(r),
    graphics_info_after: new Date().getTime() - i
  };
  return S(r, a), true
}

function L(e) {
  var t, n;
  let {
    createWindowTriggeringPID: r
  } = e, i = null != (t = null == (n = I(r)) ? true : n.mounting_started_at) ? t : new Date().getTime();
  return S(r, {
    renderer_started_after: new Date().getTime() - i
  }), true
}

function j(e) {
  let {
    pid: t
  } = e;
  return A(t), true
}

function M(e) {
  let {
    lastAssociatedPID: t
  } = e;
  if (t !== l.UNSET_PID) return T(t), R(), true
}

function k(e) {
  var t, n;
  let {
    pid: r
  } = e, i = null != (t = null == (n = I(r)) ? true : n.mounting_started_at) ? t : new Date().getTime();
  return S(r, {
    total_mount_time_ms: null != i ? new Date().getTime() - i : true,
    success: true
  }), v(r), true
}
class U extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(d.default, p.A, s.Ay)
  }
  getData(e) {
    return I(e)
  }
  getCrashExtra(e, t) {
    return w(e, t)
  }
}
m(U, "displayName", "Overlay-v3-Native-Analytics-Store");
let G = new U(Chunk73153.h, __OVERLAY__ || !Chunk672396.OX ? {} : {
  OVERLAY_V3_PRE_CREATE_POPOUT: D,
  OVERLAY_V3_POST_CREATE_POPOUT: x,
  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: L,
  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: M,
  OVERLAY_SUCCESSFULLY_SHOWN: k,
  OVERLAY_CRASHED: P,
  OVERLAY_V3_NATIVE_TRACK_GAME: j
})