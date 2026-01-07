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
    let e = o.xM.useSetting(),
      t = (0, i.l6)(),
      n = (0, s.J)();
    return l(e, (0, r.H)("useViewNsfwCommandsOrDefault"), n, t)
  },
  u = () => {
    let e = o.DC.useSetting(),
      t = (0, i.l6)(),
      n = (0, s.J)();
    return l(e, (0, r.H)("useViewNsfwGuildsOrDefault"), n, t)
  },
  d = () => {
    let e = o.xM.getSetting(),
      t = (0, i.kJ)(),
      n = a.default.getCurrentUser();
    return l(e, (0, r.S)("getViewNsfwCommandsOrDefault"), null == n ? true : n.nsfwAllowed, t)
  }