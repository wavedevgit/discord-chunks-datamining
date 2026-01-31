/** Chunk was on web.js **/
/** chunk id: 242286, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  OverlayPIDStatus: () => W,
  default: () => e0,
  getOverlayURL: () => eA
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./142703.js"), require("./65821.js"), require("./457529.js");
var i, Chunk927429 = require("./927429.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk73153 = require("./73153.js"),
  Chunk387755 = require("./387755.js"),
  Chunk544420 = require("./544420.js"),
  Chunk391973 = require("./391973.js"),
  Chunk684013 = require("./684013.js"),
  Chunk956793 = require("./956793.js"),
  Chunk77729 = require("./77729.js"),
  Chunk719129 = require("./719129.js"),
  Chunk996308 = require("./996308.js"),
  Chunk626584 = require("./626584.js"),
  Chunk49463 = require("./49463.js"),
  Chunk15285 = require("./15285.js"),
  Chunk159551 = require("./159551.js"),
  Chunk777334 = require("./777334.js"),
  Chunk211753 = require("./211753.js"),
  Chunk41984 = require("./41984.js"),
  Chunk53733 = require("./53733.js"),
  Chunk833551 = require("./833551.js"),
  Chunk515183 = require("./515183.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk680243 = require("./680243.js"),
  Chunk761821 = require("./761821.js"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk555528 = require("./555528.js"),
  Chunk954571 = require("./954571.js"),
  Chunk799112 = require("./799112.js"),
  Chunk456797 = require("./456797.js"),
  Chunk837921 = require("./837921.js"),
  Chunk9302 = require("./9302.js"),
  Chunk899699 = require("./899699.js"),
  Chunk652215 = require("./652215.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./644434.js");
var W = function(e) {
  return e.ATTACHING = "ATTACHING", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.READY = "READY", e.CRASHED = "CRASHED", e.CONNECT_FAILED = "CONNECT_FAILED", e.HOOK_FAILED = "HOOK_FAILED", e.DISCONNECTING = "DISCONNECTING", e
}({});
let K = {},
  z = false,
  q = new Map,
  Z = () => Array.from(q.values()).some(e => "READY" === e),
  Q = false,
  X = false,
  J = null,
  $ = new Set,
  ee = "",
  et = new Set;
class en {
  reset() {
    this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), this.isDispatching = false, this.timeout = null, null != this.timeout && clearTimeout(this.timeout), this.requestIdleCallback = null, null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback)
  }
  enqueueWaitingActions() {
    let e = new Set([...this.waitingActionsToFlush]);
    for (let t of (this.waitingActionsToFlush.clear(), e)) this.queueDispatch(t)
  }
  constructor() {
    V(this, "isDispatching", false), V(this, "timeout", true), V(this, "requestIdleCallback", true), V(this, "actionsToFlush", new Set), V(this, "waitingActionsToFlush", new Set), V(this, "flush", () => {
      (null != this.timeout && (clearTimeout(this.timeout), this.timeout = null), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), this.requestIdleCallback = null), Z()) ? (this.actionsToFlush.size > 0 && (m.tN({
        type: F.kGV.DISPATCH,
        pid: null,
        token: null,
        payloads: Array.from(this.actionsToFlush)
      }), this.actionsToFlush.clear()), this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions()) : this.actionsToFlush.clear()
    }), V(this, "dispatchPayloads", e => {
      this.isDispatching = true, e.forEach(e => l.h.dispatch(e)), this.isDispatching = false
    }), V(this, "queueDispatch", e => !(!Z() || ei.has(e.type)) && (this.isDispatching ? this.waitingActionsToFlush.add(e) : ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = Y(B({}, e), {
      settings: {
        type: e.settings.type,
        proto: (0, R.aw)(e.settings.type, e.settings.proto)
      }
    })), this.actionsToFlush.add(e), null == this.timeout && null == this.requestIdleCallback && (this.timeout = setTimeout(() => {
      this.requestIdleCallback = requestIdleCallback(this.flush, {
        timeout: 100
      })
    }, 100))), false))
  }
}
let er = new en,
  ei = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "PASSWORDLESS_START", "PASSWORDLESS_FAILURE", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "SHOW_KEYBOARD_SHORTCUTS", "DM_SETTINGS_UPSELL_SHOW", "USER_PROFILE_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "HIDE_KEYBOARD_SHORTCUTS", "USER_PROFILE_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_HISTORY_WEB_CLEAR_ITEMS", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED", "MEDIA_ENGINE_CONNECTION_STATS", "RTC_CONNECTION_UPDATE_ID", "ACTIVE_AV_ERRORS_CHANGED", "BURST_REACTION_ANIMATION_ADD", "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS"]),
  ea = new Set,
  eo = false,
  es = new Chunk626584.A("OverlayBridgeStore"),
  el = {};

function ec(e) {
  var t;
  return null != (t = el[e]) ? t : {}
}

function eu(e, t) {
  var n, r;
  let i = null == (n = el[e]) ? true : n.error,
    a = null == (r = el[e]) ? true : r.error_description;
  el[e] = B({}, el[e], t), null != i && (el[e].error = i), null != a && (el[e].error_description = a)
}

function ed(e) {
  var t, n;
  if (null != el[e]) return;
  let r = y.Ay.getGameOrTransformedSubgameForPID(e);
  el[e] = {
    overlay_method: A.Ue[A.Ue.Hook],
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
let ef = "none",
  ep = (0, Chunk927429.n)({
    onContention: (e, t) => es.verbose("overlayLock contention: lastMutexCall ".concat(ef)),
    onContentionResolved: () => es.verbose("overlayLock contention: resolved."),
    onTimeout: (e, t) => {
      let n = "overlayLock: lastMutexCall ".concat(ef, "}");
      es.error(n);
      let r = ec((0, U.getPID)());
      eu((0, U.getPID)(), Y(B({}, r), {
        error_description: n,
        success: false
      })), x.default.track(F.HAw.OVERLAY_HOOK_RESULT, ec((0, U.getPID)()))
    },
    timeoutMs: 18e4
  });

function e_(e, t) {
  return function() {
    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    ep(() => t(...r), e)
  }
}

function eh() {
  try {
    var e;
    let t = null === _.A || true === _.A || null == (e = _.A.fileManager) ? true : e.uploadDiscordHookCrashes;
    if (null == t) return;
    t().then(e => {
      if (Array.isArray(e) && 0 !== e.length)
        for (let l of (es.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
          var t, n, r, i, a, o, s;
          if (null == l) continue;
          let e = null != l.processName ? D.A.getGameByExecutable(l.processName) : null;
          x.default.track(F.HAw.OVERLAY_HOOK_CRASHED, {
            process_name: null == l ? true : l.processName,
            game_name: null != (t = null == e ? true : e.name) ? t : null,
            game_id: null != (n = null == e ? true : e.id) ? n : null,
            minidump_exception_type: null != (r = l.exceptionString) ? r : null,
            minidump_exception_module_name: null != (i = l.exceptionModuleName) ? i : null,
            minidump_relative_crash_address: null != (a = l.relativeCrashAddress) ? a : null,
            minidump_exception_module_version: null != (o = l.exceptionModuleVersion) ? o : null,
            minidump_exception_module_code_id: null != (s = l.exceptionModuleCodeId) ? s : null
          })
        }
    })
  } catch (e) {
    es.error("tryUploadDiscordHookCrashes", e), (0, O.pj)(e)
  }
}

function em(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    r = q.get(e);
  (null === n || r === n) && r !== t && (null == t ? q.delete(e) : q.set(e, t), (null == t || "CRASHED" === t) && (f.A.setFocusedPID(null, null), eh()), et.delete(e), es.info("pid=".concat(e, " status transition ").concat(null != r ? r : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), q))
}
async function eg(e) {
  try {
    if (k.Ay.supportsFeature(F.BYE.CREATE_HOST_ON_ATTACH))
      if (q.size > 0) {
        ef = "reconcile.getOverlayURL";
        let t = await eA();
        ef = "reconcile.createHostProcess", e.createHostProcess(t, eT, eS)
      } else ef = "reconcile.destroyHostProcess", e.destroyHostProcess(), ev((0, U.getPID)());
    else if (Q) {
      let t = await eA();
      e.createHostProcess(t, eT, eS)
    } else e.destroyHostProcess(), ev((0, U.getPID)())
  } catch (t) {
    es.error("reconcileHostProcess", t), (0, O.pj)(t), ev((0, U.getPID)());
    try {
      e.destroyHostProcess()
    } catch (e) {
      es.error("reconcileHostProcess: destroyHostProcess", e), (0, O.pj)(e)
    }
  }
}
async function eE(e) {
  var t;
  ep.isMutexHeld() || es.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
  let n = null != (t = ec(e).mounting_started_at) ? t : new Date().getTime();
  eu(e, {
    mounting_started_at: n
  });
  let r = q.get(e);
  if (null != r) return void es.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
  await f.A.updateOverlayState(e, A.AR.WAITING_FOR_OVERLAY_OPEN, "attachPID"), ef = "attach.getOverlayModule";
  let i = await (0, G.R)();
  if (null == i) return void es.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
  ef = "attach.transitionOverlayPIDStatus", em(e, "ATTACHING"), ef = "attach.attachToProcess";
  let a = await h.GH(e);
  null == a ? (ef = "attach.transitionOverlayPIDStatus (CONNECTING)", em(e, "CONNECTING", "ATTACHING"), ef = "attach.reconcileHostProcess", await eg(i), i.connectProcess(e)) : (ef = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", em(e, "HOOK_FAILED", "ATTACHING"), es.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
}
async function ey(e) {
  if (ep.isMutexHeld() || es.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !q.has(e)) return void es.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
  em(e, "DISCONNECTING");
  try {
    ef = "detach.getOverlayModule";
    let t = await (0, G.R)();
    if (null == t) return void es.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
    e !== U.DEV_PID && (ef = "detach.cancelAttachToProcess", await h.c1(e), await (0, s.yy)(16), ef = "detach.disconnectProcess", await t.disconnectProcess(e)), ef = "detach.transitionOverlayPIDStatus", em(e, null), ef = "detach.reconcileHostProcess", await eg(t)
  } catch (t) {
    (0, O.pj)(t, A.Ue.Hook), es.error("Error during overlay detachment for pid ".concat(e, ":"), t), em(e, null)
  }
}
async function eb(e) {
  var t, n;
  if (es.verbose("updateIntendedOverlayPIDs", {
      isConnectionOpened: X,
      action: e
    }), ep.isMutexHeld() || es.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !X && null != e) return void es.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
  async function r(e) {
    if (!(e in K)) return;
    let t = K[e];
    delete K[e];
    try {
      await t.deconstructor(), $.delete(e)
    } catch (n) {
      (0, O.pj)(n, A.Ue.Hook), es.error("Failed to deconstruct tracked game ".concat(e), n), K[e] = t, $.add(e)
    }
  }
  let i = false;
  if (null == e || !Q) {
    for (let t of (es.verbose("updateIntendedOverlayPIDs: Removing all.", K, e), Object.keys(K))) await r(Number(t)), i = true;
    return
  }
  for (let t of $) {
    if (null == (n = e.added) ? true : n.includes(t)) {
      es.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
      continue
    }
    es.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(t)), await r(t), i = true
  }
  for (let n of null != (t = e.added) ? t : []) {
    let t = S.default.getTrackedGameByPid(n);
    if (null == t) {
      es.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(n));
      continue
    }
    if (es.verbose("updateIntendedOverlayPIDs: newGame", t), t.legacyEnabled) switch (t.pid in K ? es.error("Unexpected. ".concat(t.pid, " is being added twice?"), K, e) : ed(t.pid), t.overlayMethod) {
      case A.Ue.Hook:
        let r = new Date().getTime();
        eu(t.pid, {
          mounting_started_at: r,
          fullscreen_type: await (0, T.E1)(t.pid, 0)
        }), q.has(t.pid) || await eE(t.pid), K[t.pid] = {
          method: t.overlayMethod,
          deconstructor: async () => {
            await ey(t.pid)
          }
        }, i = true;
        break;
      case A.Ue.OutOfProcess:
      case A.Ue.OutOfProcessLimitedInteraction:
        es.error("updateIntendedOverlayPIDs: out of process called for hook overlay", t);
        break;
      case A.Ue.Disabled:
        es.verbose("updateIntendedOverlayPIDs: disabled", t);
        break;
      default:
        es.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(t.overlayMethod), t)
    }
  }
  for (let t of e.removed) es.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), i = true;
  i && e$.emitChange()
}
let eO = e_("updateIntendedOverlayPIDs", e => (es.info("updateIntendedOverlayPIDs", e), eb(e))),
  ev = e_("clearPID", e => {
    if (null == e) return (0, U.setPID)(U.UNSET_PID);
    C.A.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID)
  });

function eA() {
  return new Promise(e => {
    e$.addConditionalChangeListener(() => {
      if (null != r) return e(r), false
    })
  })
}
let eI = e_("setOverlayEnabled", async e => {
  if (!(0, U.supportsLegacy)()) return;
  if (Q === e) return void es.verbose("setOverlayEnabled: no change", {
    newOverlayEnabled: e
  });
  Q = e, e$.emitChange();
  let t = await (0, G.R)();
  null == t ? es.error("setOverlayEnabled: overlay module failed loaded") : (Q || await eb(true), q.size > 0 && await eg(t))
});

function eS(e) {
  f.A.setFocusedPID(0 === e ? null : e, null)
}

function eT(e, t, n) {
  var r;
  let i = null == (r = y.Ay.getGameForPID(e)) ? true : r.name,
    a = D.A.getGameByName(i),
    o = B({
      game_name: i,
      game_id: null == a ? null : a.id,
      success: t,
      overlay_method: A.Ue[A.Ue.Hook]
    }, n);
  eu(e, B({}, o)), (0, d.Vz)(U.OVERLAY_LAYOUT_ID, L.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0, {
    width: n.graphics_width,
    height: n.graphics_height
  });
  let s = ec(e);
  x.default.track(F.HAw.OVERLAY_HOOK_RESULT, s), es.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s), t ? (f.A.updateOverlayState(e, A.AR.OVERLAY_RENDERING, "onConnectComplete"), em(e, "CONNECTED", "CONNECTING")) : (f.A.updateOverlayState(e, A.AR.OVERLAY_CRASHED, "onConnectComplete"), em(e, "CONNECT_FAILED", "CONNECTING"))
}

function eC() {
  let e = P.default.getToken(),
    t = P.default.getId();
  null != e && m.tN({
    type: F.kGV.DISPATCH,
    pid: null,
    token: null,
    payloads: [{
      type: "UPDATE_TOKEN",
      token: e,
      userId: t
    }]
  })
}

function eN(e) {
  return null != e && (0, M.j)(e, ee)
}

function ew(e) {
  switch (eo && es.info("[app data received]", e), e.type) {
    case F.kGV.CONNECT:
      let t = P.default.getToken();
      if (null == t) break;
      (0, d.Vz)(U.OVERLAY_LAYOUT_ID, L.A.getDefaultLayout(U.OVERLAY_LAYOUT_ID), 0), Promise.all([(0, I.A)(t, e.pid), o.Ay.PersistedStore.getAllStates()]).then(t => {
        let [n, r] = t, {
          pid: i,
          token: a
        } = e;
        m.tN({
          type: F.kGV.STORAGE_SYNC,
          pid: i,
          token: a,
          states: r
        }), m.tN({
          type: F.kGV.DISPATCH,
          pid: i,
          token: a,
          payloads: [n]
        }), em(i, "READY"), (0, U.setPID)(i), f.A.overlayReady(i);
        let o = ec(i);
        eu(i, Y(B({}, o), {
          total_mount_time_ms: null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : true
        }))
      });
      break;
    case F.kGV.DISPATCH:
      null != e.payloads && er.dispatchPayloads(e.payloads);
      break;
    case F.kGV.LOG_MESSAGES:
      (0, b.F)(e.payload)
  }
}
async function eR(e, t) {
  let n = await (0, G.R)();
  if (null == n) return void es.error("setInputLocked: overlay module failed loaded");
  let r = null != t ? t : J;
  if (null != r && "DISCONNECTING" === q.get(r)) return void es.warn("Overlay module is no longer valid during input lock");
  try {
    null != r && r !== U.DEV_PID && n.sendCommand(r, {
      message: "intercept_input",
      intercept: !e
    })
  } catch (e) {
    (0, O.pj)(e, A.Ue.Hook), es.error("Error during input lock", e)
  }
}

function eP(e, t) {
  e ? setTimeout(() => eR(e, t), 200) : eR(e, t)
}
let eD = null;

function eL(e) {
  let {
    locked: t,
    pid: n
  } = e, r = q.get(n);
  if (($.has(n) && eO(true), null != r && null != K[n]) && (t || "READY" === r || "CRASHED" === r)) {
    if (t ? et.delete(n) : et.add(n), ea.clear(), null != eD && (clearTimeout(eD), eD = null, t)) return;
    t ? eP(t, n) : eD = setTimeout(() => {
      eP(t, n), eD = null
    }, 100)
  }
}

function ex(e) {
  let {
    region: t
  } = e;
  ea.add(t), eP(false, J)
}

function eM() {
  ea.clear(), eP(true, J)
}

function ej(e) {
  let {
    port: t
  } = e;
  ee = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
  let n = new URLSearchParams;
  n.append("build_id", "85d31a5eebf7940ef3f6902ead9407d17e6e38a2"), n.append("rpc", String(t)), n.append("rpc_auth_token", ee), r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString())
}

function ek(e) {
  let {
    channelId: t,
    ring: n
  } = e;
  setImmediate(() => {
    p.default.selectPrivateChannel(t), c.A.call(t, false, !!n)
  })
}

function eU(e) {
  let {
    pid: t
  } = e;
  J = t
}

function eG(e) {
  var t;
  let {
    pid: n,
    error: r
  } = e;
  if (null == K[n]) return;
  let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
  em(n, "CRASHED"), eu(n, {
    renderer_crash_count: (null != (t = ec(n).renderer_crash_count) ? t : 0) + 1,
    error: r instanceof Error ? r.message : r,
    error_description: r instanceof Error ? r.stack : true
  }), es.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)), (0, O.St)(i, A.Ue.Hook)
}

function eF() {
  X = true, z = false, eZ()
}

function eV() {
  X = false, f.A.setFocusedPID(null, null), eO(true), es.verbose("OverlayBridgeStore: handleConnectionClosed")
}

function eB() {
  returntrue
}

function eH(e) {
  let {
    legacyEnabled: t
  } = e;
  return eI(t), false
}

function eY(e) {
  let {
    userId: t,
    sessionId: n,
    applicationId: r,
    channelId: i,
    messageId: a
  } = e;
  setImmediate(() => {
    u.A.join({
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a
    }), null != J && f.A.setInputLocked(true, J)
  })
}

function eW(e) {
  let {
    normalizedMouseX: t,
    normalizedMouseY: n
  } = e;
  setTimeout(() => {
    let e = Math.ceil(t * window.innerWidth),
      r = Math.ceil(n * window.innerHeight),
      i = (0, j._)("click", e, r);
    (0, j.K)(i, e, r)
  }, 50)
}

function eK(e) {
  return eO({
    added: [],
    removed: []
  }), true
}

function ez(e) {
  return eO({
    added: [],
    removed: []
  }), true
}

function eq(e) {
  es.verbose("Updating OverlayMethod", {
    pid: e.pid,
    overlayMethod: e.overlayMethod,
    overlayLabel: (0, T.gK)(e.overlayMethod)
  }), e.overlayMethod === A.Ue.Hook ? eO({
    added: [e.pid],
    removed: []
  }) : eO({
    added: [],
    removed: [e.pid]
  })
}

function eZ() {
  E.A.hasLoadedExperiments && !z && (z = true, eI(v.x.legacyEnabled))
}

function eQ() {
  z = false
}

function eX() {
  z = false
}
class eJ extends(i = Chunk311907.Ay.Store) {
  initialize() {
    !(0, U.supportsLegacy)() || __OVERLAY__ || (this.waitFor(P.default, E.A, D.A, L.A, S.default, N.A, w.A, C.A, y.Ay), this.syncWith([E.A], eZ), m.Le(ew, eN), P.default.addChangeListener(eC), l.h.addInterceptor(er.queueDispatch))
  }
  isFocusedPidInputLocked() {
    let e = this.getFocusedPID();
    return null != e && this.isInputLocked(e)
  }
  isInputLocked(e) {
    return S.default.isOverlayOOPEnabledForPid(e) ? N.A.isInputLocked(e) : !et.has(e)
  }
  DEV_isInputLockedV3(e) {
    return N.A.isInputLocked(e)
  }
  DEV_isInputLocked(e) {
    return !et.has(e)
  }
  isSupported() {
    return (0, U.supportsLegacy)() || false
  }
  get enabled() {
    let e = C.A.getFocusedPID();
    return null != e ? C.A.isOverlayV3EnabledForPID(e) ? w.A.isOverlayEnabled : Q : w.A.isOverlayEnabled || Q
  }
  getAnyGlobalEnabledOverlay() {
    return S.default.getAnyGlobalEnabledOverlay()
  }
  getFocusedPID() {
    let e = C.A.getFocusedPID();
    return null != e && C.A.isOverlayV3EnabledForPID(e) ? e : J
  }
  isFocusedPidOutOfProcess() {
    let e = this.getFocusedPID();
    return null != e && S.default.isOverlayOOPEnabledForPid(e)
  }
  isCurrentPidOutOfProcess() {
    return S.default.isOverlayOOPEnabledForPid((0, U.getPID)())
  }
  isReady(e) {
    return C.A.isOverlayV3EnabledForPID(e) ? C.A.isReady(e) : "READY" === q.get(e)
  }
  isCrashed(e) {
    return !C.A.isOverlayV3EnabledForPID(e) && "CRASHED" === q.get(e)
  }
  getOverlayPIDStatuses() {
    return q
  }
}
V(eJ, "displayName", "OverlayBridgeStore");
let e$ = new eJ(Chunk73153.h, __OVERLAY__ ? {
    OVERLAY_RELAY_CLICK_ZONE_CLICKED: eW
  } : {
    LOGIN: eQ,
    LOGOUT: eX,
    CONNECTION_OPEN: eF,
    CONNECTION_CLOSED: eV,
    EXPERIMENT_OVERRIDE_BUCKET: eB,
    RUNNING_GAME_TOGGLE_OVERLAY: ez,
    RUNNING_GAMES_CHANGE: eK,
    OVERLAY_SET_ENABLED: eH,
    OVERLAY_FOCUSED: eU,
    OVERLAY_SET_INPUT_LOCKED: eL,
    OVERLAY_ACTIVATE_REGION: ex,
    OVERLAY_DEACTIVATE_ALL_REGIONS: eM,
    RPC_SERVER_READY: ej,
    OVERLAY_CALL_PRIVATE_CHANNEL: ek,
    OVERLAY_JOIN_GAME: eY,
    OVERLAY_CRASHED: eG,
    OVERLAY_UPDATE_OVERLAY_METHOD: eq
  }),
  e0 = e$