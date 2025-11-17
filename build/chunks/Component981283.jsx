/** Chunk was on web.js **/
/** chunk id: 981283, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk19780 = require("./19780.js"),
  Chunk20528 = require("./20528.js"),
  Chunk960861 = require("./960861.js"),
  Chunk803647 = require("./803647.js");

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
class _ extends Chunk20528.Z {
  _initialize() {
    super._initialize(), Chunk960861.ZP.initializeIfNeeded()
  }
  platformShowStreamFull() {
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("63757").then(require.bind(require, 309690));
      return t => (0, r.jsx)(e, f({}, t))
    })
  }
  platformHandleStreamStart() {}
  platformHandleVoiceStateUpdate(e) {
    let {
      userId: t,
      sessionId: n
    } = e;
    if (t !== o.default.getId() || n !== o.default.getSessionId()) return;
    let r = a.Z.getAllActiveStreams(),
      i = s.Z.getChannelId();
    r.forEach(e => {
      e.channelId !== i && (0, u.Z)(e, false)
    })
  }
}
let p = new _