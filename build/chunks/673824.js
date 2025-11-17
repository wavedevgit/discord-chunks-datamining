/** Chunk was on web.js **/
/** chunk id: 673824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx");

function o(e, t) {
  var n;
  let {
    theme: o,
    saturation: s,
    experiments: l
  } = (0, a.ZF)(), {
    highContrastModeEnabled: c
  } = r.useContext(i.S), u = "compact", d = null != (n = null == l ? true : l.enabledExperiments) ? n : [];
  return e.resolve({
    theme: null != t ? t : o,
    saturation: s,
    enabledExperiments: d,
    density: u,
    highContrastModeEnabled: c
  })
}