/** Chunk was on web.js **/
/** chunk id: 647177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $w: () => E,
  Bh: () => h,
  Gx: () => y,
  TA: () => p,
  V$: () => m,
  g5: () => g,
  i7: () => b,
  rD: () => u,
  sd: () => d
});
var Chunk367907 = require("./367907.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk678916 = require("./678916.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  return null != e && "object" == typeof e && "id" in e && e.type === l.xV.BACKGROUND
}

function d(e) {
  return "number" == typeof e && e in l.dp
}

function f(e) {
  return d(e) ? l.X7.includes(e) : !!u(e) && ((0, s.xR)(e.asset) || (0, s.ay)(e.asset))
}

function p(e) {
  return null != e ? "Video Background" : "None"
}

function _(e) {
  switch (e) {
    case l.dp.OPTION_1:
      return "Cybercity";
    case l.dp.OPTION_2:
      return "Discord the Movie";
    case l.dp.OPTION_3:
      return "Wumpus Vacation";
    case l.dp.OPTION_4:
      return "Vaporwave";
    case l.dp.OPTION_7:
      return "Capernite Day";
    case l.dp.OPTION_8:
      return "Capernite Night";
    case l.dp.OPTION_9:
      return "Hacker Den";
    case l.dp.OPTION_10:
      return "Wumpice"
  }
}

function m(e) {
  return null == e ? "None" : u(e) ? "Custom" : "blur" === e ? "Blur" : "Preset - ".concat(_(e))
}

function h(e, t, n) {
  let s = o.Z.getGuildId(),
    l = o.Z.getChannelId(),
    u = i.Z.getChannel(l),
    d = (0, r.kO)(s, l, true);
  a.default.track(c.rMx.VIDEO_EFFECT_UPDATED, {
    location: t,
    effect_type: p(e),
    effect_detail: m(e),
    effect_state: n,
    channel_id: l,
    channel_type: null == u ? true : u.type,
    guild_id: s,
    voice_state_count: d.voice_state_count,
    video_stream_count: d.video_stream_count,
    media_session_id: o.Z.getMediaSessionId(),
    rtc_connection_id: o.Z.getRTCConnectionId(),
    is_animated: f(e)
  })
}

function g(e, t, n) {
  a.default.track(c.rMx.VIDEO_BACKGROUND_ADDED, {
    is_animated: f(e),
    is_video: t,
    is_from_tenor: n
  })
}

function E(e) {
  a.default.track(c.rMx.VIDEO_BACKGROUND_DELETED, {
    is_animated: f(e)
  })
}

function b(e) {
  return null == e ? {
    oneofKind: true
  } : u(e) ? {
    oneofKind: "customAsset",
    customAsset: {
      id: e.id,
      assetHash: e.asset
    }
  } : "blur" === e ? {
    oneofKind: "blur",
    blur: {
      useBlur: true
    }
  } : {
    oneofKind: "presetOption",
    presetOption: e
  }
}

function y(e, t) {
  if (null == e || true === e.oneofKind) return null;
  switch (e.oneofKind) {
    case "customAsset":
      return {
        type: l.xV.BACKGROUND, id: e.customAsset.id, user_id: t, asset: e.customAsset.assetHash
      };
    case "blur":
      return e.blur.useBlur ? "blur" : null;
    case "presetOption":
      return e.presetOption
  }
}