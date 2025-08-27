/** Chunk was on web.js **/
/** chunk id: 680783, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk410030 = require("./410030.js"),
  Chunk592125 = require("./592125.js"),
  Chunk436952 = require("./436952.js"),
  Chunk839606 = require("./839606.js"),
  Chunk373076 = require("./373076.js");

function u(e) {
  let t = (0, r.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getChannel(e)) ? true : t.wallpaper
    }),
    {
      previewWallpaperId: n,
      activePickerChannelId: u
    } = (0, l.B)(),
    d = (0, c.P)(null == t ? true : t.setterId),
    f = (0, i.wj)((0, a.ZP)()),
    _ = (0, s.sQ)({
      location: "ChatWallpaperSetSystemMessage"
    }),
    p = s.qM.useExperiment({
      location: "ChatWallpaperSetSystemMessage"
    });
  return null == e ? true : u === e && true !== n ? {
    wallpaperId: n,
    setterId: true,
    isPreview: true,
    isViewable: _
  } : true !== t ? {
    wallpaperId: t.wallpaperId,
    isViewable: _ && d && (f || p.lightMode)
  } : true
}