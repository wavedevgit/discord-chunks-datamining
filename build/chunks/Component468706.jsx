/** Chunk was on web.js **/
/** chunk id: 468706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk923500 = require("./923500.js"),
  Chunk247206 = require("./247206.js"),
  Chunk774863 = require("./774863.js"),
  Chunk388032 = require("./388032.jsx");

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
  if ((0, s.aP)({
      action: s.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: t,
      channelId: e
    }), !l.Z.canSubmitFpReport(t)) {
    o.Z.show({
      title: c.intl.string(c.t["iS/eFN"]),
      body: c.intl.string(c.t.YrjcgR),
      confirmText: c.intl.string(c.t.BddRzS)
    }), a.Z.disableFalsePositiveButton(e, t);
    return
  }(0, i.ZDy)(async () => {
    let {
      default: i
    } = await n(773276);
    return n => (0, r.jsx)(i, d({
      channelId: e,
      messageId: t
    }, n))
  })
}