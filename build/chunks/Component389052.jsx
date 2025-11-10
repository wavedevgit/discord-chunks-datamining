/** Chunk was on web.js **/
/** chunk id: 389052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk681678 = require("./681678.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    user: t,
    guildId: f,
    channelId: p,
    onBlock: m,
    onIgnore: g,
    onUnblock: E,
    location: b = "ContextMenu",
    appContext: y = u.IlC.APP
  } = e, {
    id: O
  } = t, v = (0, i.e7)([c.default], () => {
    var e;
    return (null == (e = c.default.getCurrentUser()) ? true : e.id) === O
  }, [O]), I = (0, i.e7)([l.Z], () => l.Z.isBlocked(O), [O]), S = I ? "default" : "danger";
  return v ? null : (0, r.jsx)(a.sNh, {
    id: "block",
    color: null != S ? S : "default",
    label: I ? d.intl.string(d.t.XyHpKH) : d.intl.string(d.t.l4Emac),
    action: I ? () => {
      null == E || E(), o.Z.unblockUser(O, {
        location: b
      }), s.Z.showUnblockSuccessToast(O, null != p ? p : true)
    } : () => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("97652"), n.e("13093")]).then(n.bind(n, 478923));
        return n => (0, r.jsx)(e, h(_({}, n), {
          user: t,
          guildId: f,
          channelId: p,
          onBlock: m,
          onIgnore: g,
          location: b
        }))
      }, {
        contextKey: (0, a.VnL)(y)
      })
    }
  })
}