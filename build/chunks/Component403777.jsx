/** Chunk was on web.js **/
/** chunk id: 403777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  n: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk958805 = require("./958805.js"),
  Chunk61881 = require("./61881.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = new Set;

function g(e, t) {
  return "USER_PROFILE_MODAL_KEY:".concat(e, ":").concat(null == t ? "" : t)
}
async function E(e) {
  var t;
  let {
    userId: a,
    tabSection: s,
    scrollTarget: f,
    guildId: h,
    channelId: E,
    showGuildProfile: b = true,
    appContext: y,
    customStatusPrompt: O,
    disableActionsForPreview: A = false
  } = e, v = _(e, ["userId", "tabSection", "scrollTarget", "guildId", "channelId", "showGuildProfile", "appContext", "customStatusPrompt", "disableActionsForPreview"]), S = l.default.getUser(a);
  if (null == S) return;
  let I = l.default.getCurrentUser();
  if (null == I) return;
  let T = g(a, b ? h : true);
  m.add(await (0, i.mMO)(async () => {
    let e = (await Promise.all([n.e("10614"), n.e("42944"), n.e("10117"), n.e("13696"), n.e("38663"), n.e("64228")]).then(n.bind(n, 293071))).default;
    return t => (0, r.jsx)(e, p({
      user: S,
      currentUser: I,
      guildId: h,
      initialTabSection: s,
      initialScrollTarget: f,
      channelId: E,
      showGuildProfile: b,
      customStatusPrompt: O,
      disableActionsForPreview: A
    }, t, v))
  }, {
    modalKey: T,
    contextKey: (0, i.TId)(null != (t = null != y ? y : (0, o.zd)()) ? t : d.BRT.APP),
    onCloseRequest: () => {
      u.A.hasUnsavedChanges() ? c.A.notifyUnsavedWidgets() : ((0, i.OoC)(T), m.delete(T), c.A.clearPendingWidgets())
    }
  }))
}

function b() {
  if (0 !== m.size) {
    for (let e of m)(0, i.OoC)(e);
    m.clear(), c.A.clearPendingWidgets()
  }
}
class y extends Chunk272355.A {
  _initialize() {
    a.h.subscribe("USER_PROFILE_MODAL_OPEN", E), a.h.subscribe("USER_PROFILE_MODAL_CLOSE", b)
  }
  _terminate() {
    a.h.unsubscribe("USER_PROFILE_MODAL_OPEN", E), a.h.unsubscribe("USER_PROFILE_MODAL_CLOSE", b)
  }
}
let O = new y