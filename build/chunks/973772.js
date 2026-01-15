/** Chunk was on web.js **/
/** chunk id: 973772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gv: () => u,
  UP: () => c,
  ZP: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk905128 = require("./905128.js"),
  Chunk619733 = require("./619733.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  return e.type !== s.A3.INACTIVE
}

function u(e, t) {
  var n, c;
  let u = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
    d = (0, r.e7)([a.Z], () => a.Z.getStateForGuild(e)),
    f = null != (c = null == u || null == (n = u.features) ? true : n.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) && c;

  function p(e) {
    if (e.skuId === o.fj) {
      var t, n;
      return {
        type: null != (n = null == u || null == (t = u.features) ? true : t.has(l.GuildFeatures.GAME_SERVERS)) && n ? s.A3.POWERUP_ACTIVATED : s.A3.INACTIVE,
        powerup: e,
        sourceEntitlement: true,
        sourcePowerup: true
      }
    }
    let {
      isActiveFromLevel: r,
      levelEntitlement: i,
      levelPowerup: a
    } = _(e), c = h(e), d = m(e), f = null != d, p = {
      type: s.A3.INACTIVE,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: true
    };
    return r ? p = {
      type: s.A3.LEVEL_ACTIVATED,
      powerup: e,
      sourceEntitlement: i,
      sourcePowerup: a
    } : c ? p = {
      type: s.A3.TIER_OVERRIDE_ACTIVATED,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: e
    } : f && (p = {
      type: s.A3.POWERUP_ACTIVATED,
      powerup: e,
      sourceEntitlement: d,
      sourcePowerup: e
    }), p
  }

  function _(e) {
    var t, n;
    if (null == e || null == u || null == d) return {
      isActiveFromLevel: false,
      levelEntitlement: true,
      levelPowerup: true
    };
    let r = s.Rx[e.skuId];
    if (null == r) return {
      isActiveFromLevel: false,
      levelEntitlement: true,
      levelPowerup: true
    };
    let i = u.premiumTier >= r,
      a = s.Cp[r];
    return {
      isActiveFromLevel: i,
      levelEntitlement: null != a ? null == (t = d.unlockedPowerups) ? true : t[a] : true,
      levelPowerup: null != a ? null == (n = d.allPowerups) ? true : n[a] : true
    }
  }

  function h(e) {
    return f && s.ad.has(e.skuId)
  }

  function m(e) {
    var t, n;
    return null != (n = null == d || null == (t = d.unlockedPowerups) ? true : t[e.skuId]) ? n : null
  }
  return t.map(e => p(e))
}

function d(e, t) {
  let n = u(e, null == t ? [] : [t]);
  return n.length <= 0 ? {
    type: s.A3.INACTIVE,
    sourceEntitlement: true,
    sourcePowerup: true
  } : n[0]
}