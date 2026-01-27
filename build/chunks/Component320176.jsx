/** Chunk was on web.js **/
/** chunk id: 320176, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk790795 = require("./790795.js"),
  Chunk786558 = require("./786558.jsx"),
  Chunk799226 = require("./799226.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
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
let p = {
  Game_Server_Hosting_Main: {},
  c_chara_3: {},
  c_chara_1: {},
  hytale_gameplay: {},
  c_chara_5: {},
  c_chara_4: {},
  c_chara_2: {},
  gameplay_palworld_nozoom: {}
};

function _(e) {
  let {
    artboard: t = "Game_Server_Hosting_Main",
    stateMachine: n
  } = e, s = d(e, ["artboard", "stateMachine"]), {
    status: c,
    buffer: f
  } = (0, o.CE)(i.A), _ = (0, o.m2)(i.A);
  return c === o.BW.Loading ? null : (0, r.jsx)(a.w, l(u(l({}, _ ? {
    key: "override"
  } : {}), {
    buffer: f,
    artboard: t,
    stateMachine: n,
    artboardProperties: p
  }), s))
}
_.riveSrc = Chunk790795.A