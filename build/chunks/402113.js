/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(513202),
  a = n(82965),
  s = n(871499),
  l = n(388032);

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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  var {
    location: t,
    applicationId: n,
    centerButton: c = !1
  } = e, d = _(e, ["location", "applicationId", "centerButton"]);
  let p = (0, a.Z)({
      location: "LeaveActivityButton"
    }),
    h = c ? s.d : s.Z,
    g = () => {
      o.Z.leaveActivity({
        location: t,
        applicationId: n,
        showFeedback: !0
      })
    };
  return (0, r.jsx)(h, f(u({}, d), {
    fullRegionButton: p,
    onClick: g,
    iconComponent: i.PBZ,
    label: l.NW.string(l.t["R/FK4O"])
  }))
}