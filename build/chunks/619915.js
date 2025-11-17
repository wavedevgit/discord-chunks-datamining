/** Chunk was on web.js **/
/** chunk id: 619915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QN: () => m,
  ZP: () => h,
  gb: () => g,
  uF: () => E
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  return g((0, i.Wu)([c.ZP], () => null != e && null != e.id && "" !== e.id ? c.ZP.getEmbeddedActivitiesForChannel(e.id) : c.i6), t)
}

function m(e) {
  let t = g((0, i.e7)([c.ZP], () => null != e ? c.ZP.getEmbeddedActivitiesForGuild(e) : c.i6));
  return r.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var n;
      let r = (0, u.p)(t.embeddedActivity.location);
      if (null == r) return;
      let i = null != (n = e.get(r)) ? n : [];
      i.push(t), e.set(r, i)
    }), e
  }, [t])
}

function g(e, t) {
  let n = e.map(e => e.applicationId),
    o = (0, a.Z)(n),
    c = new Set([]);
  for (let t of e)
    for (let e of t.userIds) c.add(e);
  let u = (0, i.Wu)([s.default], () => {
    let e = [];
    for (let t of c) e.push(s.default.getUser(t));
    return e
  }, [c]);
  return r.useMemo(() => {
    let n = new Map;
    return u.forEach(e => {
      null != e && n.set(e.id, e)
    }), e.map((e, r) => {
      let i = o[r],
        a = [];
      if (null != a)
        for (let r of e.userIds) {
          let e = n.get(r);
          if (null != e && null != t) {
            let n = t(e);
            null != n && a.push(n)
          }
        }
      return null == i ? null : {
        embeddedActivity: e,
        application: i,
        userParticipantAvatarUrls: a
      }
    }).filter(l.lm)
  }, [e, o, u, t])
}

function E(e) {
  return (0, i.e7)([o.Z], () => {
    let t = new Map;
    return e.forEach(e => {
      var n;
      let r = o.Z.findActivity(null == e ? true : e.embeddedActivity.userIds.values().next().value, t => {
        var n;
        return t.application_id === (null == e || null == (n = e.application) ? true : n.id)
      });
      t.set(null == e || null == (n = e.application) ? true : n.id, p(f({}, e), {
        presenceActivity: r
      }))
    }), t
  }, [e], i.pF)
}