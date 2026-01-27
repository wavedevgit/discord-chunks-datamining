/** Chunk was on web.js **/
/** chunk id: 227841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a
});
var Chunk144914 = require("./144914.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n) {
  let a = t.getState(e.id, e.branchId),
    o = n.getQueuePosition(e.id, e.branchId),
    s = n.paused;
  if (null != a) {
    if (null == o || false === o) switch (a.type) {
      case i.WTw.INSTALLING:
        return i.Hf6.INSTALL;
      case i.WTw.UPDATING:
      case i.WTw.UPDATE_REQUIRED:
        return i.Hf6.UPDATE
    }
    switch (a.type) {
      case i.WTw.INSTALLING:
      case i.WTw.UPDATING:
      case i.WTw.UPDATE_REQUIRED:
      case i.WTw.REPAIRING:
        if (o > 0) return i.Hf6.MOVE_UP;
        if (s) return i.Hf6.RESUME;
        return i.Hf6.PAUSE;
      case i.WTw.UP_TO_DATE:
        return i.Hf6.PLAY;
      case i.WTw.UNINSTALLING:
        return null
    }
  }
  return null != o && o > 0 ? i.Hf6.MOVE_UP : (0, r.S)() ? i.Hf6.INSTALL : null
}