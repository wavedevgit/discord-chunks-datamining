/** Chunk was on web.js **/
/** chunk id: 915872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383501 = require("./383501.js"),
  Chunk310323 = require("./310323.js"),
  Chunk571044 = require("./571044.js"),
  Chunk338771 = require("./338771.js");

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
class p extends Chunk310323.A {
  _initialize() {
    super._initialize(), c.Ay.initializeIfNeeded()
  }
  platformShowStreamFull() {
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("25894").then(n.bind(n, 389170));
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
    let r = a.A.getAllActiveStreams(),
      i = s.A.getChannelId();
    r.forEach(e => {
      e.channelId !== i && (0, u.A)(e, false)
    })
  }
}
let _ = new p