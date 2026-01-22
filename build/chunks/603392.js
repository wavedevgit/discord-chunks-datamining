/** Chunk was on web.js **/
/** chunk id: 603392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk844222 = require("./844222.js"),
  Chunk460890 = require("./460890.jsx");

function s(e, t) {
  var n;
  let {
    theme: s,
    saturation: o,
    experiments: l
  } = (0, a.G9)(), {
    highContrastModeEnabled: c
  } = r.useContext(i.C), u = "compact", d = null != (n = null == l ? true : l.enabledExperiments) ? n : [];
  return e.resolve({
    theme: null != t ? t : s,
    saturation: o,
    enabledExperiments: d,
    density: u,
    highContrastModeEnabled: c
  })
}