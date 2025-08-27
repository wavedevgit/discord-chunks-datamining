/** Chunk was on web.js **/
/** chunk id: 151480, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => p,
  i: () => h,
  k9: () => _
});
var Chunk602715 = require("./602715.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk411700 = require("./411700.js"),
  Chunk258732 = require("./258732.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk860987 = require("./860987.js"),
  Chunk981631 = require("./981631.js");
let _ = async () => {
  Chunk570140.Z.dispatch({
    type: "FETCH_CHAT_WALLPAPERS_START"
  });
  try {
    let e = await Chunk544891.tn.get({
      url: Chunk981631.ANM.CHAT_WALLPAPERS,
      rejectWithError: true
    });
    Chunk570140.Z.dispatch({
      type: "FETCH_CHAT_WALLPAPERS_SUCCESS",
      wallpapers: module.body.chat_wallpapers.map(Chunk860987.w)
    })
  } catch (t) {
    let e = new Chunk881052.Hx(exports);
    (0, Chunk411700.G)(module), Chunk570140.Z.dispatch({
      type: "FETCH_CHAT_WALLPAPERS_FAILURE",
      error: module
    })
  }
};
async function p(e, t, n) {
  let {
    shouldClear: i,
    onError: d
  } = n;
  a.Z.dispatch({
    type: "UPDATE_CHAT_WALLPAPER_FLAG_START",
    channelId: e.id
  });
  try {
    var _;
    c.default.track(f.rMx.CHAT_WALLPAPER_USER_SIDE_CLEAR_TOGGLED, {
      is_hidden: i,
      wallpaper_id: t,
      channel_id: e.id
    });
    let n = (0, u.mB)(null != (_ = e.recipientFlags) ? _ : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER, i);
    (await l.Z.updatePrivateChannelRecipientFlags(e.id, n)).ok || null == d || d()
  } catch (t) {
    let e = new o.Hx(t);
    (0, s.G)(e), null == d || d()
  } finally {
    a.Z.dispatch({
      type: "UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE",
      channelId: e.id
    })
  }
}

function h(e, t) {
  a.Z.dispatch({
    type: "UPDATE_CHAT_WALLPAPER_OVERRIDES",
    wallpaperId: e,
    overrides: t
  })
}