/** Chunk was on web.js **/
/** chunk id: 603392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx");

function o(e, t) {
  var n;
  let {
    theme: o,
    saturation: s,
    experiments: l
  } = (0, a.G9)(), {
    highContrastModeEnabled: c
  } = r.useContext(i.C), u = "compact", d = null != (n = null == l ? true : l.enabledExperiments) ? n : [];
  return e.resolve({
    theme: null != t ? t : o,
    saturation: s,
    enabledExperiments: d,
    density: u,
    highContrastModeEnabled: c
  })
}