/** Chunk was on web.js **/
/** chunk id: 73473, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk323889 = require("./323889.js"),
  Chunk311907 = require("./311907.js"),
  Chunk475743 = require("./475743.js"),
  Chunk531685 = require("./531685.js"),
  Chunk906822 = require("./906822.jsx");

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
let _ = e => {
    let [t, n] = r.useState(false), a = null != e ? e : t, s = a !== (0, o.A)(a);
    return {
      visible: a,
      visibleChanged: s,
      reference: (0, i.K)(e => n(e), c.ur)
    }
  },
  h = () => {
    let e = (0, s.bG)([l.A], () => l.A.isFocused()),
      t = (0, o.A)(e),
      n = e !== t;
    return {
      focused: e,
      focusedChanged: n
    }
  },
  m = Chunk64700.memo(function(e) {
    let {
      focused: t,
      focusedChanged: n
    } = h(), {
      visible: i,
      visibleChanged: s,
      reference: o
    } = _(e.overrideVisibility), {
      key: l,
      adContentIds: u
    } = (0, c.RC)(e), f = p(d({}, e), {
      focused: t,
      focusedChanged: n,
      visible: i,
      visibleChanged: s,
      reference: o
    });
    return "questOrQuests" in e ? (0, r.createElement)(c.bK, p(d({}, f), {
      key: l,
      adContentIds: u,
      adCreativeType: a.p.QUEST
    })) : (0, r.createElement)(c.bK, p(d({}, f), {
      key: l,
      adContentIds: u,
      adCreativeType: e.adCreativeType
    }))
  })