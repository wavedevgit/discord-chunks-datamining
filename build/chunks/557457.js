/** Chunk was on web.js **/
/** chunk id: 557457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W3: () => S,
  Wc: () => v,
  Ye: () => I,
  bp: () => O,
  ml: () => y,
  nG: () => g,
  tR: () => h
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk361291 = require("./361291.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk474936 = require("./474936.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  if (null == e) return;
  let t = e.maxResolution.type === _.uA.SOURCE ? f.LY.RESOLUTION_SOURCE : e.maxResolution.height,
    n = (0, f.aW)(t);
  return (0, f.L9)(e.maxFrameRate) !== f.ws.FPS_5 && null == f.ND.find(e => e.resolution === n && e.fps !== f.ws.FPS_5 && !E(e))
}

function g(e) {
  if (null == e) return;
  let t = (0, f.L9)(e.maxFrameRate);
  return null == f.ND.find(e => e.fps === t && !E(e))
}

function E(e) {
  return null != e.quality || null != e.guildPremiumTier
}

function b(e, t, n) {
  return f.ND.find(r => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n)
}

function y(e) {
  return e.type === _.uA.SOURCE ? m.intl.string(m.t.XjXqzh) : m.intl.formatToPlainString(m.t.TEOC0I, {
    resolution: e.height
  })
}

function O(e) {
  return m.intl.formatToPlainString(m.t.Qb44XH, {
    fps: e
  })
}

function v(e) {
  return null == e.maxResolution || null == e.maxFrameRate ? null : {
    maxFrameRate: e.maxFrameRate,
    maxResolution: e.maxResolution
  }
}

function S(e) {
  let t = (0, i.cj)([a.Z], () => a.Z.getState()),
    n = (0, i.e7)([o.default], () => o.default.getId());
  return r.useMemo(() => n === e.user.id ? {
    maxFrameRate: t.fps,
    maxResolution: {
      height: t.resolution,
      width: 0,
      type: 0 === t.resolution ? _.uA.SOURCE : _.uA.FIXED
    }
  } : v(e), [n, e, t])
}

function I(e, t, n) {
  let r = b(e, t, n),
    i = c.default.getCurrentUser(),
    a = l.Z.getGuildId(),
    o = null != a ? s.Z.getGuild(a) : null;
  u.default.track(d.rMx.STREAM_SETTINGS_UPDATE, {
    user_premium_tier: null == i ? true : i.premiumType,
    guild_premium_tier: null == o ? true : o.premiumTier,
    stream_quality_user_premium_tier: (null == r ? true : r.quality) != null ? p.bg[r.quality] : null,
    stream_quality_guild_premium_tier: null == r ? true : r.guildPremiumTier,
    stream_quality_preset: e,
    stream_quality_resolution: t,
    stream_quality_frame_rate: n
  })
}