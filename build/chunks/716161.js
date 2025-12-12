/** Chunk was on web.js **/
/** chunk id: 716161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ff: () => p,
  GS: () => g,
  KH: () => _,
  Nm: () => E,
  RI: () => h,
  Up: () => m,
  XV: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk675478 = require("./675478.js"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk932724 = require("./932724.js"),
  Chunk647177 = require("./647177.js"),
  Chunk901757 = require("./901757.js"),
  Chunk981631 = require("./981631.js");
async function f() {
  try {
    let e = await Chunk544891.tn.get({
      url: Chunk981631.ANM.VIDEO_FILTER_ASSETS,
      rejectWithError: false
    });
    return Chunk570140.Z.dispatch({
      type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
      assets: module.body
    }), module
  } catch (e) {
    throw Chunk570140.Z.dispatch({
      type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE",
      error: module
    }), module
  }
}
async function p(e, t, n) {
  try {
    let o = await r.tn.post({
      url: d.ANM.VIDEO_FILTER_ASSETS,
      body: {
        type: t,
        asset: e,
        last_used: null == n ? true : n.toISOString()
      },
      rejectWithError: false
    });
    return i.Z.dispatch({
      type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
      videoFilterAsset: o.body
    }), o.body
  } catch (e) {
    throw new u.Z(e)
  }
}
async function _(e) {
  await r.tn.del({
    url: d.ANM.VIDEO_FILTER_ASSET(e.id),
    rejectWithError: false
  });
  let t = (0, l.P)(s.default.getCurrentUser());
  (0, c.rD)(t) && t.id === e.id && m(null), i.Z.dispatch({
    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
    videoFilterAsset: e
  })
}
async function m(e) {
  if (await o.hW.updateAsync("voiceAndVideo", t => {
      t.videoBackgroundFilterDesktop = (0, c.i7)(e)
    }, o.fy.FREQUENT_USER_ACTION), (0, c.rD)(e)) {
    let t = await r.tn.post({
      url: d.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id),
      rejectWithError: false
    });
    i.Z.dispatch({
      type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
      backgroundOption: t.body
    })
  } else i.Z.dispatch({
    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
    backgroundOption: e
  })
}

function h(e) {
  a.Z.isSupported() && i.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
    settings: e
  })
}

function g() {
  Chunk131951.Z.isSupported() && Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
  })
}

function E() {
  Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
  })
}