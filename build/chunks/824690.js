/** Chunk was on web.js **/
/** chunk id: 824690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk695346 = require("./695346.js"),
  Chunk36703 = require("./36703.js");

function o() {
  let [e, t] = Chunk647438.useState(Chunk695346.AY.getSetting());
  return {
    volume: module,
    onVolumeChange: Chunk647438.useCallback(e => {
      let n = (0, a.A)(e);
      t(n), i.AY.updateSetting(n)
    }, [])
  }
}