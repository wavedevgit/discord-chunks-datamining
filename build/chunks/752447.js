/** Chunk was on web.js **/
/** chunk id: 752447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => i
}), require("./896048.js"), require("./747238.js");
let r = (0, require("./353640.js").v)(e => ({
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