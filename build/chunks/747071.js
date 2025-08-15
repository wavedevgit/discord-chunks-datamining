/** Chunk was on web.js **/
/** chunk id: 747071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var r, Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk36703 = require("./36703.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : (() => {
    var e;
    return null != (r = null == (e = i.kU.getSetting()) ? true : e.volume) ? r : 100
  })();
  return Math.min(e * ((0, o.P)(t) / 100) * Math.min(a.Z.getOutputVolume() / 100, 1), 1)
}