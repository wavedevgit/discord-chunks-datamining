/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(381499),
  i = n(601992),
  o = n(675478),
  a = n(885110),
  s = n(626135),
  l = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function p(e, t, n, c) {
  null == t && (t = a.Z.getStatus()), await o.hW.updateAsync("status", t => {
    t.status = r.Gm.create({
      value: e
    }), t.statusExpiresAtMs = null != c ? "".concat(Date.now() + c) : "0"
  }, o.fy.INFREQUENT_USER_ACTION);
  let d = u({
    next_status: e,
    prev_status: t
  }, i.Z.getGlobalStats());
  null != n && (d = f(u({}, d, n), {
    expire_duration_minutes: null != c ? c / 1e3 : null
  })), s.default.track(l.rMx.USER_STATUS_UPDATED, d)
}