/** Chunk was on web.js **/
/** chunk id: 808506, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.r(exports), require.d(exports, {
  OverlayPIDStatus: () => V,
  default: () => e$,
  getOverlayURL: () => ev
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
  Chunk41534 = require("./41534.js"),
  Chunk454991 = require("./454991.js"),
  Chunk837268 = require("./837268.js"),
  Chunk633565 = require("./633565.js"),
  Chunk371651 = require("./371651.js"),
  Chunk829907 = require("./829907.js"),
  Chunk610394 = require("./610394.js"),
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

function G(e, t, n) {
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
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var V = function(e) {
  return e.ATTACHING = "ATTACHING", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.READY = "READY", e.CRASHED = "CRASHED", e.CONNECT_FAILED = "CONNECT_FAILED", e.HOOK_FAILED = "HOOK_FAILED", e.DISCONNECTING = "DISCONNECTING", e
}({});
let H = {},
  Y = false,
  W = new Map,
  K = () => Array.from(W.values()).some(e => "READY" === e),
  z = false,
  q = false,
  X = false,
  Q = null,
  J = new Set,
  $ = "",
  ee = new Set;
class et {
  reset() {
    this.actionsToFlush.clear(), this.waitingActionsToFlush.clear(), this.isDispatching = false, this.timeout = null, null != this.timeout && clearTimeout(this.timeout), this.requestIdleCallback = null, null != this.requestIdleCallback && cancelIdleCallback(this.requestIdleCallback)
  }
  enqueueWaitingActions() {
    let e = new Set([...this.waitingActionsToFlush]);
    for (let t of (this.waitingActionsToFlush.clear(), module)) this.queueDispatch(exports)
  }
  constructor() {
    G(this, "isDispatching", false), G(this, "timeout", true), G(this, "requestIdleCallback", true), G(this, "actionsToFlush", new Set), G(this, "waitingActionsToFlush", new Set), G(this, "flush", () => {
      if (null != this.timeout && (clearTimeout(this.timeout), this.timeout = null), null != this.requestIdleCallback && (cancelIdleCallback(this.requestIdleCallback), this.requestIdleCallback = null), !K()) return void this.actionsToFlush.clear();
      this.actionsToFlush.size > 0 && (Chunk490029.lW({
        type: Chunk981631.BmY.DISPATCH,
        pid: null,
        token: null,
        payloads: Array.from(this.actionsToFlush)
      }), this.actionsToFlush.clear()), this.waitingActionsToFlush.size > 0 && this.enqueueWaitingActions()
    }), G(this, "dispatchPayloads", e => {
      this.isDispatching = true, e.forEach(e => l.Z.dispatch(e)), this.isDispatching = false
    }), G(this, "queueDispatch", e => !(!K() || er.has(e.type)) && (this.isDispatching ? this.waitingActionsToFlush.add(e) : ("USER_SETTINGS_PROTO_UPDATE" === e.type && (e = F(B({}, e), {
      settings: {
        type: e.settings.type,
        proto: (0, C.cv)(e.settings.type, e.settings.proto)
      }
    })), this.actionsToFlush.add(e), null == this.timeout && null == this.requestIdleCallback && (this.timeout = setTimeout(() => {
      this.requestIdleCallback = requestIdleCallback(this.flush, {
        timeout: 100
      })
    }, 100))), false))
  }
}
let en = new et,
  er = new Set(["CONNECTION_OPEN", "CONNECTION_RESUMED", "CONNECTION_CLOSED", "WINDOW_INIT", "WINDOW_FULLSCREEN_CHANGE", "WINDOW_FOCUS", "WINDOW_RESIZED", "WINDOW_HIDDEN", "CHANNEL_SELECT", "DELAYED_CHANNEL_SELECT", "DELAYED_SELECT_FLUSH", "LOAD_MESSAGES_SUCCESS", "LOAD_MESSAGES_FAILURE", "LOAD_MESSAGES", "MESSAGE_START_EDIT", "MESSAGE_UPDATE_EDIT", "MESSAGE_END_EDIT", "APP_VIEW_SET_HOME_LINK", "APPLICATION_STORE_LOCATION_CHANGE", "LOGIN", "LOGIN_SUCCESS", "LOGIN_FAILURE", "LOGIN_MFA_STEP", "LOGIN_MFA", "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION", "LOGIN_ACCOUNT_DISABLED", "LOGIN_RESET", "FINGERPRINT", "REGISTER", "REGISTER_SUCCESS", "START_SESSION", "FORGOT_PASSWORD_SENT", "UPDATE_TOKEN", "SET_CONSENT_REQUIRED", "PASSWORDLESS_START", "PASSWORDLESS_FAILURE", "CONTEXT_MENU_OPEN", "CONTEXT_MENU_CLOSE", "MODAL_PUSH", "MODAL_POP", "MODAL_UPDATE", "MODAL_POP_ALL", "GUILD_SETTINGS_OPEN", "USER_SETTINGS_MODAL_OPEN", "NOTIFICATION_SETTINGS_MODAL_OPEN", "EMAIL_VERIFICATION_MODAL_OPEN", "QUICKSWITCHER_SHOW", "IFE_EXPERIMENT_SEARCH_MODAL_OPEN", "SHOW_KEYBOARD_SHORTCUTS", "DM_SETTINGS_UPSELL_SHOW", "USER_PROFILE_MODAL_OPEN", "INTERACTION_MODAL_CREATE", "INTERACTION_IFRAME_MODAL_CREATE", "GUILD_SETTINGS_CLOSE", "USER_SETTINGS_MODAL_CLOSE", "CHANNEL_SETTINGS_CLOSE", "NOTIFICATION_SETTINGS_MODAL_CLOSE", "EMAIL_VERIFICATION_MODAL_CLOSE", "QUICKSWITCHER_HIDE", "IFE_EXPERIMENT_SEARCH_MODAL_CLOSE", "HIDE_KEYBOARD_SHORTCUTS", "USER_PROFILE_MODAL_CLOSE", "QUICKSWITCHER_SHOW", "QUICKSWITCHER_HIDE", "QUICKSWITCHER_SWITCH_TO", "QUICKSWITCHER_SEARCH", "QUICKSWITCHER_SELECT", "UPDATE_CHANNEL_DIMENSIONS", "UPDATE_CHANNEL_LIST_DIMENSIONS", "UPDATE_GUILD_LIST_DIMENSIONS", "TRACK", "CHANNEL_SETTINGS_INIT", "CHANNEL_SETTINGS_CLOSE", "GUILD_SETTINGS_INIT", "GUILD_SETTINGS_OPEN", "GUILD_SETTINGS_CLOSE", "TUTORIAL_INDICATOR_SHOW", "TUTORIAL_INDICATOR_HIDE", "TUTORIAL_INDICATOR_SUPPRESS_ALL", "USER_SETTINGS_ACCOUNT_INIT", "USER_SETTINGS_ACCOUNT_CLOSE", "NOTICE_SHOW", "NOTICE_DISMISS", "NOTICE_DISABLE", "SEARCH_EDITOR_STATE_CHANGE", "SEARCH_EDITOR_STATE_CLEAR", "SEARCH_MESSAGES_SUCCESS", "MOD_VIEW_SEARCH_MESSAGES_SUCCESS", "SEARCH_ENSURE_SEARCH_STATE", "SEARCH_AUTOCOMPLETE_QUERY_UPDATE", "SEARCH_HISTORY_WEB_CLEAR_ITEMS", "SEARCH_SET_SHOW_BLOCKED_RESULTS", "LAYOUT_CREATE", "POPOUT_WINDOW_OPEN", "POPOUT_WINDOW_CLOSE", "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", "TYPING_START_LOCAL", "TYPING_STOP_LOCAL", "SPOTIFY_SET_ACTIVE_DEVICE", "LOAD_INVITE_SUGGESTIONS", "INVITE_SUGGESTIONS_SEARCH", "IMPERSONATE_UPDATE", "IMPERSONATE_STOP", "CREATE_PENDING_REPLY", "CREATE_SHALLOW_PENDING_REPLY", "DELETE_PENDING_REPLY", "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", "APPLICATION_COMMAND_INDEX_FETCH_REQUEST", "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS", "APPLICATION_COMMAND_INDEX_FETCH_FAILURE", "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", "APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST", "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE", "APPLICATION_COMMAND_SET_ACTIVE_COMMAND", "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", "APPLICATION_COMMAND_UPDATE_OPTIONS", "APPLICATION_COMMAND_UPDATE_CHANNEL_STATE", "APPLICATION_COMMAND_USED", "DCF_HANDLE_DC_SHOWN", "DCF_HANDLE_DC_DISMISSED", "MEDIA_ENGINE_CONNECTION_STATS", "RTC_CONNECTION_UPDATE_ID", "ACTIVE_AV_ERRORS_CHANGED", "BURST_REACTION_ANIMATION_ADD", "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS"]),
  ei = new Set,
  ea = false,
  eo = new Chunk710845.Z("OverlayBridgeStore"),
  es = {};

function el(e) {
  var t;
  return null != (t = es[e]) ? t : {}
}

function ec(e, t) {
  var n, r;
  let i = null == (n = es[e]) ? true : n.error,
    a = null == (r = es[e]) ? true : r.error_description;
  es[e] = B({}, es[e], t), null != i && (es[e].error = i), null != a && (es[e].error_description = a)
}

function eu(e) {
  var t, n;
  if (null != es[e]) return;
  let r = b.ZP.getGameOrTransformedSubgameForPID(e);
  es[e] = {
    overlay_method: v.gl[v.gl.Hook],
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
let ed = "none",
  ef = (0, Chunk807864.H)({
    onContention: (e, t) => eo.verbose("overlayLock contention: lastMutexCall ".concat(ed)),
    onContentionResolved: () => eo.verbose("overlayLock contention: resolved."),
    onTimeout: (e, t) => {
      let n = "overlayLock: lastMutexCall ".concat(ed, "}");
      eo.error(n);
      let r = el((0, M.getPID)());
      ec((0, M.getPID)(), F(B({}, r), {
        error_description: n,
        success: false
      })), w.default.track(k.rMx.OVERLAY_HOOK_RESULT, el((0, M.getPID)()))
    },
    timeoutMs: 18e4
  });

function e_(e, t) {
  return function() {
    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
    ef(() => t(...r), e)
  }
}

function ep() {
  try {
    var e;
    let t = null === Chunk579806.Z || true === Chunk579806.Z || null == (e = Chunk579806.Z.fileManager) ? true : module.uploadDiscordHookCrashes;
    if (null == exports) return;
    exports().then(e => {
      if (Array.isArray(e) && 0 !== e.length)
        for (let l of (eo.log("transitionOverlayPIDStatus: Uploaded minidumps", e), e)) {
          var t, n, r, i, a, o, s;
          if (null == l) continue;
          let e = null != l.processName ? R.Z.getGameByExecutable(l.processName) : null;
          w.default.track(k.rMx.OVERLAY_HOOK_CRASHED, {
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
    eo.error("tryUploadDiscordHookCrashes", module), (0, Chunk41534.D1)(module)
  }
}

function eh(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    r = W.get(e);
  (null === n || r === n) && r !== t && (null == t ? W.delete(e) : W.set(e, t), (null == t || "CRASHED" === t) && (f.Z.setFocusedPID(null), ep()), ee.delete(e), eo.info("pid=".concat(e, " status transition ").concat(null != r ? r : "DISCONNECTED", " -> ").concat(null != t ? t : "DISCONNECTED"), W))
}
async function em(e) {
  try {
    if (x.ZP.supportsFeature(k.eRX.CREATE_HOST_ON_ATTACH))
      if (W.size > 0) {
        ed = "reconcile.getOverlayURL";
        let t = await ev();
        ed = "reconcile.createHostProcess", e.createHostProcess(t, eS, eT)
      } else ed = "reconcile.destroyHostProcess", e.destroyHostProcess(), eO((0, M.getPID)());
    else if (z) {
      let t = await ev();
      e.createHostProcess(t, eS, eT)
    } else e.destroyHostProcess(), eO((0, M.getPID)())
  } catch (t) {
    eo.error("reconcileHostProcess", t), (0, y.D1)(t), eO((0, M.getPID)());
    try {
      e.destroyHostProcess()
    } catch (e) {
      eo.error("reconcileHostProcess: destroyHostProcess", e), (0, y.D1)(e)
    }
  }
}
async function eg(e) {
  var t;
  ef.isMutexHeld() || eo.error("_attachPIDMustBeLocked: overlayMutex is not held.", e);
  let n = null != (t = el(e).mounting_started_at) ? t : new Date().getTime();
  ec(e, {
    mounting_started_at: n
  });
  let r = W.get(e);
  if (null != r) return void eo.warn("Trying to attach to pid=".concat(e, ", that is already in status: ").concat(r));
  await f.Z.updateOverlayState(e, v.mM.WAITING_FOR_OVERLAY_OPEN), ed = "attach.getOverlayModule";
  let i = await (0, j.K)();
  if (null == i) return void eo.error("Trying to attach to pid=".concat(e, ", but overlay module failed loaded"));
  ed = "attach.transitionOverlayPIDStatus", eh(e, "ATTACHING"), ed = "attach.attachToProcess";
  let a = await h.YT(e);
  null == a ? (ed = "attach.transitionOverlayPIDStatus (CONNECTING)", eh(e, "CONNECTING", "ATTACHING"), ed = "attach.reconcileHostProcess", await em(i), i.connectProcess(e)) : (ed = "attach.transitionOverlayPIDStatus (HOOK_FAILED)", eh(e, "HOOK_FAILED", "ATTACHING"), eo.warn("Could not hook to pid=".concat(e, ", error=").concat(a)))
}
async function eE(e) {
  if (ef.isMutexHeld() || eo.error("_detachPIDMustBeLocked: overlayMutex is not held.", e), !W.has(e)) return void eo.warn("Trying to detach from pid ".concat(e, ", which is in an unknown state"));
  eh(e, "DISCONNECTING");
  try {
    ed = "detach.getOverlayModule";
    let t = await (0, j.K)();
    if (null == t) return void eo.error("Trying to detach from pid=".concat(e, ", but overlay module failed loaded"));
    e !== M.DEV_PID && (ed = "detach.cancelAttachToProcess", await h.pn(e), await (0, s._v)(16), ed = "detach.disconnectProcess", await t.disconnectProcess(e)), ed = "detach.transitionOverlayPIDStatus", eh(e, null), ed = "detach.reconcileHostProcess", await em(t)
  } catch (t) {
    (0, y.D1)(t, v.gl.Hook), eo.error("Error during overlay detachment for pid ".concat(e, ":"), t), eh(e, null)
  }
}
async function eb(e) {
  var t, n;
  if (eo.verbose("updateIntendedOverlayPIDs", {
      isConnectionOpened: X,
      action: e
    }), ef.isMutexHeld() || eo.error("updateIntendedOverlayPIDs: overlayMutex is not held.", e), !X && null != e) return void eo.verbose("updateIntendedOverlayPIDs: Connection is not opened while updating applications.", e);
  async function r(e) {
    if (!(e in H)) return;
    let t = H[e];
    delete H[e];
    try {
      await t.deconstructor(), J.delete(e)
    } catch (n) {
      (0, y.D1)(n, v.gl.Hook), eo.error("Failed to deconstruct tracked game ".concat(e), n), H[e] = t, J.add(e)
    }
  }
  let i = false;
  if (null == e || !z) {
    for (let t of (eo.verbose("updateIntendedOverlayPIDs: Removing all.", H, e), Object.keys(H))) await r(Number(t)), i = true;
    return
  }
  for (let n of J) {
    if (null == (t = e.added) ? true : t.includes(n)) {
      eo.warn("updateIntendedOverlayPIDs: Failed PID was re-added?");
      continue
    }
    eo.verbose("updateIntendedOverlayPIDs: retrying failed overlay pid ".concat(n)), await r(n), i = true
  }
  for (let t of null != (n = e.added) ? n : []) {
    let n = T.default.getTrackedGameByPid(t);
    if (null == n) {
      eo.error("updateIntendedOverlayPIDs: Tracked game not found for pid=".concat(t));
      continue
    }
    if (eo.verbose("updateIntendedOverlayPIDs: newGame", n), n.legacyEnabled) switch (n.pid in H ? eo.error("Unexpected. ".concat(n.pid, " is being added twice?"), H, e) : eu(n.pid), n.overlayMethod) {
      case v.gl.Hook:
        let r = new Date().getTime();
        ec(n.pid, {
          mounting_started_at: r,
          fullscreen_type: await (0, S.hj)(n.pid, 0)
        }), W.has(n.pid) || await eg(n.pid), H[n.pid] = {
          method: n.overlayMethod,
          deconstructor: async () => {
            await eE(n.pid)
          }
        }, i = true;
        break;
      case v.gl.OutOfProcess:
      case v.gl.OutOfProcessLimitedInteraction:
        eo.error("updateIntendedOverlayPIDs: out of process called for hook overlay", n);
        break;
      case v.gl.Disabled:
        eo.verbose("updateIntendedOverlayPIDs: disabled", n);
        break;
      default:
        eo.error("updateIntendedOverlayPIDs: Unknown overlay method: ".concat(n.overlayMethod), n)
    }
  }
  for (let t of e.removed) eo.verbose("updateIntendedOverlayPIDs: removedGame", t), await r(t), i = true;
  i && eJ.emitChange()
}
let ey = e_("updateIntendedOverlayPIDs", e => (eo.info("updateIntendedOverlayPIDs", e), eb(e))),
  eO = e_("clearPID", e => {
    if (null == e) return (0, M.setPID)(M.UNSET_PID);
    A.ZP.isOverlayV3EnabledForPID(e) || (0, M.setPID)(M.UNSET_PID)
  });

function ev() {
  return new Promise(e => {
    eJ.addConditionalChangeListener(() => {
      if (null != r) return e(r), false
    })
  })
}
let eI = e_("setOverlayEnabled", async e => {
  if (!(0, M.supportsLegacy)()) return;
  if (z === e) return void eo.verbose("setOverlayEnabled: no change", {
    newOverlayEnabled: e
  });
  z = e, eJ.emitChange();
  let t = await (0, j.K)();
  if (null == t) return void eo.error("setOverlayEnabled: overlay module failed loaded");
  z || await eb(true), W.size > 0 && await em(t)
});

function eT(e) {
  f.Z.setFocusedPID(0 === e ? null : e)
}

function eS(e, t, n) {
  var r;
  let i = null == (r = b.ZP.getGameForPID(e)) ? true : r.name,
    a = R.Z.getGameByName(i),
    o = B({
      game_name: i,
      game_id: null == a ? null : a.id,
      success: t,
      overlay_method: v.gl[v.gl.Hook]
    }, n);
  ec(e, B({}, o)), (0, d.te)(M.OVERLAY_LAYOUT_ID, P.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), U.bv, {
    width: n.graphics_width,
    height: n.graphics_height
  }), f.Z.updateOverlayState(e, v.mM.OVERLAY_RENDERING);
  let s = el(e);
  w.default.track(k.rMx.OVERLAY_HOOK_RESULT, s), eo.info("Overlay connection to ".concat(e, " ").concat(t ? "succeeded" : "failed"), s), t ? eh(e, "CONNECTED", "CONNECTING") : eh(e, "CONNECT_FAILED", "CONNECTING")
}

function eA() {
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

function eC(e) {
  return null != e && (0, D.y)(e, $)
}

function eN(e) {
  switch (ea && eo.info("[app data received]", e), e.type) {
    case k.BmY.CONNECT:
      let t = N.default.getToken();
      if (null == t) break;
      (0, d.te)(M.OVERLAY_LAYOUT_ID, P.Z.getDefaultLayout(M.OVERLAY_LAYOUT_ID), U.bv), Promise.all([(0, I.Z)(t, e.pid), o.ZP.PersistedStore.getAllStates()]).then(t => {
        let [n, r] = t, {
          pid: i,
          token: a
        } = e;
        m.lW({
          type: k.BmY.STORAGE_SYNC,
          pid: i,
          token: a,
          states: r
        }), m.lW({
          type: k.BmY.DISPATCH,
          pid: i,
          token: a,
          payloads: [n]
        }), eh(i, "READY"), (0, M.setPID)(i), f.Z.overlayReady(i);
        let o = el(i);
        ec(i, F(B({}, o), {
          total_mount_time_ms: null != o.mounting_started_at ? new Date().getTime() - o.mounting_started_at : true
        }))
      });
      break;
    case k.BmY.DISPATCH:
      null != e.payloads && en.dispatchPayloads(e.payloads);
      break;
    case k.BmY.LOG_MESSAGES:
      eo.info("[overlay data received]", e.payload)
  }
}
async function eR(e, t) {
  let n = await (0, j.K)();
  if (null == n) return void eo.error("setInputLocked: overlay module failed loaded");
  let r = null != t ? t : Q;
  if (null != r && "DISCONNECTING" === W.get(r)) return void eo.warn("Overlay module is no longer valid during input lock");
  try {
    null != r && r !== M.DEV_PID && n.sendCommand(r, {
      message: "intercept_input",
      intercept: !e
    })
  } catch (e) {
    (0, y.D1)(e, v.gl.Hook), eo.error("Error during input lock", e)
  }
}

function eP(e, t) {
  e ? setTimeout(() => eR(e, t), 200) : eR(e, t)
}
let ew = null;

function eD(e) {
  let {
    locked: t,
    pid: n
  } = e, r = W.get(n);
  if ((J.has(n) && ey(true), null != r && null != H[n]) && (t || "READY" === r || "CRASHED" === r)) {
    if (t ? ee.delete(n) : ee.add(n), ei.clear(), null != ew && (clearTimeout(ew), ew = null, t)) return;
    t ? eP(t, n) : ew = setTimeout(() => {
      eP(t, n), ew = null
    }, 100)
  }
}

function eL(e) {
  let {
    region: t
  } = e;
  ei.add(t), eP(false, Q)
}

function ex() {
  ei.clear(), eP(true, Q)
}

function eM(e) {
  let {
    port: t
  } = e;
  $ = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(8))));
  let n = new URLSearchParams;
  n.append("build_id", "231c1e71a9b0cd701f712cf633bed845ebcb6aca"), n.append("rpc", String(t)), n.append("rpc_auth_token", $), r = "".concat(location.protocol, "//").concat(location.host, "/overlay?").concat(n.toString())
}

function ej(e) {
  let {
    channelId: t,
    ring: n
  } = e;
  setImmediate(() => {
    _.default.selectPrivateChannel(t), c.Z.call(t, false, !!n)
  })
}

function ek(e) {
  let {
    pid: t
  } = e;
  Q = t
}

function eU(e) {
  var t;
  let {
    pid: n,
    error: r
  } = e;
  if (null == H[n]) return;
  let i = r instanceof Error ? r : Error(null != r ? r : "Unknown error");
  eh(n, "CRASHED"), ec(n, {
    renderer_crash_count: (null != (t = el(n).renderer_crash_count) ? t : 0) + 1,
    error: r instanceof Error ? r.message : r,
    error_description: r instanceof Error ? r.stack : true
  }), eo.verbose("OverlayBridgeStore: handleOverlayCrashed: ".concat(n)), (0, y.V6)(i, v.gl.Hook)
}

function eG() {
  X = true, Y = false, ez()
}

function eB() {
  X = false, Chunk13245.Z.setFocusedPID(null), ey(true), eo.verbose("OverlayBridgeStore: handleConnectionClosed")
}

function eZ() {
  returntrue
}

function eF(e) {
  let {
    legacyEnabled: t
  } = e;
  return eI(t), false
}

function eV(e) {
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
    }), null != Q && f.Z.setInputLocked(true, Q)
  })
}

function eH(e) {
  let {
    normalizedMouseX: t,
    normalizedMouseY: n
  } = e;
  setTimeout(() => {
    let e = Math.ceil(t * window.innerWidth),
      r = Math.ceil(n * window.innerHeight),
      i = (0, L.B)("click", e, r);
    (0, L.J)(i, e, r)
  }, 50)
}

function eY(e) {
  return ey({
    added: [],
    removed: []
  }), true
}

function eW(e) {
  return ey({
    added: [],
    removed: []
  }), true
}

function eK(e) {
  eo.verbose("Updating OverlayMethod", {
    pid: e.pid,
    overlayMethod: e.overlayMethod,
    overlayLabel: (0, S.P_)(e.overlayMethod)
  }), e.overlayMethod === v.gl.Hook ? ey({
    added: [e.pid],
    removed: []
  }) : ey({
    added: [],
    removed: [e.pid]
  })
}

function ez() {
  Chunk353926.Z.hasLoadedExperiments && !Y && (Y = true, eI(Chunk454991.v.legacyEnabled))
}

function eq() {
  Y = false
}

function eX() {
  Y = false
}
class eQ extends(i = Chunk442837.ZP.Store) {
  initialize() {
    !(0, Chunk145597.supportsLegacy)() || __OVERLAY__ || (this.waitFor(Chunk594190.ZP, Chunk353926.Z, Chunk314897.default, Chunk610394.ZP, Chunk371651.default), this.syncWith([Chunk353926.Z], ez), Chunk490029.sr(eN, eC), Chunk314897.default.addChangeListener(eA), Chunk570140.Z.addInterceptor(en.queueDispatch))
  }
  isFocusedPidInputLocked() {
    let e = this.getFocusedPID();
    return null != module && this.isInputLocked(module)
  }
  isInputLocked(e) {
    return T.default.isOverlayOOPEnabledForPid(e) ? A.ZP.isInputLocked(e) : !ee.has(e)
  }
  DEV_isInputLockedV3(e) {
    return A.ZP.isInputLocked(e)
  }
  DEV_isInputLocked(e) {
    return !ee.has(e)
  }
  isSupported() {
    return (0, Chunk145597.supportsLegacy)() || false
  }
  get enabled() {
    return Chunk610394.ZP.isOverlayV3Enabled() ? Chunk610394.ZP.enabled : z
  }
  get legacyEnabled() {
    return !Chunk610394.ZP.isOverlayV3Enabled() && q
  }
  getAnyGlobalEnabledOverlay() {
    return Chunk371651.default.getAnyGlobalEnabledOverlay()
  }
  getFocusedPID() {
    let e = Chunk610394.ZP.getFocusedPID();
    return null != module && Chunk610394.ZP.isOverlayV3EnabledForPID(module) ? module : Q
  }
  isFocusedPidOutOfProcess() {
    let e = this.getFocusedPID();
    return null != module && Chunk371651.default.isOverlayOOPEnabledForPid(module)
  }
  isCurrentPidOutOfProcess() {
    return Chunk371651.default.isOverlayOOPEnabledForPid((0, Chunk145597.getPID)())
  }
  isReady(e) {
    return A.ZP.isOverlayV3EnabledForPID(e) ? A.ZP.isReady(e) : "READY" === W.get(e)
  }
  isCrashed(e) {
    return !A.ZP.isOverlayV3EnabledForPID(e) && "CRASHED" === W.get(e)
  }
  getOverlayPIDStatuses() {
    return W
  }
}
G(eQ, "displayName", "OverlayBridgeStore");
let eJ = new eQ(Chunk570140.Z, __OVERLAY__ ? {
    OVERLAY_RELAY_CLICK_ZONE_CLICKED: eH
  } : {
    LOGIN: eq,
    LOGOUT: eX,
    CONNECTION_OPEN: eG,
    CONNECTION_CLOSED: eB,
    EXPERIMENT_OVERRIDE_BUCKET: eZ,
    RUNNING_GAME_TOGGLE_OVERLAY: eW,
    RUNNING_GAMES_CHANGE: eY,
    OVERLAY_SET_ENABLED: eF,
    OVERLAY_FOCUSED: ek,
    OVERLAY_SET_INPUT_LOCKED: eD,
    OVERLAY_ACTIVATE_REGION: eL,
    OVERLAY_DEACTIVATE_ALL_REGIONS: ex,
    RPC_SERVER_READY: eM,
    OVERLAY_CALL_PRIVATE_CHANNEL: ej,
    OVERLAY_JOIN_GAME: eV,
    OVERLAY_CRASHED: eU,
    OVERLAY_UPDATE_OVERLAY_METHOD: eK
  }),
  e$ = eJ