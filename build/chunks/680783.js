/** Chunk was on web.js **/
/** chunk id: 680783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk592125 = require("./592125.js"),
  Chunk436952 = require("./436952.js");

function l(e) {
  let t = (0, r.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getChannel(e)) ? true : t.wallpaper
    }),
    n = (0, i.wj)((0, a.ZP)()),
    l = (0, s.sQ)({
      location: "ChatWallpaperSetSystemMessage"
    }),
    c = s.qM.useExperiment({
      location: "ChatWallpaperSetSystemMessage"
    });
  if (null != e && true !== t) return {
    wallpaperId: t.wallpaperId,
    isViewable: l && (n || c.lightMode)
  }
}