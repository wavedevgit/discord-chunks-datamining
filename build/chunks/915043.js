/** Chunk was on 13088 **/
/** chunk id: 915043, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $s: () => m,
  CZ: () => I,
  E: () => v,
  GD: () => h,
  Ko: () => y,
  W_: () => P,
  mJ: () => g,
  sD: () => E,
  wm: () => N
}), require("./321073.js"), require("./896048.js"), require("./492834.js"), require("./938796.js");
var l, Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk339048 = require("./339048.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk67480 = require("./67480.js"),
  Chunk324050 = require("./324050.js"),
  Chunk143582 = require("./143582.js"),
  Chunk337095 = require("./337095.js"),
  Chunk607940 = require("./607940.js"),
  Chunk163437 = require("./163437.js"),
  Chunk652215 = require("./652215.js"),
  g = ((l = {})[l.NOT_LOADED = 0] = "NOT_LOADED", l[l.LOADING = 1] = "LOADING", l[l.LOADED = 2] = "LOADED", l[l.ERROR = 3] = "ERROR", l);
let I = t => {
  let {
    guildId: e,
    canFetch: n = true,
    forceRefetch: l = false
  } = t, u = (0, i.bG)([A.A], () => null != e ? A.A.getEntitlementsForGuildFetchState(e) : null, [e]);
  return r.useEffect(() => {
    if (null == e || e === O.ME) return;
    let t = A.A.getEntitlementsForGuildFetchState(e);
    n && (t === A.e.NOT_FETCHED || l) && (0, f.f5)(e)
  }, [e, n, l]), {
    entitlementsLoaded: u === A.e.FETCHED
  }
};

function m(t) {
  var e;
  let n = null != (e = null == t ? true : t.id) ? e : O.dJq,
    {
      entitlementsLoaded: l
    } = I({
      guildId: n,
      canFetch: (0, i.bG)([s.A], () => s.A.can(O.xBc.ADMINISTRATOR, t))
    }),
    u = (0, i.bG)([p.A], () => p.A.getLastGuildDismissedTime(n)),
    o = (0, i.yK)([A.A], () => {
      let t = A.A.getEntitlementsForGuild(n),
        e = A.A.getEntitlementsForGuild(n, false),
        l = t.map(t => t.applicationId);
      return e.filter(t => !l.includes(t.applicationId))
    }),
    a = (0, i.cf)([d.A], () => d.A.getSKUs()),
    c = r.useMemo(() => o.filter(t => {
      let e = a[t.skuId];
      return null != e && e.available
    }), [o, a]);
  return l ? c.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(null != u ? u : 0, Date.now() - 2592e6)) : []
}
let v = () => {
  let [t, e] = r.useState(0);
  return r.useEffect(() => {
    e(1), Promise.all([(0, u.qw)({
      withSku: true,
      withApplication: true,
      entitlementType: O.zF_.APPLICATION_SUBSCRIPTION
    }), (0, u.qw)({
      withSku: true,
      withApplication: true,
      entitlementType: O.zF_.PURCHASE
    })]).catch(() => {
      e(3)
    }).then(() => {
      e(2)
    })
  }, []), {
    loadState: t
  }
};

function E(t, e) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [l, u] = r.useState([]),
    [s, a] = r.useState(false);
  return r.useLayoutEffect(() => {
    null != t && n && (a(true), (0, S.L5)(t, e).then(u).finally(() => {
      a(false)
    }))
  }, [t, e, n]), {
    guilds: (0, i.yK)([o.A], () => l.map(t => o.A.getGuild(t)).filter(t => null != t), [l]),
    isFetching: s
  }
}
let P = t => t.items;

function h(t, e) {
  return _(t, e, P)
}
let T = t => {
  var e, n;
  return null != (e = null == (n = t.renewalMutations) ? true : n.items) ? e : []
};

function y(t, e) {
  return _(t, e, T)
}

function _(t, e, n) {
  let [l, u] = (0, i.yK)([c.A, a.A], () => null == t ? [] : N({
    groupSku: t,
    SubscriptionStore: c.A,
    SubscriptionPlanStore: a.A,
    mapSubscriptionItems: n,
    guildId: e
  }), [t, n, e]);
  return r.useMemo(() => {
    if (null != l && null != u) return {
      subscription: l,
      subscriptionPlan: u
    }
  }, [l, u])
}

function N(t) {
  var e, n;
  let {
    groupSku: l,
    SubscriptionStore: r,
    SubscriptionPlanStore: i,
    mapSubscriptionItems: u,
    guildId: o
  } = t, {
    bundledSkuIds: s,
    flags: a
  } = l;
  for (let t of null != (e = r.getActiveApplicationSubscriptions()) ? e : []) {
    if ((0, b.PJ)(a) && null != o && (null == (n = t.metadata) ? true : n.application_subscription_guild_id) !== o) continue;
    let e = u(t).map(t => i.get(t.planId)).find(t => null != t && s.includes(t.skuId));
    if (null != e) return [t, e]
  }
  return []
}