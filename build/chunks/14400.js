/** Chunk was on web.js **/
/** chunk id: 14400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk253932 = require("./253932.js"),
  Chunk824744 = require("./824744.js");

function s() {
  let [e, t] = r.useState(i.HO.getSetting());
  return {
    volume: e,
    onVolumeChange: r.useCallback(e => {
      let n = (0, a.w)(e);
      t(n), i.HO.updateSetting(n)
    }, [])
  }
}