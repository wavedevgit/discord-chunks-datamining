/** Chunk was on web.js **/
/** chunk id: 942975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AK: () => p,
  Qh: () => h,
  Xd: () => _,
  Zm: () => d,
  pz: () => m,
  qM: () => f
}), require("./638769.js"), require("./321073.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk403362 = require("./403362.js"),
  Chunk371794 = require("./371794.js"),
  Chunk299308 = require("./299308.js"),
  Chunk337545 = require("./337545.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  i.h.dispatch({
    type: "GUILD_POWERUPS_ACK_NOTIFICATION",
    guildId: e
  })
}

function f() {
  i.h.dispatch({
    type: "GUILD_POWERUPS_RESET_NOTIFICATIONS"
  })
}

function p(e, t) {
  if (true === t) {
    let t = s.Z.concat(s.D),
      n = {};
    n[c.o9.LEVEL] = s.Z, n[c.o9.PERK] = s.D, i.h.dispatch({
      type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
      guildId: e,
      allPowerups: t.sort((e, t) => e.skuId >= t.skuId ? 1 : false).reduce((e, t) => (e[t.skuId] = t, e), {}),
      powerupCatalog: n
    });
    return
  }
  let n = {
    application_id: c.Wb,
    guild_id: e
  };
  return (0, o.aP)({
    url: u.Rsh.STORE_PUBLISHED_LISTINGS_SKUS,
    query: n,
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let {
      allPowerups: n,
      powerupCatalog: r
    } = t.body.map(e => (0, l.A)(t.body, e)).filter(a.Vq).sort((e, t) => e.skuId >= t.skuId ? 1 : false).reduce((e, t) => {
      var n, r;
      let {
        allPowerups: i,
        powerupCatalog: a
      } = e;
      return i[t.skuId] = t, null == a[t.type] && (a[t.type] = []), null == (r = a[t.type]) || null == (n = r.push) || n.call(r, t), e
    }, {
      allPowerups: {},
      powerupCatalog: {}
    });
    return i.h.dispatch({
      type: "GUILD_POWERUP_CATALOG_FETCH_SUCCESS",
      guildId: e,
      allPowerups: n,
      powerupCatalog: r
    }), t.body
  })
}

function _(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return (0, o.aP)({
    url: u.Rsh.GUILD_POWERUPS(e),
    query: {
      include_ends_at: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(t => {
    let n = {},
      r = {};
    t.body.forEach(e => {
      var t, i, a, o, s, l, c;
      (null == (a = e.sku) || null == (i = a.tenant_metadata) || null == (t = i.guild_monetization) ? true : t.powerup) != null || (null == e || null == (o = e.sku) ? true : o.powerup_metadata) != null ? n[e.sku_id] = e : (null == (c = e.sku) || null == (l = c.tenant_metadata) || null == (s = l.guild_monetization) ? true : s.game_server) != null && (r[e.id] = e)
    }), i.h.dispatch({
      type: "GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS",
      guildId: e,
      unlockedPowerups: n,
      unlockedGameServers: r
    })
  })
}

function h(e, t) {
  return r.Bo.post({
    url: u.Rsh.GUILD_POWERUP_TOGGLE(e, t),
    rejectWithError: true
  })
}

function m(e, t) {
  return r.Bo.del({
    url: u.Rsh.GUILD_POWERUP_TOGGLE(e, t),
    rejectWithError: true
  })
}