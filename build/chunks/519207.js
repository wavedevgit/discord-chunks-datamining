/** Chunk was on web.js **/
/** chunk id: 519207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => d,
  Xg: () => c,
  q3: () => u
});
var Chunk532812 = require("./532812.js"),
  Chunk81643 = require("./81643.js"),
  Chunk594174 = require("./594174.js"),
  Chunk695346 = require("./695346.js"),
  Chunk682578 = require("./682578.js");
let l = (e, t, n, r) => (!t || !!r) && false !== n && null != e && e,
  c = () => {
    let e = Chunk695346.xM.useSetting(),
      t = (0, Chunk81643.l6)(),
      n = (0, Chunk682578.J)();
    return l(module, (0, Chunk532812.H)("useViewNsfwCommandsOrDefault"), require, exports)
  },
  u = () => {
    let e = Chunk695346.DC.useSetting(),
      t = (0, Chunk81643.l6)(),
      n = (0, Chunk682578.J)();
    return l(module, (0, Chunk532812.H)("useViewNsfwGuildsOrDefault"), require, exports)
  },
  d = () => {
    let e = Chunk695346.xM.getSetting(),
      t = (0, Chunk81643.kJ)(),
      n = Chunk594174.default.getCurrentUser();
    return l(module, (0, Chunk532812.S)("getViewNsfwCommandsOrDefault"), null == require ? true : require.nsfwAllowed, exports)
  }