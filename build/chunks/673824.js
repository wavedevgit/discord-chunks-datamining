/** Chunk was on web.js **/
/** chunk id: 673824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk213305 = require("./213305.js"),
  Chunk402453 = require("./402453.jsx");

function a(e, t) {
  var n;
  let {
    theme: a,
    saturation: s,
    experiments: l
  } = (0, o.ZF)(), {
    highContrastModeEnabled: c
  } = r.useContext(i.S), u = "compact", d = null != (n = null == l ? true : l.enabledExperiments) ? n : [];
  return e.resolve({
    theme: null != t ? t : a,
    saturation: s,
    enabledExperiments: d,
    density: u,
    highContrastModeEnabled: c
  })
}