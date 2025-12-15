/** Chunk was on web.js **/
/** chunk id: 765287, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk524437 = require("./524437.js"),
  Chunk607070 = require("./607070.js"),
  Chunk238514 = require("./238514.js"),
  Chunk740492 = require("./740492.js"),
  Chunk581883 = require("./581883.js"),
  Chunk981631 = require("./981631.js"),
  Chunk874893 = require("./874893.js");

function u(e, t) {
  var n, u, d;
  if (__OVERLAY__) return l.BRd.DARK;
  let f = c.yW;
  if (i.Z.syncForcedColors && "active" === i.Z.systemForcedColors && e !== c.zd.NO_PREFERENCE) return e;
  if (o.ZP.useSystemTheme === c.KW.ON && e !== c.zd.NO_PREFERENCE) return t[e];
  let p = null == (n = a.Z.getAppearanceSettings()) ? true : n.theme;
  return null != p ? p : f[null != (d = null == (u = s.Z.settings.appearance) ? true : u.theme) ? d : r.Q2.UNSET]
}