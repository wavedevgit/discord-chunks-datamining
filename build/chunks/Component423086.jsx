/** Chunk was on web.js **/
/** chunk id: 423086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk388032 = require("./388032.jsx");

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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = "useReportAppItemModal";

function E(e) {
  var {
    applicationId: t
  } = e, n = h(e, ["applicationId"]);
  return null == t ? null : (0, r.jsx)(a.sNh, {
    id: "report-app",
    color: n.color,
    label: u.intl.string(u.t.NgA5vp),
    action: () => b(t, n)
  })
}

function b(e, t) {
  let n = () => {
    var e;
    (0, a.Mr3)(g), null == (e = t.onSubmit) || e.call(t)
  };
  (0, a.ZDy)(async () => {
    await l.ZP.fetchApplication(e);
    let d = c.Z.getApplication(e);
    return e => (0, r.jsx)(i.u_l, _(f({
      title: u.intl.string(u.t.Bd10bR),
      actions: []
    }, e), {
      children: (0, r.jsxs)(a.Kqy, {
        children: [(0, r.jsx)(s.JZ, {
          variant: "clickable",
          title: u.intl.string(u.t.eyEkG1),
          description: u.intl.string(u.t.ptItsj),
          onButtonPress: () => (0, o.pX)(t.user, t.guildId, n, t.appContext)
        }), (0, r.jsx)(s.JZ, {
          variant: "clickable",
          title: u.intl.string(u.t.atP0yX),
          description: u.intl.string(u.t.UGg603),
          onButtonPress: () => {
            var e;
            (0, o.uu)({
              application: d,
              entrypoint: null != (e = t.entrypoint) ? e : "user_profile",
              contextualGuildId: t.guildId,
              contextualChannelId: t.channelId,
              onSubmit: n,
              appContext: t.appContext
            })
          }
        })]
      })
    }))
  }, {
    modalKey: g
  })
}