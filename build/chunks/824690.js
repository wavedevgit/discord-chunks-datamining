/** Chunk was on web.js **/
/** chunk id: 824690, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk695346 = require("./695346.js"),
  Chunk36703 = require("./36703.js");

function o() {
  let [e, t] = r.useState(i.AY.getSetting());
  return {
    volume: e,
    onVolumeChange: r.useCallback(e => {
      let n = (0, a.A)(e);
      t(n), i.AY.updateSetting(n)
    }, [])
  }
}