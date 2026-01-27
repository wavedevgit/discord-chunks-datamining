/** Chunk was on web.js **/
/** chunk id: 987384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F9: () => p,
  HR: () => f,
  Mj: () => E,
  Oo: () => g,
  _C: () => h,
  pW: () => _,
  wq: () => m
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk594061 = require("./594061.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk329551 = require("./329551.js"),
  Chunk965162 = require("./965162.js"),
  Chunk449108 = require("./449108.js"),
  Chunk652215 = require("./652215.js");
async function f() {
  try {
    let e = await r.Bo.get({
      url: d.Rsh.VIDEO_FILTER_ASSETS,
      rejectWithError: false
    });
    return i.h.dispatch({
      type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS",
      assets: e.body
    }), e
  } catch (e) {
    throw i.h.dispatch({
      type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE",
      error: e
    }), e
  }
}
async function p(e, t, n) {
  try {
    let a = await r.Bo.post({
      url: d.Rsh.VIDEO_FILTER_ASSETS,
      body: {
        type: t,
        asset: e,
        last_used: null == n ? true : n.toISOString()
      },
      rejectWithError: false
    });
    return i.h.dispatch({
      type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS",
      videoFilterAsset: a.body
    }), a.body
  } catch (e) {
    throw new u.A(e)
  }
}
async function _(e) {
  await r.Bo.del({
    url: d.Rsh.VIDEO_FILTER_ASSET(e.id),
    rejectWithError: false
  });
  let t = (0, l.i)(s.default.getCurrentUser());
  (0, c.d1)(t) && t.id === e.id && h(null), i.h.dispatch({
    type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS",
    videoFilterAsset: e
  })
}
async function h(e) {
  if (await a.wc.updateAsync("voiceAndVideo", t => {
      t.videoBackgroundFilterDesktop = (0, c.R4)(e)
    }, a.Sb.FREQUENT_USER_ACTION), (0, c.d1)(e)) {
    let t = await r.Bo.post({
      url: d.Rsh.VIDEO_FILTER_ASSET_LAST_USED(e.id),
      rejectWithError: false
    });
    i.h.dispatch({
      type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
      backgroundOption: t.body
    })
  } else i.h.dispatch({
    type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION",
    backgroundOption: e
  })
}

function m(e) {
  o.A.isSupported() && i.h.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS",
    settings: e
  })
}

function g() {
  o.A.isSupported() && i.h.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START"
  })
}

function E() {
  i.h.dispatch({
    type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR"
  })
}