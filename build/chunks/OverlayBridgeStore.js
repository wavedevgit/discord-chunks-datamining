/** Chunk was on web.js **/
/** chunk id: 808506, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  OverlayPIDStatus: () => W,
  default: () => e1,
  getOverlayURL: () => eT
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./358797.js"), require("./415506.js"), require("./49124.js");
var i, Chunk807864 = require("./807864.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26151 = require("./26151.js"),
  Chunk224706 = require("./224706.js"),
  Chunk765250 = require("./765250.js"),
  Chunk13245 = require("./13245.js"),
  Chunk287734 = require("./287734.js"),
  Chunk579806 = require("./579806.js"),
  Chunk887278 = require("./887278.js"),
  Chunk490029 = require("./490029.js"),
  Chunk710845 = require("./710845.js"),
  Chunk353926 = require("./353926.js"),
  Chunk594190 = require("./594190.js"),
  Chunk40766 = require("./40766.js"),
  Chunk41534 = require("./41534.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk633565 = require("./633565.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk610394 = require("./610394.js"),
  Chunk322155 = require("./322155.js"),
  Chunk509140 = require("./509140.js"),
  Chunk48481 = require("./48481.js"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk355863 = require("./355863.js"),
  Chunk626135 = require("./626135.js"),
  Chunk866119 = require("./866119.js"),
  Chunk671999 = require("./671999.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk372679 = require("./372679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk757744 = require("./757744.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
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
var W = function(e) {
  return e.ATTACHING = "ATTACHING", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.READY = "READY", e.CRASHED = "CRASHED", e.CONNECT_FAILED = "CONNECT_FAILED", e.HOOK_FAILED = "HOOK_FAILED", e.DISCONNECTING = "DISCONNECTING", e
}({});
let K = {},
  z = false,
  q = new Map,
  X = () => Array.from(q.values()).some(e => "READY" === e),
  Q = false,
  J = false,
  $ = null,
  ee = new Set,
  et = "",
  en = new Set;
class er {
  reset() {
    this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), this.isDispatching = false, this.timeout = null, null != this.timeout && clearTimeout(this.timeout), this.requestIdleCallback = null, null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback)
  }
  enqueueWaitingActions() {
    let e = new Set([...this.waitingActionsToFlush]);
    for (let t of (this.waitingActionsToFlush.clear(), module)) this.queueDispatch(exports)
  }
  constructor() {
    F(this, "isDispatching", false), F(this, "timeout", true), F(this, "requestIdleCallback", true), F(this, "actionsToFlush", new Set), F(this, "waitingActionsToFlush", new Set), F(this, "flush", () => {
      if (null != this.timeout && (clearTimeout(this.timeout), this.timeout = null), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), this.requestIdleCallback = null), !X()) return void this.actionsToFlush.clear();
      this.actionsToFlush.size > 0 && (Chunk490029.lW({
        type: Chunk981631.BmY.DISPATCH,
        pid: null,
        token: null,
        payloads: Array.from(this.actionsToFlush)
      }), this.actionsToFlush.clear()), this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions()
    }), F(this, "dispatchPayloads", e => {
      this.isDispatching = true, e.forEach(e => l.Z.dispatch(e)), this.isDispatching = false
    }), F(this, "queueDispatch", e => !(!X() || ea.has(e.type)) && (this.isDispatching ? this.waitingActionsToFlush.add(e) : ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = Y(V({}, e), {
      settings: {
        type: e.settings.type,
        proto: (0, P.cv)(e.settings.type, e.settings.proto)
      }
    })), this.actionsToFlush.add(e), null == this.timeout && null == this.requestIdleCallback && (this.timeout = setTimeout(() => {
      this.requestIdleCallback = requestIdleCallback(this.flush, {
        timeout: 100
      })
    }, 100))), false))
  }
}
let ei = new er,
  ea = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "PASSWORDLESS_START", "PASSWORDLESS_FAILURE", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "SHOW_KEYBOARD_SHORTCUTS", "DM_SETTINGS_UPSELL_SHOW", "USER_PROFILE_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "HIDE_KEYBOARD_SHORTCUTS", "USER_PROFILE_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_HISTORY_WEB_CLEAR_ITEMS", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED", "MEDIA_ENGINE_CONNECTION_STATS", "RTC_CONNECTION_UPDATE_ID", "ACTIVE_AV_ERRORS_CHANGED", "BURST_REACTION_ANIMATION_ADD", "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS"]),
  eo = new Set,
  es = false,
  el = new Chunk710845.Z("OverlayBridgeStore"),
  ec = {};

function eu(e) {
  var t;
  return null != (t = ec[e]) ? t : {}
}

function ed(e, t) {
  var n, r;
  let i = null == (n = ec[e]) ? true : n.error,
    a = null == (r = ec[e]) ? true : r.error_description;
  ec[e] = V({}, ec[e], t), null != i && (ec[e].error = i), null != a && (ec[e].error_description = a)
}

function ef(e) {
  var t, n;
  if (null != ec[e]) return;
  let r = b.ZP.getGameOrTransformedSubgameForPID(e);
  ec[e] = {
    overlay_method: I.gl[I.gl.Hook],
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
let e_ = "none",
  ep = (0, Chunk807864.H)({
    onContention: (e, t) => el.verbose("overlayLock contention: lastMutexCall ".concat(e_)),
    onContentionResolved: () => el.verbose("overlayLock contention: resolved."),
    onTimeout: (e, t) => {
      let n = "overlayLock: lastMutexCall ".concat(e_, "}");
      el.error(n);
      let r = eu((0, U.getPID)());
      ed((0, U.getPID)(), Y(V({}, r), {
        error_description: n,
        success: false
      })), x.default.track(B.rMx.OVERLAY_HOOK_RESULT, eu((0, U.getPID)()))
    },
    timeoutMs: 18e4
  });

function eh(e, t) {
  return function() {
    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    ep(() => t(...r), e)
  }
}

function em() {
  try {
    var e;
    let t = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.fileManager) ? true : module.uploadDiscordHookCrashes;
    if (null == exports) return;
    exports().then(e => {
      if (Array.isArray(e) && 0 !== e.length)
        for (let l of (el.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
          var t, n, r, i, a, o, s;
          if (null == l) continue;
          let e = null != l.processName ? w.Z.getGameByExecutable(l.processName) : null;
          x.default.track(B.rMx.OVERLAY_HOOK_CRASHED, {
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
    el.error("tryUploadDiscordHookCrashes", module), (0, Chunk41534.D1)(module)
  }
}

function eg(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    r = q.get(e);
  (null === n || r === n) && r !== t && (null == t ? q.delete(e) : q.set(e, t), (null == t || "CRASHED" === t) && (f.Z.setFocusedPID(null, null), em()), en.delete(e), el.info("pid=".concat(e, " status transition ").concat(null != r ? r : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), q))
}
async function eE(e) {
  try {
    if (j.ZP.supportsFeature(B.eRX.CREATE_HOST_ON_ATTACH))
      if (q.size > 0) {
        e_ = "reconcile.getOverlayURL";
        let t = await eT();
        e_ = "reconcile.createHostProcess", e.createHostProcess(t, eC, eA)
      } else e_ = "reconcile.destroyHostProcess", e.destroyHostProcess(), eI((0, U.getPID)());
    else if (Q) {
      let t = await eT();
      e.createHostProcess(t, eC, eA)
    } else e.destroyHostProcess(), eI((0, U.getPID)())
  } catch (t) {
    el.error("reconcileHostProcess", t), (0, O.D1)(t), eI((0, U.getPID)());
    try {
      e.destroyHostProcess()
    } catch (e) {
      el.error("reconcileHostProcess: destroyHostProcess", e), (0, O.D1)(e)
    }
  }
}
async function eb(e) {
  var t;
  ep.isMutexHeld() || el.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
  let n = null != (t = eu(e).mounting_started_at) ? t : new Date().getTime();
  ed(e, {
    mounting_started_at: n
  });
  let r = q.get(e);
  if (null != r) return void el.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
  await f.Z.updateOverlayState(e, I.mM.WAITING_FOR_OVERLAY_OPEN, "attachPID"), e_ = "attach.getOverlayModule";
  let i = await (0, G.K)();
  if (null == i) return void el.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
  e_ = "attach.transitionOverlayPIDStatus", eg(e, "ATTACHING"), e_ = "attach.attachToProcess";
  let a = await h.YT(e);
  null == a ? (e_ = "attach.transitionOverlayPIDStatus (CONNECTING)", eg(e, "CONNECTING", "ATTACHING"), e_ = "attach.reconcileHostProcess", await eE(i), i.connectProcess(e)) : (e_ = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", eg(e, "HOOK_FAILED", "ATTACHING"), el.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
}
async function ey(e) {
  if (ep.isMutexHeld() || el.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !q.has(e)) return void el.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
  eg(e, "DISCONNECTING");
  try {
    e_ = "detach.getOverlayModule";
    let t = await (0, G.K)();
    if (null == t) return void el.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
    e !== U.DEV_PID && (e_ = "detach.cancelAttachToProcess", await h.pn(e), await (0, s._v)(16), e_ = "detach.disconnectProcess", await t.disconnectProcess(e)), e_ = "detach.transitionOverlayPIDStatus", eg(e, null), e_ = "detach.reconcileHostProcess", await eE(t)
  } catch (t) {
    (0, O.D1)(t, I.gl.Hook), el.error("Error during overlay detachment for pid ".concat(e, ":"), t), eg(e, null)
  }
}
async function eO(e) {
  var t, n;
  if (el.verbose("updateIntendedOverlayPIDs", {
      isConnectionOpened: J,
      action: e
    }), ep.isMutexHeld() || el.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !J && null != e) return void el.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
  async function r(e) {
    if (!(e in K)) return;
    let t = K[e];
    delete K[e];
    try {
      await t.deconstructor(), ee.delete(e)
    } catch (n) {
      (0, O.D1)(n, I.gl.Hook), el.error("Failed to deconstruct tracked game ".concat(e), n), K[e] = t, ee.add(e)
    }
  }
  let i = false;
  if (null == e || !Q) {
    for (let t of (el.verbose("updateIntendedOverlayPIDs: Removing all.", K, e), Object.keys(K))) await r(Number(t)), i = true;
    return
  }
  for (let n of ee) {
    if (null == (t = e.added) ? true : t.includes(n)) {
      el.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
      continue
    }
    el.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(n)), await r(n), i = true
  }
  for (let t of null != (n = e.added) ? n : []) {
    let n = S.default.getTrackedGameByPid(t);
    if (null == n) {
      el.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(t));
      continue
    }
    if (el.verbose("updateIntendedOverlayPIDs: newGame", n), n.legacyEnabled) switch (n.pid in K ? el.error("Unexpected. ".concat(n.pid, " is being added twice?"), K, e) : ef(n.pid), n.overlayMethod) {
      case I.gl.Hook:
        let r = new Date().getTime();
        ed(n.pid, {
          mounting_started_at: r,
          fullscreen_type: await (0, A.hj)(n.pid, 0)
        }), q.has(n.pid) || await eb(n.pid), K[n.pid] = {
          method: n.overlayMethod,
          deconstructor: async () => {
            await ey(n.pid)
          }
        }, i = true;
        break;
      case I.gl.OutOfProcess:
      case I.gl.OutOfProcessLimitedInteraction:
        el.error("updateIntendedOverlayPIDs: out of process called for hook overlay", n);
        break;
      case I.gl.Disabled:
        el.verbose("updateIntendedOverlayPIDs: disabled", n);
        break;
      default:
        el.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod), n)
    }
  }
  for (let t of e.removed) el.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), i = true;
  i && e0.emitChange()
}
let ev = eh("updateIntendedOverlayPIDs", e => (el.info("updateIntendedOverlayPIDs", e), eO(e))),
  eI = eh("clearPID", e => {
    if (null == e) return (0, U.setPID)(U.UNSET_PID);
    C.Z.isOverlayV3EnabledForPID(e) || (0, U.setPID)(U.UNSET_PID)
  });

function eT() {
  return new Promise(e => {
    e0.addConditionalChangeListener(() => {
      if (null != r) return e(r), false
    })
  })
}
let eS = eh("setOverlayEnabled", async e => {
  if (!(0, U.supportsLegacy)()) return;
  if (Q === e) return void el.verbose("setOverlayEnabled: no change", {
    newOverlayEnabled: e
  });
  Q = e, e0.emitChange();
  let t = await (0, G.K)();
  if (null == t) return void el.error("setOverlayEnabled: overlay module failed loaded");
  Q || await eO(true), q.size > 0 && await eE(t)
});

function eA(e) {
  f.Z.setFocusedPID(0 === e ? null : e, null)
}

function eC(e, t, n) {
  var r;
  let i = null == (r = b.ZP.getGameForPID(e)) ? true : r.name,
    a = w.Z.getGameByName(i),
    o = V({
      game_name: i,
      game_id: null == a ? null : a.id,
      success: t,
      overlay_method: I.gl[I.gl.Hook]
    }, n);
  ed(e, V({}, o)), (0, d.te)(U.OVERLAY_LAYOUT_ID, L.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), Z.bv, {
    width: n.graphics_width,
    height: n.graphics_height
  });
  let s = eu(e);
  x.default.track(B.rMx.OVERLAY_HOOK_RESULT, s), el.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s), t ? (f.Z.updateOverlayState(e, I.mM.OVERLAY_RENDERING, "onConnectComplete"), eg(e, "CONNECTED", "CONNECTING")) : (f.Z.updateOverlayState(e, I.mM.OVERLAY_CRASHED, "onConnectComplete"), eg(e, "CONNECT_FAILED", "CONNECTING"))
}

function eN() {
  let e = Chunk314897.default.getToken(),
    t = Chunk314897.default.getId();
  null != module && Chunk490029.lW({
    type: Chunk981631.BmY.DISPATCH,
    pid: null,
    token: null,
    payloads: [{
      type: "UPDATE_TOKEN",
      token: module,
      userId: exports
    }]
  })
}

function eR(e) {
  return null != e && (0, M.y)(e, et)
}

function eP(e) {
  switch (es && el.info("[app data received]", e), e.type) {
    case B.BmY.CONNECT:
      let t = D.default.getToken();
      if (null == t) break;
      (0, d.te)(U.OVERLAY_LAYOUT_ID, L.Z.getDefaultLayout(U.OVERLAY_LAYOUT_ID), Z.bv), Promise.all([(0, T.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then(t => {
        let [n, r] = t, {
          pid: i,
          token: a
        } = e;
        m.lW({
          type: B.BmY.STORAGE_SYNC,
          pid: i,
          token: a,
          states: r
        }), m.lW({
          type: B.BmY.DISPATCH,
          pid: i,
          token: a,
          payloads: [n]
        }), eg(i, "READY"), (0, U.setPID)(i), f.Z.overlayReady(i);
        let o = eu(i);
        ed(i, Y(V({}, o), {
          total_mount_time_ms: null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : true
        }))
      });
      break;
    case B.BmY.DISPATCH:
      null != e.payloads && ei.dispatchPayloads(e.payloads);
      break;
    case B.BmY.LOG_MESSAGES:
      (0, y.K)(e.payload)
  }
}
async function eD(e, t) {
  let n = await (0, G.K)();
  if (null == n) return void el.error("setInputLocked: overlay module failed loaded");
  let r = null != t ? t : $;
  if (null != r && "DISCONNECTING" === q.get(r)) return void el.warn("Overlay module is no longer valid during input lock");
  try {
    null != r && r !== U.DEV_PID && n.sendCommand(r, {
      message: "intercept_input",
      intercept: !e
    })
  } catch (e) {
    (0, O.D1)(e, I.gl.Hook), el.error("Error during input lock", e)
  }
}

function ew(e, t) {
  e ? setTimeout(() => eD(e, t), 200) : eD(e, t)
}
let eL = null;

function ex(e) {
  let {
    locked: t,
    pid: n
  } = e, r = q.get(n);
  if ((ee.has(n) && ev(true), null != r && null != K[n]) && (t || "READY" === r || "CRASHED" === r)) {
    if (t ? en.delete(n) : en.add(n), eo.clear(), null != eL && (clearTimeout(eL), eL = null, t)) return;
    t ? ew(t, n) : eL = setTimeout(() => {
      ew(t, n), eL = null
    }, 100)
  }
}

function eM(e) {
  let {
    region: t
  } = e;
  eo.add(t), ew(false, $)
}

function ek() {
  eo.clear(), ew(true, $)
}

function ej(e) {
  let {
    port: t
  } = e;
  et = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
  let n = new URLSearchParams;
  n.append("build_id", "374b527f366a6c612a092177ca4fb7a8a1cf22b0"), n.append("rpc", String(t)), n.append("rpc_auth_token", et), r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString())
}

function eU(e) {
  let {
    channelId: t,
    ring: n
  } = e;
  setImmediate(() => {
    _.default.selectPrivateChannel(t), c.Z.call(t, false, !!n)
  })
}

function eG(e) {
  let {
    pid: t
  } = e;
  $ = t
}

function eB(e) {
  var t;
  let {
    pid: n,
    error: r
  } = e;
  if (null == K[n]) return;
  let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
  eg(n, "CRASHED"), ed(n, {
    renderer_crash_count: (null != (t = eu(n).renderer_crash_count) ? t : 0) + 1,
    error: r instanceof Error ? r.message : r,
    error_description: r instanceof Error ? r.stack : true
  }), el.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)), (0, O.V6)(i, I.gl.Hook)
}

function eZ() {
  J = true, z = false, eX()
}

function eF() {
  J = false, Chunk13245.Z.setFocusedPID(null, null), ev(true), el.verbose("OverlayBridgeStore: handleConnectionClosed")
}

function eV() {
  returntrue
}

function eH(e) {
  let {
    legacyEnabled: t
  } = e;
  return eS(t), false
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
    u.Z.join({
      userId: t,
      sessionId: n,
      applicationId: r,
      channelId: i,
      messageId: a
    }), null != $ && f.Z.setInputLocked(true, $)
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
      i = (0, k.B)("click", e, r);
    (0, k.J)(i, e, r)
  }, 50)
}

function eK(e) {
  return ev({
    added: [],
    removed: []
  }), true
}

function ez(e) {
  return ev({
    added: [],
    removed: []
  }), true
}

function eq(e) {
  el.verbose("Updating OverlayMethod", {
    pid: e.pid,
    overlayMethod: e.overlayMethod,
    overlayLabel: (0, A.P_)(e.overlayMethod)
  }), e.overlayMethod === I.gl.Hook ? ev({
    added: [e.pid],
    removed: []
  }) : ev({
    added: [],
    removed: [e.pid]
  })
}

function eX() {
  Chunk353926.Z.hasLoadedExperiments && !z && (z = true, eS(Chunk454991.v.legacyEnabled))
}

function eQ() {
  z = false
}

function eJ() {
  z = false
}
class e$ extends(i = Chunk442837.ZP.Store) {
  initialize() {
    !(0, Chunk145597.supportsLegacy)() || __OVERLAY__ || (this.waitFor(Chunk314897.default, Chunk353926.Z, Chunk77498.Z, Chunk355863.Z, Chunk371651.default, Chunk322155.Z, Chunk509140.Z, Chunk610394.Z, Chunk594190.ZP), this.syncWith([Chunk353926.Z], eX), Chunk490029.sr(eP, eR), Chunk314897.default.addChangeListener(eN), Chunk570140.Z.addInterceptor(ei.queueDispatch))
  }
  isFocusedPidInputLocked() {
    let e = this.getFocusedPID();
    return null != module && this.isInputLocked(module)
  }
  isInputLocked(e) {
    return S.default.isOverlayOOPEnabledForPid(e) ? N.Z.isInputLocked(e) : !en.has(e)
  }
  DEV_isInputLockedV3(e) {
    return N.Z.isInputLocked(e)
  }
  DEV_isInputLocked(e) {
    return !en.has(e)
  }
  isSupported() {
    return (0, Chunk145597.supportsLegacy)() || false
  }
  get enabled() {
    let e = Chunk610394.Z.getFocusedPID();
    return null != module ? Chunk610394.Z.isOverlayV3EnabledForPID(module) ? Chunk509140.Z.isOverlayEnabled : Q : Chunk509140.Z.isOverlayEnabled || Q
  }
  getAnyGlobalEnabledOverlay() {
    return Chunk371651.default.getAnyGlobalEnabledOverlay()
  }
  getFocusedPID() {
    let e = Chunk610394.Z.getFocusedPID();
    return null != module && Chunk610394.Z.isOverlayV3EnabledForPID(module) ? module : $
  }
  isFocusedPidOutOfProcess() {
    let e = this.getFocusedPID();
    return null != module && Chunk371651.default.isOverlayOOPEnabledForPid(module)
  }
  isCurrentPidOutOfProcess() {
    return Chunk371651.default.isOverlayOOPEnabledForPid((0, Chunk145597.getPID)())
  }
  isReady(e) {
    return C.Z.isOverlayV3EnabledForPID(e) ? C.Z.isReady(e) : "READY" === q.get(e)
  }
  isCrashed(e) {
    return !C.Z.isOverlayV3EnabledForPID(e) && "CRASHED" === q.get(e)
  }
  getOverlayPIDStatuses() {
    return q
  }
}
F(e$, "displayName", "OverlayBridgeStore");
let e0 = new e$(Chunk570140.Z, __OVERLAY__ ? {
    OVERLAY_RELAY_CLICK_ZONE_CLICKED: eW
  } : {
    LOGIN: eQ,
    LOGOUT: eJ,
    CONNECTION_OPEN: eZ,
    CONNECTION_CLOSED: eF,
    EXPERIMENT_OVERRIDE_BUCKET: eV,
    RUNNING_GAME_TOGGLE_OVERLAY: ez,
    RUNNING_GAMES_CHANGE: eK,
    OVERLAY_SET_ENABLED: eH,
    OVERLAY_FOCUSED: eG,
    OVERLAY_SET_INPUT_LOCKED: ex,
    OVERLAY_ACTIVATE_REGION: eM,
    OVERLAY_DEACTIVATE_ALL_REGIONS: ek,
    RPC_SERVER_READY: ej,
    OVERLAY_CALL_PRIVATE_CHANNEL: eU,
    OVERLAY_JOIN_GAME: eY,
    OVERLAY_CRASHED: eB,
    OVERLAY_UPDATE_OVERLAY_METHOD: eq
  }),
  e1 = e0