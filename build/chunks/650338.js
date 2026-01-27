/** Chunk was on web.js **/
/** chunk id: 650338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bs: () => O,
  HB: () => g,
  K2: () => I,
  ME: () => b,
  N5: () => A,
  OI: () => m,
  wz: () => v
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk929921 = require("./929921.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753070 = require("./753070.js"),
  Chunk788868 = require("./788868.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  if (null == e) return;
  let t = e.maxResolution.type === _.ei.SOURCE ? f.on.RESOLUTION_SOURCE : e.maxResolution.height,
    n = (0, f.F0)(t);
  return (0, f.AC)(e.maxFrameRate) !== f.kn.FPS_5 && null == f.ZV.find(e => e.resolution === n && e.fps !== f.kn.FPS_5 && !E(e))
}

function g(e) {
  if (null == e) return;
  let t = (0, f.AC)(e.maxFrameRate);
  return null == f.ZV.find(e => e.fps === t && !E(e))
}

function E(e) {
  return null != e.quality || null != e.guildPremiumTier
}

function y(e, t, n) {
  return f.ZV.find(r => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n)
}

function b(e) {
  return e.type === _.ei.SOURCE ? h.intl.string(h.t.XjXqzh) : h.intl.formatToPlainString(h.t.TEOC0I, {
    resolution: e.height
  })
}

function O(e) {
  return h.intl.formatToPlainString(h.t.Qb44XH, {
    fps: e
  })
}

function v(e) {
  return null == e.maxResolution || null == e.maxFrameRate ? null : {
    maxFrameRate: e.maxFrameRate,
    maxResolution: e.maxResolution
  }
}

function A(e) {
  let t = (0, i.cf)([a.A], () => a.A.getState()),
    n = (0, i.bG)([o.default], () => o.default.getId());
  return r.useMemo(() => n === e.user.id ? {
    maxFrameRate: t.fps,
    maxResolution: {
      height: t.resolution,
      width: 0,
      type: 0 === t.resolution ? _.ei.SOURCE : _.ei.FIXED
    }
  } : v(e), [n, e, t])
}

function I(e, t, n) {
  let r = y(e, t, n),
    i = c.default.getCurrentUser(),
    a = l.A.getGuildId(),
    o = null != a ? s.A.getGuild(a) : null;
  u.default.track(d.HAw.STREAM_SETTINGS_UPDATE, {
    user_premium_tier: null == i ? true : i.premiumType,
    guild_premium_tier: null == o ? true : o.premiumTier,
    stream_quality_user_premium_tier: (null == r ? true : r.quality) != null ? p.Kq[r.quality] : null,
    stream_quality_guild_premium_tier: null == r ? true : r.guildPremiumTier,
    stream_quality_preset: e,
    stream_quality_resolution: t,
    stream_quality_frame_rate: n
  })
}