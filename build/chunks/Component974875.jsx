/** Chunk was on web.js **/
/** chunk id: 974875, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk579872 = require("./579872.jsx"),
  Chunk104217 = require("./104217.js"),
  Chunk390248 = require("./390248.js"),
  Chunk900819 = require("./900819.js"),
  Chunk985018 = require("./985018.jsx");

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
  if ((0, o.hv)({
      action: o.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: t,
      channelId: e
    }), !l.A.canSubmitFpReport(t)) {
    a.A.show({
      title: c.intl.string(c.t["iS/eFN"]),
      body: c.intl.string(c.t.YrjcgR),
      confirmText: c.intl.string(c.t.BddRzS)
    }), s.A.disableFalsePositiveButton(e, t);
    return
  }(0, i.mMO)(async () => {
    let {
      default: i
    } = await n(287002);
    return n => (0, r.jsx)(i, d({
      channelId: e,
      messageId: t
    }, n))
  })
}