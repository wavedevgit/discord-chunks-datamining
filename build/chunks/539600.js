/** Chunk was on web.js **/
/** chunk id: 539600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  If: () => h,
  an: () => g,
  gp: () => _,
  qt: () => f,
  wD: () => p
}), require("./388685.js"), require("./997841.js"), require("./953529.js");
var Chunk149765 = require("./149765.js"),
  Chunk866442 = require("./866442.js"),
  Chunk311929 = require("./311929.js"),
  Chunk606318 = require("./606318.js"),
  Chunk345162 = require("./345162.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  let n = {};
  for (let r of t) n[r.id] = p(e, r);
  return n
}

function p(e, t) {
  var n, o, s, l, c;
  return _({
    id: t.id,
    name: t.name,
    guildId: e,
    permissions: r.vB(t.permissions),
    mentionable: t.mentionable,
    position: t.position,
    color: t.color,
    colorString: 0 !== t.color ? (0, i.Rf)(t.color) : null,
    colors: null != (n = t.colors) ? n : null,
    colorStrings: null != t.colors ? (0, a.DX)(t.colors) : null,
    hoist: t.hoist,
    managed: null != (o = t.managed) && o,
    tags: null != (s = t.tags) ? s : {},
    icon: t.icon,
    unicodeEmoji: t.unicode_emoji,
    flags: null != (l = t.flags) ? l : 0,
    description: null != (c = t.description) ? c : null,
    version: t.version
  })
}

function _(e) {
  return (0, o.bk)(s.X4, e)
}

function m(e, t) {
  var n, o, s, l, c;
  return _({
    id: t.id,
    name: t.name,
    guildId: e,
    permissions: r.vB(t.permissions),
    mentionable: t.mentionable,
    position: t.position,
    color: t.color,
    colorString: null != t.color && 0 !== t.color ? (0, i.Rf)(t.color) : null,
    colors: null != (n = t.colors) ? n : null,
    colorStrings: null != t.colors ? (0, a.DX)(t.colors) : null,
    hoist: t.hoist,
    managed: null != (o = t.managed) && o,
    tags: null != (s = t.tags) ? s : {},
    icon: t.icon,
    unicodeEmoji: t.unicodeEmoji,
    flags: null != (l = t.flags) ? l : 0,
    description: null != (c = t.description) ? c : null,
    version: t.version
  })
}

function h(e, t) {
  let n = {};
  for (let r in t) n[r] = m(e, t[r]);
  return n
}

function g(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    t[n] = d(c({}, r), {
      permissions: r.permissions.toString()
    })
  }
  return t
}