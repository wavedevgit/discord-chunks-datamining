/** Chunk was on web.js **/
/** chunk id: 664097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => d
}), require("./642613.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk115130 = require("./115130.js"),
  Chunk701488 = require("./701488.js");

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
let d = () => {
  let {
    isEnabled: e,
    lastUsedObject: t
  } = (0, Chunk442837.cj)([Chunk115130.Z], () => ({
    isEnabled: Chunk115130.Z.getIsEnabled(),
    lastUsedObject: Chunk115130.Z.getLastUsedObject()
  }), []), n = (0, Chunk442837.Wu)([Chunk115130.Z], () => Chunk115130.Z.getDeveloperShelfItems(), []);
  return Chunk473749.useMemo(() => module ? require.map(e => ({
    application: e,
    activity: u(l({}, o.wT, e.embeddedActivityConfig), {
      application_id: e.id
    })
  })).sort((e, n) => {
    let r = t[e.application.id],
      i = t[n.application.id];
    return null == r ? 1 : null == i ? false : i - r
  }) : [], [require, module, exports])
}