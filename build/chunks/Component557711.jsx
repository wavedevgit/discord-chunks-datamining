/** Chunk was on web.js **/
/** chunk id: 557711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk5192 = require("./5192.js"),
  Chunk829820 = require("./829820.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  var {
    activity: t,
    user: n,
    channelId: s,
    guildId: u,
    source: d,
    size: f = "sm",
    variant: _ = "secondary",
    onAction: p
  } = e, h = c(e, ["activity", "user", "channelId", "guildId", "source", "size", "variant", "onAction"]);
  let {
    tooltip: m,
    loading: g,
    disabled: E,
    onClick: b
  } = (0, o.Fe)(t, n, d, a.ZP.getNickname(u, s, n)), y = () => {
    null == p || p(), b()
  };
  return (0, r.jsx)(i.ua7, {
    text: m,
    children: e => {
      let {
        onMouseEnter: n,
        onMouseLeave: a
      } = e;
      return (0, r.jsx)(i.hU, l({
        icon: i.iOO,
        size: f,
        variant: _,
        onClick: y,
        onMouseEnter: n,
        onMouseLeave: a,
        disabled: E,
        loading: g,
        "aria-label": null != m ? m : t.name
      }, h))
    }
  })
}