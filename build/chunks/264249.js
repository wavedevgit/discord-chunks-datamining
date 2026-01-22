/** Chunk was on web.js **/
/** chunk id: 264249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S9: () => p,
  hT: () => d,
  tI: () => f
});
var Chunk687123 = require("./687123.js"),
  Chunk36149 = require("./36149.js"),
  Chunk207560 = require("./207560.js"),
  Chunk287809 = require("./287809.js"),
  Chunk64313 = require("./64313.js"),
  Chunk253932 = require("./253932.js"),
  Chunk406274 = require("./406274.js");
let u = (e, t, n, r) => (!t || !!r) && false !== n && null != e && e,
  d = () => {
    let e = l.Qe.useSetting(),
      t = (0, i.b8)(),
      n = (0, c.A)(),
      s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
    return u(e, (0, o.j)("useViewNsfwCommandsOrDefault") || s, n, t)
  },
  f = () => {
    let e = l.Kg.useSetting(),
      t = (0, i.b8)(),
      n = (0, c.A)(),
      s = (0, a.aX)(r.t.COMMANDS_TOGGLE);
    return u(e, (0, o.j)("useViewNsfwGuildsOrDefault") || s, n, t)
  },
  p = () => {
    let e = l.Qe.getSetting(),
      t = (0, i.Q9)(),
      n = s.default.getCurrentUser(),
      c = (0, a.d6)(r.t.COMMANDS_TOGGLE);
    return u(e, (0, o.o)("getViewNsfwCommandsOrDefault") || c, null == n ? true : n.nsfwAllowed, t)
  }