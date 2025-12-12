/** Chunk was on web.js **/
/** chunk id: 713081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BN: () => _,
  H6: () => m,
  Qh: () => f,
  Sn: () => p,
  Th: () => h,
  jd: () => d
}), require("./642613.js"), require("./539854.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk73346 = require("./73346.js"),
  Chunk763792 = require("./763792.js"),
  Chunk377154 = require("./377154.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
  i.Z.dispatch({
    type: "GUILD_POWERUPS_ACK_NOTIFICATION",
    guildId: e
  })
}

function f() {
  Chunk570140.Z.dispatch({
    type: "GUILD_POWERUPS_RESET_NOTIFICATIONS"
  })
}

function p(e, t) {
  if (true === t) {
    let t = s.G.concat(s.W),
      n = {};
    n[c.Us.LEVEL] = s.G, n[c.Us.PERK] = s.W, i.Z.dispatch({
      type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
      guildId: e,
      allPowerups: t.sort((e, t) => e.skuId >= t.skuId ? 1 : false).reduce((e, t) => (e[t.skuId] = t, e), {}),
      powerupCatalog: n
    });
    return
  }
  let n = {
    application_id: c.NO,
    guild_id: e
  };
  return (0, a.Kb)({
    url: u.ANM.STORE_PUBLISHED_LISTINGS_SKUS,
    query: n,
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let {
      allPowerups: n,
      powerupCatalog: r
    } = t.body.map(e => (0, l.Z)(t.body, e)).filter(o.lm).sort((e, t) => e.skuId >= t.skuId ? 1 : false).reduce((e, t) => {
      var n, r;
      let {
        allPowerups: i,
        powerupCatalog: o
      } = e;
      return i[t.skuId] = t, null == o[t.type] && (o[t.type] = []), null == (r = o[t.type]) || null == (n = r.push) || n.call(r, t), e
    }, {
      allPowerups: {},
      powerupCatalog: {}
    });
    return i.Z.dispatch({
      type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
      guildId: e,
      allPowerups: n,
      powerupCatalog: r
    }), t.body
  })
}

function _(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return (0, a.Kb)({
    url: u.ANM.GUILD_POWERUPS(e),
    query: {
      include_ends_at: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = {},
      r = {};
    t.body.forEach(e => {
      var t, i, o, a, s, l, c;
      (null == (o = e.sku) || null == (i = o.tenant_metadata) || null == (t = i.guild_monetization) ? true : t.powerup) != null || (null == e || null == (a = e.sku) ? true : a.powerup_metadata) != null ? n[e.sku_id] = e : (null == (c = e.sku) || null == (l = c.tenant_metadata) || null == (s = l.guild_monetization) ? true : s.game_server) != null && (r[e.id] = e)
    }), i.Z.dispatch({
      type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
      guildId: e,
      unlockedPowerups: n,
      unlockedGameServers: r
    })
  })
}

function m(e, t) {
  return r.tn.post({
    url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
    rejectWithError: true
  })
}

function h(e, t) {
  return r.tn.del({
    url: u.ANM.GUILD_POWERUP_TOGGLE(e, t),
    rejectWithError: true
  })
}