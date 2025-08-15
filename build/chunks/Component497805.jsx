/** Chunk was on web.js **/
/** chunk id: 497805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O,
  z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk224724 = require("./224724.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = null;

function g(e, t) {
  return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t)
}
async function E(e) {
  var t, {
      userId: a,
      section: o,
      subsection: f,
      guildId: h,
      channelId: E,
      showGuildProfile: y = true,
      appContext: O,
      customStatusPrompt: v,
      disableActionsForPreview: I = false
    } = e,
    T = p(e, ["userId", "section", "subsection", "guildId", "channelId", "showGuildProfile", "appContext", "customStatusPrompt", "disableActionsForPreview"]);
  let S = l.default.getUser(a);
  if (null == S) return;
  let A = l.default.getCurrentUser();
  null != A && (m = await (0, i.ZDy)(async () => {
    let e = (await Promise.all([n.e("79312"), n.e("1268"), n.e("82412"), n.e("62880"), n.e("12756")]).then(n.bind(n, 866035))).default;
    return t => (0, r.jsx)(e, _({
      user: S,
      currentUser: A,
      guildId: h,
      initialSection: o,
      initialSubsection: f,
      channelId: E,
      showGuildProfile: y,
      customStatusPrompt: v,
      disableActionsForPreview: I
    }, t, T))
  }, {
    modalKey: g(a, y ? h : true),
    contextKey: (0, i.VnL)(null != (t = null != O ? O : (0, s.GB)()) ? t : d.IlC.APP),
    onCloseRequest: () => {
      if (u.Z.hasPendingChanges()) {
        c.S.dispatch(d.CkL.SHAKE_PROFILE_MODAL), c.S.dispatch(d.CkL.EMPHASIZE_NOTICE);
        return
      }
      b()
    }
  }))
}

function b() {
  null != m && (0, Chunk481060.Mr3)(m), m = null
}
class y extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("USER_PROFILE_MODAL_OPEN", E), Chunk570140.Z.subscribe("USER_PROFILE_MODAL_CLOSE", b)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", E), Chunk570140.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", b)
  }
}
let O = new y