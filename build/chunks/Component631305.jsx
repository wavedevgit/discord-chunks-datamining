/** Chunk was on web.js **/
/** chunk id: 631305, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk869146 = require("./869146.js"),
  Chunk709055 = require("./709055.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function p(e, t) {
  let c = null != t ? t : "".concat(l.JJy.PREMIUM_GUILD_UPSELL_MODAL);
  null != e.targetBoostedGuildTier && (c += " - Tier ".concat(e.targetBoostedGuildTier));
  let f = () => {
    o.default.track(l.HAw.MODAL_DISMISSED, {
      type: c,
      location: e.analyticsSourceLocation
    })
  };
  o.default.track(l.HAw.OPEN_MODAL, {
    type: c,
    location: e.analyticsSourceLocation
  });
  let {
    openInPopoutEnabled: p
  } = e, _ = d(e, ["openInPopoutEnabled"]), h = a.A.getWindowOpen(l.MLl.CHANNEL_CALL_POPOUT) && null != p && p;
  h && (0, s.A)(l.MLl.CHANNEL_CALL_POPOUT);
  let m = h ? i.KX8 : i.SYi;
  (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("45210").then(n.bind(n, 553998));
    return t => (0, r.jsx)(e, u({}, _, t))
  }, {
    onCloseCallback: f,
    contextKey: m
  })
}