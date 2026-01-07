/** Chunk was on web.js **/
/** chunk id: 381367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./415506.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594190 = require("./594190.js"),
  Chunk626135 = require("./626135.js"),
  Chunk145597 = require("./145597.js"),
  Chunk338388 = require("./338388.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk509140 = require("./509140.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = {};

function O(e) {
  var t, n;
  return null != (n = null == (t = d.default.getTrackedGameByPid(e)) ? true : t.overlayMethod) ? n : null
}

function v(e) {
  let t = O(e);
  y[e] = b(g({}, y[e]), {
    overlay_method: null != t ? u.gl[t] : u.gl[u.gl.OutOfProcess]
  })
}

function S(e) {
  var t, n;
  if (null != y[e]) return;
  let r = o.ZP.getGameOrTransformedSubgameForPID(e),
    i = O(e);
  y[e] = {
    overlay_method: null != i ? u.gl[i] : u.gl[u.gl.OutOfProcess],
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
  return null != (t = y[e]) ? t : {}
}

function T(e, t) {
  var n, r;
  let i = null == (n = y[e]) ? true : n.error,
    a = null == (r = y[e]) ? true : r.error_description;
  y[e] = g({}, y[e], t), null != i && (y[e].error = i), null != a && (y[e].error_description = a)
}

function C(e) {
  s.default.track(m.rMx.OVERLAY_HOOK_RESULT, I(e))
}

function A(e, t) {
  e !== l.UNSET_PID && T(e, {
    host_crash_count: 1,
    error: t.message,
    error_description: t.stack
  })
}

function N(e, t) {
  e !== l.UNSET_PID && T(e, {
    renderer_crash_count: 1,
    error: t.message,
    error_description: t.stack
  })
}

function P() {
  y = {}
}

function R(e, t) {
  let n = o.ZP.getGameOrTransformedSubgameForPID(e);
  return {
    crash_type: t,
    gameName: null == n ? true : n.name
  }
}

function w(e) {
  let {
    pid: t,
    error: n,
    crashType: r
  } = e, i = n instanceof Error ? n : Error(null != n ? n : "Unknown error");
  return "native" === r ? (A(t, i), (0, c.V6)(i, u.gl.OutOfProcess, {
    extra: R(t, "host")
  })) : (N(t, i), (0, c.V6)(i, u.gl.OutOfProcess, {
    extra: R(t, "renderer")
  })), true
}

function D(e) {
  let {
    createWindowTriggeringPID: t
  } = e;
  return T(t, {
    mounting_started_at: new Date().getTime()
  }), true
}

function x(e) {
  var t, n;
  let {
    createWindowTriggeringPID: r
  } = e, i = null != (n = null == (t = I(r)) ? true : t.mounting_started_at) ? n : new Date().getTime(), a = {
    renderer_started: true,
    fullscreen_type: (0, f.hs)(r),
    graphics_info_after: new Date().getTime() - i
  };
  return T(r, a), true
}

function L(e) {
  var t, n;
  let {
    createWindowTriggeringPID: r
  } = e, i = null != (n = null == (t = I(r)) ? true : t.mounting_started_at) ? n : new Date().getTime();
  return T(r, {
    renderer_started_after: new Date().getTime() - i
  }), true
}

function j(e) {
  let {
    pid: t
  } = e;
  return S(t), true
}

function M(e) {
  let {
    lastAssociatedPID: t
  } = e;
  if (t !== l.UNSET_PID) return C(t), P(), true
}

function k(e) {
  var t, n;
  let {
    pid: r
  } = e, i = null != (n = null == (t = I(r)) ? true : t.mounting_started_at) ? n : new Date().getTime();
  return T(r, {
    total_mount_time_ms: null != i ? new Date().getTime() - i : true,
    success: true
  }), v(r), true
}
class U extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(d.default, p.Z, o.ZP)
  }
  getData(e) {
    return I(e)
  }
  getCrashExtra(e, t) {
    return R(e, t)
  }
}
h(U, "displayName", "Overlay-v3-Native-Analytics-Store");
let G = new U(Chunk570140.Z, __OVERLAY__ || !Chunk987650.iP ? {} : {
  OVERLAY_V3_PRE_CREATE_POPOUT: D,
  OVERLAY_V3_POST_CREATE_POPOUT: x,
  OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: L,
  OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: M,
  OVERLAY_SUCCESSFULLY_SHOWN: k,
  OVERLAY_CRASHED: w,
  OVERLAY_V3_NATIVE_TRACK_GAME: j
})