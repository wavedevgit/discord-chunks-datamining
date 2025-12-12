/** Chunk was on web.js **/
/** chunk id: 262777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => g
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk581883 = require("./581883.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk294509 = require("./294509.js"),
  Chunk629710 = require("./629710.js"),
  Chunk721360 = require("./721360.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  let n = (0, u.AT)(),
    f = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
    _ = (0, i.e7)([a.Z, s.Z], () => (0, u.hi)(e, t, [a.Z, s.Z])),
    h = (0, i.e7)([o.Z], () => n.reduce((e, t) => m(p({}, e), {
      [t.harmType]: t.getProtoUserSettings(o.Z.settings)
    }), {}), [n], d.l),
    g = r.useMemo(() => null == _ || t === (null == f ? true : f.id) || null == f ? [] : n.map(e => {
      let t = h[e.harmType],
        n = null == _ ? null : e.getUserSettingsWithDefaults(t)[_];
      return (0, u.aQ)(n) ? e.harmType : null
    }).filter(e => null != e), [_, n, h, t, f]);
  return 0 === g.length ? c.qn.NONE : (0, u.Hz)(g)
}

function g(e) {
  let {
    channelId: t,
    authorId: n
  } = null == e ? {} : (0, u.px)(e);
  return h(t, n)
}