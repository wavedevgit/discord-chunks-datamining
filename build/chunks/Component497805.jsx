/** Chunk was on web.js **/
/** chunk id: 497805, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v,
  z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = null;

function E(e, t) {
  return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t)
}
async function b(e) {
  var t, {
      userId: a,
      section: o,
      subsection: u,
      guildId: _,
      channelId: m,
      showGuildProfile: b = true,
      appContext: O,
      customStatusPrompt: v,
      disableActionsForPreview: I = false
    } = e,
    T = h(e, ["userId", "section", "subsection", "guildId", "channelId", "showGuildProfile", "appContext", "customStatusPrompt", "disableActionsForPreview"]);
  let S = l.default.getUser(a);
  if (null == S) return;
  let A = l.default.getCurrentUser();
  null != A && (g = await (0, i.ZDy)(async () => {
    let e = (await Promise.all([n.e("1268"), n.e("27069"), n.e("62880"), n.e("16811")]).then(n.bind(n, 866035))).default;
    return t => (0, r.jsx)(e, p({
      user: S,
      currentUser: A,
      guildId: _,
      initialSection: o,
      initialSubsection: u,
      channelId: m,
      showGuildProfile: b,
      customStatusPrompt: v,
      disableActionsForPreview: I
    }, t, T))
  }, {
    modalKey: E(a, b ? _ : true),
    contextKey: (0, i.VnL)(null != (t = null != O ? O : (0, s.GB)()) ? t : f.IlC.APP),
    onCloseRequest: () => {
      if (d.Z.hasSaveablePendingChanges()) {
        c.S.dispatch(f.CkL.SHAKE_PROFILE_MODAL), c.S.dispatch(f.CkL.EMPHASIZE_NOTICE);
        return
      }
      y()
    }
  }))
}

function y() {
  null != g && ((0, Chunk481060.Mr3)(g), Chunk592183.Z.clearPendingWidgets()), g = null
}
class O extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("USER_PROFILE_MODAL_OPEN", b), Chunk570140.Z.subscribe("USER_PROFILE_MODAL_CLOSE", y)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("USER_PROFILE_MODAL_OPEN", b), Chunk570140.Z.unsubscribe("USER_PROFILE_MODAL_CLOSE", y)
  }
}
let v = new O