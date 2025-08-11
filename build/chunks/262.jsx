/** Chunk was on web.js **/
/** chunk id: 262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857395 = require("./857395.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    children: t,
    messageReference: n,
    guildName: s
  } = e, l = i.useRef(null);
  if (null == n) return <o.eee>{t}</o.eee>;
  let {
    guild_id: c
  } = n;
  return null == c ? <o.eee>{t}</o.eee> : <a.Z guildId={c} name={s} targetElementRef={l}>{e => {
      let {
        "aria-controls": n,
        "aria-expanded": i
      } = e, a = p(e, ["aria-controls", "aria-expanded"]);
      return (0, r.jsx)(o.eee, _(d({}, a), {
        ref: l,
        children: t
      }))
    }}</a.Z>
}

function g(e) {
  let {
    usernameHook: t,
    message: i,
    compact: o
  } = e, {
    content: a,
    timestamp: u,
    messageReference: d
  } = i, f = (0, s.ZP)(i), _ = t(f), p = (null != a ? a : "").split(" ").slice(0, false).join(" "), h = c.intl.format(c.t["47CZc3"], {
    username: f.nick,
    usernameHook: _,
    webhookName: a,
    webhookNameHook: (e, t) => <m messageReference={d} guildName={p}>{e}</m>
  });
  return <l.Z icon={n(570111)} timestamp={u} compact={o}>{h}</l.Z>
}