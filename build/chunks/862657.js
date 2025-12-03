/** Chunk was on web.js **/
/** chunk id: 862657, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $V: () => w,
  E8: () => v,
  GN: () => h,
  PM: () => S,
  R_: () => N,
  UE: () => O,
  VB: () => T,
  Zp: () => I,
  _x: () => m,
  iQ: () => y,
  jY: () => C,
  qe: () => A,
  uN: () => P,
  vR: () => E,
  ys: () => R,
  zE: () => g,
  zi: () => b
}), require("./388685.js");
var Chunk95015 = require("./95015.js"),
  Chunk706454 = require("./706454.js"),
  Chunk960048 = require("./960048.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 2592e6;

function m(e, t, n) {
  var r;
  let i = Array.isArray(t) ? new Map(t.map(e => [e.id, e])) : t,
    a = Array.isArray(n) ? new Map(n.map(e => [e.id, e])) : n,
    o = i.get(e);
  if (null != o) return o;
  let s = null == (r = a.get(e)) ? true : r.replacementId;
  if (null != s) return i.get(s)
}

function h(e) {
  return Object.keys(l.a_).includes(s.jn[e])
}

function g(e, t) {
  if (!h(t)) returnfalse;
  let n = s.jn[t];
  return (0, r.yE)(e.dismissedQuestContent, l.a_[n])
}

function E(e, t) {
  return e.targetedContent.includes(t)
}

function b(e) {
  return new Date(e.config.expiresAt).valueOf() <= Date.now()
}

function y(e) {
  if (!b(e)) returnfalse;
  let t = Date.now() - _,
    n = new Date(e.config.expiresAt).valueOf();
  return null != e.config.expiresAt && !(n <= t)
}

function O(e) {
  let t = null,
    n = Date.now();
  for (let r of e) {
    let e = new Date(r.config.expiresAt).valueOf();
    !(e <= n) && (null == t || e < t) && (t = e)
  }
  return t
}

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    dateStyle: "short"
  };
  return null == e ? "" : new Date(e).toLocaleDateString(i.default.locale, t)
}

function S(e, t, n) {
  let r = t.get(n);
  if (null == r) return;
  let i = e.get(r.quest.id);
  if (null != i && !b(i)) return i
}

function I(e) {
  return ({
    [s.jn.QUEST_BAR]: s.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [s.jn.QUEST_BAR_V2]: s.Ok.DESKTOP_ACCOUNT_PANEL_AREA,
    [s.jn.QUEST_BAR_MOBILE]: s.Ok.MOBILE_HOME_DOCK_AREA
  })[e]
}

function T(e) {
  let t = I(e);
  return null != t && l.v6.has(t)
}

function A(e, t) {
  var n;
  let {
    quest: r,
    adDecisionData: i
  } = null != (n = o.Z.questToDeliverForPlacement.get(I(t))) ? n : {};
  return null != i && (null == r ? true : r.id) === e ? i : l.Jp
}

function C(e) {
  var t;
  let {
    metadataRaw: n
  } = null != (t = o.Z.questToDeliverForPlacement.get(I(e))) ? t : {};
  return n
}

function N(e) {
  var t;
  let {
    metadataSealed: n
  } = null != (t = o.Z.questToDeliverForPlacement.get(I(e))) ? t : {};
  return n
}

function P(e) {
  var t;
  let {
    adContext: n
  } = null != (t = o.Z.questToDeliverForPlacement.get(I(e))) ? t : {};
  return n
}

function R(e, t) {
  a.Z.captureException(e, p(d({}, t), {
    tags: p(d({}, null == t ? true : t.tags), {
      app_context: "quests"
    })
  }))
}

function w() {
  return window.location.pathname.startsWith(Chunk981631.Z5c.QUEST_HOME)
}