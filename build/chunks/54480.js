/** Chunk was on web.js **/
/** chunk id: 54480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk592125 = require("./592125.js"),
  Chunk436952 = require("./436952.js");

function l(e) {
  let {
    location: t,
    channelId: n
  } = e, {
    enabled: l,
    entryPoint: c
  } = (0, s.sX)({
    location: t
  }), u = s.qM.useExperiment({
    location: t
  }).lightMode, d = (0, i.wj)((0, a.ZP)()), f = (0, r.e7)([o.Z], () => o.Z.getChannel(n));
  return {
    canAccessPicker: l && (d || u) && (null == f ? true : f.isChatWallpaperEnabled) === true,
    entryPoint: c,
    isChatWallpaperSetterExperimentEnabled: l,
    isDarkTheme: d
  }
}