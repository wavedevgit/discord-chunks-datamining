/** Chunk was on web.js **/
/** chunk id: 761538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903893 = require("./903893.js");

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

function c(e) {
  let {
    message: t
  } = e, s = () => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("14021").then(n.bind(n, 910673));
      return n => (0, r.jsx)(e, l({
        channelId: t.channel_id,
        messageId: t.id
      }, n))
    })
  };
  return (0, r.jsxs)(i.P3F, {
    onClick: s,
    className: a.accessory,
    children: [(0, r.jsx)(i.d3s, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      className: a.accessoryText,
      children: o.intl.string(o.t["2aXnfa"])
    })]
  })
}