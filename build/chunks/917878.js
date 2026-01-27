/** Chunk was on web.js **/
/** chunk id: 917878, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  A: () => s,
  a: () => i
}), require("./134528.js"), require("./947204.js"), require("./896048.js");
let i = "NativeAppStartup";

function a(e, t, n, r, i) {
  return "".concat(e, ":").concat(t, ":").concat(n, ":").concat(r, ":").concat(i)
}
class o {
  recordChannelFetchStart(e, t, n, r, i) {
    this.channelsFetchStarted.add(e), this.fetchLogs.set(a(e, t, null != n ? n : null, null != r ? r : null, i), {
      channelId: e,
      before: null != n ? n : null,
      after: null != r ? r : null,
      limit: i,
      startTime: Date.now()
    })
  }
  recordChannelFetchedLocal(e, t, n, r, i, o) {
    var s;
    this.channelsFetchedWithLocalMessages.add(e);
    let l = this.fetchLogs.get(a(e, t, null != n ? n : null, null != r ? r : null, i));
    null != l && (l.localMessageDetails = {
      loadTime: Date.now(),
      count: o.length,
      lastMessageId: null == (s = o.at(false)) ? true : s.id
    })
  }
  recordChannelFetchedNetwork(e, t, n, r, i, o) {
    var s;
    this.channelsFetchedNetwork.add(e);
    let l = this.fetchLogs.get(a(e, t, null != n ? n : null, null != r ? r : null, i));
    null != l && (l.networkMessageDetails = {
      loadTime: Date.now(),
      count: o.length,
      lastMessageId: null == (s = o.at(false)) ? true : s.id
    })
  }
  constructor() {
    r(this, "channelsFetchStarted", new Set), r(this, "channelsFetchedWithLocalMessages", new Set), r(this, "channelsFetchedNetwork", new Set), r(this, "fetchLogs", new Map)
  }
}
let s = new o