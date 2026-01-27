/** Chunk was on web.js **/
/** chunk id: 403528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk873298 = require("./873298.js"),
  Chunk775602 = require("./775602.js"),
  Chunk284016 = require("./284016.js"),
  Chunk964404 = require("./964404.js"),
  Chunk617617 = require("./617617.js"),
  Chunk652215 = require("./652215.js"),
  Chunk185928 = require("./185928.js");

function u(e, t) {
  var n, u, d;
  if (__OVERLAY__) return l.NJ8.DARK;
  let f = c.dP;
  if (i.A.syncForcedColors && "active" === i.A.systemForcedColors && e !== c.Fc.NO_PREFERENCE) return e;
  if (o.Ay.useSystemTheme === c.Q_.ON && e !== c.Fc.NO_PREFERENCE) return t[e];
  let p = null == (u = a.A.getAppearanceSettings()) ? true : u.theme;
  return null != p ? p : f[null != (n = null == (d = s.A.settings.appearance) ? true : d.theme) ? n : r.Sx.UNSET]
}