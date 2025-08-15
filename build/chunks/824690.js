/** Chunk was on web.js **/
/** chunk id: 824690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk695346 = require("./695346.js"),
  Chunk36703 = require("./36703.js");

function o() {
  let [e, t] = Chunk73800.useState(Chunk695346.AY.getSetting());
  return {
    volume: module,
    onVolumeChange: Chunk73800.useCallback(e => {
      let n = (0, a.A)(e);
      t(n), i.AY.updateSetting(n)
    }, [])
  }
}