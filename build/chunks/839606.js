/** Chunk was on web.js **/
/** chunk id: 839606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o,
  j: () => a
});
var Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js"),
  a = function(e) {
    return e[e.DEFAULT = 0] = "DEFAULT", e[e.COACHMARK = 1] = "COACHMARK", e
  }({});
let o = (0, Chunk879690.U)(e => ({
  activePickerChannelId: true,
  previewWallpaperId: true,
  lastShownChatWallpaperPickerType: true,
  openPickerForChannel: t => (0, i.j)(() => {
    e({
      activePickerChannelId: t
    })
  }),
  closePicker: () => (0, i.j)(() => {
    e({
      activePickerChannelId: true,
      previewWallpaperId: true
    })
  }),
  setPreviewWallpaperId: t => (0, i.j)(() => {
    e({
      previewWallpaperId: t
    })
  }),
  setLastShownChatWallpaperPickerType: t => (0, i.j)(() => {
    e({
      lastShownChatWallpaperPickerType: t
    })
  })
}))