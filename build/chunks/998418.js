/** Chunk was on web.js **/
/** chunk id: 998418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => d,
  dy: () => c,
  jJ: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk645619 = require("./645619.js"),
  Chunk800007 = require("./800007.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  return e.type !== o.b_.INACTIVE
}

function u(e, t) {
  var n, c;
  let u = (0, r.bG)([i.A], () => i.A.getGuild(e)),
    d = (0, r.bG)([a.A], () => a.A.getStateForGuild(e)),
    f = null != (n = null == u || null == (c = u.features) ? true : c.has(l.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) && n;

  function p(e) {
    if (e.skuId === s.W5) {
      var t, n;
      return {
        type: null != (t = null == u || null == (n = u.features) ? true : n.has(l.GuildFeatures.GAME_SERVERS)) && t ? o.b_.POWERUP_ACTIVATED : o.b_.INACTIVE,
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
      type: o.b_.INACTIVE,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: true
    };
    return r ? p = {
      type: o.b_.LEVEL_ACTIVATED,
      powerup: e,
      sourceEntitlement: i,
      sourcePowerup: a
    } : c ? p = {
      type: o.b_.TIER_OVERRIDE_ACTIVATED,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: e
    } : f && (p = {
      type: o.b_.POWERUP_ACTIVATED,
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
    let r = o.wr[e.skuId];
    if (null == r) return {
      isActiveFromLevel: false,
      levelEntitlement: true,
      levelPowerup: true
    };
    let i = u.premiumTier >= r,
      a = o.a8[r];
    return {
      isActiveFromLevel: i,
      levelEntitlement: null != a ? null == (t = d.unlockedPowerups) ? true : t[a] : true,
      levelPowerup: null != a ? null == (n = d.allPowerups) ? true : n[a] : true
    }
  }

  function h(e) {
    return f && o.o2.has(e.skuId)
  }

  function m(e) {
    var t, n;
    return null != (t = null == d || null == (n = d.unlockedPowerups) ? true : n[e.skuId]) ? t : null
  }
  return t.map(e => p(e))
}

function d(e, t) {
  let n = u(e, null == t ? [] : [t]);
  return n.length <= 0 ? {
    type: o.b_.INACTIVE,
    sourceEntitlement: true,
    sourcePowerup: true
  } : n[0]
}