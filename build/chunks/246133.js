/** Chunk was on web.js **/
/** chunk id: 246133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk381499 = require("./381499.js"),
  Chunk601992 = require("./601992.js"),
  Chunk675478 = require("./675478.js"),
  Chunk885110 = require("./885110.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

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
async function _(e) {
  let {
    nextStatus: t,
    prevStatus: n,
    analyticsContext: c,
    durationMillis: d
  } = e;
  null == n && (n = a.Z.getStatus()), await o.hW.updateAsync("status", e => {
    e.status = r.Gm.create({
      value: t
    }), e.statusExpiresAtMs = null != d ? "".concat(Date.now() + d) : "0"
  }, o.fy.INFREQUENT_USER_ACTION);
  let _ = u({
    next_status: t,
    prev_status: n
  }, i.Z.getGlobalStats());
  null != d && (_ = f(u({}, _), {
    expire_duration_minutes: null != d ? d / 6e4 : null
  })), null != c && (_ = u({}, _, c)), s.default.track(l.rMx.USER_STATUS_UPDATED, _)
}