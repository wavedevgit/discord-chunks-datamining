/** Chunk was on web.js **/
/** chunk id: 73473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => g
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk323889 = require("./323889.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk531685 = require("./531685.js"),
  Chunk266569 = require("./266569.jsx"),
  Chunk971649 = require("./971649.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require("./23766.js");
let h = e => {
    let [t, n] = r.useState(false), a = null != e ? e : t, o = a !== (0, s.A)(a);
    return {
      visible: a,
      visibleChanged: o,
      reference: (0, i.K)(e => n(e), .5)
    }
  },
  m = () => {
    let e = (0, o.bG)([l.A], () => l.A.isFocused()),
      t = (0, s.A)(e),
      n = e !== t;
    return {
      focused: e,
      focusedChanged: n
    }
  },
  g = Chunk64700.memo(function(e) {
    let {
      focused: t,
      focusedChanged: n
    } = m(), {
      visible: i,
      visibleChanged: o,
      reference: s
    } = h(e.overrideVisibility), {
      key: l,
      adContentIds: d
    } = (0, u.RC)(e), p = _(f({}, e), {
      focused: t,
      focusedChanged: n,
      visible: i,
      visibleChanged: o,
      reference: s
    });
    return "questOrQuests" in e ? (0, r.createElement)(c.xs, _(f({}, p), {
      key: l,
      adContentIds: d,
      adCreativeType: a.p.QUEST
    })) : (0, r.createElement)(c.xs, _(f({}, p), {
      key: l,
      adContentIds: d,
      adCreativeType: e.adCreativeType
    }))
  })