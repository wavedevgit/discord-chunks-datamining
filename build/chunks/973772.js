/** Chunk was on web.js **/
/** chunk id: 973772, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gv: () => c,
  UP: () => l,
  ZP: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk905128 = require("./905128.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  return e.type !== a.A3.INACTIVE
}

function c(e, t) {
  var n, l;
  let c = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
    u = (0, r.e7)([o.Z], () => o.Z.getStateForGuild(e)),
    d = null != (l = null == c || null == (n = c.features) ? true : n.has(s.oNc.PREMIUM_TIER_3_OVERRIDE)) && l;

  function f(e) {
    let {
      isActiveFromLevel: t,
      levelEntitlement: n,
      levelPowerup: r
    } = _(e), i = p(e), o = h(e), s = null != o, l = {
      type: a.A3.INACTIVE,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: true
    };
    return t ? l = {
      type: a.A3.LEVEL_ACTIVATED,
      powerup: e,
      sourceEntitlement: n,
      sourcePowerup: r
    } : i ? l = {
      type: a.A3.TIER_OVERRIDE_ACTIVATED,
      powerup: e,
      sourceEntitlement: true,
      sourcePowerup: e
    } : s && (l = {
      type: a.A3.POWERUP_ACTIVATED,
      powerup: e,
      sourceEntitlement: o,
      sourcePowerup: e
    }), l
  }

  function _(e) {
    var t, n;
    if (null == e || null == c || null == u) return {
      isActiveFromLevel: false,
      levelEntitlement: true,
      levelPowerup: true
    };
    let r = a.Rx[e.skuId];
    if (null == r) return {
      isActiveFromLevel: false,
      levelEntitlement: true,
      levelPowerup: true
    };
    let i = c.premiumTier >= r,
      o = a.Cp[r];
    return {
      isActiveFromLevel: i,
      levelEntitlement: null != o ? null == (t = u.unlockedPowerups) ? true : t[o] : true,
      levelPowerup: null != o ? null == (n = u.allPowerups) ? true : n[o] : true
    }
  }

  function p(e) {
    return d && a.ad.has(e.skuId)
  }

  function h(e) {
    var t, n;
    return null != (n = null == u || null == (t = u.unlockedPowerups) ? true : t[e.skuId]) ? n : null
  }
  return t.map(e => f(e))
}

function u(e, t) {
  let n = c(e, null == t ? [] : [t]);
  return n.length <= 0 ? {
    type: a.A3.INACTIVE,
    sourceEntitlement: true,
    sourcePowerup: true
  } : n[0]
}