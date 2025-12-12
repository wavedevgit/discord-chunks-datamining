/** Chunk was on web.js **/
/** chunk id: 968437, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WD: () => c,
  nt: () => l
});
var Chunk404759 = require("./404759.js"),
  i = require.n(Chunk404759);
require("./913527.js");
var Chunk70956 = require("./70956.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function l() {
  return [{
    label: Chunk388032.intl.string(Chunk388032.t.cs8A1c),
    value: Chunk70956.Z.Minutes.HOUR
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.zFKbrF),
    value: Chunk70956.Z.Minutes.DAY
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.TmPIZX),
    value: 3 * Chunk70956.Z.Minutes.DAY
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["/7i2el"]),
    value: Chunk70956.Z.Minutes.WEEK
  }]
}

function c(e, t) {
  var n;
  return null != (n = null != t ? t : null == e ? true : e.defaultAutoArchiveDuration) ? n : a.AX
}
Chunk70956.Z.Minutes.HOUR, Chunk70956.Z.Minutes.DAY, Chunk70956.Z.Minutes.DAY, Chunk70956.Z.Minutes.WEEK, i()(() => l().map(e => e.value))