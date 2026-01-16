/** Chunk was on web.js **/
/** chunk id: 748147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => i
}), require("./388685.js"), require("./35282.js");
let r = (0, require("./121168.js").U)(e => ({
    logs: [],
    addLog: t => e(e => ({
      logs: [...e.logs, "[".concat(new Date().toISOString().split("T")[0], "] ").concat(t)]
    })),
    clearLogs: () => e({
      logs: []
    })
  })),
  i = e => {
    let t = new Date().toLocaleTimeString("en-US", {
        hour12: false
      }),
      n = "[".concat(t, "] ").concat(e);
    r.getState().addLog(n)
  }