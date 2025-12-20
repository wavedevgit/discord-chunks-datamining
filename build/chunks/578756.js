/** Chunk was on 67365 **/
/** chunk id: 578756, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  $M: () => _,
  Dk: () => m,
  GA: () => f,
  Se: () => p,
  cX: () => v,
  cq: () => d,
  g$: () => g,
  lY: () => c,
  wz: () => b
});
var Chunk473749 = require("./473749.js"),
  Chunk660815 = require("./660815.js"),
  Chunk442837 = require("./442837.js"),
  Chunk626135 = require("./626135.js"),
  Chunk639777 = require("./639777.js"),
  Chunk60482 = require("./60482.js"),
  Chunk981631 = require("./981631.js");

function c(e, n, t) {
  l.useEffect(() => {
    r.default.track(o.rMx.OPEN_MODAL, {
      type: "game_servers_perk_clicked",
      guild_id: e,
      location: t,
      location_stack: n
    })
  }, [e, n, t])
}

function d(e, n) {
  l.useEffect(() => {
    r.default.track(o.rMx.GAME_SERVER_GAME_SELECT_OPENED, {
      guild_id: e,
      type: n
    })
  }, [e, n])
}

function m(e, n, t) {
  l.useEffect(() => {
    r.default.track(o.rMx.GAME_SERVER_SETTINGS_OPENED, {
      guild_id: e,
      game_server_id: n,
      type: t
    })
  }, [e, n, t])
}

function v(e) {
  let n = (0, s.Z)(e),
    t = (0, a.e7)([u.Z], () => u.Z.getStateForGuild(e)),
    c = l.useRef(false);
  l.useEffect(() => {
    if ((null == t ? true : t.instances) == null) return;
    let l = Object.values(t.instances).length,
      a = Object.values(t.instances).filter(e => e.status === i.V.ONLINE).length;
    c.current || (c.current = true, r.default.track(o.rMx.IMPRESSION_GAME_SERVERS_TAB_VIEWED, {
      guild_id: e,
      is_admin: n,
      num_game_servers: l,
      num_game_servers_online: a,
      num_game_servers_offline: l - a
    }))
  }, [e, n, null == t ? true : t.instances])
}

function f(e, n, t, l) {
  r.default.track(o.rMx.GAME_SERVER_GAME_CLICKED, {
    guild_id: e,
    product_id: n,
    product_name: t,
    location: l
  })
}

function g(e) {
  let {
    guildId: n,
    productId: t,
    productName: l,
    skuId: i,
    planName: a,
    planCost: s,
    previousPlanCost: u,
    region: c,
    type: d
  } = e;
  r.default.track(o.rMx.GAME_SERVER_SKU_SELECTED, {
    guild_id: n,
    product_id: t,
    product_name: l,
    sku_id: i,
    plan_name: a,
    plan_cost: s,
    previous_plan_cost: u,
    region: c,
    type: d
  })
}

function b(e, n, t, l) {
  r.default.track(o.rMx.GAME_SERVER_JOIN_CLICKED, {
    guild_id: e,
    game_id: n,
    game_name: t,
    game_server_id: l
  })
}

function p(e, n, t) {
  r.default.track(o.rMx.GAME_SERVER_COPY_IP_CLICKED, {
    guild_id: e,
    game_server_id: n,
    location: t
  })
}

function _(e, n) {
  r.default.track(o.rMx.GAME_SERVER_VIEW_GAME_PANEL_CLICKED, {
    guild_id: e,
    game_server_id: n
  })
}