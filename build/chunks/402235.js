/** Chunk was on web.js **/
/** chunk id: 402235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => l,
  yH: () => c,
  zI: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk232062 = require("./232062.js"),
  Chunk944888 = require("./944888.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  let n = (0, r.e7)([i.Z], () => {
      let t = i.Z.getGuild(e);
      return null != t && t.features.has(s.oNc.ENHANCED_ROLE_COLORS)
    }),
    o = (0, a.ZP)(null != e ? e : true, null != t ? t : true);
  return n || o
}

function c(e, t) {
  let n = (0, r.e7)([i.Z], () => {
      let t = i.Z.getGuild(e);
      return null != t && t.features.has(s.oNc.ENHANCED_ROLE_COLORS)
    }),
    l = (0, o.W)(e, "useHasEnhancedRoleColorsForRole") && null != t && (0, a.YB)(t);
  return n || l
}

function u(e, t) {
  let n = i.Z.getGuild(e),
    r = null != n && n.features.has(s.oNc.ENHANCED_ROLE_COLORS),
    l = (0, o.Tq)(e, "getHasEnhancedRoleColorsForRole") && (0, a.YB)(t);
  return r || l
}