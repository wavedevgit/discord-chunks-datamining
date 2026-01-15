/** Chunk was on web.js **/
/** chunk id: 136995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk585483 = require("./585483.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  var {
    channel: t,
    centerButton: n = false,
    onCallJoined: p
  } = e, h = g(e, ["channel", "centerButton", "onCallJoined"]);
  let {
    parentAnalyticsLocation: E
  } = (0, s.ZP)(), b = n ? u.d : u.Z, y = t.isManaged() || !t.isPrivate() ? f.intl.string(f.t.S0W8Z5) : f.intl.string(f.t["0D/6Rz"]), O = i.useCallback(() => {
    null == p || p(), (0, l.v)(E, l.d.JOIN_CALL), o.default.selectVoiceChannel(t.id)
  }, [t.id, p, E]);
  return i.useEffect(() => (c.S.subscribe(d.CkL.CALL_ACCEPT, O), () => {
    c.S.unsubscribe(d.CkL.CALL_ACCEPT, O)
  }), [O]), (0, r.jsx)(b, m(_({}, h), {
    iconComponent: a.Csw,
    label: y,
    onClick: O,
    isTrayButton: false
  }))
}